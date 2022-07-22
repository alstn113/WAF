import { useEffect } from 'react';
import { useQueryClient } from 'react-query';

interface Props {
  message: string;
  queryKey?: string[];
}

const ErrorFallback = ({ message, queryKey }: Props) => {
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.resetQueries(queryKey && queryKey);
  }, []);

  return (
    <div>
      <div>ERROR</div>
      <div>{message}</div>
    </div>
  );
};

export default ErrorFallback;
