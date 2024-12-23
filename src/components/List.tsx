import React, { useEffect, useState } from 'react';
export const List = ({ arr }) => {
  const [tasks, setTasks] = useState([...arr]);
  const [editTask, setEditTask] = useState(null);
  const [newValue, setNewValue] = useState('');

  useEffect(() => {
    setTasks([...arr]);
  }, [arr]);

  const startEditTask = (index) => {
    setEditTask(index);
    setNewValue(tasks[index]);
  };

  const changeHandleClick = (index) => {
    const newTasks = [...tasks];
    newTasks[index] = newValue;
    setTasks(newTasks);
    setEditTask(null);
    setNewValue('');
  };
  const handleChange = (event) => {
    setNewValue(() => event.target.value);
  };

  const cancelHandleClick = () => {
    setNewValue('');
    setEditTask(null);
  };

  return (
    <>
      <div className="task">
        {[...tasks].map((item: string, index) => (
          <li key={index}>
            {editTask === index ? (
              <>
                <input value={newValue} onChange={(e) => handleChange(e)} />
                <button onClick={() => changeHandleClick(index)}>Изменить</button>
                <button onClick={() => cancelHandleClick()}>Отмена</button>
              </>
            ) : (
              <>
                {item}
                <button onClick={() => startEditTask(index)}>Изменить</button>
              </>
            )}
          </li>
        ))}
      </div>
    </>
  );
};
