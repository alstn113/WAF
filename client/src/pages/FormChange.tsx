import { Container } from '@chakra-ui/react';
import FormContainer from '../components/Form/FormContainer';

const FormChange = () => {
  return (
    <Container
      flex={'display'}
      justifyContent={'center'}
      alignItems={'center'}
      marginTop="16"
    >
      <FormContainer />
    </Container>
  );
};

export default FormChange;
