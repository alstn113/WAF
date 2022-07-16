import { useQuery, UseQueryOptions } from 'react-query';
import PostAPI from '../../../api/post.api';
import { ICustomAxiosError, IPost } from '../../../interfaces';

const useGetPost = (
  id: string,
  options?: UseQueryOptions<IPost, ICustomAxiosError>,
) => {
  return useQuery<IPost, ICustomAxiosError>(
    ['GetPost', id],
    () => PostAPI.getPost(id),
    options,
  );
};

useGetPost.getKey = (id: string) => ['GetPost', id];

export default useGetPost;
