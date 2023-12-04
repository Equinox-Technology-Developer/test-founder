import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <footer className={styles.footer}>
        <div className={styles.footer_content}>
          <h1>Test Founder</h1>
          {/* test */}
          <p>
            Description footer of Test Founder
          </p>
        </div>
        {/* <div className={styles.footer_contents}> */}
        <div className={styles.footer_content}>
          <h1>EXPLORE</h1>
          <ul>
            <Link href="#">
              <li>Course</li>
            </Link>
            <Link href="#">
              <li>Virtual Expo</li>
            </Link>
            <Link href="#">
              <li>Portofolio</li>
            </Link>
            {/* <Link href="/">
              <li>News</li>
            </Link> */}
            {/* <Link href="/">
              <li>FAQ</li>
            </Link> */}
          </ul>
        </div>
        {/* <div className={styles.footer_content}>
          <h1>HELP CENTRE</h1>
          <ul>
            <li>Term Condition</li>
            <li>Privacy Policy</li>
            <li>Term of Use</li>
          </ul>
        </div> */}
        <div className={styles.footer_content}>
          <h1>CONTACT US</h1>
          <p>
            Address of Test Founder
          </p>
          <p>
            Homepage :{" "}
            <Link href="https://bluebox.wikaexo.com">
             #
            </Link>
          </p>
        </div>
        <div className={styles.footer_content}>
          <h1>Follow Us</h1>
          <ul>
            <li>
              <Link target="_blank" href="#">
                {" "}
                <FaInstagram />
                Instagram
              </Link>
            </li>
            <li>
              <Link target="_blank" href="#">
                {" "}
                <FaTwitter />
                Twitter
              </Link>
            </li>
            <li>
              <Link target="_blank" href="#">
                {" "}
                <FaFacebook />
                Facebook
              </Link>
            </li>
            <li>
              <Link target="_blank" href="#">
                {" "}
                <FaYoutube />
                Youtube
              </Link>
            </li>
          </ul>
        </div>
        {/* </div> */}
        <div className={styles.footer_socialMedia}></div>
      </footer>
    </div>
  );
};

export default Footer;