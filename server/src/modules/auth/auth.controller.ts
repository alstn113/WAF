import { Controller, Delete, Get, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { ConfigService } from '@nestjs/config';
import { ApiTags } from '@nestjs/swagger';
import { AuthService, GithubAuthService } from './service';
import { Public } from 'src/common/decorators/public.decorator';
import { GetCurrentUserId } from 'src/common/decorators/get-current-user-id.decorator';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly githubAuthService: GithubAuthService,
    private readonly configService: ConfigService,
  ) {}

  @Public()
  @Get('/github')
  signinGithub(@Res({ passthrough: true }) res: Response) {
    const GITHUB_ID = this.configService.get('auth.github.id');
    const REDIRECT_URI = 'http://localhost:8080/auth/github/callback';

    const url = `https://github.com/login/oauth/authorize?scope=user:email&client_id=${GITHUB_ID}&redirect_uri=${REDIRECT_URI}`;

    res.redirect(encodeURI(url));
  }

  @Public()
  @Get('/github/callback')
  async githubCallback(
    @Res({ passthrough: true }) res: Response,
    @Query('code') code: string,
  ) {
    const redirect = this.configService.get<string>('client');
    await this.githubAuthService.githubCallback(res, code);
    res.redirect(encodeURI(redirect));
  }

  @Delete('/logout')
  async logout(
    @Res({ passthrough: true }) res: Response,
    @GetCurrentUserId() userId: string,
  ): Promise<void> {
    await this.authService.logout(userId);
    this.authService.clearTokenCookies(res);
  }
}
