import Toggle from '@src/components/common/Toggle/Toggle';
import * as S from './Home.styles';

const Home = () => {
  return (
    <S.Container>
      <Toggle labelText="필수" />
      <Toggle color="PRIMARY" />
      <Toggle color="SECONDARY" />
      <Toggle color="SUCCESS" />
      <Toggle color="WARNING" />
      <S.Text>WAP</S.Text>
      <S.Text>AWESOME</S.Text>
      <S.Text>FORM</S.Text>
    </S.Container>
  );
};

export default Home;
