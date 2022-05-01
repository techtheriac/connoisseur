import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import Navigation from "./Navigation";
import styles from "@/styles/Home.module.scss";
import SmoothScroll from "@/helpers/smoothScroll";
import { Candy } from "@/helpers/Candy";
import Canvas from "@/helpers/canvas";
import Sizing from "@/helpers/sizing";
import LocomotiveScroll from "locomotive-scroll";

const WholeLayout = ({ children }) => {
  const scrollContainer = useRef();
  useLayoutEffect(() => {
    const locomotive = new LocomotiveScroll({
      el: scrollContainer.current,
      smooth: true,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });
  });

  return (
    <r-grid
      ref={scrollContainer}
      columns={`8`}
      columns-s={`3`}
      data-scroll-container
    >
      <Navigation />
      {children}
    </r-grid>
  );
};

export default WholeLayout;
