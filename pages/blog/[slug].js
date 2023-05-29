import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import Link from "next/link";

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
  return (
    <div className="blog-posts-page-container">
      <Link href="/blog" >
        <a className="back-arrow">
        <svg width="32" height="32" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M69 37H5" stroke="white" strokeWidth="9.93054" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M37 69L5 37L37 5" stroke="white" strokeWidth="9.93054" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</a>
        </Link>
      <div className="blog-posts-page-hero-container">
        <div className="blog-post-img-container">
        <Image src={`https:${article.fields.image.fields.file.url}`} alt={article.fields.image.fields.description} layout="fill" />
        </div>
      <h1>{article.fields.title}</h1>
      </div>
      <div className="blog-posts-page-content">{documentToReactComponents(article.fields.content)}</div>
    </div>
  );
}
