import { Button, Container, Text } from '@chakra-ui/react';
import useCountStore from '../store/useCountStore';

const CounterPage = () => {
  const { count, decreaseByNum, increaseByNum } = useCountStore();

  return (
    <Container display={'flex'} justifyContent={'center'} marginTop={'10'}>
      <Button onClick={() => decreaseByNum(5)}>마이너스 5</Button>
      <Text>{count}</Text>
      <Button onClick={() => increaseByNum(5)}>플러스 5</Button>
    </Container>
  );
};

export default CounterPage;
