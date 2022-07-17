import styled from '@emotion/styled';
import { flexCenter } from '@src/styles/shared';

export const NewFormWrapper = styled.div`
  width: 100%;
  background: #dadce0;
  padding: 2rem;
  ${flexCenter}
  flex-direction: column;
`;

export const FlexRow = styled.div`
  margin: 1rem;
  ${flexCenter}
`;

export const WrapperItem = styled.button`
  ${flexCenter}
  width: 120px;
  height: 120px;
  background: #878282a2;
  transition: 0.5s ease-in-out;
  & + & {
    margin-left: 3rem;
  }
  &:hover {
    background: #4f4a4aa1;
  }
`;
