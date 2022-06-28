import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, useMutation, UseQueryOptions, UseMutationOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Comment = {
  __typename?: 'Comment';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  post: Post;
  postId: Scalars['String'];
  text: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CreateCommentInput = {
  postId: Scalars['String'];
  text: Scalars['String'];
};

export type CreatePostInput = {
  body: Scalars['String'];
  title: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createComment?: Maybe<Comment>;
  createPost?: Maybe<Post>;
  deleteComment?: Maybe<Scalars['String']>;
  deletePost?: Maybe<Scalars['String']>;
};


export type MutationCreateCommentArgs = {
  createCommentInput: CreateCommentInput;
};


export type MutationCreatePostArgs = {
  createPostInput: CreatePostInput;
};


export type MutationDeleteCommentArgs = {
  id: Scalars['String'];
};


export type MutationDeletePostArgs = {
  id: Scalars['String'];
};

export type Post = {
  __typename?: 'Post';
  body: Scalars['String'];
  comments?: Maybe<Array<Comment>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Query = {
  __typename?: 'Query';
  comment?: Maybe<Comment>;
  comments?: Maybe<Array<Comment>>;
  post?: Maybe<Post>;
  posts?: Maybe<Array<Post>>;
};


export type QueryCommentArgs = {
  id: Scalars['String'];
};


export type QueryPostArgs = {
  id: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  provider: Scalars['String'];
  socialId: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type GetAllCommentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCommentsQuery = { __typename?: 'Query', comments?: Array<{ __typename?: 'Comment', id: string, text: string, postId: string, createdAt?: any | null, updatedAt?: any | null }> | null };

export type GetCommentByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetCommentByIdQuery = { __typename?: 'Query', comment?: { __typename?: 'Comment', id: string, text: string, createdAt?: any | null, updatedAt?: any | null } | null };

export type CreateCommentMutationVariables = Exact<{
  createCommentInput: CreateCommentInput;
}>;


export type CreateCommentMutation = { __typename?: 'Mutation', createComment?: { __typename?: 'Comment', id: string, text: string } | null };

export type DeleteCommentMutationVariables = Exact<{
  deleteCommentId: Scalars['String'];
}>;


export type DeleteCommentMutation = { __typename?: 'Mutation', deleteComment?: string | null };

export type GetAllPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPostsQuery = { __typename?: 'Query', posts?: Array<{ __typename?: 'Post', id: string, title: string, body: string, createdAt?: any | null, updatedAt?: any | null, comments?: Array<{ __typename?: 'Comment', id: string, text: string, postId: string, createdAt?: any | null, updatedAt?: any | null }> | null }> | null };

export type GetPostByIdQueryVariables = Exact<{
  postId: Scalars['String'];
}>;


export type GetPostByIdQuery = { __typename?: 'Query', post?: { __typename?: 'Post', id: string, title: string, body: string, createdAt?: any | null, updatedAt?: any | null, comments?: Array<{ __typename?: 'Comment', id: string, text: string, postId: string, createdAt?: any | null, updatedAt?: any | null }> | null } | null };

export type CreatePostMutationVariables = Exact<{
  createPostInput: CreatePostInput;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost?: { __typename?: 'Post', id: string, title: string, body: string } | null };

export type DeletePostMutationVariables = Exact<{
  deletePostId: Scalars['String'];
}>;


export type DeletePostMutation = { __typename?: 'Mutation', deletePost?: string | null };


export const GetAllCommentsDocument = `
    query GetAllComments {
  comments {
    id
    text
    postId
    createdAt
    updatedAt
  }
}
    `;
export const useGetAllCommentsQuery = <
      TData = GetAllCommentsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetAllCommentsQueryVariables,
      options?: UseQueryOptions<GetAllCommentsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetAllCommentsQuery, TError, TData>(
      variables === undefined ? ['GetAllComments'] : ['GetAllComments', variables],
      fetcher<GetAllCommentsQuery, GetAllCommentsQueryVariables>(client, GetAllCommentsDocument, variables, headers),
      options
    );

useGetAllCommentsQuery.getKey = (variables?: GetAllCommentsQueryVariables) => variables === undefined ? ['GetAllComments'] : ['GetAllComments', variables];
;

useGetAllCommentsQuery.fetcher = (client: GraphQLClient, variables?: GetAllCommentsQueryVariables, headers?: RequestInit['headers']) => fetcher<GetAllCommentsQuery, GetAllCommentsQueryVariables>(client, GetAllCommentsDocument, variables, headers);
export const GetCommentByIdDocument = `
    query GetCommentById($id: String!) {
  comment(id: $id) {
    id
    text
    createdAt
    updatedAt
  }
}
    `;
export const useGetCommentByIdQuery = <
      TData = GetCommentByIdQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetCommentByIdQueryVariables,
      options?: UseQueryOptions<GetCommentByIdQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetCommentByIdQuery, TError, TData>(
      ['GetCommentById', variables],
      fetcher<GetCommentByIdQuery, GetCommentByIdQueryVariables>(client, GetCommentByIdDocument, variables, headers),
      options
    );

useGetCommentByIdQuery.getKey = (variables: GetCommentByIdQueryVariables) => ['GetCommentById', variables];
;

useGetCommentByIdQuery.fetcher = (client: GraphQLClient, variables: GetCommentByIdQueryVariables, headers?: RequestInit['headers']) => fetcher<GetCommentByIdQuery, GetCommentByIdQueryVariables>(client, GetCommentByIdDocument, variables, headers);
export const CreateCommentDocument = `
    mutation createComment($createCommentInput: CreateCommentInput!) {
  createComment(createCommentInput: $createCommentInput) {
    id
    text
  }
}
    `;
export const useCreateCommentMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateCommentMutation, TError, CreateCommentMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateCommentMutation, TError, CreateCommentMutationVariables, TContext>(
      ['createComment'],
      (variables?: CreateCommentMutationVariables) => fetcher<CreateCommentMutation, CreateCommentMutationVariables>(client, CreateCommentDocument, variables, headers)(),
      options
    );
useCreateCommentMutation.fetcher = (client: GraphQLClient, variables: CreateCommentMutationVariables, headers?: RequestInit['headers']) => fetcher<CreateCommentMutation, CreateCommentMutationVariables>(client, CreateCommentDocument, variables, headers);
export const DeleteCommentDocument = `
    mutation deleteComment($deleteCommentId: String!) {
  deleteComment(id: $deleteCommentId)
}
    `;
export const useDeleteCommentMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<DeleteCommentMutation, TError, DeleteCommentMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<DeleteCommentMutation, TError, DeleteCommentMutationVariables, TContext>(
      ['deleteComment'],
      (variables?: DeleteCommentMutationVariables) => fetcher<DeleteCommentMutation, DeleteCommentMutationVariables>(client, DeleteCommentDocument, variables, headers)(),
      options
    );
useDeleteCommentMutation.fetcher = (client: GraphQLClient, variables: DeleteCommentMutationVariables, headers?: RequestInit['headers']) => fetcher<DeleteCommentMutation, DeleteCommentMutationVariables>(client, DeleteCommentDocument, variables, headers);
export const GetAllPostsDocument = `
    query GetAllPosts {
  posts {
    id
    title
    body
    comments {
      id
      text
      postId
      createdAt
      updatedAt
    }
    createdAt
    updatedAt
  }
}
    `;
export const useGetAllPostsQuery = <
      TData = GetAllPostsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetAllPostsQueryVariables,
      options?: UseQueryOptions<GetAllPostsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetAllPostsQuery, TError, TData>(
      variables === undefined ? ['GetAllPosts'] : ['GetAllPosts', variables],
      fetcher<GetAllPostsQuery, GetAllPostsQueryVariables>(client, GetAllPostsDocument, variables, headers),
      options
    );

useGetAllPostsQuery.getKey = (variables?: GetAllPostsQueryVariables) => variables === undefined ? ['GetAllPosts'] : ['GetAllPosts', variables];
;

useGetAllPostsQuery.fetcher = (client: GraphQLClient, variables?: GetAllPostsQueryVariables, headers?: RequestInit['headers']) => fetcher<GetAllPostsQuery, GetAllPostsQueryVariables>(client, GetAllPostsDocument, variables, headers);
export const GetPostByIdDocument = `
    query GetPostById($postId: String!) {
  post(id: $postId) {
    id
    title
    body
    comments {
      id
      text
      postId
      createdAt
      updatedAt
    }
    createdAt
    updatedAt
  }
}
    `;
export const useGetPostByIdQuery = <
      TData = GetPostByIdQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetPostByIdQueryVariables,
      options?: UseQueryOptions<GetPostByIdQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetPostByIdQuery, TError, TData>(
      ['GetPostById', variables],
      fetcher<GetPostByIdQuery, GetPostByIdQueryVariables>(client, GetPostByIdDocument, variables, headers),
      options
    );

useGetPostByIdQuery.getKey = (variables: GetPostByIdQueryVariables) => ['GetPostById', variables];
;

useGetPostByIdQuery.fetcher = (client: GraphQLClient, variables: GetPostByIdQueryVariables, headers?: RequestInit['headers']) => fetcher<GetPostByIdQuery, GetPostByIdQueryVariables>(client, GetPostByIdDocument, variables, headers);
export const CreatePostDocument = `
    mutation createPost($createPostInput: CreatePostInput!) {
  createPost(createPostInput: $createPostInput) {
    id
    title
    body
  }
}
    `;
export const useCreatePostMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreatePostMutation, TError, CreatePostMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreatePostMutation, TError, CreatePostMutationVariables, TContext>(
      ['createPost'],
      (variables?: CreatePostMutationVariables) => fetcher<CreatePostMutation, CreatePostMutationVariables>(client, CreatePostDocument, variables, headers)(),
      options
    );
useCreatePostMutation.fetcher = (client: GraphQLClient, variables: CreatePostMutationVariables, headers?: RequestInit['headers']) => fetcher<CreatePostMutation, CreatePostMutationVariables>(client, CreatePostDocument, variables, headers);
export const DeletePostDocument = `
    mutation deletePost($deletePostId: String!) {
  deletePost(id: $deletePostId)
}
    `;
export const useDeletePostMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<DeletePostMutation, TError, DeletePostMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<DeletePostMutation, TError, DeletePostMutationVariables, TContext>(
      ['deletePost'],
      (variables?: DeletePostMutationVariables) => fetcher<DeletePostMutation, DeletePostMutationVariables>(client, DeletePostDocument, variables, headers)(),
      options
    );
useDeletePostMutation.fetcher = (client: GraphQLClient, variables: DeletePostMutationVariables, headers?: RequestInit['headers']) => fetcher<DeletePostMutation, DeletePostMutationVariables>(client, DeletePostDocument, variables, headers);