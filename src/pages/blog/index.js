import Head from 'next/head';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Link from 'next/link';

import en from '@/locales/en';
import tr from '@/locales/tr';
import posts from '@/locales/posts';

function BlogPage() {
  // locale
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : tr;

  const ListPosts = () => {
    return (
      <>
        {posts.map((post) => (
          <motion.div
            whileHover={{
              scale: [1, 1.01],
              transition: {
                duration: 0.2,
              },
            }}
            key={post.id}
            className="flex flex-col bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-xl"
          >
            <Link href={post.link}>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {post.title[locale]}
              </h2>
              <p className="mt-2 font-normal text-gray-700 dark:text-gray-400">
                {post.content[locale]}
              </p>
            </Link>
          </motion.div>
        ))}
      </>
    );
  };
  return (
    <>
      <Head>
        <title>Emre Kayık - Yazılarım</title>
      </Head>
      <div className="site-container ">
        <h1 className="text-4xl font-bold">{t.blog.title}</h1>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="mt-8 space-y-4 divide-y-[1px] divide-dashed divide-slate-400/[.24]">
          <ListPosts />
        </div>
      </div>
    </>
  );
}
export default BlogPage;
