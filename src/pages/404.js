import { useRouter } from "next/router";
import en from "@/locales/en";
import tr from "@/locales/tr";

export default function Custom404() {
  // locale
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  const t = locale === 'en' ? en : tr;

  return (
    <div className="site-container">
      <h1 className="text-4xl font-bold">404 - {t.error}</h1>
    </div>
  )
}