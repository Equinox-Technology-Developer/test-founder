import React from 'react';

import { Layout } from '@/components';
import Link from 'next/link';
import Image from 'next/image';
import { fetchContentfulEntries } from '@/lib/contentful/client';

export default function CandidatesGuide({ contentfulEntries }) {
  return (
    <Layout pageTitle="For Candidates" showNavbarCandidate={true}>
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
                width={599}
                height={531}
                sizes="100vw"
                className=" z-10 mt-8 flex h-auto w-[80%] md:w-[60%] lg:mt-20 lg:w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-grayscale-200">
        <div className="container mx-auto px-4 py-6 sm:min-h-[520px] md:px-10 md:py-8 lg:px-0 lg:py-[80px]">
          <h2 className="heading-2 mb-8 text-center lg:text-start">
            {contentfulEntries.topSection[0].fields.headline}
          </h2>
          <div className="flex flex-col flex-wrap gap-6 lg:flex-row">
            {contentfulEntries.pageContent.map((data, index) => (
              <div
                className="flex w-full flex-grow gap-6 rounded-[10px] bg-shade-0 p-4 lg:w-[calc(50%-12px)]"
                key={index}
              >
                <div className="h-fit w-fit rounded-[5px] bg-primary-100 p-3">
                  <Image
                    src={`https:${data.fields.image.fields.file.url}`}
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
                      {data.fields.headline}
                    </h3>
                    <p className="caption-regular-3">
                      {data.fields.bodyText.content[0].content[0].value}
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
      </section>

      <section className="flex h-fit items-center bg-white px-4 py-6 sm:min-h-[520px] md:px-[40px] md:py-[40px] lg:px-0 lg:py-0">
        <div className="container mx-auto ">
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:py-[60px]">
            <div className="relative flex w-full flex-col items-center space-y-6 md:w-full lg:w-1/2 lg:items-start">
              <h3 className="heading-2 md:heading-1 mb-0 mt-0 text-center sm:text-start">
                {contentfulEntries.topSection[1].fields.headline}
              </h3>
              <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                {
                  contentfulEntries.topSection[1].fields.bodyText.content[0]
                    .content[0].value
                }
              </p>
              <Link href={contentfulEntries.topSection[1].fields.ctaLink}>
                <button className="btn-line-normal-black">
                  {contentfulEntries.topSection[1].fields.ctaText}
                </button>
              </Link>
            </div>
            <div className="mb-16 w-full sm:w-1/2 md:mb-0 md:text-left ">
              <Image
                src={`https:${contentfulEntries.topSection[1].fields.image.fields.file.url}`}
                alt="Hero Image"
                width={537}
                height={525}
                sizes="100vw"
                className="z-50"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="flex h-fit items-center bg-white px-4 py-6 sm:min-h-[520px] md:px-[40px] md:py-[40px] lg:px-0 lg:py-0">
        <div className="container mx-auto">
          <div className="flex flex-col-reverse items-center gap-6 lg:flex-row lg:py-[60px]">
            <div className="mb-16 w-full sm:w-1/2 md:mb-0 md:text-left ">
              <Image
                src={`https:${contentfulEntries.topSection[2].fields.image.fields.file.url}`}
                alt="Hero Image"
                width={575}
                height={531}
                sizes="100vw"
                className="z-50"
              />
            </div>
            <div className="relative flex w-full flex-col items-center space-y-6 md:w-full lg:w-1/2 lg:items-start">
              <h3 className="heading-2 md:heading-1 mb-0 mt-0 text-center sm:text-start">
                {contentfulEntries.topSection[2].fields.headline}
              </h3>
              <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                {
                  contentfulEntries.topSection[2].fields.bodyText.content[0]
                    .content[0].value
                }
              </p>
              <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                {
                  contentfulEntries.topSection[2].fields.bodyText.content[1]
                    .content[0].value
                }
              </p>
              <Link href={contentfulEntries.topSection[2].fields.ctaLink}>
                <button className="btn-line-normal-black">
                  {contentfulEntries.topSection[2].fields.ctaText}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="flex h-fit items-center bg-white px-4 py-6 sm:min-h-[520px] md:px-[40px] md:py-[40px] lg:px-0 lg:py-0">
        <div className="container mx-auto ">
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:py-[60px]">
            <div className="relative flex w-full flex-col items-center space-y-6 md:w-full lg:w-1/2 lg:items-start">
              <h3 className="heading-2 md:heading-1 mb-0 mt-0 text-center sm:text-start">
                {contentfulEntries.topSection[3].fields.headline}
              </h3>
              <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                {
                  contentfulEntries.topSection[3].fields.bodyText.content[0]
                    .content[0].value
                }
              </p>
              <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                {
                  contentfulEntries.topSection[3].fields.bodyText.content[1]
                    .content[0].value
                }
              </p>
              <Link href={contentfulEntries.topSection[3].fields.ctaLink}>
                <button className="btn-line-normal-black">
                  {contentfulEntries.topSection[3].fields.ctaText}
                </button>
              </Link>
            </div>
            <div className="mb-16 w-full sm:w-1/2 md:mb-0 md:text-left ">
              <Image
                src={`https:${contentfulEntries.topSection[3].fields.image.fields.file.url}`}
                alt="Hero Image"
                width={595}
                height={554}
                sizes="100vw"
                className="z-50"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-grayscale-200">
        <div className="container mx-auto py-6 lg:py-[80px]">
          <h2 className="heading-2 mb-8 text-center lg:text-start">
            {contentfulEntries.topSection[4].fields.headline}
          </h2>
          <div className="flex flex-col flex-wrap gap-6 lg:flex-row">
            <div className="flex w-full flex-col items-center p-4 lg:w-[calc(33%-12px)]">
              <Image
                src="/assets/relate-post-1.png"
                alt="Hero Image"
                width={389}
                height={228}
                sizes="100vw mb-4 w-full"
              />
              <p className="lg:caption-semibold-1 caption-semibold-3">
                Do years of experience make candidates qualified?
              </p>
            </div>
            <div className="flex w-full flex-col items-center p-4 lg:w-[calc(33%-12px)]">
              <Image
                src="/assets/relate-post-2.png"
                alt="Hero Image"
                width={389}
                height={228}
                sizes="100vw mb-4"
              />
              <p className="lg:caption-semibold-1 caption-semibold-3">
                Do years of experience make candidates qualified?
              </p>
            </div>
            <div className="flex w-full flex-col items-center p-4 lg:w-[calc(33%-12px)]">
              <Image
                src="/assets/relate-post-3.png"
                alt="Hero Image"
                width={389}
                height={228}
                sizes="100vw mb-4"
              />
              <p className="lg:caption-semibold-1 caption-semibold-3">
                Do years of experience make candidates qualified?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:px-16 lg:py-[60px]">
        <div className="container mx-auto px-4 py-6 md:px-[40px] md:py-[32px] lg:px-0 lg:py-0">
          <h3 className="md:heading-1 heading-2 mb-8 text-center lg:text-start">
            {contentfulEntries.topSection[5].fields.headline}
          </h3>
          <div className="flex flex-wrap justify-between gap-6">
            {contentfulEntries.faq.map((faq, index) => (
              <div
                className="flex max-h-[104px] w-full items-center gap-3 rounded-[10px] border-[0.5px] border-[#CBCBCB] p-6 lg:w-[49%]"
                key={index}
              >
                <Image
                  src={`https:${faq.fields.icon.fields.file.url}`}
                  width={46}
                  height={46}
                  alt="Icon Topics FAQ"
                />
                <p className="lg:caption-semibold-1 caption-semibold-3">
                  {faq.fields.headline}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="flex h-full min-h-[366px] w-full items-center space-y-6 bg-primary-500">
        <div className="container mx-auto flex flex-col items-center justify-center space-y-6 px-4 py-6 text-center sm:px-0 sm:py-[60px]">
          <h3 className="heading-2 md:heading-1 text-white">
            {contentfulEntries.topSection[6].fields.internalName}
          </h3>
          <p className="caption-regular-3 sm:caption-regular-1 text-center text-white">
            {
              contentfulEntries.topSection[6].fields.bodyText.content[0]
                .content[0].value
            }
          </p>
          <div className="flex flex-row gap-4">
            <Link href={contentfulEntries.topSection[6].fields.ctaLink}>
              <button className="btn-medium-white">
                {contentfulEntries.topSection[6].fields.ctaText}
              </button>
            </Link>
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
        return entry.fields.internalName === 'Candidates Guide';
      }).fields // Return only the .fields property
    : {};

  return {
    props: {
      contentfulEntries: filteredEntries,
    },
  };
}
