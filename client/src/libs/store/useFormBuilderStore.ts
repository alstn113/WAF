import produce from 'immer';
import create from 'zustand';
import { IForm, IFromBuilder, questionType } from '../interfaces';

interface States extends IFromBuilder {
  count: number;
}

interface Actions {
  setFormList: (newFormList: IForm[], newCount: number) => void;
  setFormItemQuestion: (index: number, newQuestion: string) => void;
  setFormItemType: (index: number, newType: questionType) => void;
  setFormItemAnswer: () => void;
}

const userFormBuilderStore = create<States & Actions>((set) => ({
  // States
  title: '제목없음',
  description: '설명없음',
  formList: [],
  count: 0,

  // Actions
  setFormList: (newFormList, newCount) =>
    set(() => ({
      formList: newFormList,
      count: newCount,
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
