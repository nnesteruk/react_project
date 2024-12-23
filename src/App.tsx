import { useRef, useState } from 'react';
import './App.css';
import { LifecycleComponent } from './components/lifeCycle/LifecycleComponent';
import { List } from './components/List';
import { ParentComponent } from './components/props and state/ParentComponent';

function App() {
  const [arr, setArr] = useState(['nikita', 'pasha', 'natasha']);
  const textInput = useRef(null);
  const [value, setNewValue] = useState('');
  const handleChange = (e) => {
    setNewValue(e.target.value);
  };
  const handleClick = () => {
    textInput.current.focus();
  };

  const enterClick = (event) => {
    if (event.key === 'Enter') {
      setArr((prevArr) => [...prevArr, value]);
      setNewValue('');
    }
  };

  return (
    <>
      {/* <ParentComponent /> */}
      {/* <LifecycleComponent /> */}
      <input ref={textInput} onChange={handleChange} value={value} onKeyDown={enterClick} />
      <button onClick={handleClick}>Фокус</button>
      <List arr={arr} />
    </>
  );
}

export default App;
