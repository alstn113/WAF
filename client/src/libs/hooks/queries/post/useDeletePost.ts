import { useMutation, UseMutationOptions } from 'react-query';
import PostAPI from '@libs/api/post.api';
import { ICustomAxiosError, IPost } from '@libs/interfaces';

const useDeletePost = (
  id: string,
  options?: UseMutationOptions<IPost, ICustomAxiosError>,
) => {
  return useMutation<IPost, ICustomAxiosError>(
    () => PostAPI.deletePost(id),
    options,
  );
};

export default useDeletePost;
