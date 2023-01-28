import React, { useState } from "react";

// stateless functional component: component không sử dụng state

function Toggle() {
  return <div className="Toggle"></div>;
}

// stateful functional component: component sử dụng state , sử dụng hook có tên là useState()
//để lưu thông tin vào state

function Toggle2() {
  const [count, setCount] = useState();
  return <div className="Toggle"></div>;
}

// const Toggle = () => {
//   return <div></div>;
// };

// export default Toggle;
