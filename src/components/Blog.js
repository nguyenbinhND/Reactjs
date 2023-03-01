import React, { useEffect, useRef } from "react";
import useHover from "./hooks/useHover";
import useLinkNewTab from "./hooks/useLinkNewTab";

const Blog = () => {
  const { contentRef } = useLinkNewTab();
  const { hovered, nodeRef } = useHover();
  return (
    <div ref={contentRef}>
      <p className="mb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex officiis
        accusantium quasi facere laboriosam cupiditate, dolore nobis numquam
        asperiores, velit, optio laborum minima! Id expedita aliquid voluptas
        illum impedit repudiandae?
        <a
          ref={nodeRef}
          href="https://google.com"
          className={`underline ${hovered ? "text-green-400" : ""}`}
        >
          Google
        </a>
      </p>
      <p className="mb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex officiis
        accusantium quasi facere laboriosam cupiditate, dolore nobis numquam
        asperiores, velit, optio laborum minima! Id expedita aliquid voluptas
        illum impedit repudiandae?
        <a href="https://google.com" className="underline">
          Google
        </a>
      </p>

      <p className="mb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex officiis
        accusantium quasi facere laboriosam cupiditate, dolore nobis numquam
        asperiores, velit, optio laborum minima! Id expedita aliquid voluptas
        illum impedit repudiandae?
        <a href="https://google.com" className="underline">
          Google
        </a>
      </p>
    </div>
  );
};

export default Blog;
