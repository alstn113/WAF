import { useQuery } from 'react-query';
import CommentAPI from '../../../api/comment';

const useGetComments = () => {
  return useQuery(['GetComments'], CommentAPI.getComments);
};

useGetComments.getKey = () => ['GetComments'];

export default useGetComments;
