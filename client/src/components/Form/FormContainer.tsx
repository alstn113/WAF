import { Container, Select } from '@chakra-ui/react';
import React, { ReactNode, useState } from 'react';
import CheckBoxForm from './CheckBoxForm/CheckBoxForm';
import DropdonwForm from './DropdownForm/DropdonwForm';
import LongAnswerForm from './LongAnswerForm/LongAnswerForm';
import MutipleChoiceForm from './MutipleChoiceForm/MutipleChoiceForm';
import ShortAnswerForm from './ShortAnswerForm/ShortAnswerForm';

const FormContainer = () => {
  const formType: { [key: string]: React.ReactNode } = {
    단답형: <ShortAnswerForm />,
    장문형: <LongAnswerForm />,
    객관식: <MutipleChoiceForm />,
    체크박스: <CheckBoxForm />,
    드롭다운: <DropdonwForm />,
  };
  const [selectedFormType, setSelectedFormType] = useState<React.ReactNode>(
    <ShortAnswerForm />,
  );
  return (
    <Container>
      <Select
        defaultValue={'단답형'}
        onChange={(e) => setSelectedFormType(formType[e.target.value])}
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
