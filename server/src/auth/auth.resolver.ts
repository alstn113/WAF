import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SocialAuthInput } from 'src/schema/graphql';
import { AuthService } from './service/auth.service';
import { GithubAuthService } from './service/github-auth.service';
import { GoogleAuthService } from './service/goolge-auth.service';

@Resolver('Auth')
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly githubAuthServie: GithubAuthService,
    private readonly googleAuthService: GoogleAuthService,
  ) {}

  @Query('githubAuth')
  async gitHubAuth(@Args('input') input: SocialAuthInput, @Context() context) {
    return await this.githubAuthServie.githubAuth(input, context);
  }

  @Query('googleAuth')
  async googleAuth(@Args('input') input: SocialAuthInput, @Context() context) {
    return await this.googleAuthService.googleAuth(input, context);
  }

  @Query('getGoogleAuthURL')
  async getGoogleAuthURL() {
    return await this.googleAuthService.getGoogleAuthURL();
  }

  @Mutation('logout')
  async logout(@Context() context) {
    return await this.authService.logout(context);
  }
}
