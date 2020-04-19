import React from 'react';
import { useHover } from '../hooks/useHover';
import { Card } from '../Elements';
import black from '../black.png';

const Hover = () => {
  const [isHovered, bind] = useHover();

  return (
    <div>
      <Card
        {...bind}
        style={{ background: isHovered ? 'var(--purp)' : 'var(--black)' }}
      >
        <h3>Some card</h3>
        <img src={black} alt="" />
      </Card>
    </div>
  );
};

export default Hover;
