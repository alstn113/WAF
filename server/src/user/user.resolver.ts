import { Query } from '@nestjs/graphql';
import { Context, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query('me')
  async me(@Context() context) {
    return this.userService.findOne({ id: context.req.user });
  }
}
