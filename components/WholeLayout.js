import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import Navigation from "./Navigation";
import styles from "@/styles/Home.module.scss";
import LocomotiveScroll from "locomotive-scroll";
import { useRouter } from "next/router";

const WholeLayout = ({ children }) => {
  const scrollContainer = useRef();
  const router = useRouter();

  useEffect(() => {
    const locomotive = new LocomotiveScroll({
      el: scrollContainer.current,
      smooth: true,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });
  }, [router.pathname]);

  return (
    <r-grid
      ref={scrollContainer}
      columns={`6`}
      columns-s={`4`}
      columns-xs={`2`}
      data-scroll-container
    >
      <Navigation />
      {children}
    </r-grid>
  );
};

export default WholeLayout;
