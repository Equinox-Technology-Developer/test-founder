import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { Layout } from "../components";
import { images } from "../constants";
import styles from "../styles/Home.module.scss";

// import Image from 'next/image'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="Test Founder" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <meta property="og:title" content="Test Founder" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>

      <Layout pageTitle="Homepage">
        
      </Layout>
    </>
  );
}
