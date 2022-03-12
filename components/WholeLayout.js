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

    const scroll = new SmoothScroll({ scrollbar: false });
    scroll.reset();

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