import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initial) => {
  const item = window.localStorage.getItem(key);
  const [value, setValue] = useState(initial || initial);

  useEffect(() => {
    window.localStorage.setItem(key, value);
  }, [value, key, initial, item]);

  return [value, setValue];
};
