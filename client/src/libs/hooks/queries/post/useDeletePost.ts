import { useMutation, UseMutationOptions } from 'react-query';
import PostAPI from '../../../api/post.api';
import { ICustomAxiosError, IPost } from '../../../interfaces';

const useDeletePost = (
  id: string,
  options: UseMutationOptions<IPost, ICustomAxiosError>,
) => {
  return useMutation(() => PostAPI.deletePost(id), options);
};

export default useDeletePost;
