import type { GetServerSideProps, NextPage } from 'next';
import { dehydrate, DehydratedState, QueryClient } from 'react-query';
import {
  GetAllCommentsQuery,
  useGetAllCommentsQuery,
} from '../../lib/generated/graphql';
import graphqlRequestClient from '../../lib/client/graphqlRequestClient';

const Comment: NextPage = () => {
  const { data, error, isLoading } = useGetAllCommentsQuery<
    GetAllCommentsQuery,
    Error
  >(graphqlRequestClient);

  if (isLoading) return <div>loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      {data?.comments?.map(comment => (
        <div key={comment.id}>
          <div>{comment.id}</div>
          <div>{comment.text}</div>
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
    useGetAllCommentsQuery.getKey(),
    useGetAllCommentsQuery.fetcher(graphqlRequestClient),
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Comment;
