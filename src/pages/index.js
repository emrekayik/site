import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import en from '@/locales/en';
import tr from '@/locales/tr';

import { MdiGithub, MdiLinkedin, MdiInstagram, MdiMedium } from '@/icons';
import Link from 'next/link';

export const metadata = {
  title: 'Emre Kayık - kişisel web adresim',
  description: 'Merhaba Ben Emre, burası benim kişisel web adresim.',
}
export default function Home() {
  const router = useRouter();
  const { locale } = router;

  const t = locale === 'en' ? en : tr;

  const social = [
    {
      name: 'Github',
      href: 'https://github.com/emrekayik',
      icon: <MdiGithub />,
    },
    {
      name: 'Linkedin',
      href: 'https://www.linkedin.com/in/emrekayik/',
      icon: <MdiLinkedin />,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/emrekayik/',
      icon: <MdiInstagram />,
    },
    {
      name: 'Medium',
      href: 'https://medium.com/@emrekayik',
      icon: <MdiMedium />,
    },
  ];

  const SocialLink = ({ name, href, icon }) => {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={name}
        className="text-2xl hover:text-blue-500 transition-colors duration-200"
      >
        {icon}
      </Link>
    );
  };

  return (
    <>
      <Head>
        <title>Emre Kayık - kişisel web adresim</title>
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

        <div className="flex space-x-4 mt-6">
          {social.map((social, index) => (
            <SocialLink key={index} {...social} />
          ))}
        </div>
      </main>
    </>
  );
}
