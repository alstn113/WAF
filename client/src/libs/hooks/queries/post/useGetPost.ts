import { useQuery } from 'react-query';
import PostAPI from '../../../api/post';

const useGetPost = (id: string) => {
  return useQuery(['GetPost', id], () => PostAPI.getPost(id));
};

useGetPost.getKey = (id: string) => ['GetPost', id];

export default useGetPost;
