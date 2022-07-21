import Button from '@src/components/common/Button/Button';
import { Input } from '@src/components/common/TextInput/TextInput.styles';
import userFormBuilderStore from '@src/libs/store/useFormBuilderStore';
import reorder from '@src/libs/utils/reorder';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';
import * as S from './DropdownForm.styles';

interface Props {
  index: number;
}

const DropdownForm = ({ index }: Props) => {
  const { formList, changeOfferedAnswer } = userFormBuilderStore();
  const answerList = formList[index].offeredAnswer;
  const onCreate = () => {
    const newAnswerList = Array.from(answerList).concat(`답변`);
    changeOfferedAnswer(index, newAnswerList);
  };

  const onDelete = (answerIndex: number) => {
    const newAnswerList = Array.from(answerList);
    newAnswerList.splice(answerIndex, 1);
    changeOfferedAnswer(index, newAnswerList);
  };

  const onChangeItem = (answerIndex: number, data: string) => {
    const newAnswerList = Array.from(answerList);
    newAnswerList[answerIndex] = data;
    changeOfferedAnswer(index, newAnswerList);
  };

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;
    if (!destination) return;
    if (destination.index === source.index) return;

    const newAnswerList = reorder(answerList, source.index, destination.index);
    changeOfferedAnswer(index, newAnswerList);
  };
  return (
    <div>
      <div>
        <S.Flex>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="drop">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {answerList?.map((answerItem, answerItemIndex) => {
                    return (
                      <Draggable
                        draggableId={String(answerItemIndex)}
                        index={answerItemIndex}
                      >
                        {(provided) => (
                          <div
                            {...provided.draggableProps}
                            ref={provided.innerRef}
                          >
                            <div
                              {...provided.dragHandleProps}
                              style={{
                                width: '100%',
                                height: '10px',
                                backgroundColor: 'rgb(228, 143, 143)',
                              }}
                            />
                            ⏺
                            <Input
                              type="text"
                              value={answerItem}
                              onChange={(e) =>
                                onChangeItem(answerItemIndex, e.target.value)
                              }
                            />
                            <button onClick={() => onDelete(answerItemIndex)}>
                              삭제
                            </button>
                          </div>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          <Button onClick={onCreate}>옵션 생성</Button>
        </S.Flex>
      </div>
    </div>
  );
};

export default DropdownForm;
