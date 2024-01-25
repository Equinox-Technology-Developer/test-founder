import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import { fetchContentfulEntries } from '@/helper/accessContentful';

import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

import styles from './Navbar.module.scss';

const Navbar = (props) => {
  const { showNavbarSubmit, showNavbarCandidate } = props;
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
    <nav id="navbar" className={`${styles.navbar}`}>
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
          <ul
            className={styles.app__navbarLinks}
            onMouseLeave={handleMouseLeave}
          >
            {/* Products */}
            <li
              onMouseEnter={handleProductsHover}
              className={isProductsDropdownOpen ? styles.dropdownActive : ''}
            ></li>
          </ul>
          <ul className={styles.app__navbarLinks}>
            {showNavbarSubmit ? (
              ''
            ) : showNavbarCandidate ? (
              ''
            ) : (
              <>
                {/* Products */}
                <li
                  onMouseEnter={handleProductsHover}
                  className={
                    isProductsDropdownOpen ? styles.dropdownActive : ''
                  }
                >
                  <Link href="/products" className={styles.nonActive}>
                    Product <MdOutlineKeyboardArrowDown />
                  </Link>
                  {/* Products Dropdown */}
                  {isProductsDropdownOpen && (
                    <div
                      className={styles.dropdownContent}
                      onMouseLeave={handleMouseLeave}
                    >
                      <h2>Product Tour</h2>
                      {/* Add your dropdown content here */}
                      <Link href="/products">Products</Link>
                      <Link href="/sciences">Sciences</Link>
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
                <li
                  onMouseEnter={handleResourcesHover}
                  className={
                    isResourcesDropdownOpen ? styles.dropdownActive : ''
                  }
                >
                  <Link href="/blog" className={styles.nonActive}>
                    Resources{' '}
                    <span>
                      <MdOutlineKeyboardArrowDown />
                    </span>
                  </Link>
                  {/* Resources Dropdown */}
                  {isResourcesDropdownOpen && (
                    <div
                      className={styles.dropdownContent}
                      onMouseLeave={handleMouseLeave}
                    >
                      <h2>Learn</h2>
                      {/* Add your dropdown content here */}
                      <Link href="/case-studies">Case Studies</Link>
                      <Link href="/skills-based-hiring">
                        Skills-based hiring
                      </Link>
                      <Link href="/talent-assessment">Talent Assessment</Link>
                      <Link href="/blog">Blog</Link>
                    </div>
                  )}
                </li>
                {/* About */}
                <li>
                  <Link
                    href="/about"
                    className={
                      router.pathname == '/about'
                        ? styles.active
                        : styles.nonActive
                    }
                  >
                    About
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>

        <div className="flex justify-center">
          {showNavbarSubmit ? (
            <div className="mobile-hidden tab-hidden flex items-center justify-center">
              <Link href="/book-demo">
                <button className="caption-semibold-1 text-black">
                  Submit a request
                </button>
              </Link>
            </div>
          ) : showNavbarCandidate ? (
            <div className="mobile-hidden tab-hidden flex items-center justify-center">
              <Link href="/book-demo">
                <button className="caption-semibold-1 text-black hover:text-black/80">
                  Submit a request
                </button>
              </Link>
              <Link href="/signup">
                <button className="2xl:btn-normal lg:btn-medium btn-medium ml-4">
                  Signup
                </button>
              </Link>
            </div>
          ) : (
            <div className="mobile-hidden tab-hidden flex items-center justify-center">
              <Link href="/book-demo">
                <button className="2xl:btn-line-normal lg:btn-line-medium btn-line-medium">
                  Book a Demo
                </button>
              </Link>
              <Link href="/signup">
                <button className="2xl:btn-normal lg:btn-medium btn-medium ml-4">
                  Try for free!
                </button>
              </Link>
            </div>
          )}

          {showNavbarSubmit ? (
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
                        href="/contact"
                        className={
                          router.pathname == '/'
                            ? styles.active
                            : styles.nonActive
                        }
                      >
                        {' '}
                        Submit a request
                      </Link>
                    </li>
                  </ul>
                </motion.div>
              )}
            </div>
          ) : showNavbarCandidate ? (
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
                        href="/contact"
                        className={
                          router.pathname == '/'
                            ? styles.active
                            : styles.nonActive
                        }
                      >
                        {' '}
                        Submit a request
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/signup"
                        className={
                          router.pathname == '/'
                            ? styles.active
                            : styles.nonActive
                        }
                      >
                        {' '}
                        Signup
                      </Link>
                    </li>
                  </ul>
                </motion.div>
              )}
            </div>
          ) : (
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
                          router.pathname == '/'
                            ? styles.active
                            : styles.nonActive
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
                        href="/blog"
                        className={
                          router.pathname == '/blog'
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
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
