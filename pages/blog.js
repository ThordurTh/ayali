import Head from "next/head";
import Link from "next/link";
import Image from "next/image"
import portrait from "../assets/portrait.png";

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
      <ul className="blog-cards-container">
        {articles.map((article) => (
          <li key={article.sys.id}>
            <Link href={"/blog/" + article.fields.slug}>
            <a className="blog-link">
              <h5>{article.fields.title}</h5>
              <Image src={`https:${article.fields.image.fields.file.url}`} alt={article.fields.image.fields.description}  width={1920} height={1080}/>Read More -&gt;
            </a>
            </Link>
          </li>
        ))}
      </ul>
      </div>
    </>
  );
}
