import * as S from './FormItem.styles';
import { Draggable } from 'react-beautiful-dnd';
import { IForm } from '@libs/interfaces';
import userFormBuilderStore from '@libs/store/useFormBuilderStore';
import Button from '@src/components/common/Button/Button';
import { ReactNode } from 'react';
import CheckBoxForm from '@components/Form/CheckBoxForm/CheckBoxForm';
import DropdonwForm from '@components/Form/DropdownForm/DropdonwForm';
import LongAnswerForm from '@components/Form/LongAnswerForm/LongAnswerForm';
import MultipleChoiceForm from '@components/Form/MultipleChoiceForm/MultipleChoiceForm';
import ShortAnswerForm from '@components/Form/ShortAnswerForm/ShortAnswerForm';
import Toggle from '@src/components/common/Toggle/Toggle';

interface Props {
  formItem: IForm;
  index: number;
}

const FormItem = ({ formItem, index }: Props) => {
  const { changeFormItemField, setFormList, toggleRequired, formList } =
    userFormBuilderStore();

  const onDelete = () => {
    const newFormList = Array.from(formList);
    newFormList.splice(index, 1);
    setFormList(newFormList);
  };

  const formType: { [key: string]: ReactNode } = {
    단답형: <ShortAnswerForm />,
    장문형: <LongAnswerForm />,
    객관식: <MultipleChoiceForm />,
    체크박스: <CheckBoxForm />,
    드롭다운: <DropdonwForm />,
  };

  return (
    <Draggable draggableId={String(index)} index={index}>
      {(provided, snapshot) => (
        <S.Container
          {...provided.draggableProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <S.FlexColumn>
            <S.Handle {...provided.dragHandleProps} />
            <S.FlexRow>
              <S.QuestionInput
                type="text"
                placeholder="질문"
                value={formItem.question}
                onChange={(e) =>
                  changeFormItemField(index, 'question', e.target.value)
                }
              />
              <S.Select
                defaultValue={'단답형'}
                value={formItem.type}
                onChange={(e) => {
                  changeFormItemField(index, 'type', e.target.value);
                }}
              >
                {Object.keys(formType).map((formType) => (
                  <option key={formType} value={formType}>
                    {formType}
                  </option>
                ))}
              </S.Select>
            </S.FlexRow>
            <S.OfferedAnswerWrapper>
              {formType[formItem.type]}
            </S.OfferedAnswerWrapper>
            <Toggle
              labelText="필수"
              checked={formItem.required}
              onClick={() => toggleRequired(index)}
            />
            <Button size="md" onClick={onDelete}>
              삭제
            </Button>
            {index}
          </S.FlexColumn>
        </S.Container>
      )}
    </Draggable>
  );
};

export default FormItem;
