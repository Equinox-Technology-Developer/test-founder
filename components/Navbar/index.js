import { useState } from "react";
import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { images } from "../../constants";

import { FaBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { HiMenuAlt4, HiX } from "react-icons/hi";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  const router = useRouter();
  const [toogle, setToogle] = useState(false);

  return (
    <nav className={styles.navbar}>
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
          <li>
            <Link
              href="/"
              className={
                router.pathname == "/" ? styles.active : styles.nonActive
              }
            >
              {" "}
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className={
                router.pathname == "#"
                  ? styles.active
                  : styles.nonActive
              }
            >
              Virtual Expo
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className={
                router.pathname == "#"
                  ? styles.active
                  : styles.nonActive
              }
            >
              Portofolio
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className={
                router.pathname == "#" ? styles.active : styles.nonActive
              }
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* <div className={styles.nav_profile}>
          <FaBell />
          <CgProfile />
        </div> */}
      </div>
      <div className={styles.navbar_menu}>
        <HiMenuAlt4 onClick={() => setToogle(true)} />
        {toogle && (
          <motion.div
            whileInView={{ x: [300, 0, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToogle(false)} />
            <ul className={styles.app__navbarLinks}>
              <li>
                <Link
                  href="/"
                  className={
                    router.pathname == "/" ? styles.active : styles.nonActive
                  }
                >
                  {" "}
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className={
                    router.pathname == "#"
                      ? styles.active
                      : styles.nonActive
                  }
                >
                  Virtual Expo
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className={
                    router.pathname == "#"
                      ? styles.active
                      : styles.nonActive
                  }
                >
                  Portofolio
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className={
                    router.pathname == "#"
                      ? styles.active
                      : styles.nonActive
                  }
                >
                  Contact Us
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