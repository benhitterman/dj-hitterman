import Head from 'next/head';
import '../styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-FCNMEHS748"
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-FCNMEHS748', { send_page_view: true });
        `}
      </Script>

      {/* Head for favicon and title */}
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>DJ Hitterman</title>
      </Head>

      {/* App component */}
      <Component {...pageProps} />

      {/* Vercel Analytics */}
      <Analytics />
    </>
  );
}
