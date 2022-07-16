import { useQuery, UseQueryOptions } from 'react-query';
import PostAPI from '../../../api/post.api';
import { ICustomAxiosError, IPost } from '../../../interfaces';

const useGetPosts = (options?: UseQueryOptions<IPost[], ICustomAxiosError>) => {
  return useQuery<IPost[], ICustomAxiosError>(
    ['GetPosts'],
    PostAPI.getPosts,
    options,
  );
};

useGetPosts.getKey = () => ['GetPosts'];

export default useGetPosts;
