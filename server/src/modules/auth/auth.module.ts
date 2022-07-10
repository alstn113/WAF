import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthService, GithubAuthService } from './service';
@Module({
  imports: [PrismaModule, JwtModule.register({})],
  controllers: [AuthController],
  providers: [AuthService, GithubAuthService],
  exports: [AuthService],
})
export class AuthModule {}
