import React, { useState } from 'react';
import { ChildComponent } from './ChildComponent';
import { SiblingComponent } from './SiblingComponent';

export const ParentComponent: React.FC = () => {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter((counter) => counter + 1);
  const handleClickReset = () => setCounter(0);
  const getRandom = () => setCounter(() => Math.floor(Math.random() * 10) + 1);

  const decrementCounter = () =>
    setCounter((counter) => {
      if (counter <= 0) {
        return counter;
      }
      return counter - 1;
    });

  return (
    <>
      <ChildComponent name="Nikita" counter={counter} />
      <div>
        <button onClick={incrementCounter}>Увеличить</button>
        <button onClick={handleClickReset}>Сбросить</button>
        <button onClick={getRandom}>Случайное значение</button>
        <button onClick={decrementCounter}>Уменьшить</button>
      </div>
      <SiblingComponent />
    </>
  );
};
