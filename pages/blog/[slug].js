import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";
import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticPaths() {
  let data;
  try {
    data = await client.getEntries({
      content_type: "article",
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      paths: [],
      fallback: false,
    };
  }

  const paths = data.items.map((item) => ({
    params: { slug: item.fields.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  let data;
  try {
    data = await client.getEntries({
      content_type: "article",
      "fields.slug": params.slug,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      notFound: true,
    };
  }

  return {
    props: {
      article: data.items[0],
    },
  };
}

export default function Article({ article }) {
  function formatDate(timestamp) {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `Aya Li, ${day}/${month}/${year}`;
  }

  const formattedDate = formatDate(article.sys.createdAt);

  return (
    <>
      <Head>
        <title>AYA LI - Blog - {article.fields.title}</title>
        <meta name="keywords" content="Some, good, keywords"></meta>
        <meta
          name="description"
          content={`AYA LI - Digitial Marketing Consultant - Blog - ${article.fields.title}`}
        ></meta>
        <meta name="theme-color" content="#c7f3e9" />
      </Head>
      <div className="blog-posts-page-container">
        <Link href="/blog">
          <a className="back-arrow" aria-label="Arrow back to blog page">
            <svg
              width="32"
              height="32"
              viewBox="0 0 74 74"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M69 37H5"
                stroke="white"
                strokeWidth="9.93054"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M37 69L5 37L37 5"
                stroke="white"
                strokeWidth="9.93054"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </Link>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="blog-posts-page-hero-container"
        >
          <div className="blog-post-img-container">
            <Image
              src={`https:${article.fields.image.fields.file.url}`}
              alt={article.fields.image.fields.description}
              layout="fill"
            />
          </div>
          <div className="blog-heading">
            <h1>{article.fields.title}</h1>
            <span className="italic">{formattedDate}</span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: "10%" }}
          animate={{ opacity: 1, y: "0" }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <div className="blog-posts-page-content">
            {documentToReactComponents(article.fields.content)}
          </div>
        </motion.div>
      </div>
    </>
  );
}
