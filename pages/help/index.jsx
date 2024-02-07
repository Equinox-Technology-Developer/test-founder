import React from 'react';

import { Layout } from '@/components';
import Link from 'next/link';
import Image from 'next/image';
import { fetchContentfulEntries } from '@/lib/contentful/client';

export default function Help({ contentfulEntries }) {
  console.log(contentfulEntries);
  return (
    <Layout pageTitle="For Candidates">
      <section className="bg-[#F9F9F9] bg-blur bg-right bg-no-repeat pt-0">
        <div className="container mx-auto px-4 py-6 sm:min-h-[520px] md:px-10 md:py-8 lg:px-0 lg:py-0">
          <div className="relative flex flex-col items-center sm:static lg:flex-row lg:gap-[27px] lg:py-[80px]">
            <div className="mb-0 mt-20 flex flex-col items-center text-center md:mb-0 md:w-full md:items-center md:px-[40px] md:py-[32px] md:text-left lg:mt-24 lg:w-1/2 lg:flex-grow lg:items-start lg:px-0">
              <h1 className="sm:heading-1 heading-2 mb-6 mt-0 text-center lg:text-start">
                {contentfulEntries.topBanner.fields.headline}
              </h1>
              <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-0 text-center lg:text-start">
                {
                  contentfulEntries.topBanner.fields.bodyText.content[0]
                    .content[0].value
                }
              </p>
              <div className="relative flex w-full xl:w-fit">
                <input
                  type="text"
                  className="placeholder:caption-regular-3 w-full rounded-[30px] bg-white px-4 py-[10px] shadow-[0_4px_10px_0px_rgba(0,0,0,0.15)] placeholder:text-[#CBCBCB] xl:w-[600px]"
                  placeholder="Type your question here"
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
            <div className="flex w-full justify-center md:w-full lg:max-w-[46%]">
              <Image
                src={`https:${contentfulEntries.topBanner.fields.image.fields.file.url}`}
                alt="Hero Image"
                width={424}
                height={524}
                sizes="100vw"
                className="z-10 mt-8 flex h-auto w-[80%] md:w-[60%] lg:mt-20 lg:w-fit"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-grayscale-200 lg:py-[60px]">
        <div className="container mx-auto flex flex-col gap-4 px-4 py-6 md:flex-row md:px-[40px] md:py-[32px]">
          <div className="flex w-full flex-col items-start md:w-1/2">
            <h2 className="md:heading-2 heading-3 mb-3 md:mb-6">
              {contentfulEntries.topSection[0].fields.headline}
            </h2>
            <p className="caption-regular-3 md:caption-regular-1 mb-6 md:mb-8">
              {
                contentfulEntries.topSection[0].fields.bodyText.content[0]
                  .content[0].value
              }
            </p>
            <Link href={contentfulEntries.topSection[0].fields.ctaLink}>
              <button className="btn-normal text-[14px] font-semibold md:text-[18px]">
                {contentfulEntries.topSection[0].fields.ctaText}
              </button>
            </Link>
          </div>
          <div className="flex w-full flex-col items-start md:w-1/2">
            <h2 className="md:heading-2 heading-3 mb-3 md:mb-6">
              {contentfulEntries.topSection[1].fields.headline}
            </h2>
            <p className="caption-regular-3 md:caption-regular-1 mb-6 md:mb-8">
              {
                contentfulEntries.topSection[1].fields.bodyText.content[0]
                  .content[0].value
              }
            </p>
            <Link href={contentfulEntries.topSection[1].fields.ctaLink}>
              <button className="btn-normal text-[14px] font-semibold md:text-[18px]">
                {contentfulEntries.topSection[1].fields.ctaText}
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F9F9F9]">
        <div className="container mx-auto flex flex-col px-4 py-6 sm:min-h-[520px] md:px-10 md:py-8 lg:flex-row lg:px-0 lg:py-[80px]">
          <div className="w-full lg:w-1/2">
            <h2 className="heading-2 mb-8 text-start">
              {contentfulEntries.topSection[2].fields.headline}
            </h2>
            <div className="flex flex-col flex-wrap gap-6">
              {contentfulEntries.pageContent.slice(0, 4).map((items, index) => (
                <div
                  className="flex w-full flex-grow gap-6 rounded-[10px] bg-shade-0 p-4 lg:w-[calc(100%-12px)]"
                  key={index}
                >
                  <div className="h-fit w-fit rounded-[5px] bg-primary-100 p-3">
                    <Image
                      src={`https:${items.fields.image.fields.file.url}`}
                      alt="Hero Image"
                      width={40}
                      height={40}
                      sizes="100vw"
                      className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                    />
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <div className="flex flex-col justify-center">
                      <h3 className="md:heading-3 body-1 font-semibold">
                        {items.fields.headline}
                      </h3>
                      <p className="caption-regular-3">
                        {items.fields.bodyText.content[0].content[0].value}
                      </p>
                    </div>
                    <Image
                      src="/assets/icon_next.svg"
                      alt="Hero Image"
                      width={40}
                      height={40}
                      sizes="100vw"
                      className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="heading-2 mb-8 pt-6 text-start lg:pt-0">
              {contentfulEntries.topSection[3].fields.headline}
            </h2>
            <div className="flex flex-col flex-wrap gap-6">
              {contentfulEntries.pageContent.slice(4, 9).map((items, index) => (
                <div
                  className="flex w-full flex-grow gap-6 rounded-[10px] bg-shade-0 p-4 lg:w-[calc(100%-12px)]"
                  key={index}
                >
                  <div className="h-fit w-fit rounded-[5px] bg-primary-100 p-3">
                    <Image
                      src={`https:${items.fields.image.fields.file.url}`}
                      alt="Hero Image"
                      width={40}
                      height={40}
                      sizes="100vw"
                      className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                    />
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <div className="flex flex-col justify-center">
                      <h3 className="md:heading-3 body-1 font-semibold">
                        {items.fields.headline}
                      </h3>
                      <p className="caption-regular-3">
                        {items.fields.bodyText.content[0].content[0].value}
                      </p>
                    </div>
                    <Image
                      src="/assets/icon_next.svg"
                      alt="Hero Image"
                      width={40}
                      height={40}
                      sizes="100vw"
                      className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="w-full space-y-6 bg-[#D0F3FC26]">
        <div className="container mx-auto flex flex-col items-center justify-center space-y-6 px-4 py-6 md:px-10 md:py-8 lg:py-[60px]">
          <h1 className="heading-2 sm:heading-1 text-center">
            {contentfulEntries.topSection[4].fields.headline}
          </h1>
          <p className="caption-regular-3 sm:caption-regular-1 text-center">
            {
              contentfulEntries.topSection[4].fields.bodyText.content[0]
                .content[0].value
            }
          </p>
          <div className="flex flex-row justify-center gap-4">
            <Link href={contentfulEntries.topSection[4].fields.ctaLink}>
              <button className="btn-normal">
                {contentfulEntries.topSection[4].fields.ctaText}
              </button>
            </Link>
          </div>
        </div>
      </div>

      <section className="bg-[#F9F9F9]">
        <div className="container mx-auto flex flex-col px-4 py-6 sm:min-h-[520px] md:px-10 md:py-8 lg:flex-row lg:px-0 lg:py-[80px]">
          <div className="w-full lg:w-1/2">
            <h2 className="heading-2 mb-8 text-start">
              {contentfulEntries.topSection[5].fields.headline}
            </h2>
            <div className="flex flex-col flex-wrap gap-6">
              {contentfulEntries.faq.slice(0, 5).map((items, index) => (
                <div
                  className="flex max-h-[104px] w-full items-center gap-3 rounded-[10px] border-[0.5px]  border-[#CBCBCB] p-6 lg:w-[calc(100%-12px)]"
                  key={index}
                >
                  <Image
                    src={`https:${items.fields.icon.fields.file.url}`}
                    width={46}
                    height={46}
                    alt="Icon Topics FAQ"
                  />
                  <p className="caption-semibold-1">{items.fields.headline}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="heading-2 mb-8 pt-6 text-start lg:pt-0">
              {contentfulEntries.topSection[6].fields.headline}
            </h2>
            <div className="flex flex-col flex-wrap gap-6">
              {contentfulEntries.faq.slice(5, 10).map((items, index) => (
                <div
                  className="flex max-h-[104px] w-full items-center gap-3 rounded-[10px] border-[0.5px]  border-[#CBCBCB] p-6 lg:w-[calc(100%-12px)]"
                  key={index}
                >
                  <Image
                    src={`https:${items.fields.icon.fields.file.url}`}
                    width={46}
                    height={46}
                    alt="Icon Topics FAQ"
                  />
                  <p className="caption-semibold-1">{items.fields.headline}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="w-full space-y-6 bg-primary-500">
        <div className="container mx-auto flex flex-col items-center justify-center space-y-6 px-4 py-6 text-center md:px-10 md:py-8 lg:py-[80px]">
          <h1 className="heading-2 sm:heading-1 text-white">
            {contentfulEntries.extraSection[0].fields.headline}
          </h1>
          <p className="caption-regular-3 sm:caption-regular-1 text-center text-white">
            {
              contentfulEntries.extraSection[0].fields.bodyText.content[0]
                .content[0].value
            }
          </p>
          <div className="flex flex-row gap-4">
            <Link href={contentfulEntries.extraSection[0].fields.ctaUrl}>
              <button className="btn-medium-white">
                {contentfulEntries.extraSection[0].fields.ctaText}
              </button>
            </Link>
            <Link href={contentfulEntries.extraSection[0].fields.ctaUrl2}>
              <button className="btn-line-medium-white">
                {contentfulEntries.extraSection[0].fields.ctaText2}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const contentfulEntries = await fetchContentfulEntries('landingPage');
  console.log(contentfulEntries);

  // Check if contentfulEntries is an array before filtering
  const filteredEntries = Array.isArray(contentfulEntries.items)
    ? contentfulEntries.items.find((entry) => {
        console.log(entry.fields.internalName);
        return entry.fields.internalName === 'Help Center';
      }).fields // Return only the .fields property
    : {};

  return {
    props: {
      contentfulEntries: filteredEntries,
    },
  };
}
