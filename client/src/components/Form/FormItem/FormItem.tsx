import { Draggable } from 'react-beautiful-dnd';
import { IForm } from '@libs/interfaces';
import userFormBuilderStore from '@libs/store/useFormBuilderStore';
import { ReactNode } from 'react';
import CheckBoxForm from '@components/Form/CheckBoxForm/CheckBoxForm';
import DropdonwForm from '@components/Form/DropdownForm/DropdonwForm';
import LongAnswerForm from '@components/Form/LongAnswerForm/LongAnswerForm';
import MultipleChoiceForm from '@components/Form/MultipleChoiceForm/MultipleChoiceForm';
import ShortAnswerForm from '@components/Form/ShortAnswerForm/ShortAnswerForm';
import { Button, Checkbox, Input, Select } from '@chakra-ui/react';
import styled from '@emotion/styled';

interface Props {
  formItem: IForm;
  index: number;
}

const FormItem = ({ formItem, index }: Props) => {
  const { changeQuestion, changeType, setFormList, toggleRequired, formList } =
    userFormBuilderStore();

  const onDelete = () => {
    const newFormList = Array.from(formList);
    newFormList.splice(index, 1);
    setFormList(newFormList);
  };

  const formType: { [key: string]: ReactNode } = {
    단답형: <ShortAnswerForm index={index} />,
    장문형: <LongAnswerForm index={index} />,
    객관식: <MultipleChoiceForm index={index} />,
    체크박스: <CheckBoxForm index={index} />,
    드롭다운: <DropdonwForm index={index} />,
  };

  return (
    <Draggable draggableId={String(index)} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <Handle {...provided.dragHandleProps} />
          <div>
            <Input
              type="text"
              placeholder="질문"
              value={formItem.question}
              width="auto"
              onChange={(e) => changeQuestion(index, e.target.value)}
            />
            <select
              defaultValue={'단답형'}
              value={formItem.type}
              onChange={(e) => {
                changeType(index, e.target.value);
              }}
            >
              {Object.keys(formType).map((formType) => (
                <option key={formType} value={formType}>
                  {formType}
                </option>
              ))}
            </select>
          </div>
          <div>{formType[formItem.type]}</div>
          <Checkbox
            isChecked={formItem.required}
            onChange={() => toggleRequired(index)}
          />
          <Button size="md" onClick={onDelete}>
            삭제
          </Button>
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
