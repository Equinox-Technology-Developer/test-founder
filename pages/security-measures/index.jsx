import React from 'react';

import { Layout } from '@/components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { fetchContentfulEntries } from '@/lib/contentful/client';

export default function SecurityMeasurest({ contentfulEntries }) {
  console.log(contentfulEntries);
  const router = useRouter();
  return (
    <Layout pageTitle="Terms of use">
      <main className="container mx-auto px-4 py-[120px] md:px-[40px] md:py-[130px] lg:px-16 lg:py-[140px]">
        <div className="px-0 lg:px-[100px]">
          <nav className="mb-[60px]">
            <ul className="flex flex-wrap justify-center gap-[35px]">
              <li className="lg:caption-semibold-1 caption-semibold-2">
                <Link
                  href="/terms"
                  className={
                    router.pathname == '/terms'
                      ? 'rounded-[20px] bg-primary-200 px-4 text-primary-500'
                      : 'text-black'
                  }
                >
                  Customer term of use
                </Link>
              </li>
              <li className="lg:caption-semibold-1 caption-semibold-2">
                <Link
                  href="/candidate-terms"
                  className={
                    router.pathname == '/candidate-terms'
                      ? 'rounded-[20px] bg-primary-200 px-4 text-primary-500'
                      : 'text-black'
                  }
                >
                  Candidate term of use
                </Link>
              </li>
              <li className="lg:caption-semibold-1 caption-semibold-2">
                <Link
                  href="/privacy-policy"
                  className={
                    router.pathname == '/privacy-policy'
                      ? 'rounded-[20px] bg-primary-200 px-4 text-primary-500'
                      : 'text-black'
                  }
                >
                  Privacy policy
                </Link>
              </li>
              <li className="lg:caption-semibold-1 caption-semibold-2">
                <Link
                  href="/cookie-policy"
                  className={
                    router.pathname == '/cookie-policy'
                      ? 'rounded-[20px] bg-primary-200 px-4 text-primary-500'
                      : 'text-black'
                  }
                >
                  Cookie policy
                </Link>
              </li>
              <li className="lg:caption-semibold-1 caption-semibold-2">
                <Link
                  href="/security-measures"
                  className={
                    router.pathname == '/security-measures'
                      ? 'rounded-[20px] bg-primary-200 px-4 text-primary-500'
                      : 'text-black'
                  }
                >
                  Security measures
                </Link>
              </li>
              <li className="lg:caption-semibold-1 caption-semibold-2">
                {' '}
                <Link
                  href="/dpa"
                  className={
                    router.pathname == '/dpa'
                      ? 'rounded-[20px] bg-primary-200 px-4 text-primary-500'
                      : 'text-black'
                  }
                >
                  Data processing agreement
                </Link>
              </li>
              <li className="lg:caption-semibold-1 caption-semibold-2">
                {' '}
                <Link
                  href="/service-level-agreement"
                  className={
                    router.pathname == '/service-level-agreement'
                      ? 'rounded-[20px] bg-primary-200 px-4 text-primary-500'
                      : 'text-black'
                  }
                >
                  Service level agreement
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <h1 className="md:heading-1 heading-2">
          {contentfulEntries.pageContent[0].fields.headline}
        </h1>
        <div className="my-6 space-y-4">
          {contentfulEntries.pageContent[0].fields.bodyText.content.map(
            (data, index) => (
              <p className="md:caption-regular-2 caption-regular-3" key={index}>
                {data.content[0].value}
              </p>
            ),
          )}
        </div>
        <div className="my-4 space-y-6">
          <h3 className="heading-3">
            {contentfulEntries.pageContent[1].fields.headline}
          </h3>
          {contentfulEntries.pageContent[1].fields.bodyText.content.map(
            (data, index) => (
              <p className="md:caption-regular-2 caption-regular-3" key={index}>
                {data.content[0].value}
              </p>
            ),
          )}
        </div>
        <div className="my-4 space-y-6">
          <h3 className="heading-3">
            {contentfulEntries.pageContent[2].fields.headline}
          </h3>
          {contentfulEntries.pageContent[2].fields.bodyText.content.map(
            (data, index) => (
              <p className="md:caption-regular-2 caption-regular-3" key={index}>
                {data.content[0].value}
              </p>
            ),
          )}
        </div>
        <div className="my-4 space-y-6">
          <h3 className="heading-3">
            {contentfulEntries.pageContent[3].fields.headline}
          </h3>
          <div className="my-6 space-y-4">
            <p className="md:caption-bold-2 caption-bold-3">
              {
                contentfulEntries.pageContent[3].fields.bodyText.content[0]
                  .content[0].value
              }
            </p>
            <ul className="list-inside list-disc">
              <li className="md:caption-regular-2 caption-regular-3">
                {
                  contentfulEntries.pageContent[3].fields.bodyText.content[1]
                    .content[0].content[0].content[0].value
                }
                <ul className="list-inside list-disc pl-6">
                  {contentfulEntries.pageContent[3].fields.bodyText.content[1].content[0].content[1].content.map(
                    (data, index) => (
                      <li
                        className="md:caption-regular-2 caption-regular-3"
                        key={index}
                      >
                        {data.content[0].content[0].value}
                      </li>
                    ),
                  )}
                </ul>
              </li>
            </ul>
          </div>
          <p className="md:caption-bold-2 caption-bold-3">
            {
              contentfulEntries.pageContent[3].fields.bodyText.content[2]
                .content[0].value
            }
          </p>
          <p className="md:caption-regular-2 caption-regular-3">
            {
              contentfulEntries.pageContent[3].fields.bodyText.content[3]
                .content[0].value
            }
          </p>
        </div>
        <div className="my-4 space-y-6">
          <h3 className="heading-3">
            {contentfulEntries.pageContent[4].fields.headline}
          </h3>
          <div className="my-6 space-y-4">
            <p className="md:caption-bold-2 caption-bold-3">
              {
                contentfulEntries.pageContent[4].fields.bodyText.content[0]
                  .content[0].value
              }
            </p>
            <ul className="list-inside list-disc">
              {contentfulEntries.pageContent[4].fields.bodyText.content[1].content.map(
                (data, index) => (
                  <li
                    className="md:caption-regular-2 caption-regular-3"
                    key={index}
                  >
                    {data.content[0].content[0].value}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
        <div className="my-4 space-y-6">
          <h3 className="heading-3">
            {contentfulEntries.pageContent[5].fields.headline}
          </h3>
          <div className="my-6 space-y-4">
            <p className="md:caption-regular-2 caption-regular-3">
              {
                contentfulEntries.pageContent[5].fields.bodyText.content[0]
                  .content[0].value
              }
            </p>
          </div>
        </div>
        <div className="my-4 space-y-6">
          <h3 className="heading-3">
            {contentfulEntries.pageContent[6].fields.headline}
          </h3>
          <div className="my-6 space-y-4">
            <p className="md:caption-bold-2 caption-bold-3">
              {
                contentfulEntries.pageContent[6].fields.bodyText.content[0]
                  .content[0].value
              }
            </p>
            <ul className="list-inside list-disc">
              {contentfulEntries.pageContent[6].fields.bodyText.content[1].content.map(
                (data, index) => (
                  <li
                    className="md:caption-regular-2 caption-regular-3"
                    key={index}
                  >
                    {data.content[0].content[0].value}
                  </li>
                ),
              )}
            </ul>
          </div>
          <div className="my-6 space-y-4">
            <p className="md:caption-bold-2 caption-bold-3">
              {
                contentfulEntries.pageContent[6].fields.bodyText.content[2]
                  .content[0].value
              }
            </p>
            <ul className="list-inside list-disc">
              {contentfulEntries.pageContent[6].fields.bodyText.content[3].content.map(
                (data, index) => (
                  <li
                    className="md:caption-regular-2 caption-regular-3"
                    key={index}
                  >
                    {data.content[0].content[0].value}
                  </li>
                ),
              )}
            </ul>
          </div>
          <div className="my-6 space-y-4">
            <p className="md:caption-bold-2 caption-bold-3">
              {
                contentfulEntries.pageContent[6].fields.bodyText.content[4]
                  .content[0].value
              }
            </p>
            <ul className="list-inside list-disc">
              {contentfulEntries.pageContent[6].fields.bodyText.content[5].content.map(
                (data, index) => (
                  <li
                    className="md:caption-regular-2 caption-regular-3"
                    key={index}
                  >
                    {data.content[0].content[0].value}
                  </li>
                ),
              )}
            </ul>
          </div>
          <div className="my-6 space-y-4">
            <p className="md:caption-bold-2 caption-bold-3">
              {
                contentfulEntries.pageContent[6].fields.bodyText.content[6]
                  .content[0].value
              }
            </p>
            <ul className="list-inside list-disc">
              {contentfulEntries.pageContent[6].fields.bodyText.content[7].content.map(
                (data, index) => (
                  <li
                    className="md:caption-regular-2 caption-regular-3"
                    key={index}
                  >
                    {data.content[0].content[0].value}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
        <div className="my-4 space-y-6">
          <h3 className="heading-3">
            {contentfulEntries.pageContent[7].fields.headline}
          </h3>
          <div className="my-6 space-y-4">
            <p className="md:caption-bold-2 caption-bold-3">
              {
                contentfulEntries.pageContent[7].fields.bodyText.content[0]
                  .content[0].value
              }
            </p>
            <ul className="list-inside list-disc">
              {contentfulEntries.pageContent[7].fields.bodyText.content[1].content.map(
                (data, index) => (
                  <li
                    className="md:caption-regular-2 caption-regular-3"
                    key={index}
                  >
                    {data.content[0].content[0].value}
                  </li>
                ),
              )}
            </ul>
          </div>
          <div className="my-6 space-y-4">
            <p className="md:caption-bold-2 caption-bold-3">
              {
                contentfulEntries.pageContent[7].fields.bodyText.content[2]
                  .content[0].value
              }
            </p>
            <ul className="list-inside list-disc">
              {contentfulEntries.pageContent[7].fields.bodyText.content[3].content.map(
                (data, index) => (
                  <li
                    className="md:caption-regular-2 caption-regular-3"
                    key={index}
                  >
                    {data.content[0].content[0].value}
                  </li>
                ),
              )}
            </ul>
          </div>
          <div className="my-6 space-y-4">
            <p className="md:caption-bold-2 caption-bold-3">
              {
                contentfulEntries.pageContent[7].fields.bodyText.content[4]
                  .content[0].value
              }
            </p>
            <ul className="list-inside list-disc">
              {contentfulEntries.pageContent[7].fields.bodyText.content[5].content.map(
                (data, index) => (
                  <li
                    className="md:caption-regular-2 caption-regular-3"
                    key={index}
                  >
                    {data.content[0].content[0].value}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
        <div className="my-4 space-y-6">
          <h3 className="heading-3">
            {contentfulEntries.pageContent[8].fields.headline}
          </h3>
          <div className="my-6 space-y-4">
            <p className="md:caption-bold-2 caption-bold-3">
              {
                contentfulEntries.pageContent[8].fields.bodyText.content[0]
                  .content[0].value
              }
            </p>
            <ul className="list-inside list-disc">
              {contentfulEntries.pageContent[8].fields.bodyText.content[1].content.map(
                (data, index) => (
                  <li
                    className="md:caption-regular-2 caption-regular-3"
                    key={index}
                  >
                    {data.content[0].content[0].value}
                  </li>
                ),
              )}
            </ul>
          </div>
          <div className="my-6 space-y-4">
            <p className="md:caption-bold-2 caption-bold-3">
              {
                contentfulEntries.pageContent[8].fields.bodyText.content[2]
                  .content[0].value
              }
            </p>
            <ul className="list-inside list-disc">
              {contentfulEntries.pageContent[8].fields.bodyText.content[3].content.map(
                (data, index) => (
                  <li
                    className="md:caption-regular-2 caption-regular-3"
                    key={index}
                  >
                    {data.content[0].content[0].value}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
        <div className="my-4 space-y-6">
          <h3 className="heading-3">
            {contentfulEntries.pageContent[9].fields.headline}
          </h3>
          <p className="md:caption-regular-2 caption-regular-3">
            {
              contentfulEntries.pageContent[9].fields.bodyText.content[0]
                .content[0].value
            }
          </p>
          <div className="my-6 space-y-4">
            <ul className="list-inside list-disc">
              {contentfulEntries.pageContent[9].fields.bodyText.content[1].content.map(
                (data, index) => (
                  <li
                    className="md:caption-regular-2 caption-regular-3"
                    key={index}
                  >
                    {data.content[0].content[0].value}
                  </li>
                ),
              )}
            </ul>
          </div>
          <p className="md:caption-regular-2 caption-regular-3">
            {
              contentfulEntries.pageContent[9].fields.bodyText.content[2]
                .content[0].value
            }
          </p>
          <div className="my-6 space-y-4">
            <ul className="list-inside list-disc">
              {contentfulEntries.pageContent[9].fields.bodyText.content[3].content.map(
                (data, index) => (
                  <li
                    className="md:caption-regular-2 caption-regular-3"
                    key={index}
                  >
                    {data.content[0].content[0].value}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </main>
      {/* pageContent[6].fields.bodyText.content[1].content[1].content[0].content[0].value */}
    </Layout>
  );
}

export async function getStaticProps() {
  const contentfulEntries = await fetchContentfulEntries('landingPage');

  // Check if contentfulEntries is an array before filtering
  const filteredEntries = Array.isArray(contentfulEntries.items)
    ? contentfulEntries.items.find((entry) => {
        console.log(entry.fields.internalName);
        return entry.fields.internalName === 'Security measures';
      }).fields // Return only the .fields property
    : {};

  return {
    props: {
      contentfulEntries: filteredEntries,
    },
  };
}
