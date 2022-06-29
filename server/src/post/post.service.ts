import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.post.findMany();
  }

  findById(postWhereUniqueInput: Prisma.PostWhereUniqueInput) {
    return this.prisma.post.findUnique({
      where: postWhereUniqueInput,
    });
  }

  create(createPostInput: Prisma.PostCreateInput) {
    return this.prisma.post.create({
      data: createPostInput,
    });
  }

  async delete(postWhereUniqueInput: Prisma.PostWhereUniqueInput) {
    await this.prisma.post.delete({
      where: postWhereUniqueInput,
    });
    return `${postWhereUniqueInput.id} is deleted`;
  }
}
