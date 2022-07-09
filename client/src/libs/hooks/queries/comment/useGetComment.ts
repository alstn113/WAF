import { useQuery } from 'react-query';
import CommentAPI from '../../../api/comment';

const useGetComment = (id: string) => {
  return useQuery(['GetComment', id], CommentAPI.getComments);
};

useGetComment.getKey = (id: string) => ['GetComment', id];

export default useGetComment;
