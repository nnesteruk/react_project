import React, { useState } from 'react';

export const SiblingComponent = () => {
  const [text, setText] = useState('Нажми на кнопку и увидишь магию)');
  const handleClick = () => setText('REDEV');
  return (
    <>
      <p className="sibling-comp__text">Текущий текст: {text}</p>
      <button onClick={handleClick}>Изменить текст</button>
    </>
  );
};
