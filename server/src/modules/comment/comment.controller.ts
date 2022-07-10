import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Public } from 'src/common/decorators/public.decorator';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Controller('comment')
@ApiTags('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Public()
  @Get()
  async getAllComments() {
    return await this.commentService.findComments();
  }

  @Public()
  @Get(':id')
  async getCommentById(@Param('id') id: string) {
    return await this.commentService.findCommentById(id);
  }

  @Post()
  async createComment(@Body() dto: CreateCommentDto) {
    return await this.commentService.createComment(dto);
  }

  @Delete(':id')
  async deleteComment(@Param('id') id: string) {
    return await this.commentService.deleteComment(id);
  }
}
