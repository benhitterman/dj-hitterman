import Head from 'next/head';
import '../styles/globals.css';
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>DJ Hitterman</title>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-FCNMEHS748"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XXXXXXX');
      `,
          }}
        />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
