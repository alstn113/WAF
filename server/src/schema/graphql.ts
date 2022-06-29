
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class SocialAuthInput {
    code?: Nullable<string>;
}

export class CreateCommentInput {
    text: string;
    postId: string;
}

export class CreatePostInput {
    title: string;
    body: string;
}

export abstract class IQuery {
    abstract gitHubAuth(input: SocialAuthInput): User | Promise<User>;

    abstract googleAuth(input: SocialAuthInput): User | Promise<User>;

    abstract getGoogleAuthURL(): string | Promise<string>;

    abstract comments(): Nullable<Comment[]> | Promise<Nullable<Comment[]>>;

    abstract comment(id: string): Nullable<Comment> | Promise<Nullable<Comment>>;

    abstract posts(): Nullable<Post[]> | Promise<Nullable<Post[]>>;

    abstract post(id: string): Nullable<Post> | Promise<Nullable<Post>>;

    abstract me(): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract logout(): Nullable<User> | Promise<Nullable<User>>;

    abstract createComment(createCommentInput: CreateCommentInput): Nullable<Comment> | Promise<Nullable<Comment>>;

    abstract deleteComment(id: string): Nullable<string> | Promise<Nullable<string>>;

    abstract createPost(createPostInput: CreatePostInput): Nullable<Post> | Promise<Nullable<Post>>;

    abstract deletePost(id: string): Nullable<string> | Promise<Nullable<string>>;
}

export class Comment {
    id: string;
    text: string;
    postId: string;
    post: Post;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
}

export class Post {
    id: string;
    title: string;
    body: string;
    comments?: Nullable<Comment[]>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
}

export class User {
    id: string;
    socialId?: Nullable<string>;
    username?: Nullable<string>;
    provider?: Nullable<string>;
    hashedRt?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
}

export type DateTime = any;
type Nullable<T> = T | null;
