import Script from 'next/script';
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Script id="typetura-script" src="/packages/typetura.js" strategy="beforeInteractive" />
    <Component {...pageProps} />
    </>
  );
}

export default MyApp;
