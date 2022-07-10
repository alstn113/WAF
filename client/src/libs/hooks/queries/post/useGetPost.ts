import { AxiosError } from 'axios';
import { useQuery, UseQueryResult } from 'react-query';
import PostAPI from '../../../api/post';
import { IPost } from '../../../interfaces';

const useGetPost = (id: string): UseQueryResult<IPost, AxiosError> => {
  return useQuery(['GetPost', id], () => PostAPI.getPost(id));
};

useGetPost.getKey = (id: string) => ['GetPost', id];

export default useGetPost;
