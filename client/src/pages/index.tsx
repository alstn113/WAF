import type { GetServerSideProps, NextPage } from 'next';
import { dehydrate, DehydratedState, QueryClient } from 'react-query';
import {
  GetAllPostsQuery,
  useGetAllPostsQuery,
} from '../lib/generated/graphql';
import graphqlRequestClient from '../lib/client/graphqlRequestClient';
import formatDate from '../lib/utils/formatDate';

const Home: NextPage = () => {
  const { data, error, isLoading } = useGetAllPostsQuery<
    GetAllPostsQuery,
    Error
  >(graphqlRequestClient);

  if (isLoading) return <div>loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      {data?.posts?.map(post => (
        <div key={post.id}>
          <div>{post.id}</div>
          <div>{post.title}</div>
          <div>{post.body}</div>
          <div>{formatDate(post.createdAt)}</div>
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
