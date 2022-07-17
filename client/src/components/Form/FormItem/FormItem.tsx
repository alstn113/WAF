import * as S from './FormItem.styles';
import { Draggable } from 'react-beautiful-dnd';
import { IForm } from '@libs/interfaces';
import userFormBuilderStore from '@libs/store/useFormBuilderStore';
import FormContainer from '@src/components/Form/FormContainer/FormContainer';
import Button from '@src/components/common/Button/Button';
import { motion } from 'framer-motion';

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
    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
      <Draggable draggableId={formItem.id} index={index}>
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
                <FormContainer index={index} />
              </S.FlexRow>
              <div>answer : {JSON.stringify(formItem.answer)}</div>
              <Button size="md" onClick={onDelete}>
                삭제
              </Button>
            </S.FlexColumn>
          </S.Container>
        )}
      </Draggable>
    </motion.div>
  );
};

export default FormItem;
