import { useState } from 'react';

export const TextButton = () => {
  const [showText, setShowText] = useState(true);
  const handleClick = () => setShowText(() => !showText);

  return (
    <div>
      {showText && <p>Показать текст</p>}
      <button onClick={handleClick}>Показать текст</button>
    </div>
  );
};
