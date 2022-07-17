import { ButtonHTMLAttributes } from 'react';
import * as S from './Button.styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'lg' | 'md' | 'sm';
  children: React.ReactNode;
}

const Button = ({ size = 'md', children, ...options }: Props) => {
  return (
    <S.Container size={size} {...options}>
      {children}
    </S.Container>
  );
};

export default Button;
