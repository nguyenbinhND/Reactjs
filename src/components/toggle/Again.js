import React, { useState } from "react";
import "./ToggleStyle.css";

function Again() {
  const [on, setOn] = useState(false);
  const handleToggle = () => {
    setOn((on) => {
      return !on;
    });
  };

  return (
    <div className="">
      <div className={`toggle ${on ? "active" : ""}`} onClick="{handleToggle}">
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>
      <div className="toggle-control">
        <div
          className="toggle-on"
          onClick={() => {
            setOn(true);
          }}
        >
          on
        </div>
        <div
          className="toggle-off"
          onClick={() => {
            setOn(false);
          }}
        >
          off
        </div>
      </div>
    </div>
  );
}
export default Again;
