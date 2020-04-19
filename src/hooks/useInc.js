import { useState } from 'react';

const useInc = ({
  minValue = -100000,
  maxValue = 100000,
  initial = 0,
  step = 1,
}) => {
  const [value, setValue] = useState(initial);
  const inc = () =>
    setValue((prev) => (prev + step >= maxValue ? maxValue : prev + step));
  const dec = () =>
    setValue((prev) => (prev - step <= minValue ? minValue : prev - step));
  const reset = () => setValue(initial);
  return [value, { inc, dec, reset }];
};

export default useInc;
