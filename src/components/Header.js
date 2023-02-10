import React, { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const handelFixedHeader = () => {
      const header = document.getElementById("header");
      if (window.scrollY > 100) header.classList.add("fixer");
      else header.classList.remove("fixer");
    };
    window.addEventListener("scroll", handelFixedHeader);
  }, []);
  return <div className="p-5 bg-black w-full" id="header"></div>;
};

export default Header;
