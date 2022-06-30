import { useRecoilState } from 'recoil';
import counter from '../lib/recoil/counter';

const CounterPage = () => {
  const [count, setCount] = useRecoilState(counter);
  const decrementByOne = () => setCount(count - 1);
  const incrementByOne = () => setCount(count + 1);

  return (
    <div>
      <button onClick={decrementByOne}>- 1</button>
      <div>{count}</div>
      <button onClick={incrementByOne}>+ 1</button>
    </div>
  );
};

export default CounterPage;
