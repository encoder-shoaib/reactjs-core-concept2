import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState, useSyncExternalStore } from "react";

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <ExternalUsers></ExternalUsers>
    </div>
  );
}
function ExternalUsers() {
  /* step-1*/ const [users, setUsers] = useState([]);
  /*2*/ useEffect(() => {
    /*3*/ fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      /* step-4*/
      {/* {
          users.map(user=><li>{user.name}</li>)
        }  */}
      {users.map((user) => (
        <User name={user.name} email={user.email} phone={user.phone}></User>
      ))}
    </div>
  );
}
/* step-5*/
function User(props) {
  return (
    <div className="ExternalUser">
      <h3>Name:{props.name}</h3>
      <h4>Email:{props.email}</h4>
      <h5>Phone Num:{props.phone}</h5>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(44);

  const increseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="count-number">
      <h1>count:{count}</h1>
      <button onClick={increseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
}

export default App;
