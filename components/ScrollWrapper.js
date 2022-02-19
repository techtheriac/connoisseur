import React, { useEffect, useRef } from "react";
import ASScroll from "@ashthornton/asscroll";

const ScrollWrapper = ({ children }) => {
  const scrollContainer = useRef()

  useEffect(() => {
    const elementsToScroll = document.querySelector(".scroll-enabled")
    new ASScroll({containerElement: scrollContainer.current, scrollElements: elementsToScroll})
  });

  return <div ref={scrollContainer}>{children}</div>;
};

export default ScrollWrapper;
