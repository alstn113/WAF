import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SocialAuthInput } from 'src/schema/graphql';
import { AuthService } from './service/auth.service';

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query('githubAuth')
  async gitHubAuth(@Args('input') input: SocialAuthInput, @Context() context) {
    //return this.authService.githubAuth(input, context);
  }

  @Query('googleAuth')
  async googleAuth(@Args('input') input: SocialAuthInput, @Context() context) {
    // return this.authService.googleAuth(input, context);
  }

  @Query('getGoogleAuthURL')
  async getGoogleAuthURL() {
    //return this.authService.getGoogleAuthURL();
  }

  @Mutation('logout')
  async logout(@Context() context) {
    // return this.authService.logout(context);
  }
}
