import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  // const handleCount = () => {
  //   // console.log(count);
  //   setTimeout(function delay() {
  //     setCount((count) => count + 1);
  //   }, 1000);
  // };
  const [info, setInfo] = useState({
    firstName: "nguyen",
    lastName: "Binh",
  });

  useEffect(() => {
    console.log("from input");
  }, [info]);
  return (
    <div className="p-5 flex gap-4 items-center">
      <span className="text-2xl font-bold">{count}</span>
      <button
        onClick={() => setCount(count + 1)}
        className="inline-block p-3 bg-green-400 text-white rounded-lg"
      >
        Increment
      </button>

      <button
        onClick={() => setCount(0)}
        className="inline-block p-3 bg-green-400 text-white rounded-lg"
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
