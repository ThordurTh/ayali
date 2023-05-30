import "@styles/globals.scss";
import "@styles/blog.scss";
import "@styles/services.scss";
import "@styles/header.scss";
import "@styles/footer.scss";
import "@styles/index.scss";
import "@styles/contact.scss";
import "@styles/packages.scss"
import "@styles/company.scss"
import "@styles/cases.scss"
import {motion} from "framer-motion"

import Layout from "../components/Layout";

function Application({ Component, pageProps }) {
  return (
    <Layout>
      <motion.div initial="hidden" animate="visible" variants={{
      hidden: {
        scale: .8,
        opacity: 0,
      },
      visible: {
        scale: 1,
        opacity: 1,
        transition: {
          delay: .4
        }
      }
    }}>
      <Component {...pageProps} />
      </motion.div>
    </Layout>
  );
}

export default Application;
