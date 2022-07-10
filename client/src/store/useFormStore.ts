import create from 'zustand';

interface States {
  formList: {
    id: string;
    content: string;
  }[];
  count: number;
}

interface Actions {
  setFormList: (newFormList: any, newCount: number) => void;
}

const useFormStore = create<States & Actions>((set) => ({
  // States
  formList: [{ id: 'form-1', content: 'item-1' }],
  count: 1,

  // Actions
  setFormList: (newFormList, newCount) =>
    set(() => ({
      formList: newFormList,
      count: newCount,
    })),
}));

export default useFormStore;
