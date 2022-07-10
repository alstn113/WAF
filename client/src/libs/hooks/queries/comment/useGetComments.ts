import { useQuery, UseQueryResult } from 'react-query';
import CommentAPI from '../../../api/comment';
import { IComment, ICustomAxiosError } from '../../../interfaces';

const useGetComments = (): UseQueryResult<IComment[], ICustomAxiosError> => {
  return useQuery(['GetComments'], CommentAPI.getComments);
};

useGetComments.getKey = () => ['GetComments'];

export default useGetComments;
