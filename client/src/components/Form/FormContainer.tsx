import { Container, Select } from '@chakra-ui/react';
import { useState, ReactNode } from 'react';
import userFormBuilderStore from '../../libs/store/useFormBuilderStore';
import CheckBoxForm from './CheckBoxForm/CheckBoxForm';
import DropdonwForm from './DropdownForm/DropdonwForm';
import LongAnswerForm from './LongAnswerForm/LongAnswerForm';
import MutipleChoiceForm from './MutipleChoiceForm/MutipleChoiceForm';
import ShortAnswerForm from './ShortAnswerForm/ShortAnswerForm';
interface Props {
  index: number;
}
const FormContainer = ({ index }: Props) => {
  const { changeFormItemField } = userFormBuilderStore();
  const formType: { [key: string]: ReactNode } = {
    단답형: <ShortAnswerForm />,
    장문형: <LongAnswerForm />,
    객관식: <MutipleChoiceForm />,
    체크박스: <CheckBoxForm />,
    드롭다운: <DropdonwForm />,
  };
  const [selectedFormType, setSelectedFormType] = useState<ReactNode>(
    <ShortAnswerForm />,
  );
  return (
    <Container>
      <Select
        defaultValue={'단답형'}
        onChange={(e) => {
          setSelectedFormType(formType[e.target.value]);
          changeFormItemField(index, 'type', e.target.value);
        }}
      >
        {Object.keys(formType).map((formType) => (
          <option key={formType} value={formType}>
            {formType}
          </option>
        ))}
      </Select>
      {selectedFormType}
    </Container>
  );
};

export default FormContainer;
