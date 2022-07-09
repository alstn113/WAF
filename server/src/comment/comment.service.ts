import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentService {
  constructor(private readonly prismaService: PrismaService) {}

  async findComments() {
    return await this.prismaService.comment.findMany();
  }

  async findCommentById(id: string) {
    const comment = await this.prismaService.comment.findUnique({
      where: {
        id,
      },
    });
    if (!comment) throw new NotFoundException();
    return comment;
  }

  async createComment(dto: CreateCommentDto) {
    return await this.prismaService.comment.create({
      data: dto,
    });
  }

  async deleteComment(id: string) {
    await this.findCommentById(id);
    return await this.prismaService.comment.delete({
      where: { id },
    });
  }
}
