import { useRouter } from "next/router";
import Link from "next/link";
import en from "@/locales/en";
import tr from "@/locales/tr";

function ContactMe() {
  // locale
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : tr;

  return (
    <div className="site-container">
      <h1 className="text-4xl font-bold">{t.contact.title}</h1>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="mt-8 space-y-4 divide-y-[1px] divide-dashed divide-slate-400/[.24]">
        <div className="flex flex-col bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <Link href={`mailto:${t.contact.email}`}>
            {t.contact.email}
          </Link>
          </h2>
        </div>
      </div>
    </div>
)
}

export default ContactMe;
