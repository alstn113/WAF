import styled from '@emotion/styled';
import { flexCenter } from '@src/styles/shared';

export const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 80vh;
  ${flexCenter}
  flex-direction: column;
`;

export const Text = styled.div`
  font-family: BMEULJIRO;
  font-size: 9rem;
  font-weight: bold;
  padding: 1rem;
  background: linear-gradient(to left, #7928ca, #ff0080);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
