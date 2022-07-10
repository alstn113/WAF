import { HttpException, Injectable } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GithubAuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly authServie: AuthService,
    private readonly configService: ConfigService,
  ) {}

  async githubCallback(res: Response, code: string) {
    try {
      const GITHUB_ID = this.configService.get('auth.github.id');
      const GITHUB_SECRET = this.configService.get('auth.github.secret');
      const accessToken = await this.getGithubAccessToken(
        code,
        GITHUB_ID,
        GITHUB_SECRET,
      );
      if (!accessToken) throw new HttpException('액서스 토큰 받기 실패', 400);

      const userInfo = await this.getGithubUserInfo(accessToken);
      const userId = await this.getGithubUserId(userInfo);
      if (!userId) throw new HttpException('로그인 실패', 400);

      const access_token = await this.authServie.getAccessToken(userId);
      const refresh_token = await this.authServie.getRefreshToken(userId);
      await this.authServie.updateRtHash(userId, refresh_token);
      this.authServie.setTokenCookie(res, { access_token, refresh_token });
    } catch (e) {
      throw new HttpException(e.message, 500);
    }
  }

  async getGithubAccessToken(
    code: string,
    clientId: string,
    clientSecret: string,
  ) {
    const response = await axios.post(
      `https://github.com/login/oauth/access_token`,
      {
        client_id: clientId,
        client_secret: clientSecret,
        code,
      },
      {
        headers: {
          accept: 'application/json',
        },
      },
    );
    return response.data.access_token;
  }

  async getGithubUserInfo(accessToken: string) {
    const response = await axios.get('https://api.github.com/user', {
      headers: {
        Authorization: `token ${accessToken}`,
      },
    });
    return response.data;
  }

  async getGithubUserId({ node_id, login }) {
    const exUser = await this.prisma.user.findFirst({
      where: {
        socialId: node_id,
      },
    });
    if (exUser) return exUser.id;

    const newUser = {
      data: {
        socialId: node_id,
        username: login,
        provider: 'github',
      },
    };

    const user = await this.prisma.user.create(newUser);
    return user.id;
  }
}
