import Head from 'next/head';
import { motion } from 'framer-motion';
import { useRouter } from "next/router";
import en from "@/locales/en";
import tr from "@/locales/tr";
function BlogPage() {
  // locale
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : tr;

  return (
    <>
      <Head>
        <title>Emre Kayık - Yazılarım</title>
      </Head>
      <div className="site-container">
        <h1 className="text-4xl font-bold">{t.blog.title}</h1>
      </div>
    </>
  );
}
export default BlogPage;
