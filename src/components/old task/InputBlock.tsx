import React, { useState } from 'react';

export const InputBlock = () => {
  const [state, setState] = useState('');
  const handleChange = (event: any) => setState(event.target.value);
  return (
    <div>
      <input value={state} onChange={handleChange}></input>
      <p>{state}</p>
    </div>
  );
};
