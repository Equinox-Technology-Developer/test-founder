import React from 'react';
import Image from 'next/image';
import { fetchContentfulEntries } from '@/lib/contentful/client';
import Navbar from '@/components/Navbar';
import TopNavbar from '@/components/TopNavbar';
import Link from 'next/link';

export default function Custom404({ contentfulEntries }) {
  return (
    <section className="h-screen max-h-screen overflow-hidden">
      <TopNavbar />
      <Navbar />
      <div className="container mx-auto">
        <div className="flex h-screen flex-col items-center px-[10px] pb-[124px] pt-0 lg:flex-row lg:px-0">
          <div className="flex h-screen w-full flex-col justify-center space-y-6 lg:w-[50%]">
            <div>
              <p className="md:heading-2 heading-3 text-center lg:text-start">
                {
                  contentfulEntries.topBanner.fields.bodyText.content[0]
                    .content[0].value
                }
                <span className="heading-2 text-error-500">
                  {
                    contentfulEntries.topBanner.fields.bodyText.content[0]
                      .content[1].value
                  }
                </span>
              </p>
              <h1 className="mt-0 text-center text-[80px] font-bold md:text-[100px] lg:text-start">
                {
                  contentfulEntries.topBanner.fields.bodyText.content[1]
                    .content[0].value
                }
              </h1>
            </div>
            <p className="caption-semibold-1 text-center lg:text-start">
              {
                contentfulEntries.topBanner.fields.bodyText.content[2]
                  .content[0].value
              }
            </p>
            <ul className="list-inside list-disc text-center lg:text-start">
              <li>
                {
                  contentfulEntries.topBanner.fields.bodyText.content[3]
                    .content[0].content[0].content[0].value
                }{' '}
                <a
                  href={
                    contentfulEntries.topBanner.fields.bodyText.content[3]
                      .content[0].content[0].content[1].data.uri
                  }
                >
                  {
                    contentfulEntries.topBanner.fields.bodyText.content[3]
                      .content[0].content[0].content[1].content[0].value
                  }
                </a>
              </li>
              <li>
                {
                  contentfulEntries.topBanner.fields.bodyText.content[3]
                    .content[1].content[0].content[0].value
                }{' '}
                <a
                  href={
                    contentfulEntries.topBanner.fields.bodyText.content[3]
                      .content[1].content[0].content[1].data.uri
                  }
                >
                  {
                    contentfulEntries.topBanner.fields.bodyText.content[3]
                      .content[1].content[0].content[1].content[0].value
                  }
                </a>
              </li>
            </ul>
            <Link
              href={contentfulEntries.topBanner.fields.ctaUrl}
              className="flex justify-center lg:justify-start"
            >
              <button className="btn-normal">
                {contentfulEntries.topBanner.fields.ctaText}
              </button>
            </Link>
          </div>
          <div className="hidden w-full justify-center md:flex lg:w-[50%]">
            <Image
              src={`https:${contentfulEntries.topBanner.fields.image.fields.file.url}`}
              alt="404"
              width={578}
              height={481}
              className="h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export async function getStaticProps() {
  const contentfulEntries = await fetchContentfulEntries('landingPage');

  // Check if contentfulEntries is an array before filtering
  const filteredEntries = Array.isArray(contentfulEntries.items)
    ? contentfulEntries.items.find((entry) => {
        console.log(entry.fields.internalName);
        return entry.fields.internalName === '404';
      }).fields // Return only the .fields property
    : {};

  return {
    props: {
      contentfulEntries: filteredEntries,
    },
  };
}
