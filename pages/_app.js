import Script from "next/script";
import "../styles/globals.scss";
import Layout from "@/components/Layout";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
