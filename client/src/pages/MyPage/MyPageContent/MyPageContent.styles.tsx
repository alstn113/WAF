import styled from '@emotion/styled';
import { flexCenter } from '@src/styles/shared';

export const Grid = styled.div`
  max-width: 80%;
  margin: 0 auto;
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 40px;
  grid-auto-rows: minmax(1rem, auto);
`;

export const GridItem = styled.div`
  ${flexCenter}
  background: #93fa96;
  padding: 1rem;
  font-size: 0.9rem;
  text-align: center;
  &:hover {
    background: #a5eea7;
  }
`;
