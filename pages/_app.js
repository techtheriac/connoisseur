import Script from "next/script";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Script
        id="typetura-script"
        src="/packages/typetura.js"
        strategy="beforeInteractive"
      />
      {/* <Script
        id="ass-script"
        src="/packages/test.js"
        strategy="afterInteractive"
        onLoad={() => {
          new Ass();
        }}
      /> */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
