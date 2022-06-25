import { atom } from 'recoil';

const counterAtom = atom({
  key: 'counterAtom',
  default: 0,
});

export default counterAtom;
