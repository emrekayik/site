import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import en from '@/locales/en';
import tr from '@/locales/tr';

export default function Home() {
  const router = useRouter();
  const { locale } = router;

  const t = locale === 'en' ? en : tr;

  return (
    <>
      <Head>
        <title>Emre Kayık</title>
        <meta
          name="description"
          content="Merhaba Ben Emre, burası benim kişisel web adresim."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="site-container">
        <h1 className="text-4xl font-bold">Emre Kayık</h1>
        <p className="text-lg font-mono mt-2">{t.aboutme.job}</p>
        <p className="mt-2">{t.aboutme.about}</p>
      </main>
    </>
  );
}
