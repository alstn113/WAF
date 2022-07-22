import useGetFormBuilders from '@libs/hooks/queries/form-builder/useGetFormBuilders';
import { useNavigate } from 'react-router-dom';
import useCreateFormBuilder from '@libs/hooks/queries/form-builder/useCreateFormBuilder';
import ErrorFallback from '@components/ErrorFallback/ErrorFallback';
import { MESSAGE } from '@src/config/message';
import MyPageContent from './MyPageContent/MyPageContent';
import AsyncBoundary from '@src/components/AsyncBoundary';
import { Center, Container, Flex, Wrap, WrapItem } from '@chakra-ui/react';

const MyPage = () => {
  const navigate = useNavigate();

  const { mutate: createMutate } = useCreateFormBuilder({
    onSuccess: (data) => {
      navigate(`/form/${data.id}`);
    },
  });

  return (
    <AsyncBoundary
      rejectedFallback={
        <ErrorFallback
          message={MESSAGE.ERROR.LOAD_DATA}
          queryKey={useGetFormBuilders.getKey()}
        />
      }
    >
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
                <Center
                  w={'120px'}
                  h={'120px'}
                  bg={'#a0a0a0a3'}
                  _hover={{ bg: '#878282a2' }}
                  onClick={() =>
                    createMutate({
                      title: '제목없는 설문지',
                      description: '설문지 설명',
                      formList:
                        '[{ "question": "질문", "type": "단답형", "offeredAnswer": [], "required": false }]',
                    })
                  }
                >
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
          <MyPageContent />
        </Container>
      </Container>
    </AsyncBoundary>
  );
};

export default MyPage;
