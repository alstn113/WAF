import { forwardRef, InputHTMLAttributes } from 'react';
import * as S from './RadioButton.styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
}

const RadioButton = forwardRef<HTMLInputElement, Props>(
  ({ labelText = '', name, ...options }, ref) => {
    return (
      <S.Label>
        <S.Text>{labelText}</S.Text>
        <S.RadioButton type="radio" ref={ref} name={name} {...options} />
        <S.RadioMark />
      </S.Label>
    );
  },
);
export default RadioButton;
