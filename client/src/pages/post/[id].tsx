import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
} from 'next';
import { dehydrate, DehydratedState, QueryClient } from 'react-query';
import {
  GetPostByIdQuery,
  useGetPostByIdQuery,
} from '../../lib/generated/graphql';
import graphqlRequestClient from '../../lib/client/graphqlRequestClient';
import formatDate from '../../lib/utils/formatDate';
import { useRouter } from 'next/router';

const PostDetail: NextPage = () => {
  const router = useRouter();
  const id = router.query.id as string;
  const { data, error, isLoading } = useGetPostByIdQuery<
    GetPostByIdQuery,
    Error
  >(graphqlRequestClient, { postId: id });

  if (isLoading) return <div>loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      <div>ID : {data?.post?.id}</div>
      <div>TITLE : {data?.post?.title}</div>
      <div>BODY : {data?.post?.body}</div>
      <div>{formatDate(data?.post?.createdAt)}</div>
      <hr />
      <div>
        {data?.post?.comments?.map(comment => (
          <div key={comment.id}>
            <div>ID : {comment.id}</div>
            <div>TEXT : {comment.text}</div>
            <div>{comment.createdAt}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// export const getServerSideProps: GetServerSideProps = async (
//   context: GetServerSidePropsContext,
// ): Promise<{
//   props: { dehydratedState: DehydratedState };
// }> => {
//   const id = context.params?.id as string;
//   const queryClient = new QueryClient();
//   await queryClient.prefetchQuery(
//     useGetPostByIdQuery.getKey({ postId: id }),
//     useGetPostByIdQuery.fetcher(graphqlRequestClient, { postId: id }),
//   );

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// };

export default PostDetail;
