export interface IForm {
  question: string;
  type: string;
  offeredAnswer: string[];
  required: boolean;
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

export interface IFormBuilderUpdateRequest {
  title?: string;
  description?: string;
  formList?: string;
}
