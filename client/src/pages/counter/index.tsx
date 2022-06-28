import { Button, Container } from '@chakra-ui/react';
import { NextPage } from 'next';
import React from 'react';
import { useRecoilState } from 'recoil';
import counterAtom from '../../recoil/counter/atom';

const Counter: NextPage = () => {
  const [counter, setCounter] = useRecoilState(counterAtom);
  return (
    <Container>
      <div>{counter}</div>
      <div>
        <Button onClick={() => setCounter(counter + 1)}>더하기 1</Button>
      </div>
    </Container>
  );
};

export default Counter;
