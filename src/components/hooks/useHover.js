import { useEffect, useRef, useState } from "react";

export default function useHover() {
  const [hovered, setHovered] = useState(false);
  const nodeRef = useRef(null);
  useEffect(() => {
    const dom = nodeRef.current;
    function handelMouseOver() {
      setHovered(true);
    }
    function handelMouseOut() {
      setHovered(false);
    }
    if (dom) {
      dom.addEventListener("mouseover", handelMouseOver);
      dom.addEventListener("mouseout", handelMouseOut);
    }
    return () => {
      dom.removeEventListener("mouseover", handelMouseOver);
      dom.removeEventListener("mouseout", handelMouseOut);
    };
  }, []);
  return {
    hovered,
    nodeRef,
  };
}
