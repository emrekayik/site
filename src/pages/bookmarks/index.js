import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Link from 'next/link';
import moment, { locale } from "moment";

import en from '@/locales/en';
import tr from '@/locales/tr';
import bookmarks from '@/locales/bookmarks';
export const metadata = {
  title: locale === 'en' ? 'Emre Kayık - Bookmarks' : 'Emre Kayık - Yer İmleri',
  description: '',
};
function Bookmarks() {
  // locale
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : tr;

  // moment

  const ListBookmarks = () => {
    return (
      <>
        {bookmarks.map((bookmark, index) => (
          <motion.div
            key={bookmark.id}
            whileHover={{
              scale: [1, 1.01],
              transition: {
                duration: 0.2,
              },
            }}
            className="flex flex-col bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-xl"
          >
            <Link href={bookmark.link} >
              <h2 className="text-2xl font-bold tracking-tight ">
                {bookmark.title}
              </h2>
              <p className="mt-2 font-normal text-gray-700 dark:text-gray-400">
                {bookmark.link}
              </p>
            </Link>
            <div className="mt-2 flex space-x-4">
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
              <div className="flex items-center space-x-2">
                <span>&#x2022;</span>
                <p className="text-gray-700 dark:text-gray-400">
                  {bookmark.date} -{' '}
                  {moment(bookmark.date, 'DD.MM.YYYY').endOf('day').fromNow()}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </>
    );
  };
  const BookmarkTagList = ({ bookmarks }) => {
    const allTags = bookmarks.reduce((tags, bookmark) => {
      bookmark.tags.forEach((tag) => {
        tags.add(tag);
      });
      return tags;
    }, new Set());

    return (
      <div className="flex items-center space-x-2 max-w-3xl overflow-x-scroll">
        {Array.from(allTags).map((tag, index) => (
          <Link
            key={index}
            href={`/bookmarks/${tag}`}
            passHref
            className="bg-gray-700 dark:bg-gray-400 p-1.5 rounded-2xl"
          >
            <p className="font-bold dark:text-gray-700 text-gray-50">{tag}</p>
          </Link>
        ))}
      </div>
    );
  };

  return (
    <div className="site-container">
      <h1 className="text-4xl font-bold">{t.bookmark.title}</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-400">{t.bookmark.desc}</p>
      <BookmarkTagList bookmarks={bookmarks} />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="mt-8 space-y-4 divide-y-[1px] divide-dashed divide-slate-400/[.24]">
        <ListBookmarks />
      </div>
    </div>
  );
}
export default Bookmarks;
