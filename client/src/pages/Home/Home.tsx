import Toggle from '@src/components/common/Toggle/Toggle';
import useToggle from '@src/libs/hooks/common/useToggle';
import * as S from './Home.styles';

const Home = () => {
  const [isTrue, setIsTrue] = useToggle();
  return (
    <S.Container>
      <Toggle
        labelText={isTrue ? 'True' : 'False'}
        color="PRIMARY"
        onClick={setIsTrue}
      />
      <S.Text>WAP</S.Text>
      <S.Text>AWESOME</S.Text>
      <S.Text>FORM</S.Text>
    </S.Container>
  );
};

export default Home;
