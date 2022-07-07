import { Container } from '@chakra-ui/react';
import useFormStore from '../store/useFormStore';

const ModelViewPage = () => {
  const { formList } = useFormStore();
  return (
    <Container flex={'display'} justifyContent={'center'} marginTop="16">
      <pre>{JSON.stringify(formList, null, '\t')}</pre>
    </Container>
  );
};

export default ModelViewPage;
