import { useEffect, useState, useRef, useLayoutEffect } from "react";
import lerp from "@/helpers/lerp";
import styles from "../styles/components/Split.module.scss";

const Split = () => {
  const [lengthOf, setLengthOf] = useState([...Array(36).keys()].reverse());
  const [mouseCoords, setMouseCoords] = useState(0);
  const [splitGap, setSplitGap] = useState(0);

  const containerSplit = useRef();

  const initSplitGap = () => {
    document.documentElement.style.setProperty("--split-gap", `${splitGap}px`);
  };

  const onMouseMove = () => {
    window.addEventListener("mousemove", (e) => {
      const { clientX } = e;
      setMouseCoords(lerp(0, 10, clientX / window.innerWidth));
      setSplitGap(lerp(0, 20, clientX / window.innerWidth));
    });
  };

  useLayoutEffect(() => {
    initSplitGap();
    onMouseMove();
  }, [splitGap, mouseCoords]);

  return (
    <div ref={containerSplit} className={styles.containerSplit}>
      {lengthOf.map((image) => {
        return (
          <img
            className={styles.splitItem}
            key={image}
            src={`/split/${image + 1}.png`}
          />
        );
      })}
    </div>
  );
};

export default Split;
