import { useMutation, UseMutationOptions } from 'react-query';
import CommentAPI from '../../../api/comment.api';
import { IComment, ICustomAxiosError } from '../../../interfaces';

const useDeleteComment = (
  id: string,
  options?: UseMutationOptions<IComment, ICustomAxiosError>,
) => {
  return useMutation<IComment, ICustomAxiosError>(
    () => CommentAPI.deleteComment(id),
    options,
  );
};

export default useDeleteComment;
