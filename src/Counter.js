import React, { useState } from "React";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Counter </h1>
      <h1>{Counter} </h1>

      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default Counter;
