import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Layout } from '@/components';
import { fetchContentfulEntries } from '@/lib/contentful/client';

export default function BookDemo({ contentfulEntries }) {
  return (
    <>
      <Layout pageTitle="Book a Demo">
        <section className="bg-[#F9F9F9] bg-blur bg-right bg-no-repeat pt-0">
          <div className="container mx-auto pb-20">
            {' '}
            <div className="flex w-full flex-col items-center justify-between lg:flex-row lg:px-0 lg:pb-[80px] lg:pt-[150px]">
              <div className="flex w-full max-w-[646px] flex-col items-start px-4 text-left">
                <h1 className="sm:heading-1 heading-2 mb-6 mt-[70px] w-full text-center md:mt-[100px] lg:mt-0 lg:text-start">
                  {contentfulEntries.topBanner.fields.headline}
                </h1>
                <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-0 text-center lg:text-start">
                  {
                    contentfulEntries.topBanner.fields.bodyText.content[0]
                      .content[0].value
                  }
                </p>
                <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-0 text-center lg:text-start">
                  <span className="font-bold">
                    {
                      contentfulEntries.topBanner.fields.bodyText.content[1]
                        .content[0].value
                    }{' '}
                  </span>{' '}
                  {
                    contentfulEntries.topBanner.fields.bodyText.content[1]
                      .content[1].value
                  }
                </p>
                <div className="mb-6 flex flex-row flex-wrap items-center justify-center gap-4 md:mb-[60px] lg:mb-0 lg:flex-nowrap lg:justify-start">
                  {contentfulEntries.pageContent.map((logo, index) => (
                    <Image
                      key={index}
                      src={`https:${logo.fields.image.fields.file.url}`}
                      width="119"
                      height="80"
                      className="h-fit w-fit"
                      alt="logo-company"
                    />
                  ))}
                </div>
              </div>
              <div className="flex h-auto w-full justify-center px-4 md:w-full lg:min-h-[403px] lg:w-full lg:min-w-[609px] lg:max-w-lg lg:px-0">
                <form className="h-full w-full rounded-[20px] bg-shade-0 px-[42px] py-[32px] shadow-[0_4px_10px_0px_rgba(0,0,0,0.15)] md:w-[580px] ">
                  <div className="flex flex-col gap-6 ">
                    <p className="caption-regular-2 flex w-full justify-end gap-2">
                      Not you? <span>Click here to reset</span>
                    </p>
                    <div className="flex flex-col">
                      <label className="caption-regular-4 text-[#CBCBCB]">
                        Work email address*
                      </label>
                      <input
                        type="email"
                        className="h-[48px] rounded-[5px] border-[0.75px] border-[#CBCBCB] bg-shade-0 px-4 py-[10px]"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="caption-regular-4 text-[#CBCBCB]">
                        Full name*
                      </label>
                      <input
                        type="text"
                        className="h-[48px] rounded-[5px] border-[0.75px] border-[#CBCBCB] bg-shade-0 px-4 py-[10px]"
                      />
                    </div>
                    <div className="flex items-end justify-between gap-6 ">
                      <div className="flex w-1/2 flex-col md:w-full">
                        <label className="caption-regular-4 text-[#CBCBCB]">
                          Job function*
                        </label>
                        <input
                          type="email"
                          className="h-[48px] w-full rounded-[5px] border-[0.75px] border-[#CBCBCB] bg-shade-0 px-4 py-[10px]"
                        />
                      </div>
                      <div className="flex w-1/2 flex-col md:w-full">
                        <label className="caption-regular-4 text-[#CBCBCB]">
                          Company name*
                        </label>
                        <input
                          type="text"
                          className="h-[48px] w-full rounded-[5px] border-[0.75px] border-[#CBCBCB] bg-shade-0 px-4 py-[10px]"
                        />
                      </div>
                    </div>
                    <div className="flex items-end justify-between gap-6">
                      <div className="flex w-full flex-col">
                        <label className="caption-regular-4 text-[#CBCBCB]">
                          How many people work in your organization (Full Time
                          Equivalent)?*
                        </label>
                        <select className="h-[48px] w-full rounded-[5px] border-[0.75px] border-[#CBCBCB] bg-shade-0 px-4 py-[10px]">
                          <option value="DEFAULT" disabled selected hidden>
                            FTE
                          </option>
                          <option value="1-15">1-15</option>
                          <option value="16-30">16-30</option>
                          <option value="31-50">31-50</option>
                          <option value="51-100">51-100</option>
                        </select>
                      </div>
                      <div className="flex w-full flex-col">
                        <label className="caption-regular-4 text-[#CBCBCB]">
                          How many people are you planning to hire next year?*
                        </label>
                        <select className="h-[48px] w-full rounded-[5px] border-[0.75px] border-[#CBCBCB] bg-shade-0 px-4 py-[10px]">
                          <option value="DEFAULT" disabled selected hidden>
                            Please Select
                          </option>
                          <option value="1-15">1-15</option>
                          <option value="16-30">16-30</option>
                          <option value="31-50">31-50</option>
                          <option value="51-100">51-100</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label className="caption-regular-4 text-[#CBCBCB]">
                        Do you have an Applicant Tracking System (ATS)?
                      </label>
                      <select className="h-[48px] rounded-[5px] border-[0.75px] border-[#CBCBCB] bg-shade-0 px-4 py-[10px]">
                        <option value="DEFAULT" disabled selected hidden>
                          Unknown
                        </option>
                        <option value="1-15">1-15</option>
                        <option value="16-30">16-30</option>
                        <option value="31-50">31-50</option>
                        <option value="51-100">51-100</option>
                      </select>
                    </div>
                    <p className="caption-regular-3">
                      TestFounder needs the contact information you provide to
                      us to contact you about our products and services. You may
                      unsubscribe from these communications at any time. For
                      information on how to unsubscribe, as well as our privacy
                      practices and commitment to protecting your privacy,
                      please review our Privacy Policy.
                    </p>
                    <div className="flex w-full justify-end">
                      <button className="btn-normal">Next</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="flex h-fit items-center bg-[#F9F9F9] px-4 py-6 sm:min-h-[520px] md:px-[40px] md:py-[40px] lg:px-0 lg:py-0">
          <div className="container mx-auto ">
            <div className="flex flex-col items-center gap-6 lg:flex-row lg:py-[60px]">
              <div className="relative flex w-full flex-col items-center space-y-6 md:w-full md:items-start lg:w-1/2">
                <h1 className="heading-2 sm:heading-1 mb-0 mt-0 text-center sm:text-start">
                  {contentfulEntries.topSection[0].fields.headline}
                </h1>
                <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                  {
                    contentfulEntries.topSection[0].fields.bodyText.content[0]
                      .content[0].value
                  }
                </p>
                <Link href={contentfulEntries.topSection[0].fields.ctaLink}>
                  <button className="btn-line-normal-black">
                    {contentfulEntries.topSection[0].fields.ctaText}
                  </button>
                </Link>
              </div>
              <div className="mb-16 w-full sm:w-1/2 md:mb-0 md:text-left ">
                <Image
                  src={`https:${contentfulEntries.topSection[0].fields.image.fields.file.url}`}
                  alt="Hero Image"
                  width={462}
                  height={473}
                  sizes="100vw"
                  className="z-50"
                />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const contentfulEntries = await fetchContentfulEntries('landingPage');

  // Check if contentfulEntries is an array before filtering
  const filteredEntries = Array.isArray(contentfulEntries.items)
    ? contentfulEntries.items.find((entry) => {
        console.log(entry.fields.internalName);
        return entry.fields.internalName === 'Book Demo';
      }).fields // Return only the .fields property
    : {};

  return {
    props: {
      contentfulEntries: filteredEntries,
    },
  };
}
