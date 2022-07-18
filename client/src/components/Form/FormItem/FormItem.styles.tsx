import styled from '@emotion/styled';
import { flexCenter } from '@src/styles/shared';

export const Handle = styled.div`
  height: 1.5rem;
  width: 100%;
  background: rgb(228, 143, 143);
  margin-bottom: 0.5rem;
`;

export const FlexColumn = styled.div`
  ${flexCenter}
  flex-direction: column;
`;

export const FlexRow = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const QuestionInput = styled.input`
  font-size: 1.2rem;
  padding: 0.5rem 0.8rem;
  width: 400px;
  border-bottom: 1px solid black;
  transition: 0.2s ease-in-out;
  background: rgba(0, 0, 0, 0.02);
  &:focus {
    background-color: rgba(0, 0, 0, 0.06);
    border-bottom: 1px solid blue;
  }
`;

export const Select = styled.select`
  font-size: 1.2rem;
  width: 150px;
  text-align: center;
`;

export const OfferedAnswerWrapper = styled.div`
  margin: 1rem 0;
  width: 80%;
`;

export const Container = styled.div<{
  isDragging: boolean;
}>`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  min-height: 100px;
  text-align: center;
  margin-bottom: 8px;
  background-color: ${(props) => (props.isDragging ? 'lightgreen' : 'white')};
`;
