import produce from 'immer';
import create from 'zustand';
import { IForm, IFromBuilder } from '@libs/interfaces';

interface States extends IFromBuilder {}

interface Actions {
  setFormBuilder: (data: IFromBuilder) => void;
  setFormList: (newFormList: IForm[]) => void;
  changeFormField: (field: 'title' | 'description', data: string) => void;
  changeFormItemField: (
    index: number,
    field: 'question' | 'type',
    data: string,
  ) => void;
  changeOfferedAnswer: (index: number, data: string[]) => void;
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
  changeFormItemField: (index, field, data) =>
    set(
      produce((state: States) => {
        state.formList[index][field] = data;
      }),
    ),
  changeOfferedAnswer: (index, data) =>
    set(
      produce((state: States) => {
        state.formList[index].offeredAnswer = data;
      }),
    ),
}));

export default userFormBuilderStore;
