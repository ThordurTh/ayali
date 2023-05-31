import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import portrait from "../assets/portrait.webp";
import FooterNav from "@components/FooterNav";
import { motion } from "framer-motion";

export default function index({setActiveLink}) {
  const currentPage = 1;
  const activeLink = (path) => {
    setActiveLink(path);
  };
  return (
    <>
      <div className="index_wrapper">
        <Head>
          <title>AYA LI</title>
          <meta name="keywords" content="Some, good, keywords"></meta>
          <meta
            name="description"
            content="AYA LI - Digitial Marketing Consultant"
          ></meta>
          <meta name="theme-color" content="#c7f3e9" />
        </Head>

        <div className="hero_image">
          <Image priority src={portrait} alt="portrait of AYA LI" />
        </div>
        <div className="hero">
          <h1>AYA LI</h1>
          <motion.div
            initial={{ opacity: 0, y: "50%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
          >
            <p className="job_title">
              DIGITAL MARKETING <br />
              CONSULTANT
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5, ease: "easeOut" }}
          >
            <p>Start your journey of exponential growth here!</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: "50%"}}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2, ease: "easeOut" }}
            className="index_ctas"
          >
            <Link href="/contact">
              <a onClick={() => activeLink()} className="cta">Get started</a>
            </Link>
            <Link href="/services">
              <a onClick={() => activeLink("/services")} className="cta2">Learn more</a>
            </Link>
          </motion.div>
        </div>

        <FooterNav currentPage={currentPage} setActiveLink={setActiveLink}></FooterNav>
      </div>
    </>
  );
}
