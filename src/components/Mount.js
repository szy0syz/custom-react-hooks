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
