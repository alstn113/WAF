import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class CreatePostDto implements Prisma.PostCreateInput {
  @ApiProperty()
  title: string;

  @ApiProperty()
  body: string;
}
