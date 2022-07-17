import { forwardRef, InputHTMLAttributes } from 'react';
import * as S from './TextInput.styles';

const TextInput = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return <S.Input ref={ref} {...props} />;
});

export default TextInput;
