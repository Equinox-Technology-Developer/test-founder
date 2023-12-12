import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import Image from 'next/image';
import Link from 'next/link';

import { useRouter } from 'next/router';
import { images } from '../../constants';
import { HiMenuAlt4, HiX } from 'react-icons/hi';

import styles from './Navbar.module.scss';

const Navbar = () => {
  const router = useRouter();
  const [toogle, setToogle] = useState(false);

  const handleScroll = () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      const top = window.scrollY;
      if (top > 0) {
        navbar.classList.add(styles.scrolled);
      } else {
        navbar.classList.remove(styles.scrolled);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      id="navbar"
      className={`${styles.navbar} ${toogle ? styles.toogleActive : ''}`}
    >
      <div className={styles.app__navbarLogo}>
        {/* for image on navbar */}
        <Link href="/">
          <Image
            src={images.logo_desktop}
            width={120}
            height={50}
            alt="logo"
            priority
          />
        </Link>
      </div>
      <div className={styles.nav_content}>
        <ul className={styles.app__navbarLinks}>
          {/* Products */}
          <li>
            <Link
              href="/products"
              className={
                router.pathname == '/products'
                  ? styles.active
                  : styles.nonActive
              }
            >
              {' '}
              Product
            </Link>
          </li>
          {/* Pricing */}
          <li>
            <Link
              href="/pricing"
              className={
                router.pathname == '/pricing' ? styles.active : styles.nonActive
              }
            >
              Pricing
            </Link>
          </li>
          {/* Resources */}
          <li>
            <Link
              href="/resources"
              className={
                router.pathname == '/resources'
                  ? styles.active
                  : styles.nonActive
              }
            >
              Resources
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex justify-center mobile-hidden">
        <button className="text-primary-500 bg-white border-[1px] border-primary-500 py-2 px-5 hover:bg-grayscale-100 rounded-[40px] caption-regular-1">
          Book a Demo
        </button>
        <button className="text-white bg-primary-500 rounded-[40px] border-0 py-2 px-5 hover:bg-primary-600 caption-regular-1 ml-4">
          Try for free!
        </button>
      </div>
      <div className={styles.navbar_menu}>
        <HiMenuAlt4 onClick={() => setToogle(true)} />
        {toogle && (
          <motion.div
            whileInView={{ x: [300, 0, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToogle(false)} />
            <ul className={styles.app__navbarLinks}>
              <li>
                <Link
                  href="/"
                  className={
                    router.pathname == '/' ? styles.active : styles.nonActive
                  }
                >
                  {' '}
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className={
                    router.pathname == '/products'
                      ? styles.active
                      : styles.nonActive
                  }
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className={
                    router.pathname == '/pricing'
                      ? styles.active
                      : styles.nonActive
                  }
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className={
                    router.pathname == '/resources'
                      ? styles.active
                      : styles.nonActive
                  }
                >
                  Resources
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
