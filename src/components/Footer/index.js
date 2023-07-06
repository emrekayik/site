import en from '@/locales/en';
import tr from '@/locales/tr';
import { useRouter } from 'next/router';
import Link from 'next/link';

function Footer() {
  // locale
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  const t = locale === 'en' ? en : tr;

  return (
    <footer className="site-container justify-center">
      <div className="flex items-center">
        <div className="flex text-lg sm:text-sm">
          {t.footer}
          <Link
            href="https://github.com/emrekayik/site"
            className='text-blue-500 hover:text-blue-600 underline ml-2'
          >
            {t.footerGithub}
          </Link>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
