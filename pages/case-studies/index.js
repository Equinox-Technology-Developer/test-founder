import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { MdChevronRight } from 'react-icons/md';
import { Layout } from '@/components';
import { fetchContentfulEntries } from '@/lib/contentful/client';

import styles from './CaseStudies.module.scss';

export default function Resources({ contentfulEntries }) {
  return (
    <Layout pageTitle="Case Studies">
      {/* Bottom Banner */}
      <section className="bg-[#F9F9F9] pt-0">
        <div className="container mx-auto">
          <div className={` ${styles.banner_blogContainer}`}>
            <div className={styles.banner_blogContentText}>
              <h1 className="sm:heading-1 heading-2">
                {contentfulEntries.topSection[0].fields.headline}
              </h1>
              <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-0 text-center lg:text-start">
                {
                  contentfulEntries.topSection[0].fields.bodyText.content[0]
                    .content[0].value
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <div className={styles.blog_container}>
        <div className={`container m-10 mx-auto`}>
          <div className={`${styles.blog_wrapper}`}>
            {contentfulEntries.pageContent.slice(0, 6).map((data, index) => (
              <div key={index} className={`${styles.blog_single}`}>
                <Image
                  src={`https:${data.fields.image.fields.file.url}`}
                  alt="Case Studies Image 1"
                  width={392}
                  height={236}
                />
                <div className={styles.content}>
                  <h3>{data.fields.headline}</h3>
                  <p>{data.fields.bodyText.content[0].content[0].value}</p>
                  <div className={styles.readmore}>
                    <p>
                      Read More{' '}
                      <span>
                        <MdChevronRight />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Banner */}
      <section className="bg-[#F9F9F9] bg-blur bg-right bg-no-repeat pt-0">
        <div className="container mx-auto px-4 py-6 md:px-10 md:py-8">
          {' '}
          <div className={` ${styles.banner_topContent}`}>
            <div className={styles.banner_topContentText}>
              <h1 className="sm:heading-1 heading-2 text-center lg:text-start">
                {contentfulEntries.topSection[1].fields.headline}
              </h1>
              <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-6 text-center lg:text-start">
                {
                  contentfulEntries.topSection[1].fields.bodyText.content[0]
                    .content[0].value
                }
              </p>
              <div className="mb-6 flex w-full justify-center lg:w-fit">
                <Link href="/signup">
                  <button className="btn-line-medium sm:btn-line-normal">
                    {contentfulEntries.topSection[1].fields.ctaText}
                  </button>
                </Link>
              </div>
            </div>
            <div
              className={`relative flex w-full justify-center md:w-full lg:w-full lg:max-w-lg ${styles.banner_topContentImage}`}
            >
              <Image
                src={`https:${contentfulEntries.topSection[1].fields.image.fields.file.url}`}
                alt="Hero Image"
                width={617}
                height={602}
                sizes="100vw"
                className={`z-10 flex h-auto w-[80%] md:w-[80%] lg:w-full `}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const contentfulEntries = await fetchContentfulEntries('landingPage');

  // Check if contentfulEntries is an array before filtering
  const filteredEntries = Array.isArray(contentfulEntries.items)
    ? contentfulEntries.items.find((entry) => {
        console.log(entry.fields.internalName);
        return entry.fields.internalName === 'Case Studies';
      }).fields // Return only the .fields property
    : {};

  return {
    props: {
      contentfulEntries: filteredEntries,
    },
  };
}
