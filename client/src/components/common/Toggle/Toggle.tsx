import { forwardRef, InputHTMLAttributes } from 'react';
import * as S from './Toggle.styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
}

const Toggle = forwardRef<HTMLInputElement, Props>(
  ({ labelText = ' ', ...options }, ref) => {
    return (
      <S.ToggleLabel>
        <S.ToggleText>{labelText}</S.ToggleText>
        <S.ToggleCheckbox type="checkbox" ref={ref} {...options} />
        <S.ToggleSwitch />
      </S.ToggleLabel>
    );
  },
);

export default Toggle;
