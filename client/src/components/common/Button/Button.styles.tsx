import styled from '@emotion/styled';
import { BORDER_RADIUS } from '@src/config/styles';

export const Container = styled.button<{ size: 'lg' | 'md' | 'sm' }>`
  ${({ size }) => (size === 'sm' ? BORDER_RADIUS.SM : BORDER_RADIUS.MD)};
  padding: ${({ size }) => (size === 'sm' ? '0.5rem 1rem' : ' 1.5rem 3rem')};
  width: ${({ size }) => size === 'lg' && '90%'};
  border: 1px solid #12b886;
  border-radius: 4px;
  color: #12b886;
  outline: none;
  &:hover {
    background: #12b886;
    color: #fff;
  }
`;
