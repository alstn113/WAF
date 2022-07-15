import { Container } from '@chakra-ui/react';
import useFormBuilderStore from '../libs/store/useFormBuilderStore';

const ModelView = () => {
  const { title, description, formList } = useFormBuilderStore();
  return (
    <Container
      flex={'display'}
      justifyContent={'center'}
      alignItems={'center'}
      marginTop="16"
    >
      <pre>{JSON.stringify(title, null, '\t')}</pre>
      <pre>{JSON.stringify(description, null, '\t')}</pre>
      <pre>{JSON.stringify(formList, null, '\t')}</pre>
    </Container>
  );
};

export default ModelView;
