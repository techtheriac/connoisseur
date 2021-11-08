import Head from "next/head";
import React, { useEffect } from "react";
import toggleBackground from "../../helpers/toggleBackground";
import { NavDang, Fader } from "../../helpers/Animations";

const ThreeWrapper = ({ children }) => {
  useEffect(() => {
    toggleBackground("var(--durag-blue)");
    new NavDang({
      el: document.querySelector("[class*='navItems']"),
      blur: true,
    });
  });

  return (
    <div>
      <Head>
        <title> Portfolio | Franklin Jezreel</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Portfolio of Franklin Jezreel" />
      </Head>
      {children}
    </div>
  );
};

export default ThreeWrapper;
