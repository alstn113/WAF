import { useMutation, UseMutationOptions } from 'react-query';
import CommentAPI from '../../../api/comment';
import { IComment } from '../../../interfaces';

const useDeleteComment = (
  id: string,
  options: UseMutationOptions<IComment>,
) => {
  useMutation(() => CommentAPI.deleteComment(id), options);
};

export default useDeleteComment;
