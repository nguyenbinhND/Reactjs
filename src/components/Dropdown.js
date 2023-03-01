import useClickOutSide from "./hooks/useClickOutSide";

const Dropdown = () => {
  const { show, setShow, nodeRef } = useClickOutSide();
  return (
    <div className="relative w-full max-w-[300px]" ref={nodeRef}>
      <div
        className="p-5 border border-gray-200 w-full rounded-lg cursor-pointer"
        onClick={() => {
          setShow(!show);
        }}
      >
        Select
      </div>

      {show && (
        <div className="absolute border border-gray-200 rounded-lg top-full left-0 w-full  ">
          <div className="p-2 cursor-pointer">Javascript</div>
          <div className="p-2 cursor-pointer">Reactjs</div>
          <div className="p-2 cursor-pointer">Vuejs</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
