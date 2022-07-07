import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import graphqlRequestClient from '../lib/client/graphqlRequestClient';
import {
  CreateCommentMutation,
  CreateCommentMutationVariables,
  useCreateCommentMutation,
  useGetPostByIdQuery,
} from '../lib/generated/graphql';
import formatDate from '../lib/utils/formatDate';
import * as yup from 'yup';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { Container } from '@chakra-ui/react';

interface IFormInputs {
  text: string;
}

const schema = yup.object().shape({
  text: yup.string().required('필수항목입니다'),
});

const PostDetailPage = () => {
  const params = useParams<{ postId: string }>();
  const postId = params.postId as string;
  const { data, isLoading, error, refetch } = useGetPostByIdQuery(
    graphqlRequestClient,
    {
      postId,
    },
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const { mutate } = useCreateCommentMutation<Error>(graphqlRequestClient, {
    onSuccess: async (
      _data: CreateCommentMutation,
      _variables: CreateCommentMutationVariables,
      _context: unknown,
    ) => {
      refetch();
    },
  });

  const onSubmit = (input: IFormInputs) => {
    mutate({ createCommentInput: { ...input, postId } });
  };

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div>error</div>;

  return (
    <Container display={'flex'} justifyContent={'center'}>
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
        {data?.post?.comments?.map((comment) => (
          <div key={comment.id}>
            <div>ID : {comment.id}</div>
            <div>TEXT : {comment.text}</div>
            <div>{formatDate(comment.createdAt)}</div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default PostDetailPage;
