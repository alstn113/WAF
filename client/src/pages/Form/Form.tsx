import { useParams } from 'react-router-dom';
import useGetFormBuilder from '@libs/hooks/queries/form-builder/useGetFormBuilder';
import userFormBuilderStore from '@libs/store/useFormBuilderStore';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import reorder from '@libs/utils/reorder';
import ErrorFallback from '@components/ErrorFallback/ErrorFallback';
import { MESSAGE } from '@src/config/message';
import FormContent from './FormContent/FormContent';
import AsyncBoundary from '@src/components/AsyncBoundary';
import styled from '@emotion/styled';

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
        <Container>
          <Wrapper>
            <FormContent formId={formId} />
          </Wrapper>
        </Container>
      </DragDropContext>
    </AsyncBoundary>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;
const Wrapper = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 70%;
  display: flex;
  flex-direction: column;
`;

export default Form;
