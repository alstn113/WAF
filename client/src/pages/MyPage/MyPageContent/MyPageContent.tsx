import useGetFormBuilders from '@libs/hooks/queries/form-builder/useGetFormBuilders';
import formatDate from '@libs/utils/formatDate';
import useDeleteFormBuilder from '@libs/hooks/queries/form-builder/useDeleteFormBuilder';
import { Link } from 'react-router-dom';
import { Button, Grid, GridItem, useToast } from '@chakra-ui/react';

const MyPageContent = () => {
  const { data, refetch } = useGetFormBuilders();
  const toast = useToast();

  const { mutate: deleteMutate } = useDeleteFormBuilder({
    onSuccess: async () => {
      await refetch();
      toast({
        title: '폼을 삭제했습니다',
        duration: 1500,
        isClosable: true,
        status: 'success',
      });
    },
  });

  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
      {data?.map((formBuilder) => (
        <GridItem
          key={formBuilder.id}
          w="100%"
          h="100%"
          bg="#93fa96"
          padding={'1rem'}
          fontSize="0.9rem"
          textAlign={'center'}
        >
          <Link to={`/form/${formBuilder.id}`}>
            <div>제목 : {formBuilder.title}</div>
            <div>설명 : {formBuilder.description}</div>
            <div>생성일 : {formatDate(formBuilder.createdAt)}</div>
            <div>업데이트일 : {formatDate(formBuilder.updatedAt)}</div>
          </Link>
          <Button
            onClick={() => deleteMutate(formBuilder.id)}
            marginTop={'1rem'}
          >
            삭제
          </Button>
        </GridItem>
      ))}
    </Grid>
  );
};

export default MyPageContent;
