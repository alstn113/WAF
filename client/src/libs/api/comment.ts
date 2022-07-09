import { IComment, ICommentCreateRequest } from '../../interfaces';
import apiClient from './apiClient';

const CommentAPI = {
  getComments: async (): Promise<IComment[]> => {
    const { data } = await apiClient.get('/comment');
    return data;
  },
  getComment: async (id: string): Promise<IComment | string> => {
    const { data } = await apiClient.get(`/comment/${id}`);
    return data;
  },
  createComment: async (input: ICommentCreateRequest) => {
    const { data } = await apiClient.post('/', input);
    return data;
  },
  deleteComment: async (id: string) => {
    const { data } = await apiClient.delete(`/comment/${id}`);
    return data;
  },
};

export default CommentAPI;
