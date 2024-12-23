import { useState } from 'react';
import './App.css';
import { LifecycleComponent } from './components/lifeCycle/LifecycleComponent';
import { List } from './components/List';
import { ParentComponent } from './components/props and state/ParentComponent';

function App() {
  const [arr, setArr] = useState(['nikita', 'pasha', 'natasha']);
  return (
    <>
      {/* <ParentComponent /> */}
      {/* <LifecycleComponent /> */}
      <List arr={arr} />
    </>
  );
}

export default App;
