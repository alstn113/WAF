import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from 'prisma/prisma.service';
import { AuthController } from './auth.controller';
import { AuthService } from './service/auth.service';
import { GithubAuthService } from './service/github-auth.service';
import { GoogleAuthService } from './service/goolge-auth.service';

@Module({
  imports: [JwtModule.register({})],
  controllers: [AuthController],
  providers: [PrismaService, AuthService, GithubAuthService, GoogleAuthService],
  exports: [AuthService],
})
export class AuthModule {}
