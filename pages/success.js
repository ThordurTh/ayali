import React from 'react'
import Head from "next/head";
import Link from "next/link";
import { useRouter } from 'next/router';

function success() {
const router = useRouter();
const { name } = router.query;

    return (
        <>
          <Head>
            <title>AYA LI - Success</title>
            <meta name="keywords" content="Some, good, keywords"></meta>
            <meta
              name="description"
              content="AYA LI - Digitial Marketing Consultant - Success"
            ></meta>
            <meta name="theme-color" content="#c7f3e9" />
          </Head>
    <section className="services-hero success-message">
            <h1>Thank you {name} </h1>
        <p>
          Scale your eCommerce business by successfully overcoming your
          marketing challenges with a tailored digital marketing strategy.
        </p>
        <div>
            <Link href="../">
              <a className="cta success">Home</a>
            </Link>
            </div>
      </section>
          </>
  );
}

export default success