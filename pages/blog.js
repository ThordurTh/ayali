import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

let client = require("contentful").createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: "article",
  });

  return {
    props: {
      articles: data.items,
    },
  };
}

export default function blog({ articles }) {
  return (
    <>
      <Head>
        <title>AYA LI - Blog</title>
        <meta name="keywords" content="Some, good, keywords"></meta>
        <meta
          name="description"
          content="AYA LI - Digitial Marketing Consultant - Blog"
        ></meta>
        <meta name="theme-color" content="#c7f3e9" />
      </Head>
      <div className="blog-page-wrapper">
        <h1>Blog</h1>
        <div className="blog-cards-container">
          {articles.map((article, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.4,
                ease: "easeOut",
              }}
              key={article.sys.id}
            >
              <Link href={"/blog/" + article.fields.slug}>
                <a href="#" className="button">
                  <div className="card">
                    <img
                      src={`https:${article.fields.image.fields.file.url}`}
                      alt={article.fields.image.fields.description}
                    />
                    <div className="card-content">
                      <h4>{article.fields.title}</h4>

                      <span>Read more -&gt;</span>
                    </div>
                  </div>
                </a>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
