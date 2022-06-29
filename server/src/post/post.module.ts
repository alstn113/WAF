import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostResolver } from './post.resolver';
import { CommentService } from 'src/comment/comment.service';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [PrismaService, PostResolver, PostService, CommentService],
})
export class PostModule {}
