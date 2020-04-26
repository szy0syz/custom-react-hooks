import React from 'react';
import { useLocalStorage } from '../hooks';

const Local = () => {
  const [value, setValue] = useLocalStorage('test', '4444444');
  return (
    <div>
      <h1>{value || ''}</h1>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
};

export default Local;
