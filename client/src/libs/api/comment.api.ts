import { ICommentCreateRequest } from '../interfaces';
import apiClient from './apiClient.api';

const CommentAPI = {
  createComment: async (input: ICommentCreateRequest) => {
    const { data } = await apiClient.post('/comment', input);
    return data;
  },
  deleteComment: async (id: string) => {
    const { data } = await apiClient.delete(`/comment/${id}`);
    return data;
  },
};

export default CommentAPI;
