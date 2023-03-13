import { useState } from "react";
import useClickOutSide from "./hooks/useClickOutSide";
import ReactDOM from "react-dom";

const DropdownPortal = () => {
  const { show, setShow, nodeRef } = useClickOutSide();
  const [coords, setCoords] = useState({});
  const handelClick = () => {
    setCoords(nodeRef.current.getBoundingClientRect());
    setShow(!show);
  };
  return (
    <div className="relative w-full max-w-[300px]" ref={nodeRef}>
      <div
        className="w-full p-5 border border-gray-200 rounded-lg cursor-pointer"
        onClick={handelClick}
      >
        Select
      </div>

      {show && <DropdownList coords={coords}></DropdownList>}
    </div>
  );
};

function DropdownList({ coords }) {
  if (typeof document === "undefined") return null;
  return ReactDOM.createPortal(
    <div
      className="absolute left-0 w-full border border-gray-200 rounded-lg top-full "
      style={{
        left: coords.left,
        top: coords.top + coords.height + window.scrollY,
        width: coords.width,
      }}
    >
      <div className="p-2 cursor-pointer">Javascript</div>
      <div className="p-2 cursor-pointer">Reactjs</div>
      <div className="p-2 cursor-pointer">Vuejs</div>
    </div>,
    document.querySelector("body")
  );
}

export default DropdownPortal;
