import { ReactNode } from 'react';
import * as S from './FormContainer.styles';
import userFormBuilderStore from '@libs/store/useFormBuilderStore';
import CheckBoxForm from '@components/Form/CheckBoxForm/CheckBoxForm';
import DropdonwForm from '@components/Form/DropdownForm/DropdonwForm';
import LongAnswerForm from '@components/Form/LongAnswerForm/LongAnswerForm';
import MultipleChoiceForm from '@src/components/Form/MultipleChoiceForm/MultipleChoiceForm';
import ShortAnswerForm from '@components/Form/ShortAnswerForm/ShortAnswerForm';
interface Props {
  index: number;
}
const FormContainer = ({ index }: Props) => {
  const { changeFormItemField } = userFormBuilderStore();
  const formType: { [key: string]: ReactNode } = {
    단답형: <ShortAnswerForm />,
    장문형: <LongAnswerForm />,
    객관식: <MultipleChoiceForm />,
    체크박스: <CheckBoxForm />,
    드롭다운: <DropdonwForm />,
  };

  return (
    <S.Select
      defaultValue={'단답형'}
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
  );
};

export default FormContainer;
