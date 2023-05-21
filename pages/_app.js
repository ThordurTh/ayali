import "@styles/globals.scss";
import "@styles/blog.scss"
import "@styles/services.scss"
import Layout from "../components/Layout";

function Application({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default Application;
