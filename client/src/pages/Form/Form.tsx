import * as S from './Form.styles';
import { useParams } from 'react-router-dom';
import useGetFormBuilder from '@libs/hooks/queries/form-builder/useGetFormBuilder';
import userFormBuilderStore from '@libs/store/useFormBuilderStore';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import reorder from '@libs/utils/reorder';
import ErrorFallback from '@src/components/ErrorFallback/ErrorFallback';
import { MESSAGE } from '@src/config/message';
import FormContent from './FormContent/FormContent';
import AsyncBoundary from '@src/components/AsyncBoundary';

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
    <AsyncBoundary
      rejectedFallback={
        <ErrorFallback
          message={MESSAGE.ERROR.LOAD_DATA}
          queryKey={useGetFormBuilder.getKey(formId)}
        />
      }
    >
      <DragDropContext onDragEnd={onDragEnd}>
        <S.Container>
          <S.Wrapper>
            <FormContent formId={formId} />
          </S.Wrapper>
        </S.Container>
      </DragDropContext>
    </AsyncBoundary>
  );
};

export default Form;
