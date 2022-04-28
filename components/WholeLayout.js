import React, { useState, useEffect, useLayoutEffect } from "react";
import Navigation from "./Navigation";
import styles from "@/styles/Home.module.scss";
import SmoothScroll from "@/helpers/smoothScroll";
import { Candy } from "@/helpers/Candy";
import Canvas from "@/helpers/canvas";
import Sizing from "@/helpers/sizing";
import LocomotiveScroll from "locomotive-scroll";

const WholeLayout = ({ children }) => {
  const candyConfig = {
    iterator: 2,
    palette: "dt09",
  };

  useLayoutEffect(() => {
    const locomotive = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });
    locomotive.on("scroll", (e) => {
      console.log(e);
    });
  });

  return (
    <div>
      <main data-scroll-container className={styles.containerMain}>
        <Navigation />
        {children}
      </main>
    </div>
  );
};

export default WholeLayout;
