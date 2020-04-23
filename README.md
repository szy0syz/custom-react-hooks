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

### useScrollFrezee

```js
export const useScrollFreeze = () => {
  useLayoutEffect(() => {
    const original = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, []);
};
```

> 为了让 `useScrollFreeze` 起作用，强制包一层，让元素消失，则 `useLayoutEffect` 的 `return` 生效

```js
const NavWrapper = () => {
  const { isMenuOpen } = useAppState();
  if (!isMenuOpen) return null;
  return <Nav />;
};

const Nav = () => {
  const { toggleMenu } = useAppState();
  useScrollFreeze();

  return (
    <nav
      style={{
        background: 'var(--black)',
        color: 'white',
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        left: 0,
        right: 0,
      }}
    >
      <h1>Menu</h1>
      <button onClick={toggleMenu}>Close~</button>
    </nav>
  );
};
```

### useWindowWidth

- 监听 window 对象的 resize 事件并加回调
- 在回调中设置 useState 的值
- 返回这个值
- 这样就是通过闭包向外链接的这个值，且是动态的

```js
import { useState, useEffect } from 'react';

export const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return width;
};
```

### useMeasure

```js
export const useMeasure = () => {
  const ref = useRef();

  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });

  const [resizeO] = useState(() => {
    return new ResizeObserver(([entry]) => setBounds(entry.contentRect));
  });

  useEffect(() => {
    if (ref.current) {
      resizeO.observe(ref.current);
    }
    return () => {
      return resizeO.disconnect();
    };
  }, [resizeO]);

  return [{ ref }, bounds];
};
```
