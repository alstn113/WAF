import { Button, useToast } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import FormItem from '../components/Form/FormItem';
import useFormStore from '../store/useFormStore';

const Form = () => {
  const toast = useToast();

  const { formList, count, setFormList } = useFormStore();

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
    setFormList(newFormList, count);
  };

  const onCreate = () => {
    const newFormList = Array.from(formList).concat({
      id: `form-${count + 1}`,
      content: `item-${count + 1}`,
    });
    setFormList(newFormList, count + 1);
    toast({
      title: '폼이 생성되었습니다',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        <Wrapper>
          <Title>WAF</Title>
          <Button onClick={onCreate}>폼 생성</Button>
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

export default Form;
