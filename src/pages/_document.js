import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="tr-TR">
      <Head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-2NBEJLXNHX"></Script>
        <Script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-2NBEJLXNHX');
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
