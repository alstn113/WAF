import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
} from 'next';
import {
  dehydrate,
  DehydratedState,
  QueryClient,
  useQueryClient,
} from 'react-query';
import {
  CreateCommentMutation,
  CreateCommentMutationVariables,
  GetPostByIdQuery,
  useCreateCommentMutation,
  useGetPostByIdQuery,
} from '../../lib/generated/graphql';
import graphqlRequestClient from '../../lib/client/graphqlRequestClient';
import formatDate from '../../lib/utils/formatDate';
import { useRouter } from 'next/router';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface IFormInputs {
  text: string;
}

const schema = yup.object().shape({
  text: yup.string().required('필수항목입니다'),
});

const PostDetail: NextPage = () => {
  const router = useRouter();
  const id = router.query.id as string;
  const { data, error, isLoading } = useGetPostByIdQuery<
    GetPostByIdQuery,
    Error
  >(graphqlRequestClient, { postId: id });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const queryClient = useQueryClient();
  const { mutate } = useCreateCommentMutation<Error>(graphqlRequestClient, {
    onSuccess: async (
      _data: CreateCommentMutation,
      _variables: CreateCommentMutationVariables,
      _context: unknown,
    ) => {
      await queryClient.invalidateQueries(
        useGetPostByIdQuery.getKey({ postId: id }),
      );
    },
  });

  const onSubmit = (input: IFormInputs) => {
    mutate({ createCommentInput: { ...input, postId: id } });
  };

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register('text')} type="text" placeholder="text" />
          <p>{errors.text?.message}</p>

          <button>post</button>
        </form>
      </div>
      <hr />
      <div>
        {data?.post?.comments?.map(comment => (
          <div key={comment.id}>
            <div>ID : {comment.id}</div>
            <div>TEXT : {comment.text}</div>
            <div>{formatDate(comment.createdAt)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
): Promise<{
  props: { dehydratedState: DehydratedState };
}> => {
  const id = context.params?.id as string;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    useGetPostByIdQuery.getKey({ postId: id }),
    useGetPostByIdQuery.fetcher(graphqlRequestClient, { postId: id }),
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default PostDetail;
