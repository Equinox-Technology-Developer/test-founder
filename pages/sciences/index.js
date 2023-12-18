import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Layout } from '@/components';
import { fetchContentfulEntries } from '@/helper/contenfulHelper';

import styles from './Sciences.module.scss';

const ProductScience = ({ contentfulEntries }) => {
  const bodyTextValue =
    contentfulEntries.topBanner.fields.bodyText.content[0].content[0].value ||
    '';
  const imageUrl = contentfulEntries.topBanner.fields.image.fields.file.url;
  const fullImageUrl = `https://${imageUrl}`;
  console.log(contentfulEntries);
  return (
    <>
      <Layout pageTitle="Product Science">
        {/* Top Banner */}
        {/* <section className="bg-blur bg-right bg-no-repeat bg-[#F9F9F9]">
          <div className="container mx-auto">
            <div className="flex px-5 py-4 md:flex-row flex-col items-center">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center mt-24">
                <h1 className="heading-1 mb-6 mt-0">
                  {contentfulEntries.topBanner.fields.headline
                    .split(' ')
                    .map((word, index) => (
                      <span
                        key={index}
                        className={
                          word === 'TestFounder.' ? 'text-primary-500' : ''
                        }
                      >
                        {word}{' '}
                      </span>
                    ))}
                </h1>
                <p className="caption-regular-1 mt-0 mb-6">{bodyTextValue}</p>
                <div className="flex justify-center mb-6">
                  <button className="ml-4 text-primary-500 bg-white border-[1px] border-primary-500 py-2 px-5 hover:bg-grayscale-100 rounded-[40px] caption-regular-1">
                    <Link href={contentfulEntries.topBanner.fields.ctaUrl}>
                      {contentfulEntries.topBanner.fields.ctaText}
                    </Link>
                  </button>
                </div>
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative">
                <Image
                  src={fullImageUrl}
                  alt={contentfulEntries.topBanner.fields.image.fields.title}
                  width={512}
                  height={638}
                  sizes="100vw"
                  className="w-full h-auto z-50"
                />
              </div>
            </div>
          </div>
        </section> */}

        {/* Right - Left Content  */}
        {/* <section className="min-h-[700px] flex items-center bg-[#F9F9F9]">
          <div className="container mx-auto ">
            {contentfulEntries.topSection.map((content) => (
              <div
                key={content.fields.internalName}
                className={`flex px-5 py-4 ${
                  content.fields.containerLayout
                    ? 'md:flex-row'
                    : 'md:flex-row-reverse'
                } flex-col items-center gap-[21px]`}
              >
                <div className="w-1/2 md:w-1/2 md:text-left mb-16 md:mb-0 ">
                  <Image
                    src={`https:${content.fields.image.fields.file.url}`}
                    alt="Hero Image"
                    width={644}
                    height={469}
                    sizes="100vw"
                    className="z-50"
                  />
                </div>
                <div className="lg:w-1/2 md:w-1/2 w-5/6 relative flex flex-col md:items-start items-center space-y-6">
                  <h1
                    key={content.fields.headline}
                    className="heading-1 mt-0 mb-0"
                  >
                    {content.fields.headline}
                  </h1>
                  <p className={`caption-regular-1 ${styles.pre}`}>
                    {content.fields.bodyText.content[0].content[0].value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        {/*Banner Bottom */}
        {/* <div className="w-full bg-[#D0F3FC26] min-h-[366px] space-y-6 pb-[60px]">
          <div className="container mx-auto flex flex-col items-center justify-center text-center space-y-6">
            <h1 className="heading-1">
              {contentfulEntries.extraSection[0].fields.headline}
            </h1>
            <p className={`caption-regular-1 text-center ${styles.pre}`}>
              {
                contentfulEntries.extraSection[0].fields.bodyText.content[0]
                  .content[0].value
              }
            </p>
            <div className="flex flex-row gap-4">
              <button className="btn-line-medium">
                <Link href={contentfulEntries.extraSection[0].fields.ctaUrl}>
                  {contentfulEntries.extraSection[0].fields.ctaText}
                </Link>
              </button>
              <button className="btn-medium">
                <Link href={contentfulEntries.extraSection[0].fields.ctaUrl2}>
                  {contentfulEntries.extraSection[0].fields.ctaText2}
                </Link>
              </button>
            </div>
            <p><i>The contents of this page are intended for general information purposes only and do not constitute legal advice, nor do they substitute legal counsel.</i></p>
          </div>
        </div> */}
      </Layout>
    </>
  );
};

// export async function getStaticProps() {
//   const contentType = 'landingPage'; // Modify content type here
//   const { items } = await fetchContentfulEntries(contentType);

//   const entries = items.find(
//     (entry) => entry.fields.internalName === 'Product Science',
//   );

//   // Check if the entry is found
//   if (entries) {
//     console.log('Found the homepage entry:', entries);
//   } else {
//     console.log('Homepage entry not found.');
//   }

//   return {
//     props: {
//       contentfulEntries: entries ? entries.fields : {}, // Modify key-value of props
//     },
//   };
// }

export default ProductScience;
