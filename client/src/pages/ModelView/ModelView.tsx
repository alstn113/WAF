import useFormBuilderStore from '@libs/store/useFormBuilderStore';
import * as S from './ModelView.styles';

const ModelView = () => {
  const { title, description, formList } = useFormBuilderStore();
  return (
    <S.Container>
      <pre>{JSON.stringify(title, null, '\t')}</pre>
      <pre>{JSON.stringify(description, null, '\t')}</pre>
      <pre>{JSON.stringify(formList, null, '\t')}</pre>
    </S.Container>
  );
};

export default ModelView;
