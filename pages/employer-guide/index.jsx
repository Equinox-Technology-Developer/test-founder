import React from 'react';

import { Layout } from '@/components';
import Image from 'next/image';
import { fetchContentfulEntries } from '@/lib/contentful/client';

export default function EmployerGuide({ contentfulEntries }) {
  return (
    <Layout pageTitle="Employer Guide">
      <section className="bg-[#F9F9F9]">
        <div className="container mx-auto mb-[80px] mt-[92px] px-4 py-6 md:px-10 md:py-8 lg:px-0 lg:py-0">
          <div className="mb-[24px] pt-[8px] md:mb-[40px] md:pt-0 lg:pt-[80px]">
            <h1 className="heading-2 md:heading-2 mb-4 md:mb-6">
              {contentfulEntries.topBanner.fields.headline}
            </h1>
            <p className="caption-regular-3 md:caption-regular-1">
              {
                contentfulEntries.topBanner.fields.bodyText.content[0]
                  .content[0].value
              }
            </p>
          </div>
          <div className="flex flex-col flex-wrap gap-4 md:gap-6 lg:flex-row">
            <div className="flex w-full flex-col gap-4 rounded-[20px] bg-white px-6 pb-10 pt-6 shadow-[0_4px_10px_0px_rgba(0,0,0,0.15)] md:gap-6 lg:min-h-[416px] lg:w-[calc(50%-12px)]">
              <h2 className="heading-3 md:heading-2 ">
                {contentfulEntries.pageContent[0].fields.headline}
              </h2>
              {contentfulEntries.faq.slice(0, 3).map((faq, index) => (
                <div
                  className="flex flex-row items-center justify-between"
                  key={index}
                >
                  <p className="caption-regular-2 md:caption-regular-1">
                    {faq.fields.headline}
                  </p>
                  <Image
                    src="/assets/icon_next.svg"
                    alt="Hero Image"
                    width={24}
                    height={24}
                    sizes="100vw"
                    className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                  />
                </div>
              ))}
            </div>
            <div className="flex w-full flex-col gap-4 rounded-[20px] bg-white px-6 pb-10 pt-6 shadow-[0_4px_10px_0px_rgba(0,0,0,0.15)] md:gap-6 lg:min-h-[416px] lg:w-[calc(50%-12px)]">
              <h2 className="heading-3 md:heading-2">
                {contentfulEntries.pageContent[1].fields.headline}
              </h2>
              {contentfulEntries.faq.slice(3, 9).map((faq, index) => (
                <div
                  className="flex flex-row items-center justify-between"
                  key={index}
                >
                  <p className="caption-regular-2 md:caption-regular-1">
                    {faq.fields.headline}
                  </p>
                  <Image
                    src="/assets/icon_next.svg"
                    alt="Hero Image"
                    width={24}
                    height={24}
                    sizes="100vw"
                    className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                  />
                </div>
              ))}
            </div>
            <div className="flex w-full flex-col gap-4 rounded-[20px] bg-white px-6 pb-10 pt-6 shadow-[0_4px_10px_0px_rgba(0,0,0,0.15)] md:gap-6 lg:min-h-[416px] lg:w-[calc(50%-12px)]">
              <h2 className="heading-3 md:heading-2">
                {contentfulEntries.pageContent[2].fields.headline}
              </h2>
              {contentfulEntries.faq.slice(9, 12).map((faq, index) => (
                <div
                  className="flex flex-row items-center justify-between"
                  key={index}
                >
                  <p className="caption-regular-2 md:caption-regular-1">
                    {faq.fields.headline}
                  </p>
                  <Image
                    src="/assets/icon_next.svg"
                    alt="Hero Image"
                    width={24}
                    height={24}
                    sizes="100vw"
                    className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                  />
                </div>
              ))}
            </div>
            <div className="flex w-full flex-col gap-4 rounded-[20px] bg-white px-6 pb-10 pt-6 shadow-[0_4px_10px_0px_rgba(0,0,0,0.15)] md:gap-6 lg:min-h-[416px] lg:w-[calc(50%-12px)]">
              <h2 className="heading-3 md:heading-2">
                {contentfulEntries.pageContent[3].fields.headline}
              </h2>
              {contentfulEntries.faq.slice(12, 17).map((faq, index) => (
                <div
                  className="flex flex-row items-center justify-between"
                  key={index}
                >
                  <p className="caption-regular-2 md:caption-regular-1">
                    {faq.fields.headline}
                  </p>
                  <Image
                    src="/assets/icon_next.svg"
                    alt="Hero Image"
                    width={24}
                    height={24}
                    sizes="100vw"
                    className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                  />
                </div>
              ))}
            </div>
            <div className="flex w-full flex-col gap-4 rounded-[20px] bg-white px-6 pb-10 pt-6 shadow-[0_4px_10px_0px_rgba(0,0,0,0.15)] md:gap-6 lg:min-h-[416px] lg:w-[calc(50%-12px)]">
              <h2 className="heading-3 md:heading-2">
                {contentfulEntries.pageContent[4].fields.headline}
              </h2>
              {contentfulEntries.faq.slice(17, 22).map((faq, index) => (
                <div
                  className="flex flex-row items-center justify-between"
                  key={index}
                >
                  <p className="caption-regular-2 md:caption-regular-1">
                    {faq.fields.headline}
                  </p>
                  <Image
                    src="/assets/icon_next.svg"
                    alt="Hero Image"
                    width={24}
                    height={24}
                    sizes="100vw"
                    className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                  />
                </div>
              ))}
            </div>
            <div className="flex w-full flex-col gap-4 rounded-[20px] bg-white px-6 pb-10 pt-6 shadow-[0_4px_10px_0px_rgba(0,0,0,0.15)] md:gap-6 lg:min-h-[416px] lg:w-[calc(50%-12px)]">
              <h2 className="heading-3 md:heading-2">
                {contentfulEntries.pageContent[5].fields.headline}
              </h2>
              {contentfulEntries.faq.slice(22, 28).map((faq, index) => (
                <div
                  className="flex flex-row items-center justify-between"
                  key={index}
                >
                  <p className="caption-regular-2 md:caption-regular-1">
                    {faq.fields.headline}
                  </p>
                  <Image
                    src="/assets/icon_next.svg"
                    alt="Hero Image"
                    width={24}
                    height={24}
                    sizes="100vw"
                    className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                  />
                </div>
              ))}
            </div>
            <div className="flex w-full flex-col gap-4 rounded-[20px] bg-white px-6 pb-10 pt-6 shadow-[0_4px_10px_0px_rgba(0,0,0,0.15)] md:gap-6 lg:min-h-[416px] lg:w-[calc(50%-12px)]">
              <h2 className="heading-3 md:heading-2">
                {contentfulEntries.pageContent[6].fields.headline}
              </h2>
              {contentfulEntries.faq.slice(28, 34).map((faq, index) => (
                <div
                  className="flex flex-row items-center justify-between"
                  key={index}
                >
                  <p className="caption-regular-2 md:caption-regular-1">
                    {faq.fields.headline}
                  </p>
                  <Image
                    src="/assets/icon_next.svg"
                    alt="Hero Image"
                    width={24}
                    height={24}
                    sizes="100vw"
                    className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                  />
                </div>
              ))}
            </div>
            <div className="flex w-full flex-col gap-4 rounded-[20px] bg-white px-6 pb-10 pt-6 shadow-[0_4px_10px_0px_rgba(0,0,0,0.15)] md:gap-6 lg:min-h-[416px] lg:w-[calc(50%-12px)]">
              <h2 className="heading-3 md:heading-2">
                {contentfulEntries.pageContent[7].fields.headline}
              </h2>
              {contentfulEntries.faq.slice(34, 37).map((faq, index) => (
                <div
                  className="flex flex-row items-center justify-between"
                  key={index}
                >
                  <p className="caption-regular-2 md:caption-regular-1">
                    {faq.fields.headline}
                  </p>
                  <Image
                    src="/assets/icon_next.svg"
                    alt="Hero Image"
                    width={24}
                    height={24}
                    sizes="100vw"
                    className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                  />
                </div>
              ))}
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
        return entry.fields.internalName === 'Employer Guide';
      }).fields // Return only the .fields property
    : {};

  return {
    props: {
      contentfulEntries: filteredEntries,
    },
  };
}
