import { useQueryClient } from 'react-query';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  CreatePostMutation,
  CreatePostMutationVariables,
  useCreatePostMutation,
  useGetAllPostsQuery,
} from '../lib/generated/graphql';
import graphqlRequestClient from '../lib/client/graphqlRequestClient';
import { useNavigate } from 'react-router-dom';

interface IFormInputs {
  title: string;
  body: string;
}

const schema = yup.object().shape({
  title: yup.string().required('필수항목입니다'),
  body: yup.string().required('필수 항목입니다'),
});

const WritePage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate } = useCreatePostMutation<Error>(graphqlRequestClient, {
    onSuccess: async (
      _data: CreatePostMutation,
      _variables: CreatePostMutationVariables,
      _context: unknown,
    ) => {
      await queryClient.invalidateQueries(useGetAllPostsQuery.getKey());
      navigate('/');
    },
  });

  const onSubmit = (input: IFormInputs) => {
    mutate({ createPostInput: input });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('title')} type="text" placeholder="title" />
        <p>{errors.title?.message}</p>
        <input {...register('body')} type="text" placeholder="body" />
        <p>{errors.body?.message}</p>
        <button type="submit">post</button>
      </form>
    </div>
  );
};

export default WritePage;
