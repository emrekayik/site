import { useRouter } from "next/router";
import en from "@/locales/en";
import tr from "@/locales/tr";

function ContactMe() {
  // locale
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  const t = locale === 'en' ? en : tr;

  return (
    <div className="site-container">
      <h1 className="text-4xl font-bold">{t.contact.title}</h1>

    </div>
)
}

export default ContactMe;
