import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import * as yup from 'yup';
import useCreateComment from '@libs/hooks/queries/comment/useCreateComment';
import useGetPost from '@libs/hooks/queries/post/useGetPost';
import ErrorFallback from '@components/ErrorFallback/ErrorFallback';
import { MESSAGE } from '@src/config/message';
import PostDetailContent from './PostDetailContent/PostDetailContent';
import { useQueryClient } from 'react-query';
import * as S from './PostDetail.styles';
import AsyncBoundary from '@src/components/AsyncBoundary';
import ErrorBoundary from '@src/components/ErrorBoundary';
import { Suspense } from 'react';

interface IFormInputs {
  text: string;
}

const schema = yup.object().shape({
  text: yup.string().required('필수항목입니다'),
});

const PostDetailPage = () => {
  const params = useParams<{ postId: string }>();
  const postId = params.postId as string;
  const queryClient = useQueryClient();
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
      await queryClient.refetchQueries(useGetPost.getKey(postId));
    },
    onError: (e) => {},
  });

  const onSubmit = (input: IFormInputs) => {
    mutate({ ...input, postId });
  };

  return (
    <ErrorBoundary
      fallback={
        <ErrorFallback
          message={MESSAGE.ERROR.LOAD_DATA}
          queryKey={useGetPost.getKey(postId)}
        />
      }
    >
      <Suspense>
        <S.Container>
          <PostDetailContent postId={postId}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input {...register('text')} type="text" placeholder="text" />
              <p>{errors.text?.message}</p>
              <button>post</button>
            </form>
          </PostDetailContent>
        </S.Container>
      </Suspense>
    </ErrorBoundary>
  );
};

export default PostDetailPage;
