import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

import { Layout } from '@/components';
import { fetchContentfulEntries } from '@/lib/contentful/client';

import styles from './Blog.module.scss';

export default function Blog({ contentfulEntries }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const categories = [
    ...new Set(contentfulEntries.blogPost.map((post) => post.fields.category)),
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const filteredPosts = contentfulEntries.blogPost.filter(
    (post) =>
      (selectedCategory === 'All' ||
        post.fields.category === selectedCategory) &&
      post.fields.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

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
                  value={searchTerm}
                  onChange={handleSearchChange}
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
          className={`container mx-auto px-4 md:px-[40px] md:py-8 lg:px-[64px] lg:py-[60px]`}
        >
          <div className={styles.blog_categoriesHeader}>
            {['All', ...categories].map((category) => (
              <p
                key={category}
                className={
                  selectedCategory === category
                    ? 'caption-semibold-2 text-primary-500'
                    : 'caption-semibold-2'
                }
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </p>
            ))}
          </div>
          {/* Display filtered blog posts */}
          <div className="flex flex-wrap justify-center gap-[43px]">
            {currentPosts.map((blog, index) => (
              <Link
                href={`/blog/${blog.fields.slug}`}
                className="text-inherit"
                key={index}
              >
                <div className="group min-h-[520px] max-w-[401px] space-y-4 rounded-[20px] bg-white p-4 hover:bg-white/80 md:max-w-full lg:max-w-[401px]">
                  <Image
                    src={`https:${blog.fields.featuredImage.fields.file.url}`}
                    alt="img-card-blog"
                    width={369}
                    height={226}
                    sizes="100vw"
                    className="h-[226px] w-full rounded-[10px] object-cover md:object-top"
                  />
                  <div className="flex justify-between">
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
                    <p className="caption-semibold-3">{blog.fields.category}</p>
                  </div>
                  <div className="space-y-1">
                    <h3 className="caption-semibold-1 group-hover:underline">
                      {blog.fields.title}
                    </h3>
                    <p className="caption-light-3 max-h-[84px] overflow-hidden">
                      {blog.fields.excerpt}...
                    </p>
                  </div>
                  <button className="flex max-h-[34px] w-full items-center justify-center rounded-[10px] border-[1px] border-primary-500 py-2 text-center text-[18px] font-semibold text-primary-500 hover:border-none hover:bg-primary-500 hover:text-white">
                    Read More
                  </button>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination buttons */}
          {filteredPosts.length > postsPerPage && (
            <div className="mt-4 flex justify-center">
              {Array.from({
                length: Math.ceil(filteredPosts.length / postsPerPage),
              }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`mx-1 rounded-full px-4 py-2 ${
                    currentPage === index + 1
                      ? 'bg-gray-500 text-white'
                      : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}
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
  const contentTypes = ['landingPage', 'blogPost'];
  const landingPageInternalName = 'Blog';
  const entries = {};

  for (const contentType of contentTypes) {
    let fetchedEntries;

    if (contentType === 'landingPage') {
      const { items } = await fetchContentfulEntries(contentType);
      const specificEntry = items.find(
        (entry) => entry.fields.internalName === landingPageInternalName,
      );
      fetchedEntries = specificEntry ? [specificEntry] : [];
    } else {
      const { items } = await fetchContentfulEntries(contentType);
      fetchedEntries = items;
    }

    entries[contentType] = fetchedEntries;
  }

  Object.keys(entries).forEach((contentType) => {
    if (entries[contentType]) {
      console.log(`Found ${contentType} entries:`, entries[contentType]);
    } else {
      console.log(`${contentType} entries not found.`);
    }
  });

  return {
    props: {
      contentfulEntries: entries,
    },
  };
}
