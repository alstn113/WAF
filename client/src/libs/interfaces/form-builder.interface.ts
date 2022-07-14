export type questionType =
  | 'ShortAnswer'
  | 'LongAnswer'
  | 'MultipleChoice'
  | 'CheckBox'
  | 'Dropdown';

export interface IForm {
  id: string;
  question: string;
  type: questionType;
  answer: string[];
}

export interface IFromBuilder {
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
