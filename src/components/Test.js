import React, { useEffect, useRef, useState } from "react";
const Test = () => {
  const [text, setText] = useState("");
  const [heightTextarea, setHeightTextarea] = useState("auto");
  const ChangeScroll = useRef(null);
  const handelChange = (event) => {
    setHeightTextarea("auto");
    setText(event.target.value);
  };
  useEffect(() => {
    setHeightTextarea(`${ChangeScroll.current.scrollHeight}px`);
  }, [text]);
  return (
    <div className="p-5">
      <textarea
        className="w-full max-w-[400px] transition-all overflow-hidden p-5 rounded-lg border
       border-gray-400 resize-none focus:border-blue-400"
        placeholder="please enter your contents...."
        onChange={handelChange}
        style={{
          height: heightTextarea,
        }}
        ref={ChangeScroll}
      ></textarea>
    </div>
  );
};

export default Test;
