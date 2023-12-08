import Navbar from "../Navbar";
import TopNavbar from "../TopNavbar";
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
        <title>TestFounder® | {pageTitle}</title>
        <link rel="icon" href="favicon.ico" sizes="any" />
      </Head>
      <div>
        <TopNavbar/>
        <Navbar />
        <Link
          href="https://wa.me/6287725800047"
          className={styles.whatsapp_float}
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
