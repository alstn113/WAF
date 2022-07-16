import { Container, Text } from '@chakra-ui/react';

const Home = () => {
  return (
    <Container
      maxW={'100vw'}
      height={'90vh'}
      display="flex"
      flexDirection={'column'}
      justifyContent="center"
      alignItems="center"
      bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)"
    >
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="8rem"
        fontWeight="extrabold"
      >
        WAP
      </Text>
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="8rem"
        fontWeight="extrabold"
      >
        AWESOME
      </Text>
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="8rem"
        fontWeight="extrabold"
      >
        FORM
      </Text>
    </Container>
  );
};

export default Home;
