import { useQuery, UseQueryResult } from 'react-query';
import CommentAPI from '../../../api/comment';
import { IComment, ICustomAxiosError } from '../../../interfaces';

const useGetComment = (
  id: string,
): UseQueryResult<IComment, ICustomAxiosError> => {
  return useQuery(['GetComment', id], CommentAPI.getComments);
};

useGetComment.getKey = (id: string) => ['GetComment', id];

export default useGetComment;
