import { Args, Resolver } from '@nestjs/graphql';
import { CommentService } from './comment.service';
import { Query, Mutation } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Public } from 'src/auth/public.decorator';

@Resolver('Comment')
export class CommentResolver {
  constructor(private readonly commentService: CommentService) {}

  @Public()
  @Query('comments')
  getComments() {
    return this.commentService.findAll();
  }

  @Public()
  @Query('comment')
  getComment(@Args('id') id: string) {
    return this.commentService.findById({ id });
  }

  @Public()
  @Mutation('createComment')
  createComment(@Args('createCommentInput') args: Prisma.CommentCreateInput) {
    return this.commentService.create(args);
  }

  @Public()
  @Mutation('deleteComment')
  deleteComment(@Args('id') id: string) {
    return this.commentService.delete({ id });
  }
}
