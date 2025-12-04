import Head from 'next/head';
import '../styles/globals.css';
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>DJ Hitterman</title>
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
