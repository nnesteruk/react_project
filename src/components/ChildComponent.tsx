import React from 'react';

type PropTypes = {
  name: string;
  counter: number;
};
export const ChildComponent: React.FC<PropTypes> = ({ name, counter }) => {
  return (
    <div>
      <h1>
        Hi, {name}! Текущий счетчик: {counter}
      </h1>
    </div>
  );
};
