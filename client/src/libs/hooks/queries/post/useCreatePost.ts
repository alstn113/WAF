import { useMutation, UseMutationOptions } from 'react-query';
import PostAPI from '../../../api/post.api';
import {
  IPost,
  IPostCreateRequest,
  ICustomAxiosError,
} from '../../../interfaces';

const useCreatePost = (
  options?: UseMutationOptions<IPost, ICustomAxiosError, IPostCreateRequest>,
) => {
  return useMutation<IPost, ICustomAxiosError, IPostCreateRequest>(
    PostAPI.createPost,
    options,
  );
};

export default useCreatePost;
