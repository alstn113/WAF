import { useQuery, UseQueryResult } from 'react-query';
import PostAPI from '../../../api/post.api';
import { ICustomAxiosError, IPost } from '../../../interfaces';

const useGetPost = (id: string): UseQueryResult<IPost, ICustomAxiosError> => {
  return useQuery(['GetPost', id], () => PostAPI.getPost(id));
};

useGetPost.getKey = (id: string) => ['GetPost', id];

export default useGetPost;
