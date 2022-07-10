import { AxiosError } from 'axios';
import { useQuery, UseQueryResult } from 'react-query';
import PostAPI from '../../../api/post';
import { IPost } from '../../../interfaces';

const useGetPosts = (): UseQueryResult<
  IPost[],
  AxiosError<{ message: string; statusCode: string }>
> => {
  return useQuery(['GetPosts'], PostAPI.getPosts);
};

useGetPosts.getKey = () => ['GetPosts'];

export default useGetPosts;
