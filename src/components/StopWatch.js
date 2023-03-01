import React from "react";
import { useEffect, useRef, useState } from "react";

const StopWatch = () => {
  const timerRef = useRef(null);
  const [count, setCount] = useState(0);

  const handelStart = () => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      setCount((counter) => counter + 1);
    }, 1000);
  };

  const handelStop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div>
      <h3>Timer: {count}s</h3>
      <div>
        <button onClick={handelStart}>Start</button>
        <button onClick={handelStop}>Stop</button>
      </div>
    </div>
  );
};

export default StopWatch;
