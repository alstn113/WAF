export interface ShortAnswerForm {}
export interface LongAnswerForm {}
export interface MultipleChoiceForm {}
export interface CheckBoxForm {}
export interface DropdownFrom {}

export interface IFromBuilder {
  title: string;
  description: string;
  formList: {};
}

export interface IFormBuilderCreateRequest {
  title: string;
  description: string;
  formData: JSON;
}
