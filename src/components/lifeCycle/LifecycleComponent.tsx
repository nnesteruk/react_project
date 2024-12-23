import axios from 'axios';
import React, { useEffect, useState } from 'react';

// export class LifecycleComponent extends React.Component {
//   timerID: number | undefined;
//   state = {
//     count: 0,
//   };
//   increment() {
//     this.setState((store: { count: number }) => ({
//       count: store.count + 1,
//     }));
//     () => console.log(this.state.count);
//   }

//   componentDidMount(): void {
//     const result = axios.get('https://todo-redev.herokuapp.com/api-docs/api/users');
//     result.then((data) => console.log(data));
//     this.timerID = window.setInterval(() => {
//       console.log('Timer is running');
//     }, 1000);
//   }
//   shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<{ count: number }>): boolean {
//     if (nextState.count % 2 == 0) {
//       console.log(`Count is even ${nextState.count}`);
//       return true;
//     }
//     return false;
//   }

//   componentDidUpdate(prepProps: any, prevState: { count: number }): void {
//     if (prevState.count !== this.state.count) {
//       console.log(`Count change from ${prevState.count} to ${this.state.count}`);
//     }
//   }

//   componentWillUnmount(): void {
//     if (this.timerID) {
//       clearInterval(this.timerID);
//       console.log('Unmount completed');
//     }
//   }

//   render() {
//     return (
//       <>
//         <div>Example lifecycle: {this.state.count}</div>
//         <button onClick={() => this.increment()}>+</button>
//       </>
//     );
//   }
// }

export const LifecycleComponent = () => {
  const [count, setCount] = useState(0);
  const [eventCount, setEventCount] = useState(0);
  const handleClick = () => setCount((count) => count + 1);
  useEffect(() => {
    const timerID = setInterval(() => console.log('Timer is running'), 1000);
    axios
      .get('https://todo-redev.herokuapp.com/api-docs/api/users')
      .then((data) => console.log(data))
      .catch(console.log);
    console.log('componentDidMount is done');
    return () => {
      if (timerID) {
        clearInterval(timerID);
      }
      console.log('componentWillUnmount is done');
    };
  }, []);

  useEffect(() => {
    if (count % 2 === 0) {
      setEventCount(count);
      console.log(`Count is even ${count}`);
    }
  }, [count]);

  return (
    <>
      <div>Example lifeCycle: {eventCount}</div>
      <button onClick={handleClick}>+</button>
    </>
  );
};
