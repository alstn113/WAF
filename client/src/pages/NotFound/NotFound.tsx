import { NotFoundImage } from '@assets/.';
import * as S from './NotFound.styles';

const NotFound = () => {
  return (
    <S.Container>
      <img src={NotFoundImage} />
    </S.Container>
  );
};

export default NotFound;
