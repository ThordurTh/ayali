import "@styles/globals.scss";
import "@styles/blog.scss";
import "@styles/services.scss";
import "@styles/header.scss";
import "@styles/footer.scss";
import "@styles/index.scss";
import "@styles/contact.scss";
import "@styles/packages.scss";
import "@styles/company.scss";
import "@styles/cases.scss";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import Layout from "../components/Layout";

function Application({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      // Scroll to the top of the page on route change
      window.scrollTo(0, 0);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <Layout>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={router.route} // Ensure key changes on route change to trigger animation
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Component {...pageProps} key={router.asPath} />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default Application;
