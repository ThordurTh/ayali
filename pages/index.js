import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import portrait from "../assets/portrait.png";
import FooterNav from "@components/FooterNav";
import {motion} from 'framer-motion'

export default function index() {
  const currentPage = 1;
  return (
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
        <Image priority src={portrait} alt="portrait of AYA LI" />
        </motion.div>
      </div>
      <div className="hero">
        <h1>AYA LI</h1>
        <p className="job_title">
          DIGITAL MARKETING <br />
          CONSULTANT
        </p>
        <p>Start your journey of exponential growth here!</p>
        <Link href="/contact">
          <a className="cta">Get started</a>
        </Link>
      </div>
      <FooterNav currentPage={currentPage}></FooterNav>
    </div>
  );
}
