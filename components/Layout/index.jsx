import Navbar from '../Navbar';
import TopNavbar from '../TopNavbar';
import Footer from '../Footer';
import Head from 'next/head';
import Link from 'next/link';
import { FaIntercom } from 'react-icons/fa';

import styles from './Layout.module.scss';

const Layout = (props) => {
  const {
    children,
    pageTitle,
    showNavbarSubmit,
    showNavbarCandidate,
    showNavbarRecruiter,
    showFooter = true,
    showTopNavbar = true,
  } = props;
  return (
    <>
      <Head>
        <title>{`TestFounder® | ${pageTitle}`}</title>
        <link rel="icon" href="favicon.ico" sizes="any" />
      </Head>
      <div>
        <TopNavbar showTopNavbar={showTopNavbar} />
        <Navbar
          showNavbarSubmit={showNavbarSubmit}
          showNavbarCandidate={showNavbarCandidate}
          showNavbarRecruiter={showNavbarRecruiter}
        />
        <Link
          href="https://wa.me/6287725800047"
          className={styles.whatsapp_float}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaIntercom />
        </Link>

        {children}

        <Footer showFooter={showFooter} />
      </div>
    </>
  );
};

export default Layout;
