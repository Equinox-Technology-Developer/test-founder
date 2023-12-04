import Navbar from "../Navbar";
import Footer from "../Footer";
import Head from "next/head";
import Link from "next/link";

import { RiWhatsappFill } from "react-icons/ri";

import styles from "./Layout.module.scss";

const Layout = (props) => {
  const { children, pageTitle } = props;
  return (
    <>
      <Head>
        <title>Bluebox | {pageTitle}</title>
      </Head>
      <div>
        <Navbar />
        <Link
          href="https://wa.me/6287725800047"
          class={styles.whatsapp_float}
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiWhatsappFill />
        </Link>
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;