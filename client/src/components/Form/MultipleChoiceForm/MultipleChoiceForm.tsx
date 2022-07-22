import { Button, Input } from '@chakra-ui/react';
import userFormBuilderStore from '@src/libs/store/useFormBuilderStore';

interface Props {
  index: number;
}

const MultipleChoiceForm = ({ index }: Props) => {
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
  return (
    <div>
      <div>
        <div>
          <div>
            {answerList?.map((answer, answerIndex) => (
              <div key={answerIndex}>
                ⏺
                <Input
                  type="text"
                  value={answer}
                  onChange={(e) => onChangeItem(answerIndex, e.target.value)}
                />
                <Button onClick={() => onDelete(answerIndex)}>삭제</Button>
              </div>
            ))}
          </div>
          <Button onClick={onCreate}>옵션 생성</Button>
        </div>
      </div>
    </div>
  );
};

export default MultipleChoiceForm;
