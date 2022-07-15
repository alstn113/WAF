import produce from 'immer';
import create from 'zustand';
import { IForm, IFromBuilder } from '../interfaces';

interface States extends IFromBuilder {}

interface Actions {
  setTitle: (newTitle: string) => void;
  setDescription: (newDescription: string) => void;
  setFormList: (newFormList: IForm[]) => void;
  setFormItemQuestion: (index: number, newQuestion: string) => void;
  setFormItemType: (index: number, newType: string) => void;
  setFormItemAnswer: () => void;
}

const userFormBuilderStore = create<States & Actions>((set) => ({
  // States
  title: '제목없음',
  description: '설명없음',
  formList: [],

  // Actions
  setTitle: (newTitle) => set(() => ({ title: newTitle })),
  setDescription: (newDescription) =>
    set(() => ({ description: newDescription })),
  setFormList: (newFormList) =>
    set(() => ({
      formList: newFormList,
    })),
  setFormItemQuestion: (index, newQuestion) =>
    set(
      produce((state: States) => {
        state.formList[index].question = newQuestion;
      }),
    ),
  setFormItemType: (index, newType) =>
    set(
      produce((state: States) => {
        state.formList[index].type = newType;
      }),
    ),
  setFormItemAnswer: () => set(produce((state: States) => {})),
}));

export default userFormBuilderStore;
