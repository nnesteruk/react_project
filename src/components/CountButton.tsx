import { useState, FC } from 'react';

export function CountButton() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((count) => count + 1);
  };
  return (
    <div>
      <h1>Счётчик: {count}</h1>
      <button onClick={handleClick}>Нажми на меня</button>
    </div>
  );
}
