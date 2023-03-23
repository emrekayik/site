import Link from 'next/link';
import React, { useEffect } from 'react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import en from '@/locales/en';
import tr from '@/locales/tr';

function Header() {
  const { systemTheme, theme, setTheme } = useTheme();
  useEffect(() => {
    if (theme === 'system') {
      setTheme('light');
    }
  }, [systemTheme]);
  const currentTheme = theme === 'system' ? systemTheme : theme;

  // locale
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  const t = locale === 'en' ? en : tr;

  const changeLang = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <header className="site-container">
      <nav className="flex justify-between items-center">
        <div className="space-x-4">
          <Link href="/">{t.nav.about}</Link>
          <Link href="/blog">{t.nav.blog}</Link>
          <Link href="/contact-me">{t.nav.contact}</Link>
        </div>
        <div className="flex space-x-4">
          <select
            name={locale}
            id={locale}
            defaultValue={defaultLocale}
            onChange={changeLang}
            className="bg-transparent dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold py-2 px-2 border border-gray-300 dark:border-gray-700 rounded shadow"
          >
            {locales.map((locale) => (
              <option
                key={locale}
                value={locale}
                className="bg-transparent dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold py-2 px-2 border border-gray-300 dark:border-gray-700 shadow"
              >
                {locale}
              </option>
            ))}
          </select>
          <motion.div
            className={`${
              theme === 'dark' ? 'dark' : 'light'
            } cursor-pointer flex items-center justify-center`}
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
            {currentTheme === 'dark' ? (
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
