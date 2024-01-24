import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Layout } from '@/components';

import { fetchContentfulEntries } from '@/helper';

import styles from './Blog.module.scss';

export default function Blog({ contentfulEntries }) {
  console.log(contentfulEntries);

  const BlogEntries = contentfulEntries.landingPage[0].fields;
  return (
    <Layout pageTitle="Blog">
      {/* Bottom Banner */}
      <section className="bg-[#F9F9F9] pt-0">
        <div className="container mx-auto px-4 py-8 md:px-[40px] md:py-[60px]">
          <div className={` ${styles.banner_blogContainer}`}>
            <div className={styles.banner_blogContentText}>
              <h1 className="sm:heading-1 heading-2">
                {BlogEntries.topBanner.fields.headline}
              </h1>
              <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-0 text-center lg:text-start">
                {
                  BlogEntries.topBanner.fields.bodyText.content[0].content[0]
                    .value
                }
              </p>
              <div className="relative flex w-full xl:w-fit">
                <input
                  type="text"
                  className="w-full rounded-[30px] bg-white px-4 py-[10px] shadow-[0_4px_10px_0px_rgba(0,0,0,0.15)] placeholder:text-base placeholder:text-[#CBCBCB]  xl:w-[600px]"
                  placeholder="Search anything here"
                />
                <Image
                  src="/assets/icon-search.svg"
                  alt="icon-search"
                  width={20}
                  height={20}
                  sizes="100vw"
                  className="absolute right-4 top-1/2 flex h-auto -translate-y-1/2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <div className={styles.blog_container}>
        <div
          className={`container mx-auto md:px-[40px] md:py-8 lg:px-[64px] lg:py-[60px]`}
        >
          <div className={styles.blog_categoriesHeader}>
            <p className={styles.active}>All</p>
            <p>Hiring</p>
            <p>Human Resources</p>
            <p>Science</p>
            <p>Skills-based Hiring</p>
            <p>Talent Assessment</p>
            <p>TestFounder</p>
          </div>
          <div className="flex flex-wrap justify-center gap-[43px]">
            {contentfulEntries.blogPost.map((blog, index) => (
              <Link href={`/blog/${blog.fields.slug}`} className="text-inherit">
                <div
                  className="group max-w-[401px] space-y-4 rounded-[20px] bg-white p-4 hover:bg-white/80 md:max-w-full lg:max-w-[401px]"
                  key={index}
                >
                  <Image
                    src={`https:${blog.fields.featuredImage.fields.file.url}`}
                    alt="img-card-blog"
                    width={369}
                    height={226}
                    sizes="100vw"
                    className="w-full rounded-[10px] object-cover"
                  />
                  <p className="caption-semibold-3">{blog.fields.category}</p>
                  <div className="space-y-1">
                    <h3 className="caption-semibold-1 group-hover:underline">
                      {blog.fields.title}
                    </h3>
                    <p className="caption-light-3 max-h-[84px] overflow-hidden">
                      {blog.fields.excerpt}...
                    </p>
                  </div>
                  <div className="flex flex-shrink-0 items-center">
                    <Image
                      src={`https:${blog.fields.author.fields.image.fields.file.url}`}
                      alt="img-card-blog"
                      width={24}
                      height={24}
                      sizes="100vw"
                      className="rounded-full object-cover"
                    />
                    <date className="caption-regular-4 ml-4">
                      {new Date(
                        blog.fields.author.fields.image.sys.createdAt,
                      ).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </date>
                  </div>
                </div>
              </Link>
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
                {BlogEntries.topSection[0].fields.headline}
              </h1>
              <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-6 text-center lg:text-start">
                {
                  BlogEntries.topSection[0].fields.bodyText.content[0]
                    .content[0].value
                }{' '}
              </p>
              <div className="mb-6 flex w-full justify-center lg:w-fit">
                <Link href="/signup">
                  <button className="btn-line-medium sm:btn-line-normal">
                    {BlogEntries.topSection[0].fields.ctaText}
                  </button>
                </Link>
              </div>
            </div>
            <div
              className={`relative flex w-full justify-center md:w-full lg:w-full lg:max-w-lg ${styles.banner_topContentImage}`}
            >
              <Image
                src={`https:${BlogEntries.topSection[0].fields.image.fields.file.url}`}
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
  // Modify content types here
  const contentTypes = ['landingPage', 'blogPost'];

  // Specify internalName for landingPage entries
  const landingPageInternalName = 'Blog';

  // Fetch entries for landingPage content type with specified internalName
  const entries = {};
  for (const contentType of contentTypes) {
    let fetchedEntries;
    if (contentType === 'landingPage') {
      const { items } = await fetchContentfulEntries(contentType);
      // Find the entry with the specified internalName
      const specificEntry = items.find(
        (entry) => entry.fields.internalName === landingPageInternalName,
      );
      fetchedEntries = specificEntry ? [specificEntry] : [];
    } else {
      // Fetch all entries for other content types
      const { items } = await fetchContentfulEntries(contentType);
      fetchedEntries = items;
    }

    entries[contentType] = fetchedEntries;
  }

  // Check if the entries are found
  for (const contentType of contentTypes) {
    if (entries[contentType]) {
      console.log(`Found ${contentType} entries:`, entries[contentType]);
    } else {
      console.log(`${contentType} entries not found.`);
    }
  }

  return {
    props: {
      contentfulEntries: entries,
    },
  };
}
