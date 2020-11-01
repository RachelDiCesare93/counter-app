import { useState } from "react";
import "./counter.scss";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className="counter-header">
        <h1>Let's Count</h1>
        <div className="counter">
          <span>{count}</span>
          <div className="buttons">
            <button className="inc" onClick={increment}>
              +
            </button>
            <button className="dec" onClick={decrement}>
              -
            </button>
            <button className="reset" onClick={() => setCount(0)}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
