import produce from 'immer';
import create from 'zustand';
import { IForm, IFromBuilder } from '../interfaces';

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
}));

export default userFormBuilderStore;
