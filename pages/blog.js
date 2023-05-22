import Head from "next/head";
import Link from "next/link";

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
  console.log(articles);
  return (
    <>
      <Head>
        <title>AYA LI - Blog</title>
        <meta name="keywords" content="Some, good, keywords"></meta>
        <meta
          name="description"
          content="AYA LI - Digitial Marketing Consultant - Blog"
        ></meta>
      </Head>

      <ul className='blog-cards-container'>
        {articles.map((article) => (
          <li key={article.sys.id}>
            <a>{article.fields.title}</a>
            <Link href={"/blog/" + article.fields.slug}>Read More
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
