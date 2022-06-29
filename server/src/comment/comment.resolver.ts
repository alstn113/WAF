import { Args, Resolver } from '@nestjs/graphql';
import { CommentService } from './comment.service';
import { Query, Mutation } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@Resolver('Comment')
export class CommentResolver {
  constructor(private readonly commentService: CommentService) {}

  @Query('comments')
  getComments() {
    return this.commentService.findAll();
  }

  @Query('comment')
  getComment(@Args('id') id: string) {
    return this.commentService.findById({ id });
  }

  @Mutation('createComment')
  createComment(@Args('createCommentInput') args: Prisma.CommentCreateInput) {
    return this.commentService.create(args);
  }

  @Mutation('deleteComment')
  deleteComment(@Args('id') id: string) {
    return this.commentService.delete({ id });
  }
}
