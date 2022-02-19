import React, { useEffect } from "react";
import Link from "next/link";
import styles from "@/styles/components/Navigation.module.scss";
import  NavDang  from "@/helpers/Animations";

const Navigation = () => {
  useEffect(() => {
    new NavDang({
      el: document.querySelector("[class*='navItems']"),
      blur: false,
    });    
  });

  return (
    <nav className={styles.containerNav}>
      <ul className={styles.navItems}>
        <li>
          <a href="#resume">Work</a>
        </li>

        <li>
          <Link href="/musings">
            <a>Musings</a>
          </Link>
        </li>

        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
