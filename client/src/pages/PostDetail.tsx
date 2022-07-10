import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Navigate, useParams } from 'react-router-dom';
import * as yup from 'yup';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { Container } from '@chakra-ui/react';
import useCreateComment from '../libs/hooks/queries/comment/useCreateComment';
import useGetPost from '../libs/hooks/queries/post/useGetPost';

interface IFormInputs {
  text: string;
}

const schema = yup.object().shape({
  text: yup.string().required('필수항목입니다'),
});

const PostDetailPage = () => {
  const params = useParams<{ postId: string }>();
  const postId = params.postId as string;
  const { data, isLoading, error, refetch } = useGetPost(postId);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const { mutate } = useCreateComment({
    onSuccess: async () => {
      await refetch();
    },
  });

  const onSubmit = (input: IFormInputs) => {
    mutate({ ...input, postId });
  };

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div>{error.message}</div>;
  return (
    <Container
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      marginTop={'32'}
    >
      <div>
        <div>ID : {data?.id}</div>
        <div>TITLE : {data?.title}</div>
        <div>BODY : {data?.body}</div>
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
          {data?.comments?.map((comment) => (
            <div key={comment.id}>
              <div>ID : {comment.id}</div>
              <div>TEXT : {comment.text}</div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default PostDetailPage;
