export interface IComment {
  id: string;
  text: string;
  postId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICommentCreateRequest {
  text: string;
  postId: string;
}
