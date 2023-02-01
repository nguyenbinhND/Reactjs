import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    // console.log(count);
    setTimeout(function delay() {
      setCount((count) => count + 1);
    }, 1000);
  };
  return <div onClick={handleCount}>Increment {count}</div>;
};

export default Counter;
