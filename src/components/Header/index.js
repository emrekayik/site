import Link from 'next/link';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import en from '@/locales/en';
import tr from '@/locales/tr';

import DarkModeTogle from '@/components/Header/darkModeTogle';

function Header() {
  // locale
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  const t = locale === 'en' ? en : tr;

  const changeLang = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale }).then((r) => {});
  };

  const links = [
    {
      name: t.nav.about,
      href: '/',
    },
    {
      name: t.nav.blog,
      href: '/blog',
    },
    {
      name: t.nav.bookmarks,
      href: '/bookmarks',
    },
  ];

  return (
    <header className="site-container">
      <nav className="flex justify-between items-center">
        <div className="space-x-4 flex items-center text-sm sm:text-lg">
          {links.map((link, index) => (
            <Link key={index} href={link.href}>
              <motion.h1
                whileHover={{
                  scale: [1, 1.2],
                  transition: {
                    duration: 0.2,
                  },
                }}
                className={`${
                  router.pathname === link.href
                    ? 'font-bold text-gray-900 dark:text-gray-100'
                    : 'font-normal text-gray-700 dark:text-gray-300'
                }`}
              >
                {link.name}
              </motion.h1>
            </Link>
          ))}
        </div>
        <div className="flex space-x-4">
          <motion.select
            whileHover={{
              scale: [1, 1.1],
              transition: {
                duration: 0.2,
              },
            }}
            name={locale}
            id={locale}
            value={locale}
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
          </motion.select>
          <DarkModeTogle />
        </div>
      </nav>
    </header>
  );
}

export default Header;
