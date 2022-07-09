import { IComment } from './comment.interface';

export interface IPost {
  id: string;
  title: string;
  body: string;
  comments?: IComment[];
  createdAt: Date;
  updatedAt: Date;
}

export interface IPostCreateRequest {
  title: string;
  body: string;
}
