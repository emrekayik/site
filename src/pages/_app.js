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
            <Script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-2NBEJLXNHX"
            />
            <Script id="google-analytics">
              {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());

            gtag('config', 'G-2NBEJLXNHX');
            `}
            </Script>
            <Header />
            <motion.div
              key={router.route}
              initial="initialState"
              animate="animateState"
              exit="exitState"
              transition={{
                duration: 0.5,
              }}
              variants={{
                initialState: {
                  opacity: 0,
                  y: 100,
                },
                animateState: {
                  opacity: 1,
                  y: 0,
                },
                exitState: {
                  opacity: 0,
                  y: -100,
                },
              }}
            >
              <Component {...pageProps} />
              <Analytics />
            </motion.div>
            <Footer />
          </div>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}
