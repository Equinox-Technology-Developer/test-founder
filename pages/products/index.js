import { Layout } from '@/components';
import React from 'react';
import { fetchContentfulEntries } from '@/helper/contenfulHelper';

const Products = ({ resources }) => {
  return <Layout pageTitle="Products"></Layout>;
};

export async function getStaticProps() {
  const contentType = 'landingPage'; // Modify the content type here
  const propsKey = 'resources'; // Modify the props key here
  const catchKey = 'error'; // Modify the catch key here
  const indexToRead = 9; // Modify the index you want to read

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
=======
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { fetchContentfulEntries } from '@/helper/contenfulHelper';
import { createClient } from 'contentful';

const Products = ({ contentfulEntries }) => {
  const bodyTextValue = contentfulEntries.topBanner.fields.bodyText.content[0].content[0].value || '';
  const imageUrl = contentfulEntries.topBanner.fields.image.fields.file.url;
  const fullImageUrl = `https://${imageUrl}`

  return (
    <Layout pageTitle="Products">
      <section className="bg-blur bg-right bg-no-repeat bg-[#F9F9F9]">
        <div className="container mx-auto">
          <div className="flex px-5 py-4 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center mt-24">
              <h1 className="heading-1 mb-6 mt-0">
                {contentfulEntries.topBanner.fields.headline
                  .split(' ')
                  .map((word, index) => (
                    <span
                      key={index}
                      className={word === 'Easy' ? 'text-primary-500' : ''}
                    >
                      {word}{' '}
                    </span>
                  ))}
              </h1>
              <p className="caption-regular-1 mt-0 mb-6">
                {bodyTextValue}
              </p>
              <div className="flex justify-center mb-6">
                <button className="text-white bg-primary-500 rounded-[40px] border-0 py-2 px-5 hover:bg-primary-600 caption-regular-1 flex">
                <Link href={contentfulEntries.topBanner.fields.ctaUrl}>
                    {contentfulEntries.topBanner.fields.ctaText}
                  </Link>
                </button>
                <button className="ml-4 text-primary-500 bg-white border-[1px] border-primary-500 py-2 px-5 hover:bg-grayscale-100 rounded-[40px] caption-regular-1">
                  <Link href={contentfulEntries.topBanner.fields.ctaUrl2}>
                    {contentfulEntries.topBanner.fields.ctaText2}
                  </Link>
                </button>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative">
              <Image
                src={fullImageUrl}
                alt="Hero Image"
                width={512}
                height={638}
                sizes="100vw"
                className="w-full h-auto z-50"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};


export async function getStaticProps() {
  const contentType = 'landingPage'; // Modify content type here
  const { items } = await fetchContentfulEntries(contentType);

  const entries = items.find(entry => entry.fields.internalName === 'Products');

  // Check if the entry is found
  if (entries) {
    console.log("Found the homepage entry:", entries);
  } else {
    console.log("Homepage entry not found.");
  }

  return {
    props: {
      contentfulEntries: entries ? entries.fields : {}, // Modify key-value of props
    },
  };
}

export default Products;
