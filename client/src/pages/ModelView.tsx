import { Container } from '@chakra-ui/react';
import useFormBuilderStore from '../libs/store/useFormBuilderStore';

const ModelView = () => {
  const { formList } = useFormBuilderStore();
  return (
    <Container
      flex={'display'}
      justifyContent={'center'}
      alignItems={'center'}
      marginTop="16"
    >
      <pre>{JSON.stringify(formList, null, '\t')}</pre>
    </Container>
  );
};

export default ModelView;
