import create from 'zustand';

interface States {
  title: string;
  description: string;
  formList: {
    id: string;
    content: string;
  }[];
  count: number;
}

interface Actions {
  setFormList: (newFormList: any, newCount: number) => void;
}

const userFormBuilderStore = create<States & Actions>((set) => ({
  // States
  title: '제목없음',
  description: '설명없음',
  formList: [{ id: 'form-1', content: 'item-1' }],
  count: 1,

  // Actions
  setFormList: (newFormList, newCount) =>
    set(() => ({
      formList: newFormList,
      count: newCount,
    })),
}));

export default userFormBuilderStore;
