import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const List = ({ arr }) => {
  const [edit, setEdit] = useState(null);
  const handleChange = (event) => console.log(event.target.value);
  const handleClick = () => {
    setEdit(!edit);
    console.log(edit);
  };
  if (edit) {
    return (
      <>
        <input onChange={handleChange} />
      </>
    );
  }
  return (
    <>
      {arr.map((item: string) => (
        <React.Fragment key={uuidv4()}>
          <div>
            <li>{item}</li>
          </div>
          <button onClick={() => handleClick()}>Изменить</button>
        </React.Fragment>
      ))}
    </>
  );
};
