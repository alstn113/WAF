import { useMutation, UseMutationOptions } from 'react-query';
import CommentAPI from '../../../api/comment';
import { IComment } from '../../../interfaces';

const useDeleteComment = (
  id: string,
  options: UseMutationOptions<IComment, Error>,
) => {
  return useMutation(() => CommentAPI.deleteComment(id), options);
};

export default useDeleteComment;
