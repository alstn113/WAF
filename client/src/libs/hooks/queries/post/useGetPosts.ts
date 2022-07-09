import { useQuery } from 'react-query';
import PostAPI from '../../../api/post';

const useGetPosts = () => {
  return useQuery(['GetPosts'], PostAPI.getPosts);
};

useGetPosts.getKey = () => ['GetPosts'];

export default useGetPosts;
