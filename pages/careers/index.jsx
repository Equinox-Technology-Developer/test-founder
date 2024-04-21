import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Layout } from '@/components';
import CardAssessmentDefault from '../../components/CardAssessment/CardAssessmentDefault';
import { fetchContentfulEntries } from '@/lib/contentful/client';

export default function Careers({ contentfulEntries }) {
  const [activeCardCareers, setActiveCardCareers] = useState('cardCareers1');

  const handleCardCareersClick = (cardId) => {
    setActiveCardCareers(cardId);
  };
  return (
    <Layout pageTitle="Talent Assessment">
      {/* Banner */}
      <section className="bg-grayscale-100">
        <div className="container mx-auto px-4 py-6 md:px-[40px] md:py-[32px] lg:px-0 lg:pb-[60px]">
          <div className="relative flex flex-col items-center sm:static lg:flex-row">
            <div className="flex flex-col items-center text-center md:mb-0 md:w-full md:items-center md:text-left lg:w-1/2 lg:flex-grow lg:items-start ">
              <h1 className="sm:heading-1 heading-2 mb-6 mt-20 ">
                {contentfulEntries.topBanner.fields.headline}
              </h1>
              <p className="caption-regular-3 md:caption-regular-1 mb-6 mt-0 text-center lg:text-start">
                {
                  contentfulEntries.topBanner.fields.bodyText.content[0]
                    .content[0].value
                }
              </p>
              <Link href={contentfulEntries.topBanner.fields.ctaUrl}>
                <button className="btn-line-normal-black">
                  {contentfulEntries.topBanner.fields.ctaText}
                </button>
              </Link>
            </div>
            <div className="relative flex w-full justify-center md:w-full lg:mt-20 lg:w-1/2">
              <Image
                src={`https:${contentfulEntries.topBanner.fields.image.fields.file.url}`}
                alt="Hero Image"
                width={635}
                height={524}
                sizes="100vw"
                className="mt-[21px] flex h-auto w-[80%] md:w-[92%] lg:mt-0 lg:w-[97%]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-grayscale-100">
        <div className="container mx-auto px-4 py-6 md:px-[40px] md:py-[32px] lg:px-0 lg:py-[60px]">
          <div className="flex flex-col items-center">
            <h2 className="md:heading-1 heading-2 mb-[40px] text-center">
              {contentfulEntries.topSection[0].fields.headline}
            </h2>
            <Image
              src={`https:${contentfulEntries.topSection[0].fields.image.fields.file.url}`}
              alt="Hero Image"
              width={1105}
              height={541}
              sizes="100vw"
              className="flex h-auto w-full md:w-full lg:w-[97%] lg:px-[102px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-grayscale-100">
        <div className="container mx-auto px-4 py-6 md:px-[40px] md:py-[32px] lg:px-0 lg:py-[60px]">
          <h2 className="md:heading-1 heading-2 mb-[24px] text-center lg:text-start">
            {contentfulEntries.topSection[1].fields.headline}
          </h2>
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2">
              <CardAssessmentDefault
                id="cardCareers1"
                title={contentfulEntries.pageContent[0].fields.headline}
                paragraph={
                  contentfulEntries.pageContent[0].fields.bodyText.content[0]
                    .content[0].value
                }
                isActive={activeCardCareers === 'cardCareers1'}
                onClick={() => handleCardCareersClick('cardCareers1')}
                icon_url={
                  activeCardCareers === 'cardCareers1'
                    ? ''
                    : '/assets/icon-plus-product.svg'
                }
              />
              <CardAssessmentDefault
                id="cardCareers2"
                title={contentfulEntries.pageContent[1].fields.headline}
                paragraph={
                  contentfulEntries.pageContent[1].fields.bodyText.content[0]
                    .content[0].value
                }
                isActive={activeCardCareers === 'cardCareers2'}
                onClick={() => handleCardCareersClick('cardCareers2')}
                icon_url={
                  activeCardCareers === 'cardCareers2'
                    ? ''
                    : '/assets/icon-plus-product.svg'
                }
              />
              <CardAssessmentDefault
                id="cardCareers3"
                title={contentfulEntries.pageContent[2].fields.headline}
                paragraph={
                  contentfulEntries.pageContent[2].fields.bodyText.content[0]
                    .content[0].value
                }
                isActive={activeCardCareers === 'cardCareers3'}
                onClick={() => handleCardCareersClick('cardCareers3')}
                icon_url={
                  activeCardCareers === 'cardCareers3'
                    ? ''
                    : '/assets/icon-plus-product.svg'
                }
              />
            </div>
            <div className="hidden items-center justify-end lg:flex lg:w-1/2">
              <div className="flex flex-col p-4">
                <Image
                  src={`https:${contentfulEntries.pageContent[3].fields.image.fields.file.url}`}
                  width={276}
                  height={154}
                  className="mb-4"
                  alt="floyd miles"
                />
                <p className="caption-semibold-1">
                  {contentfulEntries.pageContent[3].fields.headline}
                </p>
                <p className="caption-light-2">
                  {
                    contentfulEntries.pageContent[3].fields.bodyText.content[0]
                      .content[0].value
                  }
                </p>
              </div>
              <div className="flex flex-col p-4">
                <Image
                  src={`https:${contentfulEntries.pageContent[4].fields.image.fields.file.url}`}
                  width={276}
                  height={154}
                  className="mb-4"
                  alt="theresa webb"
                />
                <p className="caption-semibold-1">
                  {contentfulEntries.pageContent[4].fields.headline}
                </p>
                <p className="caption-light-2">
                  {
                    contentfulEntries.pageContent[4].fields.bodyText.content[0]
                      .content[0].value
                  }
                  r
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-grayscale-100">
        <div className="container mx-auto px-4 py-6 md:px-[40px] md:py-[32px] lg:px-0 lg:py-[60px]">
          <h2 className="md:heading-1 heading-2 mb-[24px] text-center lg:text-start">
            {contentfulEntries.topSection[2].fields.headline}
          </h2>
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2">
              <CardAssessmentDefault
                title={contentfulEntries.pageContent[5].fields.headline}
                icon_url={'/assets/icon-star-2.svg'}
              />
              <CardAssessmentDefault
                title={contentfulEntries.pageContent[6].fields.headline}
                icon_url={'/assets/icon-plus-product.svg'}
              />
              <CardAssessmentDefault
                title={contentfulEntries.pageContent[7].fields.headline}
                icon_url={'/assets/icon-plus-product.svg'}
              />
              <CardAssessmentDefault
                title={contentfulEntries.pageContent[8].fields.headline}
                icon_url={'/assets/icon-plus-product.svg'}
              />
              <CardAssessmentDefault
                title={contentfulEntries.pageContent[9].fields.headline}
                icon_url={'/assets/icon-plus-product.svg'}
              />
              <CardAssessmentDefault
                title={contentfulEntries.pageContent[10].fields.headline}
                icon_url={'/assets/icon-plus-product.svg'}
              />
            </div>
            <div className="hidden items-center justify-end lg:flex lg:w-1/2">
              <div className="flex flex-col p-4">
                <p className="caption-regular-2 mb-[20px]">
                  <span className="caption-semibold-2">
                    {
                      contentfulEntries.pageContent[11].fields.bodyText
                        .content[0].content[0].value
                    }
                  </span>{' '}
                  {
                    contentfulEntries.pageContent[11].fields.bodyText.content[0]
                      .content[1].value
                  }
                </p>
                <p className="caption-semibold-2">
                  {
                    contentfulEntries.pageContent[11].fields.bodyText.content[1]
                      .content[0].value
                  }
                </p>
                <ul className="caption-regular-2 list-inside list-disc">
                  <li>
                    {
                      contentfulEntries.pageContent[11].fields.bodyText
                        .content[2].content[0].content[0].content[0].value
                    }
                  </li>
                  <li>
                    {
                      contentfulEntries.pageContent[11].fields.bodyText
                        .content[2].content[1].content[0].content[0].value
                    }
                  </li>
                  <li>
                    {
                      contentfulEntries.pageContent[11].fields.bodyText
                        .content[2].content[2].content[0].content[0].value
                    }
                  </li>
                  <li>
                    {
                      contentfulEntries.pageContent[11].fields.bodyText
                        .content[2].content[3].content[0].content[0].value
                    }
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-grayscale-100">
        <div className="container mx-auto px-4 py-6 md:px-[40px] md:py-[32px] lg:px-0 lg:py-[60px]">
          <h2 className="md:heading-1 heading-2 mb-[32px] text-center lg:text-start">
            {contentfulEntries.topSection[3].fields.headline}
          </h2>
          <div className="mb-[32px] flex flex-col lg:flex-row">
            <div className="flex w-full flex-col gap-6 lg:flex-row">
              <div className="relative flex w-full lg:w-[33%]">
                <input
                  type="text"
                  className="w-full border-[0.75px] border-[#CBCBCB] bg-white px-4 py-[10px] placeholder:text-base placeholder:text-[#CBCBCB] xl:w-full"
                  placeholder="Search"
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
              <div className="relative flex w-full lg:w-[33%]">
                <select className="w-full border-[0.75px] border-[#CBCBCB] bg-white px-4 py-[10px] placeholder:text-base placeholder:text-[#CBCBCB] xl:w-full">
                  <option value="DEFAULT" selected>
                    All departments
                  </option>
                  <option value="1-15">People & Culture</option>
                  <option value="16-30">Finance</option>
                  <option value="31-50">Assessment</option>
                  <option value="51-100">Product</option>
                </select>
              </div>
              <div className="relative flex w-full lg:w-[33%]">
                <select className="w-full border-[0.75px] border-[#CBCBCB] bg-white px-4 py-[10px] placeholder:text-base placeholder:text-[#CBCBCB] xl:w-full">
                  <option value="DEFAULT" selected>
                    All job locations
                  </option>
                  <option value="1-15">100% Remote</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="flex w-full flex-col gap-6 lg:flex-row">
              <div className="relative flex w-full flex-col gap-3 bg-white p-6 lg:w-[33%]">
                <h3 className="md:caption-semibold-1 caption-bold-3">
                  {contentfulEntries.pageContent[12].fields.headline}
                </h3>
                <div className="flex gap-3">
                  <Image
                    src="/assets/icon-employee.svg"
                    alt="icon-employee"
                    width={24}
                    height={24}
                    sizes="100vw"
                    className="flex h-auto"
                  />
                  <p className="caption-regular-3">
                    {
                      contentfulEntries.pageContent[12].fields.bodyText
                        .content[0].content[0].value
                    }
                  </p>
                </div>
                <div className="flex gap-3">
                  <Image
                    src="/assets/icon-job-status.svg"
                    alt="icon-job-status"
                    width={24}
                    height={24}
                    sizes="100vw"
                    className="flex h-auto"
                  />
                  <p className="caption-regular-3">
                    {
                      contentfulEntries.pageContent[12].fields.bodyText
                        .content[1].content[0].value
                    }
                  </p>
                </div>
                <button className="btn-line-normal-black flex self-end">
                  More Details
                </button>
              </div>
              <div className="relative flex w-full flex-col gap-3 bg-white p-6 lg:w-[33%]">
                <h3 className="md:caption-semibold-1 caption-bold-3">
                  {contentfulEntries.pageContent[13].fields.headline}
                </h3>
                <div className="flex gap-3">
                  <Image
                    src="/assets/icon-employee.svg"
                    alt="icon-employee"
                    width={24}
                    height={24}
                    sizes="100vw"
                    className="flex h-auto"
                  />
                  <p className="caption-regular-3">
                    {
                      contentfulEntries.pageContent[13].fields.bodyText
                        .content[0].content[0].value
                    }
                  </p>
                </div>
                <div className="flex gap-3">
                  <Image
                    src="/assets/icon-job-status.svg"
                    alt="icon-job-status"
                    width={24}
                    height={24}
                    sizes="100vw"
                    className="flex h-auto"
                  />
                  <p className="caption-regular-3">
                    {
                      contentfulEntries.pageContent[13].fields.bodyText
                        .content[1].content[0].value
                    }
                  </p>
                </div>
                <button className="btn-line-normal-black flex self-end">
                  More Details
                </button>
              </div>
              <div className="relative flex w-full flex-col gap-3 bg-white p-6 lg:w-[33%]">
                <h3 className="md:caption-semibold-1 caption-bold-3">
                  {contentfulEntries.pageContent[14].fields.headline}
                </h3>
                <div className="flex gap-3">
                  <Image
                    src="/assets/icon-employee.svg"
                    alt="icon-employee"
                    width={24}
                    height={24}
                    sizes="100vw"
                    className="flex h-auto"
                  />
                  <p className="caption-regular-3">
                    {
                      contentfulEntries.pageContent[14].fields.bodyText
                        .content[0].content[0].value
                    }
                  </p>
                </div>
                <div className="flex gap-3">
                  <Image
                    src="/assets/icon-job-status.svg"
                    alt="icon-job-status"
                    width={24}
                    height={24}
                    sizes="100vw"
                    className="flex h-auto"
                  />
                  <p className="caption-regular-3">
                    {
                      contentfulEntries.pageContent[14].fields.bodyText
                        .content[1].content[0].value
                    }
                  </p>
                </div>
                <button className="btn-line-normal-black flex self-end">
                  More Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const contentType = 'landingPage'; // Modify content type here
  const { items } = await fetchContentfulEntries(contentType);

  const entries = items.find(
    (entry) => entry.fields.internalName === 'Careers',
  );

  // Check if the entry is found
  if (entries) {
    console.log('Found the homepage entry:', entries);
  } else {
    console.log('Homepage entry not found.');
  }

  return {
    props: {
      contentfulEntries: entries ? entries.fields : {}, // Modify key-value of props
    },
  };
}
