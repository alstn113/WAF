import { Container } from '@chakra-ui/react';
import useFormStore from '../store/useFormStore';

const ModelView = () => {
  const { formList } = useFormStore();
  return (
    <Container flex={'display'} justifyContent={'center'} marginTop="16">
      <pre>{JSON.stringify(formList, null, '\t')}</pre>
    </Container>
  );
};

export default ModelView;
