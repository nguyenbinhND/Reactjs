import React, { useState } from "react";
import { useRef } from "react";
import ReactDOM from "react-dom";
import useHover from "./hooks/useHover";

const Tooltip = ({ children, text }) => {
  const { hovered, nodeRef } = useHover();
  const handelHover = (e) => {
    setCoords(e.target.getBoundingClientRect());
  };
  const [coords, setCoords] = useState({});

  return (
    // <div className="flex flex-col items-center justify-center gap-2">
    <div>
      {hovered && <TooltipContent coords={coords}>{children}</TooltipContent>}
      <span className="font-semibold" ref={nodeRef} onMouseOver={handelHover}>
        {text}
      </span>
    </div>
  );
};

function TooltipContent({ coords, children }) {
  if (typeof document === "undefined") return null;
  return ReactDOM.createPortal(
    <p
      className="absolute inline-block p-3 text-white  translate-x-2/4  -translate-y-full bg-black rounded-lg max-w-[200px]"
      style={{
        left: coords.left + coords.with / 2,
        top: coords.top - coords.height / 2,
      }}
    >
      {children}
    </p>,

    document.querySelector("body")
  );
}

export default Tooltip;
