import { Container, Image } from '@chakra-ui/react';
import { NotFoundImage } from '@assets/.';
const NotFound = () => {
  return (
    <Container display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <Image src={NotFoundImage} marginTop={'32'} />
    </Container>
  );
};

export default NotFound;
