import Sidebar from '@components/Form/Sidebar/Sidebar';
import FormItem from '@components/Form/FormItem/FormItem';
import userFormBuilderStore from '@libs/store/useFormBuilderStore';
import { Droppable } from 'react-beautiful-dnd';
import useGetFormBuilder from '@libs/hooks/queries/form-builder/useGetFormBuilder';
import { Input } from '@chakra-ui/react';
import styled from '@emotion/styled';

interface Props {
  formId: string;
}

const FormContent = ({ formId }: Props) => {
  const { title, description, formList, changeFormField, setFormBuilder } =
    userFormBuilderStore();

  const {} = useGetFormBuilder(formId, {
    onSuccess: (data) => {
      setFormBuilder({
        title: data.title,
        description: data.description,
        formList: data.formList,
      });
    },
  });

  return (
    <>
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
          value={description}
          width="50%"
          bg={'white'}
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
              return <FormItem key={index} formItem={formItem} index={index} />;
            })}
            {provided.placeholder}
          </FormListContainer>
        )}
      </Droppable>
    </>
  );
};

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

export default FormContent;
