import * as S from './Form.styles';
import { useParams } from 'react-router-dom';
import Loading from '@components/Loading/Loading';
import useGetFormBuilder from '@libs/hooks/queries/form-builder/useGetFormBuilder';
import userFormBuilderStore from '@libs/store/useFormBuilderStore';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import reorder from '@libs/utils/reorder';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallBack from '@src/components/ErrorFallBack/ErrorFallBack';
import { MESSAGE } from '@src/config/message';
import { Suspense } from 'react';
import FormContent from './FormContent/FormContent';

const Form = () => {
  const params = useParams<{ formId: string }>();
  const formId = params.formId as string;
  const { setFormList, formList } = userFormBuilderStore();

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;
    if (!destination) return;
    if (destination.index === source.index) return;

    const newFormList = reorder(formList, source.index, destination.index);
    setFormList(newFormList);
  };

  return (
    <ErrorBoundary
      fallback={
        <ErrorFallBack
          message={MESSAGE.ERROR.LOAD_DATA}
          queryKey={useGetFormBuilder.getKey(formId)}
        />
      }
    >
      <Suspense fallback={<Loading />}>
        <DragDropContext onDragEnd={onDragEnd}>
          <S.Container>
            <S.Wrapper>
              <FormContent formId={formId} />
            </S.Wrapper>
          </S.Container>
        </DragDropContext>
      </Suspense>
    </ErrorBoundary>
  );
};

export default Form;
