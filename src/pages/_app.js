import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { AnimatePresence, motion } from 'framer-motion';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const pageAnimation = {
    initial: { opacity: 0, y: '100%' },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: '100%' },
  };
  return (
    <ThemeProvider attribute="class">
      <AnimatePresence mode="wait" initial={false}>
        <div className="antialiased  text-gray-700">
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
              },
              animateState: {
                opacity: 1,
              },
              exitState: {
                opacity: 0,
              },
            }}
            className="mb-20"
          >
            <Component {...pageProps} />
          </motion.div>
          <Footer />
        </div>
      </AnimatePresence>
    </ThemeProvider>
  );
}
