import { AxiosError } from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';
import PostAPI from '../../../api/post';
import { IPost } from '../../../interfaces';

const useDeletePost = (
  id: string,
  options: UseMutationOptions<IPost, AxiosError>,
) => {
  return useMutation(() => PostAPI.deletePost(id), options);
};

export default useDeletePost;
