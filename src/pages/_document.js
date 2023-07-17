import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="tr-TR">
      <Head>
        <meta name="google-site-verification" content="gsAzII9ttXYe5b-hlxxpoD96wedsePNDTiMI0Y_WVGU" />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-5BL3WZJY8G"></Script>
        <Script>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-5BL3WZJY8G');
          `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
