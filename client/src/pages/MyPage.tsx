import {
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  Stack,
  StackItem,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import LoadingSpinner from '../components/common/LoadingSpinner';
import useGetFormBuilders from '../libs/hooks/queries/form-builder/useGetFormBuilders';
import formatDate from '../libs/utils/formatDate';
import { Wrapper } from './FormDND';

const MyPage = () => {
  const { data, isLoading, error } = useGetFormBuilders();
  if (error) return <div>{error.response?.data.message}</div>;
  return (
    <Container maxWidth={'100%'} centerContent>
      <Container
        maxWidth={'100%'}
        centerContent
        bg={'#dadce0'}
        padding={'2rem'}
      >
        <Center margin={'1rem'}>새로운 양식 시작하기</Center>
        <Flex direction={'row'}>
          <Wrap spacing={'30px'}>
            <WrapItem>
              <Center w={'120px'} h={'120px'} bg={'#a0a0a0a3'}>
                내용없음
              </Center>
            </WrapItem>
            <WrapItem>
              <Center w={'120px'} h={'120px'} bg={'#a0a0a0a3'}>
                템플릿1
              </Center>
            </WrapItem>
            <WrapItem>
              <Center w={'120px'} h={'120px'} bg={'#a0a0a0a3'}>
                템플릿2
              </Center>
            </WrapItem>
          </Wrap>
        </Flex>
      </Container>
      <Container maxWidth={'80%'} marginTop={'3rem'}>
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            data?.map((formBuilder) => (
              <GridItem
                key={formBuilder.id}
                w="100%"
                h="100%"
                bg="#93fa96"
                padding={'1rem'}
                fontSize="0.9rem"
                textAlign={'center'}
              >
                <div>제목 : {formBuilder.title}</div>
                <div>설명 : {formBuilder.description}</div>
                <div>생성일 : {formatDate(formBuilder.createdAt)}</div>
                <div>업데이트일 : {formatDate(formBuilder.updatedAt)}</div>
              </GridItem>
            ))
          )}
        </Grid>
      </Container>
    </Container>
  );
};

export default MyPage;
