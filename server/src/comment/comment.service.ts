import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class CommentService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.comment.findMany();
  }

  findById(commentWhereUniqueInput: Prisma.CommentWhereUniqueInput) {
    return this.prisma.comment.findUnique({
      where: commentWhereUniqueInput,
    });
  }

  findAllByPostId(postId: string) {
    return this.prisma.comment.findMany({
      where: {
        postId,
      },
    });
  }

  create(createCommentInput: Prisma.CommentCreateInput) {
    return this.prisma.comment.create({
      data: createCommentInput,
    });
  }

  async delete(postWhereUniqueInput: Prisma.PostWhereUniqueInput) {
    await this.prisma.post.delete({
      where: postWhereUniqueInput,
    });

    return `${postWhereUniqueInput.id} is deleted`;
  }
}
