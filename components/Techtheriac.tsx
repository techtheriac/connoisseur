import { keyframes } from "@stitches/react";
import { styled, css } from "stitches.config";

const glitcher = keyframes({
  "0%": {
    transform: "translate3d(calc(-1 * 10px),0,0) scale3d(-1,-1,1)",
    clipPath: "translate3d(calc(-1 * 10px),0,0) scale3d(-1,-1,1)",
  },
  "2%": {
    clipPath: "polygon(0 33%, 100% 33%, 100% 33%, 0 33%)",
  },
  "4%": {
    clipPath: "polygon(0 44%, 100% 44%, 100% 44%, 0 44%)",
  },
  "5%": {
    clipPath: "polygon(0 50%, 100% 50%, 100% 20%, 0 20%)",
  },
  "6%": {
    clipPath: "polygon(0 70%, 100% 70%, 100% 70%, 0 70%)",
  },
  "7%": {
    clipPath: "polygon(0 80%, 100% 80%, 100% 80%, 0 80%)",
  },
  "8%": {
    clipPath: "polygon(0 50%, 100% 50%, 100% 55%, 0 55%)",
  },
  "9%": {
    clipPath: "polygon(0 70%, 100% 70%, 100% 80%, 0 80%)",
  },
  "9.9%": {
    transform: "translate3d(calc(-1 * 10px),0,0) scale3d(-1,-1,1)",
  },
  "10%, 100%": {
    transform: "translate3d(0,0,0) scale3d(1,1,1)",
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
  },
});

const StyledTechtheriac = styled("div", {
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  gap: "2vw",
});

type SvgProps = {
  width: number | string;
  height: number | string;
};

const T = ({ width, height }: SvgProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 103 138"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M102.375 0.4375V15.8125H60.375V137.5H42.0938V15.8125H0.09375V0.4375H102.375Z"
      fill="white"
    />
  </svg>
);

const H = ({ width, height }: SvgProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 104 138"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M84.9062 0.4375H103.094V137.5H84.9062V76.4688H18.8125V137.5H0.625V0.4375H18.8125V61.0938H84.9062V0.4375Z"
      fill="white"
    />
  </svg>
);

const E = ({ width, height }: SvgProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 87 138"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.8125 122.125H86.5938V137.5H0.625V0.4375H86.0312V15.8125H18.8125V60.1562H82V75.4375H18.8125V122.125Z"
      fill="white"
    />
  </svg>
);

const C = ({ width, height }: SvgProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 133 144"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M132.031 100C130.656 105.75 128.281 111.188 124.906 116.312C121.594 121.375 117.375 125.938 112.25 130C107.188 134 101 137.188 93.6875 139.562C86.4375 141.875 78.5938 143.031 70.1562 143.031C59.1562 143.031 49.1875 141.156 40.25 137.406C31.3125 133.594 23.9688 128.438 18.2188 121.938C12.4688 115.438 8.03125 107.938 4.90625 99.4375C1.84375 90.875 0.3125 81.7188 0.3125 71.9688C0.3125 62.2188 1.84375 53.0938 4.90625 44.5938C8.03125 36.0313 12.4688 28.5 18.2188 22C23.9688 15.5 31.3125 10.375 40.25 6.625C49.1875 2.8125 59.1562 0.90625 70.1562 0.90625C78.5312 0.90625 86.1562 2 93.0312 4.1875C99.9062 6.3125 105.812 9.34375 110.75 13.2812C115.75 17.2188 119.969 21.7188 123.406 26.7812C126.844 31.7812 129.656 37.4375 131.844 43.75H113.562C109.625 34.75 104.188 27.9375 97.25 23.3125C90.375 18.625 81.3438 16.2812 70.1562 16.2812C61.8438 16.2812 54.3438 17.7812 47.6562 20.7812C41.0312 23.7812 35.625 27.875 31.4375 33.0625C27.25 38.1875 24.0312 44.0625 21.7812 50.6875C19.5938 57.3125 18.5 64.4062 18.5 71.9688C18.5 79.5312 19.5938 86.625 21.7812 93.25C23.9688 99.875 27.1562 105.781 31.3438 110.969C35.5312 116.094 40.9375 120.156 47.5625 123.156C54.25 126.156 61.7812 127.656 70.1562 127.656C81.4062 127.656 90.75 125.156 98.1875 120.156C105.688 115.094 110.875 108.375 113.75 100H132.031Z"
      fill="white"
    />
  </svg>
);

const R = ({ width, height }: SvgProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 109 138"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M90.648 18.46H108.696V60.124H90.648V18.46ZM90.648 60.124V78.172H108.696V137.5H90.648V96.22H72.6V78.172H18.264V137.5H0.0240004V0.411991H90.648V18.46H18.264V60.124H90.648Z"
      fill="white"
    />
  </svg>
);

const I = ({ width, height }: SvgProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 19 138"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0.625 0.4375H18.8125V137.5H0.625V0.4375Z" fill="white" />
  </svg>
);

const A = ({ width, height }: SvgProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 126 138"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M106.594 137.5L91.6875 97.375H34.4062L19.3125 137.5H0.46875L51.5625 0.4375H74.3438L125.438 137.5H106.594ZM62.625 16.75L39.8438 82.375H86.25L63.2812 16.75H62.625Z"
      fill="white"
    />
  </svg>
);
const Techtheriac = () => {
  const ratio: number = 1.5;
  return (
    <StyledTechtheriac>
      <T height={138 * ratio} width={103 * ratio} />
      <E height={138 * ratio} width={87 * ratio} />
      <C height={138 * ratio} width={133 * ratio} />
      <H height={138 * ratio} width={104 * ratio} />
      <T height={138 * ratio} width={103 * ratio} />
      <H height={138 * ratio} width={104 * ratio} />
      <E height={138 * ratio} width={87 * ratio} />
      <R height={138 * ratio} width={109 * ratio} />
      <I height={138 * ratio} width={19 * ratio} />
      <A height={138 * ratio} width={126 * ratio} />
      <C height={138 * ratio} width={133 * ratio} />
    </StyledTechtheriac>
  );
};

export default Techtheriac;
