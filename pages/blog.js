import Head from "next/head";
import Link from "next/link";

let client = require("contentful").createClient({
  space: "7vhvg9tgo4hz",
  accessToken: "7cyStGbHO_DXJ1jrFW7ttnBLDYIAb9Y35UxZsWgZTl8",
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

      <ul>
        {articles.map((article) => (
          <li key={article.sys.id}>
            <Link href={"/blog/" + article.fields.slug}>
              <a>{article.fields.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
