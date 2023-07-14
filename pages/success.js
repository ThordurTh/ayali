import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

function success() {
  const router = useRouter();
  const { name } = router.query;

  return (
    <>
      <Head>
        <title>AYA LI - Success</title>
        <meta name="author" content="Aya Li"></meta>
        <meta
          name="keywords"
          content="Consultancy, digital consultant, marketing, digital marketing consultant"
        ></meta>
        <meta
          name="description"
          content="AYA LI - Digitial Marketing Consultant - Success"
        ></meta>
        <meta name="theme-color" content="#c7f3e9" />
      </Head>
      <section className="services-hero success-message">
        <h1>Thank you {name}!</h1>
        <p>
          Your business's success story starts here! I will contact you as soon
          as I am available. I am looking forward a successful collaboration
          with you!
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

export default success;
