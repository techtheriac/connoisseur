import Head from "next/head";
import React, { useEffect } from "react";
import { NavDang, Fader } from "../../helpers/Animations";
import styles from "../../styles/ThreeWrapper.module.scss";
import { Candy } from "@/helpers/Candy";
const ThreeWrapper = ({ children }) => {
  useEffect(() => {
    new NavDang({
      el: document.querySelector("[class*='navItems']"),
      blur: true,
    });

    new Candy();
  });

  return (
    <div id="ThreeWrapper" className={styles.containerThreeWrapper}>
      <Head>
        <title> Portfolio | Franklin Jezreel</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Portfolio of Franklin Jezreel" />
      </Head>

      <canvas className="orb-canvas"></canvas>
      {children}
    </div>
  );
};

export default ThreeWrapper;
