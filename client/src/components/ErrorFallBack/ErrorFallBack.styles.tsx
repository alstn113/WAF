import styled from '@emotion/styled';
import { flexCenter } from '@src/styles/shared';

export const Container = styled.div`
  ${flexCenter}
  flex-direction: column;
  width: 100vw;
  height: 80vh;
`;

export const Title = styled.div`
  font-size: 10rem;
  font-weight: 900;
  padding: 1rem;
  background: linear-gradient(to left, #7928ca, #ff0080);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const ErrorMessage = styled.div`
  margin-top: 2rem;
  font-size: 5rem;
  font-weight: 800;
  padding: 1rem;
  background: linear-gradient(to left, #7928ca, #ff0080);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
