import { useState } from 'react';

export const useToggle = (initial) => {
  const [isToggled, setToggle] = useState(initial);
  const toggle = () => setToggle((prev) => !prev);

  // Rename output, multiple uses of hook
  // return [isToggled, setToggle, toggle];

  // Named properties, no order in return
  return { isToggled, setToggle, toggle };
};
