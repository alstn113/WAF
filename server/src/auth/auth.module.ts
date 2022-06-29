import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from 'prisma/prisma.service';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './service/auth.service';
import { GithubAuthService } from './service/github-auth.service';
import { GoogleAuthService } from './service/goolge-auth.service';

@Module({
  imports: [JwtModule.register({})],
  providers: [
    PrismaService,
    AuthService,
    GithubAuthService,
    GoogleAuthService,
    AuthResolver,
  ],
})
export class AuthModule {}
