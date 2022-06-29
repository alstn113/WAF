import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './service/auth.service';
import { GithubAuthService } from './service/github-auth.service';
import { GoogleAuthService } from './service/goolge-auth.service';

@Module({
  providers: [
    PrismaService,
    AuthService,
    GithubAuthService,
    GoogleAuthService,
    AuthResolver,
  ],
})
export class AuthModule {}
