import Link from "next/link";
import Image from "next/image";
import { images } from "@/constants";
import { MdChevronRight } from "react-icons/md";
import { fetchContentfulEntries } from "@/helper/contenfulHelper";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

import styles from "./Footer.module.scss";

const Footer = ({products}) => {
  return (
    <div className={styles.footer_container}>
      <footer className={styles.footer_wrapper}>
        {/* Logo */}
        <div className={styles.footer_content_logo}>
          <Image width={150} height={60} src={images.logo_desktop} alt="Logo" />
          <p>
            © Test Founder 2023. All rights reserved.
          </p>
        </div>

        {/* Content Tab 1 */}
        <div className={styles.content_wrapper}>
          <div className={styles.footer_content}>
            <a href="">Help Center <MdChevronRight/></a>
          </div>   
          <div className={styles.footer_content}>
            <a href="">Information for Candidates <MdChevronRight/></a>
          </div>   
          <div className={styles.footer_content}>
            <a href="">Skills-based hiring <MdChevronRight/></a>

        </div>
        </div>   

        {/* Content Tab 2 */}
        <div className={styles.content_wrapper}>
          <div className={styles.footer_content}>
            <a href="">Careers <span>Hiring!</span> <MdChevronRight/></a>
          </div>   
          <div className={styles.footer_content}>
            <a href="">Blog<MdChevronRight/></a>
          </div>   
          <div className={styles.footer_content}>
            <a href="">Contact <MdChevronRight/></a>

        </div>
        </div>  

        {/* Content Tab 3 */}  
        <div className={styles.content_wrapper}>
          <div className={styles.footer_content}>
            <a href=""> Legal Stuff <MdChevronRight/></a>
          </div>   
          <div className={styles.footer_content}>
            <a href="">Privacy policy <MdChevronRight/></a>
          </div>   
          <div className={styles.footer_content}>
            <a href="">Sitemap<MdChevronRight/></a>
        </div>
        </div>  

        <div className={styles.footer_content_certificate}>
         <Image className={styles.img_certificate1} src={images.certificate1} alt="Certificate 1"/>
         <Image className={styles.img_certificate2} src={images.certificate2} alt="Certificate 1"/>
        </div>

        {/* </div> */}
        <div className={styles.footer_socialMedia}>
          <Link target="_blank" href="#">
            <FaInstagram />
          </Link>
          <Link target="_blank" href="#">
            <FaTwitter />
          </Link>
          <Link target="_blank" href="#">
            <FaYoutube />
          </Link>
        </div>
      </footer>
    </div>
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

export default Footer;