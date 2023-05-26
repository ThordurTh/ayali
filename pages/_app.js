import "@styles/globals.scss";
import "@styles/blog.scss";
import "@styles/services.scss";
import "@styles/header.scss";
import "@styles/footer.scss";
import "@styles/index.scss";
import "@styles/contact.scss";
import "@styles/packages.scss"
import "@styles/company.scss"

import Layout from "../components/Layout";

function Application({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default Application;
