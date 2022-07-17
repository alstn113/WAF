import { useMutation, UseMutationOptions } from 'react-query';
import CommentAPI from '@libs/api/comment.api';
import {
  IComment,
  ICommentCreateRequest,
  ICustomAxiosError,
} from '@libs/interfaces';

const useCreateComment = (
  options?: UseMutationOptions<
    IComment,
    ICustomAxiosError,
    ICommentCreateRequest
  >,
) => {
  return useMutation<IComment, ICustomAxiosError, ICommentCreateRequest>(
    CommentAPI.createComment,
    options,
  );
};

export default useCreateComment;
