import { useRouter } from 'next/router';
import Link from 'next/link';
import en from '@/locales/en';
import tr from '@/locales/tr';

export default function Custom404() {
  // locale
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  const t = locale === 'en' ? en : tr;

  return (
    <div className="site-container">
      <h1 className="text-4xl font-bold">404 - {t.error}</h1>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <Link href="/">Ana Sayfa</Link>
    </div>
  );
}
