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

## useMount

```js
import { useEffect } from 'react';

export const useMount = (func) => {
  useEffect(() => {
    func();
  }, []); // eslint-disable-line
};

export const useUnmount = (func) => {
  useEffect(() => {
    return () => {
      func();
    };
  });
};
```

```js
import React from 'react';
import { useMount, useUnmount } from '../hooks/useMount';
import { useToggle } from '../hooks/useToggle';

const Mount = () => {
  const { isToggled, toggle } = useToggle();

  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      {isToggled && <UnMount />}
    </div>
  );
};

export const UnMount = () => {
  useMount(() => console.log('I mounted!'));
  useUnmount(() => console.log('I unmounted~'));
  return <div>Umount me</div>;
};

export default Mount;
```

### useHover

```js
import { useMemo, useState } from 'react';

export const useHover = () => {
  const [isHovered, setIsHovered] = useState(false);

  const bind = useMemo(() => {
    return {
      onMouseOver: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
    };
  }, []);

  return [isHovered, bind];
};
```

### useCookie

> 类 useState

```js
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export const useCookies = ({ key }) => {
  const initial = Cookies.get(key);
  const [cookie, setStateCookie] = useState(initial);

  useEffect(() => {
    Cookies.set(key, cookie);
  }, [cookie, key]);

  return [cookie, setStateCookie];
};
```

```js
const Cookie = () => {
  const [cookie, setCookie] = useCookies({ key: 'test' });
  return (
    <div>
      <h1>{cookie || ''}</h1>
      <input value={cookie} onChange={(e) => setCookie(e.target.value)} />
    </div>
  );
};
```
