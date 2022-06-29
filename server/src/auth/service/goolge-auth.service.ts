import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { SocialAuthInput } from 'src/schema/graphql';

@Injectable()
export class GoogleAuthService {
  constructor(private readonly prisma: PrismaService) {}

  async getGoogleAuthURL() {
    return;
  }
  async googleAuth(input: SocialAuthInput, context) {
    return;
  }
}
