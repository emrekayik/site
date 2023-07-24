import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Link from 'next/link';

import bookmarks from '@/locales/bookmarks';
import en from '@/locales/en';
import tr from '@/locales/tr';

export default function TagBookmarks() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : tr;
  const { tag } = router.query;

  // Filtreleme işlemi için bir fonksiyon
  const filterBookmarksByTag = (tag) => {
    return bookmarks.filter((bookmark) => bookmark.tags.includes(tag));
  };

  // Filtreleme işlemini yapın
  const filteredBookmarks = filterBookmarksByTag(tag);

  const ListBookmarks = () => {
    return (
      <>
        {filteredBookmarks.map((bookmark) => (
          <motion.div
            whileHover={{
              scale: [1, 1.01],
              transition: {
                duration: 0.2,
              },
            }}
            key={bookmark.id}
            className="flex flex-col bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-xl"
          >
            <Link href={bookmark.link}>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {bookmark.title[locale]}
              </h2>
              <p className="mt-2 font-normal text-gray-700 dark:text-gray-400">
                {bookmark.content[locale]}
              </p>
              <p className="mt-2 font-normal text-gray-700 dark:text-gray-400">
                {bookmark.link}
              </p>
              <div className="flex items-center space-x-2">
                {bookmark.tags.map((tag) => (
                  <Link
                    href={`/bookmarks/${tag}`}
                    className="bg-gray-700 dark:bg-gray-400 p-1.5 rounded-2xl"
                  >
                    <p className="font-bold dark:text-gray-700 text-gray-50">
                      {tag}
                    </p>
                  </Link>
                ))}
              </div>
            </Link>
          </motion.div>
        ))}
      </>
    );
  };

  return (
    <div className="site-container">
      <h1 className="text-4xl font-bold">
        {t.bookmark.title} - {tag}
      </h1>
      <p className="mt-2 text-gray-600 dark:text-gray-400">{t.bookmark.desc}</p>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="mt-8 space-y-4 divide-y-[1px] divide-dashed divide-slate-400/[.24]">
        <ListBookmarks />
      </div>
    </div>
  );
}
