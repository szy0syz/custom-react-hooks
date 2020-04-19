# Custom-React-Hooks

## useToggle

```js
import { useState } from 'react';

export const useToggle = (initial) => {
  const [isToggled, setToggle] = useState(initial);
  const toggle = () => setToggle((prev) => !prev);

  // Rename output, multiple uses of hook
  // return [isToggled, setToggle, toggle];

  // Named properties, no order in return
  return { isToggled, setToggle, toggle };
};
```

## useInc

```js
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
```