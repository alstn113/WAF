import styled from '@emotion/styled';
import { BORDER_RADIUS } from '@src/config/styles';

export const Container = styled.button<{ size: 'lg' | 'md' | 'sm' }>`
  ${({ size }) => (size === 'sm' ? BORDER_RADIUS.SM : BORDER_RADIUS.MD)};
  padding: ${({ size }) => (size === 'sm' ? '0.5rem 1rem' : ' 0.7rem 2rem')};
  width: ${({ size }) => size === 'lg' && '100%'};
  background: #12b886;
  border-radius: 4px;
  color: #fff;
  outline: none;
  transition: 0.2s ease-in-out;
  &:hover {
    background: #97d4c2;
  }
`;
