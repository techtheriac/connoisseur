import React, { useEffect } from "react";
import Link from "next/link";
import styles from "@/styles/components/Navigation.module.scss";
import NavDang from "@/helpers/Animations";

const Navigation = () => {
  useEffect(() => {
    // new NavDang({
    //   el: document.querySelector("[class*='navItems']"),
    //   blur: false,
    // });
  });

  return (
    <r-cell span={`row`} data-scroll-section>
      <nav className={`flex-h space-between`}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/musings">
          <a>Musings</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </nav>
    </r-cell>
  );
};

export default Navigation;
