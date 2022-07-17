import styled from '@emotion/styled';

export const Title = styled.h3`
  padding: 8px;
  margin: 8px;
  background: #9dd2ea;
`;

export const Description = styled.h3`
  padding: 8px;
  margin: 8px;
  background: #9dead3;
`;

export const FormListContainer = styled.div<{ isDraggingOver: boolean }>`
  padding: 8px;
  background-color: ${(props) => (props.isDraggingOver ? '#84c0eb' : '#fff')};
  flex-grow: 1;
  min-height: 30px;
`;

export const TitleInput = styled.input`
  font-size: 2rem;
  padding: 0.8rem;
  background: #fff;
  width: 100%;
`;

export const DescriptionInput = styled.input`
  font-size: 1rem;
  padding: 0.3rem 0.8rem;
  background: #fff;
  width: 100%;
`;
