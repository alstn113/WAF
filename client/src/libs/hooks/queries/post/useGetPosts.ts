import { useQuery, UseQueryResult } from 'react-query';
import PostAPI from '../../../api/post';
import { ICustomAxiosError, IPost } from '../../../interfaces';

const useGetPosts = (): UseQueryResult<IPost[], ICustomAxiosError> => {
  return useQuery(['GetPosts'], PostAPI.getPosts);
};

useGetPosts.getKey = () => ['GetPosts'];

export default useGetPosts;
