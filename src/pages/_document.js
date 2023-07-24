import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="tr-TR">
      <Head></Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
