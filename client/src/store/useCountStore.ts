// example

import create from "zustand";

interface States {
  count: number;
}

interface Actions {
  increaseByNum: (num: number) => void;
  decreaseByNum: (num: number) => void;
}

const useCountStore = create<States & Actions>((set) => ({
  // States
  count: 0,

  // Actions
  increaseByNum: (num) => set((state) => ({ count: state.count + num })),
  decreaseByNum: (num) => set((state) => ({ count: state.count - num })),
}));

export default useCountStore;
