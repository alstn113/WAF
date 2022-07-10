import { useMutation, UseMutationOptions } from 'react-query';
import CommentAPI from '../../../api/comment';
import {
  IComment,
  ICommentCreateRequest,
  ICustomAxiosError,
} from '../../../interfaces';

const useCreateComment = (
  options: UseMutationOptions<
    IComment,
    ICustomAxiosError,
    ICommentCreateRequest
  >,
) => {
  return useMutation(CommentAPI.createComment, options);
};

export default useCreateComment;
