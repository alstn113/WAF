import styled from '@emotion/styled';

export const Title = styled.h3`
  padding: 8px;
  margin: 8px;
  text-align: center;
  font-size: 1.5rem;
  background: #9dd2ea;
`;

export const Description = styled.h3`
  padding: 8px;
  margin: 8px;
  text-align: center;
  background: #9dead3;
`;

export const FormListContainer = styled.div<{ isDraggingOver: boolean }>`
  padding: 8px;
  background-color: ${(props) => (props.isDraggingOver ? '#84c0eb' : '#fff')};
  flex-grow: 1;
  min-height: 30px;
`;
