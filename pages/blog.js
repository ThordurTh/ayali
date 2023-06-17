import Head from "next/head";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import SignUpBox from "@components/SignUpBox";
import { useEffect } from "react";
import en from "../locales/en";
import da from "../locales/da";
import { useRouter } from "next/router";
import { useState } from "react";

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

export default function blog({ articles, setLang }) {
  const [isVisible, setIsVisible] = useState(false);

  const router = useRouter();
  const { locale } = router;
  useEffect(() => {
    setLang(en);
    const locale = {
      locale: "en",
    };
    router.push(router.pathname, router.asPath, locale);
  }, []);

  const handleClick = () => {
    setIsVisible(true);

    // Set a timeout to hide the div after 5 seconds
    setTimeout(() => {
      setIsVisible(false);
    }, 3500);
  };

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
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            className="notification"
            transition={{
              duration: 1.25,
              ease: "easeOut",
            }}
          >
            Thank you for subscribing to the newsletter!
          </motion.div>
        )}
      </AnimatePresence>

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
        <div className="blog-signup-wrapper">
          <SignUpBox setIsVisible={setIsVisible} />
        </div>
      </div>
    </>
  );
}
