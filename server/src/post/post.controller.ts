import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('post')
@ApiTags('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  async getPosts() {
    return await this.postService.findPosts();
  }

  @Get(':id')
  async getPost(@Param('id') id: string) {
    return await this.postService.findPostById(id);
  }

  @Post()
  async createPost(@Body() dto: CreatePostDto) {
    return await this.postService.createPost(dto);
  }

  @Delete(':id')
  async deletePost(@Param('id') id: string) {
    return await this.postService.deletePost(id);
  }
}
