import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { useRouter } from 'next/router';
import Script from 'next/script';

import { Analytics } from '@vercel/analytics/react';

import { AnimatePresence, motion } from 'framer-motion';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <ThemeProvider attribute="class">
        <AnimatePresence mode="wait" initial={false}>
          <div className="antialiased  text-gray-700">
            <Header />
            <Component {...pageProps} />
            <Analytics />
            <Footer />
          </div>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}
