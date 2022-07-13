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
  title: string;
  description: string;
  formList: IForm[];
}

export interface IFormBuilderCreateRequest {
  title: string;
  description: string;
  formList: JSON;
}
