import { NextPage } from 'next';
import React from 'react';
import { useRecoilState } from 'recoil';
import counterAtom from '../../recoil/counter/atom';

const Counter: NextPage = () => {
  const [counter, setCounter] = useRecoilState(counterAtom);
  return (
    <div>
      <div>{counter}</div>
      <div>
        <button onClick={() => setCounter(counter + 1)}>더하기 1</button>
      </div>
    </div>
  );
};

export default Counter;
