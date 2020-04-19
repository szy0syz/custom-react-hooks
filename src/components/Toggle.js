import React from 'react';
import { useToggle } from '../hooks/useToggle';

const Toggle = () => {
  const { isToggled, toggle } = useToggle(false);

  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      {isToggled && <p>To be toggle</p>}
    </div>
  );
};

export default Toggle;
