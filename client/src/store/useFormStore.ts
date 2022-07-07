import create from 'zustand';

interface States {
  formList: {
    id: string;
    content: string;
  }[];
}

interface Actions {
  setFormList: (newFormList: any) => void;
}

const useFormStore = create<States & Actions>((set) => ({
  // States
  formList: [
    { id: 'form-1', content: 'item-1' },
    { id: 'form-2', content: 'item-2' },
    { id: 'form-3', content: 'item-3' },
  ],

  // Actions
  setFormList: (newFormList) =>
    set(() => ({
      formList: newFormList,
    })),
}));

export default useFormStore;
