import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Layout } from '@/components';
import { fetchContentfulEntries } from '@/helper';
import { IoIosArrowForward } from 'react-icons/io';
import { FaStar } from "react-icons/fa";

import styles from './Sciences.module.scss';

const ProductScience = ({contentfulEntries}) => {
  const bodyTextValue = contentfulEntries.topBanner.fields.bodyText.content[0].content[0].value || '';
  const imageUrl = contentfulEntries.topBanner.fields.image.fields.file.url;
  const fullImageUrl = `https:${imageUrl}`

  return (
    <>
      <Layout pageTitle="Product Science">
        {/* Top Banner */}
        <section className="bg-[#F9F9F9] bg-blur bg-right bg-no-repeat pt-0">
          <div className="container mx-auto pb-20">
            {' '}
            <div className={styles.banner_topContent}>
              <div className={styles.banner_topContentText}>
                <h1 className="sm:heading-1 heading-2 mb-6 w-full text-center lg:text-start">
                  {contentfulEntries.topBanner.fields.headline
                    .split(' ')
                    .map((word, index) => (
                      <span
                        key={index}
                        className={word === 'TestFounder.' ? 'text-primary-500' : ''}
                      >
                        {word}{' '}
                      </span>
                  ))}
                </h1>
                <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-0 text-center lg:text-start">
                  {bodyTextValue}
                </p>
                <div className="mb-6 gap-3 flex w-full justify-center lg:justify-start">
                  <Link href={contentfulEntries.topBanner.fields.ctaUrl}>
                    <button className="btn-line-medium sm:btn-line-normal">
                    {contentfulEntries.topBanner.fields.ctaText}
                    </button>
                  </Link>
                  <div className='flex items-center gap-2 '>
                  <div>
                    <Image src="/assets/test-library-banner_people.png" width={140} height={44} />
                  </div>
                  <div >
                    <div className='flex text-star'>
                      <FaStar className='svg-star' />
                      <FaStar className='svg-star' />
                      <FaStar className='svg-star' />
                      <FaStar className='svg-star' />
                      <FaStar className='svg-star' />
                    </div>
                    <p>Used by 500K+ recruiters </p>
                  </div>
                </div>
                </div>
              </div>
              <div
                className={`relative flex w-full justify-center md:w-full lg:w-full lg:max-w-lg ${styles.banner_topContentImage}`}
              >
                <Image
                  src={fullImageUrl}
                  alt="Hero Image"
                  width={617}
                  height={602}
                  sizes="100vw"
                  className='z-10 flex h-auto w-[80%] md:w-[60%] lg:w-full img'
                />
              </div>
            </div>
          </div>
        </section>

        {/* Explanation  */}
        <section className="z-50 flex h-fit items-center bg-[#F9F9F9] px-4 py-6 sm:min-h-[520px] md:px-[40px] md:py-[40px] lg:px-0 lg:py-0">
        <div className="container mx-auto ">
          {contentfulEntries.topSection.map((explanation, index) => (
            <div key={index} className={`flex flex-col lg:flex-row items-center lg:last:mb-20 lg:mb-8 mb-4 gap-[50px] justify-between ${explanation.fields.containerLayout ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
              <div className="z-50 mb-1 sm:mb-16 md:mb-0 md:w-full md:text-left lg:flex-grow">
                <Image
                  src={`https:${explanation.fields.image.fields.file.url}`}
                  alt="Hero Image"
                  width={616}
                  height={404}
                  className={styles.img}
                  sizes="100vw"
                />
              </div>
              <div className="relative z-50 flex w-full flex-col items-center space-y-6 md:w-full lg:w-full lg:items-start">
                <h1 className="heading-2 sm:heading-1 mb-0 mt-0 text-center lg:text-start">
                 {explanation.fields.headline}
                </h1>

                {explanation.fields.bodyText.content.map((content, index) => (
                  
                  <p key={index} className="caption-regular-3 sm:caption-regular-1 text-center lg:text-start">
                    {content.content[0].value}
                  </p>
                ))}

                <Link href={explanation.fields.ctaLink && explanation.fields.ctaText ? explanation.fields.ctaLink : "#"}>
                  {explanation.fields.ctaLink && explanation.fields.ctaText && (
                    <button className="btn-line-medium sm:btn-line-normal">
                      {explanation.fields.ctaText}
                    </button>
                  )}
                </Link>
              </div>
              <Image
                src="/assets/bg_blur_2.png"
                alt="Hero Image"
                width={730}
                height={565}
                sizes="100vw"
                className="absolute"
              />
            </div>
          ))}
        </div>
        </section>

        {/* Blog Section */}
        <div className={styles.blog_container}>
          <div className={`container m-10 mx-auto`}>
            <h1>Read more about science-backed hiring</h1>
            <div className={`${styles.blog_wrapper}`}>
              <div className={styles.blog_single}>
                <Image
                  src="/assets/Mentor-1.png"
                  alt="Blog Image Grid"
                  width={321}
                  height={213}
                />
                <h3 className={``}>A brief introduction to: Test validation</h3>
                <p className={``}>
                  Science series materials are brought to you by TestFounder’s
                  Assessment Team: A group of IO psycho...
                </p>
              </div>
              <div className={styles.blog_single}>
                <Image
                  src="/assets/Mentor-2.png"
                  alt="Blog Image Grid"
                  width={321}
                  height={213}
                />
                <h3 className={``}>A brief introduction to: Test validation</h3>
                <p className={``}>
                  Science series materials are brought to you by TestFounder’s
                  Assessment Team: A group of IO psycho...
                </p>
              </div>
              <div className={styles.blog_single}>
                <Image
                  src="/assets/Mentor-3.png"
                  alt="Blog Image Grid"
                  width={321}
                  height={213}
                />
                <h3 className={``}>A brief introduction to: Test validation</h3>
                <p className={``}>
                  Science series materials are brought to you by TestFounder’s
                  Assessment Team: A group of IO psycho...
                </p>
              </div>
              <div className={styles.blog_single}>
                <Image
                  src="/assets/Mentor-4.png"
                  alt="Blog Image Grid"
                  width={321}
                  height={213}
                />
                <h3 className={``}>A brief introduction to: Test validation</h3>
                <p className={``}>
                  Science series materials are brought to you by TestFounder’s
                  Assessment Team: A group of IO psycho...
                </p>
              </div>
              <div className={styles.blog_single}>
                <Image
                  src="/assets/Mentor-5.png"
                  alt="Blog Image Grid"
                  width={321}
                  height={213}
                />
                <h3 className={``}>A brief introduction to: Test validation</h3>
                <p className={``}>
                  Science series materials are brought to you by TestFounder’s
                  Assessment Team: A group of IO psycho...
                </p>
              </div>
              <div className={styles.blog_single}>
                <Image
                  src="/assets/Mentor-6.png"
                  alt="Blog Image Grid"
                  width={321}
                  height={213}
                />
                <h3 className={``}>A brief introduction to: Test validation</h3>
                <p className={``}>
                  Science series materials are brought to you by TestFounder’s
                  Assessment Team: A group of IO psycho...
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section Bottom Banner*/}
        <div className="min-h-[366px] w-full space-y-6 bg-[#D0F3FC26] pb-[60px]">
          <div className="container mx-auto flex flex-col items-center justify-center space-y-6 px-4 py-6 text-center sm:px-16 sm:py-[60px]">
            <h1 className="heading-2 sm:heading-1">
            {contentfulEntries.extraSection[0].fields.headline}
            </h1>
            <p className="caption-regular-3 sm:caption-regular-1 text-center">
              { contentfulEntries.extraSection[0].fields.bodyText.content[0].content[0].value }
            </p>
            <div className="flex flex-row gap-4">
              <Link href={contentfulEntries.extraSection[0].fields.ctaUrl}>
                <button className="btn-line-medium">{contentfulEntries.extraSection[0].fields.ctaText}</button>
              </Link>
              <Link href={contentfulEntries.extraSection[0].fields.ctaUrl2}>
                <button className="btn-medium ">
                {contentfulEntries.extraSection[0].fields.ctaText2}
                  <span className="pl-2">
                    <IoIosArrowForward />
                  </span>
                </button>
              </Link>
            </div>

            <p className="italic">
              The contents of this page are intended for general information
              purposes only and do not constitute legal advice, nor do they
              substitute legal counsel.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProductScience;

export async function getStaticProps() {
  const contentType = 'landingPage'; // Modify content type here
  const { items } = await fetchContentfulEntries(contentType);

  const entries = items.find(
    (entry) => entry.fields.internalName === 'Product Science',
  );

  // Check if the entry is found
  if (entries) {
    console.log('Found the homepage entry:', entries);
  } else {
    console.log('Homepage entry not found.');
  }

  return {
    props: {
      contentfulEntries: entries ? entries.fields : {}, // Modify key-value of props
    },
  };
}