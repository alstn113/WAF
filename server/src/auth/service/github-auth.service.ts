import { HttpException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { PrismaService } from 'prisma/prisma.service';
import { SocialAuthInput } from 'src/schema/graphql';
import { AuthService } from './auth.service';

@Injectable()
export class GithubAuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {}

  async githubAuth(input: SocialAuthInput, context: any) {
    try {
      const GITHUB_ID = this.configService.get('auth.github.id');
      const GITHUB_SECRET = this.configService.get('auth.github.secret');
      const accessToken = await this.getGithubAccessToken(
        input.code,
        GITHUB_ID,
        GITHUB_SECRET,
      );
      if (!accessToken) throw new HttpException('액서스 토큰 받기 실패', 400);

      const userInfo = await this.getGithubUserInfo(accessToken);
      const userId = await this.getGithubUserId(userInfo);
      if (!userId) throw new HttpException('로그인 실패', 400);

      const access_token = await this.authService.getAccessToken(userId);
      const refresh_token = await this.authService.getRefreshToken(userId);
      await this.authService.updateRtHash(userId, refresh_token);
      this.authService.setTokenCookie(context, { access_token, refresh_token });
      return userId;
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
