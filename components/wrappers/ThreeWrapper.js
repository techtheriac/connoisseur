import * as THREE from "three";
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

  return <div>{children}</div>;
};

export default ThreeWrapper;
