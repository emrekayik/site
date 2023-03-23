import Head from 'next/head';
import { motion } from 'framer-motion';
function BlogPage() {
  return (
    <>
      <Head>
        <title>Emre Kayık - Yazılarım</title>
      </Head>
      <div className="site-container">
        <h1 className="text-4xl font-bold">Yazılarım</h1>
      </div>
    </>
  );
}
export default BlogPage;
