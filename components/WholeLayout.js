import React, { useState, useEffect } from "react";
import ThreeWrapper from "@/components/ThreeWrapper";
import Navigation from "./Navigation";
import styles from "@/styles/Home.module.scss";
//import ASScroll from "@ashthornton/asscroll";
import { SmoothScroll } from "@emotionagency/smoothscroll";

const WholeLayout = ({ children }) => {
  const candyConfig = {
    iterator: 2,
    palette: "dt09",
  };

  useEffect(() => {
    // const asscroll = new ASScroll({ ease: 0.075, disableRaf: false });
    // window.addEventListener("load", () => {
    //   asscroll.enable({ reset: 0 });
    // });
    // asscroll.on("scroll", (scrollPos) => console.log(scrollPos));
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    const scroll = new SmoothScroll();
    //   {
    //   scrollbar: false,
    //   touchMultiplier: 40,
    //   friction: 0.4,
    //   stepSize: 1,
    // }
    // scroll.reset();

    window.addEventListener("resize", () => scroll.reset());
  });

  return (
    <div id="scroll-container">
      <ThreeWrapper candyConfig={candyConfig}>
        <main className={styles.containerMain}>
          {/* <Navigation /> */}
          {children}
        </main>
      </ThreeWrapper>
    </div>
  );
};

export default WholeLayout;
