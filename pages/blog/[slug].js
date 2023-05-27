import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

let client = require("contentful").createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticPaths() {
  let data = await client.getEntries({
    content_type: "article",
  });

  return {
    paths: data.items.map((item) => ({
      params: { slug: item.fields.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  let data = await client.getEntries({
    content_type: "article",
    "fields.slug": params.slug,
  });

  return {
    props: {
      article: data.items[0],
    },
  };
}

export default function Article({ article }) {
  console.log(article);
  return (
    <div className="blog-posts-page-container">
      <div className="blog-posts-page-hero-container">
      <h2 >{article.fields.title}</h2>
      </div>
      <div className="blog-posts-page-content">{documentToReactComponents(article.fields.content)}</div>
    </div>
  );
}
