import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostService {
  constructor(private readonly prismaService: PrismaService) {}

  async findPosts() {
    return await this.prismaService.post.findMany();
  }

  async findPostById(id: string) {
    const post = await this.prismaService.post.findUnique({
      where: {
        id,
      },
    });
    if (!post) throw new NotFoundException();
    return post;
  }

  async createPost(dto: CreatePostDto) {
    return await this.prismaService.post.create({
      data: dto,
    });
  }

  async deletePost(id: string) {
    await this.findPostById(id);
    return await this.prismaService.post.delete({
      where: {
        id,
      },
    });
  }
}
