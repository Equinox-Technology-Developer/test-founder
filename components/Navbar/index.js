import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fetchContentfulEntries } from '@/helper/contenfulHelper';

import Image from 'next/image';
import Link from 'next/link';

import { useRouter } from 'next/router';
import { images } from '../../constants';
import { HiMenuAlt4, HiX } from 'react-icons/hi';

import styles from './Navbar.module.scss';

const Navbar = () => {
  const router = useRouter();
  const [toogle, setToogle] = useState(false);
  const [isProductsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

  const handleProductsHover = () => {
    setProductsDropdownOpen(true);
    setResourcesDropdownOpen(false);
  };

  const handleResourcesHover = () => {
    setProductsDropdownOpen(false);
    setResourcesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setProductsDropdownOpen(false);
    setResourcesDropdownOpen(false);
  };

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
    <nav id="navbar" className={`blur-3 ${styles.navbar}`}>
      <div
        className={`${styles.navbar_container} ${
          toogle ? styles.toogleActive : ''
        }`}
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
          <ul className={styles.app__navbarLinks} onMouseLeave={handleMouseLeave}>
            {/* Products */}
            <li onMouseEnter={handleProductsHover}
        className={isProductsDropdownOpen ? styles.dropdownActive : ''}>
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
              {/* Products Dropdown */}
              {isProductsDropdownOpen && (
                <div
                  className={styles.dropdownContent}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Add your dropdown content here */}
                  <Link href="/products">Products</Link>
                  <Link href="/sciences">Science</Link>
                  <Link href="/test-library">Test Library</Link>
                </div>
              )}
            </li>
            {/* Pricing */}
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
            {/* Resources */}
            <li onMouseEnter={handleResourcesHover}
                className={isResourcesDropdownOpen ? styles.dropdownActive : ''}>
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
              {/* Resources Dropdown */}
              {isResourcesDropdownOpen && (
                <div
                  className={styles.dropdownContent}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Add your dropdown content here */}
                  <Link href="/resource1">Resource 1</Link>
                  <Link href="/resource2">Resource 2</Link>
                </div>
              )}
            </li>
            <li>
              <Link
                href="/about"
                className={
                  router.pathname == '/about' ? styles.active : styles.nonActive
                }
              >
                About
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex justify-center mobile-hidden">
          <button className="btn-line-normal">Book a Demo</button>
          <button className="btn-normal ml-4">Try for free!</button>
        </div>

        {/* On screen */}
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
      </div>
    </nav>
  );
};

export async function getStaticProps() {
  const contentType = 'landingPage'; // Modify the content type here
  const propsKey = 'products'; // Modify the props key here
  const catchKey = 'error'; // Modify the catch key here
  const indexToRead = 10; // Modify the index you want to read

  try {
    const dynamicData = await fetchContentfulEntries(
      contentType,
      propsKey,
      catchKey,
      indexToRead,
    );

    return {
      props: dynamicData,
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return {
      props: {
        [catchKey]: 'An unexpected error occurred.',
      },
    };
  }
}

export default Navbar;
