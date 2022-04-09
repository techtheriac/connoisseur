import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import styles from "@/styles/Home.module.scss";
import SmoothScroll from "@/helpers/smoothScroll";
import { Candy } from "@/helpers/Candy";

const WholeLayout = ({ children }) => {
  const candyConfig = {
    iterator: 2,
    palette: "dt09",
  };

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    const scrollable = document.getElementById("scroll-child");
    const scrollContainer = document.getElementById("scroll-container");

    const scroll = new SmoothScroll({ scrollable, scrollContainer });
  });

  return (
    <div id="scroll-container">
      <main id="scroll-child" className={styles.containerMain}>
        <Navigation />
        {children}
      </main>
    </div>
  );
};

export default WholeLayout;
