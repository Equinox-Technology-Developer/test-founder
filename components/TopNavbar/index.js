import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import Image from 'next/image';
import Link from 'next/link';

import { useRouter } from 'next/router';
import { images } from '../../constants';
import { HiMenuAlt4, HiX } from 'react-icons/hi';

import styles from './TopNavbar.module.scss';

const TopNavbar = () => {
  const router = useRouter();
  const [toogle, setToogle] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <nav
      className={`${styles.navbar} ${visible ? styles.visible : styles.hidden}`}
    >
      <div className={styles.app__navbarLogo}>
        {/* for image on navbar */}
        <Link href="/">
          <Image
            src={images.blueboxlogo2}
            width={250}
            height={50}
            alt="logo"
            priority
          />
        </Link>
      </div>
      <div className={styles.nav_content}>
        <ul className={styles.app__navbarLinks}>
          {/* For Candidates */}
          <li>
            <Link
              href="/candidates-guide"
              className={
                router.pathname == '/candidates-guide'
                  ? styles.active
                  : styles.nonActive
              }
            >
              {' '}
              For Candidates
            </Link>
          </li>
          {/* Help */}
          <li>
            <Link
              href="/help"
              className={
                router.pathname == '/help' ? styles.active : styles.nonActive
              }
            >
              Help
            </Link>
          </li>
          {/* Log in */}
          <li>
            <Link
              href="/login"
              className={
                router.pathname == '/login' ? styles.active : styles.nonActive
              }
            >
              Log in
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopNavbar;
