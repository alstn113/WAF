import produce from 'immer';
import create from 'zustand';
import { IForm, IFromBuilder } from '@libs/interfaces';

interface States extends IFromBuilder {}

interface Actions {
  setFormBuilder: (data: IFromBuilder) => void;
  setFormList: (newFormList: IForm[]) => void;
  changeFormField: (field: 'title' | 'description', data: string) => void;
  changeQuestion: (index: number, data: string) => void;
  changeType: (index: number, data: string) => void;
  changeOfferedAnswer: (index: number, data: string[]) => void;
  toggleRequired: (index: number) => void;
}

const userFormBuilderStore = create<States & Actions>((set) => ({
  // States
  title: '제목없음',
  description: '설명없음',
  formList: [],

  // Actions
  setFormBuilder: (data) =>
    set(() => ({
      title: data.title,
      description: data.description,
      formList: data.formList,
    })),
  setFormList: (newFormList) =>
    set(() => ({
      formList: newFormList,
    })),
  changeFormField: (field, data) =>
    set(
      produce((state: States) => {
        state[field] = data;
      }),
    ),
  changeQuestion: (index, data) =>
    set(
      produce((state: States) => {
        state.formList[index].question = data;
      }),
    ),
  changeType: (index, data) =>
    set(
      produce((state: States) => {
        state.formList[index].type = data;
        state.formList[index].offeredAnswer = [];
      }),
    ),
  changeOfferedAnswer: (index, data) =>
    set(
      produce((state: States) => {
        state.formList[index].offeredAnswer = data;
      }),
    ),
  toggleRequired: (index) =>
    set(
      produce((state: States) => {
        state.formList[index].required = !state.formList[index].required;
      }),
    ),
}));

export default userFormBuilderStore;
