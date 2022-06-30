import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Public } from 'src/auth/public.decorator';
import { CommentService } from 'src/comment/comment.service';
import { Post } from 'src/schema/graphql';
import { PostService } from './post.service';

@Resolver('Post')
export class PostResolver {
  constructor(
    private readonly postService: PostService,
    private readonly commentService: CommentService,
  ) {}

  @Public()
  @Query('posts')
  getPosts() {
    return this.postService.findAll();
  }

  @Public()
  @Query('post')
  getPost(@Args('id') id: string) {
    return this.postService.findById({ id });
  }

  @Public()
  @Mutation('createPost')
  createPost(@Args('createPostInput') args: Prisma.PostCreateInput) {
    return this.postService.create(args);
  }

  @Public()
  @Mutation('deletePost')
  deletePost(@Args('id') id: string) {
    return this.postService.delete({ id });
  }

  @ResolveField()
  comments(@Parent() post: Post) {
    return this.commentService.findAllByPostId(post.id);
  }
}
