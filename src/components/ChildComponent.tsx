import React, { FC } from 'react';

type PropTypes = {
  name: string;
  counter: number;
};
export const ChildComponent = ({ name, counter }) => {
  return (
    <div>
      <h1>
        Hi, {name}! Текущий счетчик: {counter}
      </h1>
    </div>
  );
};
