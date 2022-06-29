import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentResolver } from './comment.resolver';
import { PostService } from 'src/post/post.service';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [PrismaService, CommentResolver, CommentService, PostService],
})
export class CommentModule {}
