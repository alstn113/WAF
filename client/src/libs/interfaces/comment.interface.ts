export interface IComment {
  id: string;
  text: string;
  postId: string;
  createdAt: string;
  updatedAt: string;
}

export interface ICommentCreateRequest {
  text: string;
  postId: string;
}
