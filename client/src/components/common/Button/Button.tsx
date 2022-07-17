import { MouseEventHandler } from 'react';
import * as S from './Button.styles';

interface Props {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit';
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
}

const Button = ({
  onClick,
  type = 'button',
  children,
  size = 'medium',
}: Props) => {
  return <S.Container {...{ onClick, type, size }}>{children}</S.Container>;
};

export default Button;
