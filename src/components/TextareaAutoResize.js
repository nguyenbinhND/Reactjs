import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
const TextareaAutoResize = () => {
  const [text, setText] = useState("demo");
  const textareaRef = useRef(null);
  const [textareaHeight, setTextareaHeight] = useState("auto");
  const handelChange = (event) => {
    setText(event.target.value);
    setTextareaHeight("auto");
  };

  //   useLayoutEffect(() => {
  //     setTextareaHeight(`${textareaRef.current.scrollHeight}px`);
  //   }, [text]);
  useEffect(() => {
    setTextareaHeight(`${textareaRef.current.scrollHeight}px`);
  }, [text]);
  return (
    <div className="p-5">
      <textarea
        className="w-full max-w-[400px] transition-all overflow-hidden p-5 rounded-lg border
       border-gray-400 resize-none focus:border-blue-400"
        placeholder="please enter your contents...."
        value={text}
        ref={textareaRef}
        style={{ height: textareaHeight }}
        onChange={handelChange}
      ></textarea>
    </div>
  );
};

export default TextareaAutoResize;
