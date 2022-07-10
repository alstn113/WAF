import { Container, Image } from '@chakra-ui/react';
import { UnauthorizedImage } from '../assets';
const Unauthorized = () => {
  console.log('unauthorized');
  return (
    <Container display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <Image src={UnauthorizedImage} marginTop={'32'} />
    </Container>
  );
};

export default Unauthorized;
