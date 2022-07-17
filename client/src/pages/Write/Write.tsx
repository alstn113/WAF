import * as S from './Write.styles';
import { useQueryClient } from 'react-query';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import useCreatePost from '@libs/hooks/queries/post/useCreatePost';
import useGetPosts from '@libs/hooks/queries/post/useGetPosts';
import TextInput from '@components/common/TextInput/TextInput';
import Button from '@components/common/Button/Button';

interface IFormInput {
  title: string;
  body: string;
}

const schema = yup.object().shape({
  title: yup.string().required('필수항목입니다'),
  body: yup.string().required('필수 항목입니다'),
});

const Write = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate } = useCreatePost({
    onSuccess: async () => {
      await queryClient.invalidateQueries(useGetPosts.getKey());
      navigate('/board');
    },
    onError: (e) => {},
  });
  const onSubmit = (input: IFormInput) => {
    mutate(input);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  return (
    <S.Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput {...register('title')} type="text" placeholder="title" />
        <p>{errors.title?.message}</p>
        <TextInput {...register('body')} type="text" placeholder="body" />
        <p>{errors.body?.message}</p>
        <Button size="lg" type="submit">
          POST
        </Button>
      </form>
    </S.Container>
  );
};

export default Write;
