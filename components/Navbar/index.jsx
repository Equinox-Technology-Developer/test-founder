import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import { images } from '../../constants';

import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { CiUser } from 'react-icons/ci';

import styles from './Navbar.module.scss';

const Navbar = (props) => {
  const { showNavbarSubmit, showNavbarCandidate, showNavbarRecruiter } = props;
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
      if (top > 36) {
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
          <ul className={styles.app__navbarLinks}>
            {showNavbarSubmit ? (
              ''
            ) : showNavbarCandidate ? (
              ''
            ) : showNavbarRecruiter ? (
              <>
                <li
                  onMouseEnter={handleProductsHover}
                  className={
                    isProductsDropdownOpen ? styles.dropdownActive : ''
                  }
                >
                  <Link
                    href="/assessment"
                    className={
                      router.pathname == '/assessment'
                        ? styles.active
                        : styles.nonActive
                    }
                  >
                    My assessment
                  </Link>
                </li>
                <li>
                  <Link
                    href="/candidates"
                    className={
                      router.pathname == '/candidates'
                        ? styles.active
                        : styles.nonActive
                    }
                  >
                    My candidates
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tests"
                    className={
                      router.pathname == '/tests'
                        ? styles.active
                        : styles.nonActive
                    }
                  >
                    Tests
                  </Link>
                </li>
              </>
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
                    Product{' '}
                    <span>
                      <MdOutlineKeyboardArrowDown />
                    </span>
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
              <Link href="/login-candidate">
                <button className="2xl:btn-normal lg:btn-medium btn-medium ml-4">
                  Sign in
                </button>
              </Link>
            </div>
          ) : showNavbarRecruiter ? (
            <div className="mobile-hidden tab-hidden flex items-center justify-center gap-x-4">
              <Link href="/book-demo">
                <button className="2xl:btn-line-normal btn-line-medium">
                  Book a Demo
                </button>
              </Link>
              <Link href="/login-recruiter">
                <button className="2xl:btn-normal btn-medium ml-4">
                  Upgrade
                </button>
              </Link>
              <Link
                href="/login-recruiter"
                className="flex cursor-pointer items-center justify-center gap-x-3"
              >
                <CiUser className="h-[40px] w-[40px] text-black" />
                <span>
                  <MdOutlineKeyboardArrowDown className="text-black" />
                </span>
              </Link>
            </div>
          ) : (
            <div className="mobile-hidden tab-hidden flex items-center justify-center">
              <Link href="/book-demo">
                <button className="2xl:btn-line-normal btn-line-medium">
                  Book a Demo
                </button>
              </Link>
              <Link href="/signup">
                <button className="2xl:btn-normal btn-medium ml-4">
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
          ) : showNavbarRecruiter ? (
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
                  <HiX
                    onClick={() => setToogle(false)}
                    className="cursor-pointer"
                  />
                  <Link href="/">
                    <Image
                      src={images.logo_desktop}
                      width={120}
                      height={50}
                      alt="logo"
                      priority
                      className="absolute left-0 top-0 p-4"
                    />
                  </Link>
                  <ul className={styles.app__navbarLinks}>
                    <li className="w-full">
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
                    <li className="w-full pl-4">
                      <Link
                        href="/products"
                        className={
                          router.pathname == '/products'
                            ? styles.active
                            : styles.nonActive
                        }
                      >
                        {' '}
                        Products
                      </Link>
                    </li>
                    <li className="w-full pl-4">
                      <Link
                        href="/sciences"
                        className={
                          router.pathname == '/sciences'
                            ? styles.active
                            : styles.nonActive
                        }
                      >
                        {' '}
                        Sciences
                      </Link>
                    </li>
                    <li className="w-full pl-4">
                      <Link
                        href="/test-library"
                        className={
                          router.pathname == '/test-library'
                            ? styles.active
                            : styles.nonActive
                        }
                      >
                        {' '}
                        Test Library
                      </Link>
                    </li>
                    <li className="w-full">
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
                    <li className="w-full pl-4">
                      <Link
                        href="/case-studies"
                        className={
                          router.pathname == '/case-studies'
                            ? styles.active
                            : styles.nonActive
                        }
                      >
                        {' '}
                        Case Studies
                      </Link>
                    </li>
                    <li className="w-full pl-4">
                      <Link
                        href="/skills-based-hiring"
                        className={
                          router.pathname == '/skills-based-hiring'
                            ? styles.active
                            : styles.nonActive
                        }
                      >
                        {' '}
                        Skill-based hiring
                      </Link>
                    </li>
                    <li className="w-full pl-4">
                      <Link
                        href="/talent-assessment"
                        className={
                          router.pathname == '/talent-assessment'
                            ? styles.active
                            : styles.nonActive
                        }
                      >
                        {' '}
                        Talent Assessment
                      </Link>
                    </li>
                    <li className="w-full pl-4">
                      <Link
                        href="/blog"
                        className={
                          router.pathname == '/blog'
                            ? styles.active
                            : styles.nonActive
                        }
                      >
                        {' '}
                        Blog
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
