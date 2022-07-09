import { IComment } from './comment.interface';

export interface IPost {
  id: string;
  title: string;
  body: string;
  comments?: IComment[];
  createdAt: string;
  updatedAt: string;
}

export interface IPostCreateRequest {
  title: string;
  body: string;
}
