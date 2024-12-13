import React, { useState } from 'react';

export const ParentComponent = () => {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter((counter) => counter + 1);
  const handleClickReset = () => setCounter((counter) => (counter = 0));
  const getRandom = () => setCounter(() => Math.floor(Math.random() * 10) + 1);

  const decrementCounter = () =>
    setCounter((counter) => {
      if (counter <= 0) {
        return counter;
      }
      return counter - 1;
    });

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={incrementCounter}>Увеличить</button>
      <button onClick={handleClickReset}>Сбросить</button>
      <button onClick={getRandom}>Случайное значение</button>
      <button onClick={decrementCounter}>Уменьшить</button>
    </div>
  );
};
