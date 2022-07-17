import { useEffect } from 'react';
import { useQueryClient } from 'react-query';
import * as S from './ErrorFallBack.styles';

interface Props {
  message: string;
  queryKey?: string[];
}

const ErrorFallBack = ({ message, queryKey }: Props) => {
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.resetQueries(queryKey);
  }, []);

  return (
    <S.Container>
      <S.Title>ERROR</S.Title>
      <S.ErrorMessage>{message}</S.ErrorMessage>
    </S.Container>
  );
};

export default ErrorFallBack;
