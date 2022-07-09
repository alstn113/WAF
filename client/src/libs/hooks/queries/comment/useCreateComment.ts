import { useMutation, UseMutationOptions } from 'react-query';
import CommentAPI from '../../../api/comment';
import { IComment, ICommentCreateRequest } from '../../../interfaces';

const useCreateComment = (
  options: UseMutationOptions<
    IComment,
    unknown,
    ICommentCreateRequest,
    unknown
  >,
) => {
  return useMutation(CommentAPI.createComment, options);
};

export default useCreateComment;
