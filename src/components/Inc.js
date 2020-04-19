import React from 'react';
import useInc from '../hooks/useInc';

const Inc = ({ initial, minValue, maxValue, step }) => {
  const [value, { inc, dec, reset }] = useInc({
    initial,
    maxValue,
    minValue,
    step,
  });
  return (
    <div>
      <button onClick={dec}>-</button>
      {value}
      <button onClick={inc}>+</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default Inc;
