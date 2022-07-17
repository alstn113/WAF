import styled from '@emotion/styled';
import { Draggable } from 'react-beautiful-dnd';
import { IForm } from '@libs/interfaces';
import userFormBuilderStore from '@libs/store/useFormBuilderStore';
import FormContainer from '@src/components/Form/FormContainer/FormContainer';

interface Props {
  formItem: IForm;
  index: number;
}

const FormItem = ({ formItem, index }: Props) => {
  const { changeFormItemField, setFormList, formList } = userFormBuilderStore();

  const onDelete = () => {
    const newFormList = formList.filter((item) => item.id !== formItem.id);
    setFormList(newFormList);
  };

  return (
    <Draggable draggableId={formItem.id} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <Handle {...provided.dragHandleProps} />
          <FormContainer index={index} />
          <div>id : {formItem.id}</div>
          <div>index : {index}</div>
          <input
            type="text"
            placeholder={formItem.type}
            width="50%"
            value={formItem.question}
            onChange={(e) =>
              changeFormItemField(index, 'question', e.target.value)
            }
          />
          <div>type : {formItem.type}</div>
          <div>answer : {JSON.stringify(formItem.answer)}</div>
          <button onClick={onDelete}>삭제</button>
        </Container>
      )}
    </Draggable>
  );
};

export const Handle = styled.div`
  height: 1.5rem;
  width: 100%;
  background: rgb(228, 143, 143);
  margin-bottom: 0.5rem;
`;

export const Container = styled.div<{
  isDragging: boolean;
}>`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  min-height: 100px;
  text-align: center;
  margin-bottom: 8px;
  background-color: ${(props) => (props.isDragging ? 'lightgreen' : 'white')};
`;

export default FormItem;
