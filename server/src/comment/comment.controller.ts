import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Controller('comment')
@ApiTags('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  async createComment(@Body() dto: CreateCommentDto) {
    return await this.commentService.createComment(dto);
  }

  @Get()
  async getAllComments() {
    return await this.commentService.findComments();
  }

  @Get(':id')
  async getCommentById(@Param('id') id: string) {
    return await this.commentService.findCommentById(id);
  }

  @Delete(':id')
  async deleteComment(@Param('id') id: string) {
    return await this.commentService.deleteComment(id);
  }
}
