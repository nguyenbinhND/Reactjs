import React, { useState } from "react";
import "./ToggleStyle.css";

// stateless functional component: component không sử dụng state

// function Toggle() {
//   return <div className="Toggle"></div>;
// }

// stateful functional component: component sử dụng state , sử dụng hook có tên là useState()
//để lưu thông tin vào state

// function Toggle2() {
//   const [count, setCount] = useState();
//   return <div className="Toggle"></div>;
// }

// const Toggle = () => {
//   return <div></div>;
// };
// ;
function Toggle() {
  //   const array = useState(false);
  //   console.log(array);
  const [on, setOn] = useState(false);
  console.log(on);
  const handleToggle = () => {
    setOn((on) => !on);
  };
  return (
    <div className="">
      <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>
      <div className="toggle-control">
        <div
          className="toggle-on"
          onClick={() => {
            setOn(true);
          }}
        >
          On
        </div>
        <div
          className="toggle-off"
          onClick={() => {
            setOn(false);
          }}
        >
          Off
        </div>
      </div>
    </div>
  );
}

export default Toggle;
