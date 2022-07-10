import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { ApiTags } from '@nestjs/swagger';
import { Public } from 'src/common/decorators/public.decorator';

@Controller('post')
@ApiTags('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Public()
  @Get()
  async getPosts() {
    return await this.postService.findPosts();
  }

  @Public()
  @Get('/:id')
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
