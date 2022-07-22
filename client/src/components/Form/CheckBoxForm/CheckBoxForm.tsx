import userFormBuilderStore from '@src/libs/store/useFormBuilderStore';

interface Props {
  index: number;
}

const CheckBoxForm = ({ index }: Props) => {
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
                ⏹
                <input
                  type="text"
                  value={answer}
                  onChange={(e) => onChangeItem(answerIndex, e.target.value)}
                />
                <button onClick={() => onDelete(answerIndex)}>삭제</button>
              </div>
            ))}
          </div>
          <button onClick={onCreate}>옵션 생성</button>
        </div>
      </div>
    </div>
  );
};

export default CheckBoxForm;
