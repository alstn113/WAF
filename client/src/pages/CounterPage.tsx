import useCountStore from '../store/useCountStore';

const CounterPage = () => {
  const { count, decreaseByNum, increaseByNum } = useCountStore();

  return (
    <div>
      <button onClick={() => decreaseByNum(5)}>마이너스 5</button>
      <div>{count}</div>
      <button onClick={() => increaseByNum(5)}>플러스 5</button>
    </div>
  );
};

export default CounterPage;
