import { useQueryClient } from 'react-query';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Container,
  FormControl,
  Input,
  useToast,
} from '@chakra-ui/react';
import useCreatePost from '../../libs/hooks/queries/post/useCreatePost';
import useGetPosts from '../../libs/hooks/queries/post/useGetPosts';

interface IFormInput {
  title: string;
  body: string;
}

const schema = yup.object().shape({
  title: yup.string().required('필수항목입니다'),
  body: yup.string().required('필수 항목입니다'),
});

const Write = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate } = useCreatePost({
    onSuccess: async () => {
      await queryClient.invalidateQueries(useGetPosts.getKey());
      navigate('/board');
    },
    onError: (e) => {
      toast({
        title: `${e.response?.data.message} [CODE : ${e.response?.data.statusCode}]`,
        status: 'error',
        isClosable: true,
        duration: 1000,
      });
    },
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
    <Container
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      marginTop={'32'}
    >
      <FormControl onSubmit={handleSubmit(onSubmit)}>
        <Input {...register('title')} type="text" placeholder="title" />
        <p>{errors.title?.message}</p>
        <Input {...register('body')} type="text" placeholder="body" />
        <p>{errors.body?.message}</p>
        <Button type="submit">POST</Button>
      </FormControl>
    </Container>
  );
};

export default Write;
