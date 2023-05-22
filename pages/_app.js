import "@styles/globals.scss";
import "@styles/header.scss";
import "@styles/footer.scss";
import "@styles/index.scss";

import Layout from "../components/Layout";

function Application({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default Application;
