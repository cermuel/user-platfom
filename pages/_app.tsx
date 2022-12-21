import "../styles/globals.css";
import "../styles/Register.css";
import "../styles/Components.css";
import "../styles/otp.css";
import "../styles/login.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>COUCH</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
