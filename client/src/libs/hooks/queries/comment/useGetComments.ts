import { useQuery, UseQueryResult } from 'react-query';
import CommentAPI from '../../../api/comment';
import { IComment } from '../../../interfaces';

const useGetComments = (): UseQueryResult<IComment[], Error> => {
  return useQuery(['GetComments'], CommentAPI.getComments);
};

useGetComments.getKey = () => ['GetComments'];

export default useGetComments;
