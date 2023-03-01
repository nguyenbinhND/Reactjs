import { useEffect, useRef } from "react";

export default function useLinkNewTab() {
  const contentRef = useRef(null);
  useEffect(() => {
    if (contentRef) {
      const links = contentRef.current.querySelectorAll("a");
      links.forEach((item) => {
        links.length > 0 && item.setAttribute("target", "blank");
      });
    }
  }, []);
  return { contentRef };
}
