import { Center, Container, Flex, Wrap, WrapItem } from '@chakra-ui/react';

const MyPage = () => {
  return (
    <Container maxWidth={'100%'} centerContent bg={'#dadce0'} padding={'2rem'}>
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
  );
};

export default MyPage;
