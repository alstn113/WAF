import { IPostCreateRequest } from '../interfaces';
import apiClient from './apiClient.api';

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
