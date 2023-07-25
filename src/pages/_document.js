import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="tr-TR">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
