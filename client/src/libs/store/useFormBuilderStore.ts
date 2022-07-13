import create from 'zustand';
import { IForm, IFromBuilder } from '../interfaces';

interface States extends IFromBuilder {
  count: number;
}

interface Actions {
  setFormList: (newFormList: IForm[], newCount: number) => void;
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
}));

export default userFormBuilderStore;
