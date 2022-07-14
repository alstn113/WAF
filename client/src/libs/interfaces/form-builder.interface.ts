export interface IForm {
  id: string;
  question: string;
  type: string;
  answer: string[];
}

export interface IFromBuilder {
  title: string;
  description: string;
  formList: IForm[];
}

export interface IFromBuilderResponse {
  id: string;
  title: string;
  description: string;
  formList: IForm[];
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface IFormBuilderCreateRequest {
  title: string;
  description: string;
  formList: string;
}
