import { useMutation, UseMutationOptions } from 'react-query';
import CommentAPI from '@libs/api/comment.api';
import { IComment, ICustomAxiosError } from '@libs/interfaces';

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
