import { Controller, Get, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';
import { Public } from 'src/common/decorators/public.decorator';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Public()
  @Get()
  async getCurrentUser(@Req() req: Request & { userId: string }) {
    if (!req.userId) return null;
    return await this.userService.getCurrentUser(req.userId);
  }
}
