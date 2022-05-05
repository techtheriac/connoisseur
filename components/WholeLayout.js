import React, { useState, useRef } from "react";
import Navigation from "./Navigation";
import LocomotiveScroll from "locomotive-scroll";
import { useRouter } from "next/router";
import { canUseDOM } from "@/helpers/DOM";

function canUseDOM() {
  return !!(
    typeof window !== "undefined" &&
    window.document &&
    window.document.createElement
  );
}

const useIsomorphicLayoutEffect = canUseDOM()
  ? React.useLayoutEffect
  : React.useEffect;

const WholeLayout = ({ children }) => {
  const scrollContainer = useRef();
  const router = useRouter();

  useIsomorphicLayoutEffect(() => {
    const locomotive = new LocomotiveScroll({
      el: scrollContainer.current,
      smooth: true,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });
  }, [router.pathname]);

  return (
    <div ref={scrollContainer}>
      <Navigation />
      {children}
    </div>
  );
};

export default WholeLayout;
