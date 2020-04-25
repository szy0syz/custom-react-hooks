import React from 'react';
import { useScript } from '../hooks';

const Script = () => {
  const [isLoaded, isError] = useScript(
    'https://cdn.bootcss.com/jquery/3.5.0/jquery.min.js'
  );
  console.log('isLoaded, isError', isLoaded, isError);
  if (!isLoaded) return null;

  return (
    <div>
      <h3>Script</h3>
    </div>
  );
};

export default Script;
