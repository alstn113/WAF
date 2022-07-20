import Button from '@src/components/common/Button/Button';
import { Input } from '@src/components/common/TextInput/TextInput.styles';
import userFormBuilderStore from '@src/libs/store/useFormBuilderStore';
import * as S from './MultipleChoiceForm.styles';

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
        <S.Flex>
          <div>
            {answerList?.map((answer, answerIndex) => (
              <div key={answerIndex}>
                ⚪️
                <Input
                  type="text"
                  value={answer}
                  onChange={(e) => onChangeItem(answerIndex, e.target.value)}
                />
                <button onClick={() => onDelete(answerIndex)}>삭제</button>
              </div>
            ))}
          </div>
          <Button onClick={onCreate}>옵션 생성</Button>
        </S.Flex>
      </div>
    </div>
  );
};

export default MultipleChoiceForm;
