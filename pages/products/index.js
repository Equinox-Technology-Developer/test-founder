import { Layout } from '@/components';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { fetchContentfulEntries } from '@/helper/contenfulHelper';

import SwiperNavButton from '@/components/SwiperNavButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import styles from './Products.module.scss';

const slideData = [
  { src: '/assets/abbot.svg', alt: 'Abbot', width: 180, height: 80 },
  { src: '/assets/barila.svg', alt: 'Barila', width: 180, height: 80 },
  { src: '/assets/berkshire.svg', alt: 'Barila', width: 180, height: 80 },
  { src: '/assets/bmw.svg', alt: 'Barila', width: 180, height: 80 },
  { src: '/assets/british-airways.svg', alt: 'Barila', width: 180, height: 80 },
  { src: '/assets/dolce-gabana.svg', alt: 'Barila', width: 180, height: 80 },
  { src: '/assets/everlast.svg', alt: 'Barila', width: 180, height: 80 },
  { src: '/assets/ferrero.svg', alt: 'Barila', width: 180, height: 80 },
  { src: '/assets/forbes.svg', alt: 'Barila', width: 180, height: 80 },
  { src: '/assets/foxnews.svg', alt: 'Fox News', width: 180, height: 80 },
];

const Products = ({ products }) => {
  const bodyTextValue = products.topBanner.fields.bodyText.content[0].content[0].value || '';
  const imageUrl = products.topBanner.fields.image.fields.file.url || '';
  const fullImageUrl = imageUrl.startsWith('http') ? imageUrl : `https:${imageUrl}`;

  console.log(products);
  return (
    <Layout pageTitle="Products">
      <section className="bg-blur bg-right bg-no-repeat bg-[#F9F9F9]">
        <div className="container mx-auto">
          <div className="flex px-5 py-4 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center mt-24">
              <h1 className="heading-1 mb-6 mt-0">
                {products.topBanner.fields.headline
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
                <Link href={products.topBanner.fields.ctaUrl}>
                    {products.topBanner.fields.ctaText}
                  </Link>
                </button>
                <button className="ml-4 text-primary-500 bg-white border-[1px] border-primary-500 py-2 px-5 hover:bg-grayscale-100 rounded-[40px] caption-regular-1">
                  <Link href={products.topBanner.fields.ctaUrl2}>
                    {products.topBanner.fields.ctaText2}
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

export default Products;
