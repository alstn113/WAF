import { IPostCreateRequest } from '@libs/interfaces';
import apiClient from '@libs/api/apiClient.api';

const PostAPI = {
  getPosts: async () => {
    const { data } = await apiClient.get('/post');
    return data;
  },
  getPost: async (id: string) => {
    const { data } = await apiClient.get(`/post/${id}`);
    return data;
  },
  createPost: async (input: IPostCreateRequest) => {
    const { data } = await apiClient.post('/post', input);
    return data;
  },
  deletePost: async (id: string) => {
    const { data } = await apiClient.delete(`/post/${id}`);
    return data;
  },
};

export default PostAPI;
