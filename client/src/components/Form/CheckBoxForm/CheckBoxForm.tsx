interface Props {
  index: number;
}

const CheckBoxForm = ({ index }: Props) => {
  return (
    <div>
      <div>체크박스 {index}</div>
    </div>
  );
};

export default CheckBoxForm;
