import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../components/common/LoadingSpinner/LoadingSpinner';
import useGetFormBuilder from '../../libs/hooks/queries/form-builder/useGetFormBuilder';
import userFormBuilderStore from '../../libs/store/useFormBuilderStore';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import reorder from '../../libs/utils/reorder';
import { Input } from '@chakra-ui/react';
import FormItem from '../../components/Form/FormItem';
import Sidebar from '../../components/Form/Sidebar';

const Form = () => {
  const params = useParams<{ formId: string }>();
  const formId = params.formId as string;
  const {
    setFormList,
    setFormBuilder,
    changeFormField,
    title,
    description,
    formList,
  } = userFormBuilderStore();
  const { isLoading, error } = useGetFormBuilder(formId, {
    onSuccess: (data) => {
      setFormBuilder({
        title: data.title,
        description: data.description,
        formList: data.formList,
      });
    },
  });

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;
    if (!destination) return;
    if (destination.index === source.index) return;

    const newFormList = reorder(formList, source.index, destination.index);
    setFormList(newFormList);
  };

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div>{error.response?.data.message}</div>;

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        <Wrapper>
          <Title>
            <Input
              type="text"
              value={title}
              width="50%"
              bg={'white'}
              placeholder="제목"
              onChange={(e) => changeFormField('title', e.target.value)}
            />
          </Title>
          <Description>
            <Input
              type="text"
              placeholder="설명"
              bg={'white'}
              value={description}
              width="50%"
              onChange={(e) => changeFormField('description', e.target.value)}
            />
          </Description>
          <Sidebar formId={formId} />
          <Droppable droppableId="form-list">
            {(provided, snapshot) => (
              <FormListContainer
                {...provided.droppableProps}
                ref={provided.innerRef}
                isDraggingOver={snapshot.isDraggingOver}
              >
                {formList?.map((formItem, index) => {
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
  font-size: 1.5rem;
  background: #9dd2ea;
`;

export const Description = styled.h3`
  padding: 8px;
  margin: 8px;
  text-align: center;
  background: #9dead3;
`;

export const FormListContainer = styled.div<{ isDraggingOver: boolean }>`
  padding: 8px;
  background-color: ${(props) => (props.isDraggingOver ? '#84c0eb' : '#fff')};
  flex-grow: 1;
  min-height: 30px;
`;

export default Form;
