import { useMutation, UseMutationOptions } from 'react-query';
import PostAPI from '../../../api/post';
import { IPost, IPostCreateRequest } from '../../../interfaces';

const useCreatePost = (
  options: UseMutationOptions<IPost, unknown, IPostCreateRequest, unknown>,
) => {
  useMutation(PostAPI.createPost, options);
};

export default useCreatePost;
