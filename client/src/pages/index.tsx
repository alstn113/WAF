import type { GetServerSideProps, NextPage } from 'next';
import { dehydrate, DehydratedState, QueryClient } from 'react-query';
import {
  DeletePostMutation,
  DeletePostMutationVariables,
  GetAllPostsQuery,
  useDeletePostMutation,
  useGetAllPostsQuery,
} from '../lib/generated/graphql';
import graphqlRequestClient from '../lib/client/graphqlRequestClient';
import formatDate from '../lib/utils/formatDate';
import Link from 'next/link';

const Home: NextPage = () => {
  const { data, error, isLoading, refetch } = useGetAllPostsQuery<
    GetAllPostsQuery,
    Error
  >(graphqlRequestClient);

  const { mutate } = useDeletePostMutation(graphqlRequestClient, {
    onSuccess: (
      _data: DeletePostMutation,
      _variables: DeletePostMutationVariables,
      _context: unknown,
    ) => {
      refetch();
    },
  });

  const deletePost = (postId: string) => {
    mutate({ deletePostId: postId });
  };

  if (isLoading) return <div>loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      {data?.posts?.map(post => (
        <div key={post.id}>
          <Link href={{ pathname: '/post/[id]', query: { id: post.id } }}>
            <a>
              <div>ID : {post.id}</div>
            </a>
          </Link>
          <div>TITILE : {post.title}</div>
          <div>BODY : {post.body}</div>
          <div>{formatDate(post.createdAt)}</div>
          <button onClick={() => deletePost(post.id)}>X</button>
        </div>
      ))}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (): Promise<{
  props: { dehydratedState: DehydratedState };
}> => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    useGetAllPostsQuery.getKey(),
    useGetAllPostsQuery.fetcher(graphqlRequestClient),
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Home;
