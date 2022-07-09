import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAllPosts() {
    return await this.prismaService.post.findMany();
  }

  async findPostById(id: string) {
    return await this.prismaService.post.findUnique({
      where: {
        id,
      },
    });
  }

  async createPost(dto: CreatePostDto) {
    return await this.prismaService.post.create({
      data: dto,
    });
  }

  async deletePost(id: string) {
    return await this.prismaService.post.delete({
      where: {
        id,
      },
    });
  }
}
