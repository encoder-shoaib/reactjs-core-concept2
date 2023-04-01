import logo from './logo.svg';
import './App.css';
import { useState, useSyncExternalStore } from 'react';

function App() {
  return (
    <div className="App">
     <Counter ></Counter>
    </div>

  );
}
 function Counter() {
    const [count,setCount]= useState(44);

    const increseCount=()=>{
      setCount(count+1);
    }
    const decreaseCount=()=>{
      setCount(count - 1);
    }
   
      return(
        <div>
          <h1>count:{count}</h1>
          <button onClick={increseCount}>Increase</button>
          <button onClick={decreaseCount}>Decrease</button>
        </div>
      )
    }

export default App;
