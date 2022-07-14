import styled from '@emotion/styled';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import FormItem from '../components/Form/FormItem';
import Sidebar from '../components/Form/Sidebar';
import useFormBuilderStore from '../libs/store/useFormBuilderStore';

const FormDND = () => {
  const { formList, setFormList } = useFormBuilderStore();

  const reorder = (list: any[], startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;
    if (!destination) return;
    if (destination.index === source.index) return;

    const newFormList = reorder(formList, source.index, destination.index);
    setFormList(newFormList);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        <Wrapper>
          <Title>WAF</Title>
          <Sidebar />
          <Droppable droppableId="form-list">
            {(provided, snapshot) => (
              <FormListContainer
                {...provided.droppableProps}
                ref={provided.innerRef}
                isDraggingOver={snapshot.isDraggingOver}
              >
                {formList.map((formItem, index) => {
                  return (
                    <FormItem
                      key={formItem.id}
                      formItem={formItem}
                      index={index}
                    />
                  );
                })}
                {provided.placeholder}
              </FormListContainer>
            )}
          </Droppable>
        </Wrapper>
      </Container>
    </DragDropContext>
  );
};

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;
export const Wrapper = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 70%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  padding: 8px;
  margin: 8px;
  text-align: center;
  background: #9dd2ea;
`;

export const FormListContainer = styled.div<{ isDraggingOver: boolean }>`
  padding: 8px;
  background-color: ${(props) => (props.isDraggingOver ? '#84c0eb' : '#fff')};
  flex-grow: 1;
  min-height: 30px;
`;

export default FormDND;
