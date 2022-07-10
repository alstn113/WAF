import { useQuery, UseQueryResult } from 'react-query';
import CommentAPI from '../../../api/comment';
import { IComment } from '../../../interfaces';

const useGetComment = (id: string): UseQueryResult<IComment, Error> => {
  return useQuery(['GetComment', id], CommentAPI.getComments);
};

useGetComment.getKey = (id: string) => ['GetComment', id];

export default useGetComment;
