import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Counter App has started!");
  }, []);

  useEffect(() => {
    console.log("Count has changed!");
  }, [count]);

  return (
    <div className="App">
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
    </div>
  );
};

export default App;
