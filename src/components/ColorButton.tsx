import React, { useState } from 'react';

export const ColorButton: React.FC = () => {
  const [color, setColor] = useState('red');
  const handleClick = () => setColor(color === 'red' ? 'blue' : 'red');
  const style = {
    backgroundColor: color,
  };
  return (
    <div>
      <button onClick={handleClick} style={style}>
        ColorButton
      </button>
    </div>
  );
};
