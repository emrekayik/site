import Link from 'next/link';
import React, { useEffect } from 'react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import en from '@/locales/en';
import tr from '@/locales/tr';

function Header() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  // locale
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  const t = locale === 'en' ? en : tr;

  const changeLang = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  useEffect(() => {
    const keyDownHandler = (e) => {
      console.log(e);
      if (e.key === 'd') {
        setTheme('light');
      } else if (e.key === 'l') {
        setTheme('dark');
      }
    };
    document.addEventListener('keydown', keyDownHandler);
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);
  return (
    <header className="site-container">
      <nav className="flex justify-between">
        <div className="space-x-4">
          <Link href="/">{t.nav.about}</Link>
          <Link href="/blog">{t.nav.blog}</Link>
          <Link href="/contact-me">{t.nav.contact}</Link>
        </div>
        <div className="flex space-x-4 items-center">
          <select
            name={locale}
            id={locale}
            defaultValue={defaultLocale}
            onChange={changeLang}
            className="bg-transparent"
          >
            {locales.map((locale) => (
              <option key={locale} value={locale}>
                {locale}
              </option>
            ))}
          </select>
          <motion.div
            className={`theme-toggle ${
              theme === 'dark' ? 'dark' : 'light'
            } cursor-pointer`}
            onClick={() => {
              theme === 'dark' ? setTheme('light') : setTheme('dark');
            }}
            whileHover={{
              scale: [1, 1.4, 1.2],
              rotate: [0, 10, -10, 0],
              transition: {
                duration: 0.2,
              },
            }}
          >
            {theme === 'dark' ? (
              <i className="gg-sun transition-all duration-300 ease-in-out"></i>
            ) : (
              <i className="gg-moon transition-all duration-300 ease-in-out"></i>
            )}
          </motion.div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
