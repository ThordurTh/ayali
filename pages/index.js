import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
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

export default function Home({ articles }) {
  console.log(articles);
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <ul>
          {articles.map((article) => (
            <li key={article.sys.id}>
              <Link href={"/articles/" + article.fields.slug}>
                <a>{article.fields.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>

      <Footer />
    </div>
  );
}
