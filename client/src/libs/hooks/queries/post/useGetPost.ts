import { useQuery, UseQueryOptions } from 'react-query';
import PostAPI from '@libs/api/post.api';
import { ICustomAxiosError, IPost } from '@libs/interfaces';

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
