import { useState, useCallback } from 'react';

// EXAMPLE
//
//   const [isTextChanged, setIsTextChanged] = useToggle();
//
//   <button onClick={setIsTextChanged}>
//     {isTextChanged ? 'Toggled' : 'Click to Toggle'}
//   </button>

const useToggle = (initialState: boolean = false): [boolean, any] => {
  const [state, setState] = useState<boolean>(initialState);
  const toggle = useCallback((): void => setState((state) => !state), []);

  return [state, toggle];
};

export default useToggle;
