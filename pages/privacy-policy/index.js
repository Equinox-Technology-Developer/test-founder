import React from 'react';

import { Layout } from '@/components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IoCheckmark } from 'react-icons/io5';
import { fetchContentfulEntries } from '@/helper/accessContentful';

export default function PrivacyPolicy({ contentfulEntries }) {
  const router = useRouter();
  console.log(contentfulEntries);
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
        <div className="space-y-6">
          <h3 className="heading-3">
            {contentfulEntries.pageContent[1].fields.headline}
          </h3>
          <p className="md:caption-bold-2 caption-bold-3">
            {
              contentfulEntries.pageContent[1].fields.bodyText.content[0]
                .content[0].value
            }
          </p>
        </div>
        <div className="my-6 space-y-4">
          <p className="md:caption-regular-2 caption-regular-3">
            {
              contentfulEntries.pageContent[1].fields.bodyText.content[1]
                .content[0].value
            }
          </p>
        </div>
        <table className="mb-10 w-full">
          <tbody>
            <tr>
              {contentfulEntries.pageContent[1].fields.bodyText.content[2].content[0].content.map(
                (data, index) => (
                  <th
                    className={index === 0 ? 'text-start' : 'text-center'}
                    key={index}
                  >
                    {data.content[0].content[0].value}
                  </th>
                ),
              )}
            </tr>
            <tr>
              <td className="caption-bold-3">
                {
                  contentfulEntries.pageContent[1].fields.bodyText.content[2]
                    .content[1].content[0].content[0].content[0].value
                }
              </td>
            </tr>
            {contentfulEntries.pageContent[1].fields.bodyText.content[2].content.map(
              (data, index) => (
                <tr key={index}>
                  <td className="caption-regular-3">
                    {data.content[0].content[0].content[0].value}
                  </td>
                  <td align="center">
                    <IoCheckmark />
                  </td>
                  <td align="center">
                    <IoCheckmark />
                  </td>
                </tr>
              ),
            )}
          </tbody>
        </table>
        <h3 className="heading-3">
          {contentfulEntries.pageContent[2].fields.headline}
        </h3>
        <div className="my-6 space-y-4">
          <p className="md:caption-regular-2 caption-regular-3">
            {
              contentfulEntries.pageContent[2].fields.bodyText.content[0]
                .content[0].value
            }
          </p>
          <ol type="1" className="list-inside list-decimal space-y-3">
            <li className="md:caption-bold-2 caption-bold-3">
              {
                contentfulEntries.pageContent[2].fields.bodyText.content[1]
                  .content[0].value
              }
            </li>
            <p className="md:caption-regular-2 caption-regular-3">
              {
                contentfulEntries.pageContent[2].fields.bodyText.content[2]
                  .content[0].value
              }
            </p>
            <li className="md:caption-bold-2 caption-bold-3">
              {
                contentfulEntries.pageContent[2].fields.bodyText.content[3]
                  .content[0].value
              }
            </li>
            <p className="md:caption-regular-2 caption-regular-3">
              {
                contentfulEntries.pageContent[2].fields.bodyText.content[4]
                  .content[0].value
              }
            </p>
            <li className="md:caption-bold-2 caption-bold-3">
              {
                contentfulEntries.pageContent[2].fields.bodyText.content[5]
                  .content[0].value
              }
            </li>
            <p className="md:caption-regular-2 caption-regular-3">
              {
                contentfulEntries.pageContent[2].fields.bodyText.content[6]
                  .content[0].value
              }
            </p>
            <li className="md:caption-bold-2 caption-bold-3">
              {
                contentfulEntries.pageContent[2].fields.bodyText.content[7]
                  .content[0].value
              }
            </li>
            <p className="md:caption-regular-2 caption-regular-3">
              {
                contentfulEntries.pageContent[2].fields.bodyText.content[8]
                  .content[0].value
              }
            </p>
            <li className="md:caption-bold-2 caption-bold-3">
              {
                contentfulEntries.pageContent[2].fields.bodyText.content[9]
                  .content[0].value
              }
            </li>
            <p className="md:caption-regular-2 caption-regular-3">
              {
                contentfulEntries.pageContent[2].fields.bodyText.content[10]
                  .content[0].value
              }
            </p>
            <li className="md:caption-bold-2 caption-bold-3">
              {
                contentfulEntries.pageContent[2].fields.bodyText.content[11]
                  .content[0].value
              }
            </li>
            <p className="md:caption-regular-2 caption-regular-3">
              {
                contentfulEntries.pageContent[2].fields.bodyText.content[12]
                  .content[0].value
              }
            </p>
            <li className="md:caption-bold-2 caption-bold-3">
              {
                contentfulEntries.pageContent[2].fields.bodyText.content[13]
                  .content[0].value
              }
            </li>
            <p className="md:caption-regular-2 caption-regular-3">
              {
                contentfulEntries.pageContent[2].fields.bodyText.content[14]
                  .content[0].value
              }
            </p>
            <li className="md:caption-bold-2 caption-bold-3">
              {
                contentfulEntries.pageContent[2].fields.bodyText.content[15]
                  .content[0].value
              }
            </li>
            <p className="md:caption-regular-2 caption-regular-3">
              {
                contentfulEntries.pageContent[2].fields.bodyText.content[16]
                  .content[0].value
              }
            </p>
            <p className="md:caption-regular-2 caption-regular-3">
              {
                contentfulEntries.pageContent[2].fields.bodyText.content[17]
                  .content[0].value
              }
            </p>
          </ol>
        </div>
        <h3 className="heading-3">
          {contentfulEntries.pageContent[3].fields.headline}
        </h3>
        <div className="my-6 space-y-4">
          <p className="md:caption-regular-2 caption-regular-3">
            {
              contentfulEntries.pageContent[3].fields.bodyText.content[0]
                .content[0].value
            }
          </p>
        </div>
        <ol type="1" className="mb-6 list-inside list-disc space-y-3">
          <li className="md:caption-regular-2 caption-regular-3">
            {
              contentfulEntries.pageContent[3].fields.bodyText.content[1]
                .content[0].value
            }
          </li>
          <li className="md:caption-regular-2 caption-regular-3">
            {
              contentfulEntries.pageContent[3].fields.bodyText.content[2]
                .content[0].value
            }
          </li>
          <li className="md:caption-regular-2 caption-regular-3">
            {
              contentfulEntries.pageContent[3].fields.bodyText.content[3]
                .content[0].value
            }
          </li>
          <li className="md:caption-regular-2 caption-regular-3">
            {
              contentfulEntries.pageContent[3].fields.bodyText.content[4]
                .content[0].value
            }
            <ol className="list-inside list-disc space-y-3 pl-5">
              <li>
                {
                  contentfulEntries.pageContent[3].fields.bodyText.content[5]
                    .content[0].value
                }
              </li>
              <li>
                {
                  contentfulEntries.pageContent[3].fields.bodyText.content[6]
                    .content[0].value
                }
              </li>
              <li>
                {
                  contentfulEntries.pageContent[3].fields.bodyText.content[7]
                    .content[0].value
                }
              </li>
              <li>
                {
                  contentfulEntries.pageContent[3].fields.bodyText.content[8]
                    .content[0].value
                }
              </li>
              <li>
                {
                  contentfulEntries.pageContent[3].fields.bodyText.content[9]
                    .content[0].value
                }
              </li>
              <li>
                {
                  contentfulEntries.pageContent[3].fields.bodyText.content[10]
                    .content[0].value
                }
              </li>
              <li>
                {
                  contentfulEntries.pageContent[3].fields.bodyText.content[11]
                    .content[0].value
                }
              </li>
              <li>
                {
                  contentfulEntries.pageContent[3].fields.bodyText.content[12]
                    .content[0].value
                }
              </li>
              <li>
                {
                  contentfulEntries.pageContent[3].fields.bodyText.content[13]
                    .content[0].value
                }
              </li>
            </ol>
          </li>
        </ol>
        <h3 className="heading-3">
          {contentfulEntries.pageContent[4].fields.headline}
        </h3>
        <div className="my-6 space-y-4">
          <p className="md:caption-regular-2 caption-regular-3">
            {
              contentfulEntries.pageContent[4].fields.bodyText.content[0]
                .content[0].value
            }
          </p>
        </div>
        <ol type="1" className="mb-6 list-inside list-decimal space-y-4">
          <li className="md:caption-bold-2 caption-bold-3">
            {
              contentfulEntries.pageContent[4].fields.bodyText.content[1]
                .content[0].value
            }
          </li>
          <p className="md:caption-regular-2 caption-regular-3">
            {
              contentfulEntries.pageContent[4].fields.bodyText.content[2]
                .content[0].value
            }
          </p>
          <li className="md:caption-bold-2 caption-bold-3">
            {
              contentfulEntries.pageContent[4].fields.bodyText.content[3]
                .content[0].value
            }
          </li>
          <p className="md:caption-regular-2 caption-regular-3">
            {
              contentfulEntries.pageContent[4].fields.bodyText.content[4]
                .content[0].value
            }
          </p>
          <li className="md:caption-bold-2 caption-bold-3">
            {
              contentfulEntries.pageContent[4].fields.bodyText.content[5]
                .content[0].value
            }
          </li>
          <p className="md:caption-regular-2 caption-regular-3">
            {
              contentfulEntries.pageContent[4].fields.bodyText.content[6]
                .content[0].value
            }
          </p>
        </ol>
        <h3 className="heading-3">
          {' '}
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
        <h3 className="heading-3">
          {contentfulEntries.pageContent[6].fields.headline}
        </h3>
        <div className="my-6 space-y-4">
          <p className="md:caption-regular-2 caption-regular-3">
            {
              contentfulEntries.pageContent[6].fields.bodyText.content[0]
                .content[0].value
            }
          </p>
          <h3 className="heading-3">
            {contentfulEntries.pageContent[7].fields.headline}
          </h3>
          <div className="my-6 space-y-4">
            <p className="md:caption-regular-2 caption-regular-3">
              {
                contentfulEntries.pageContent[7].fields.bodyText.content[0]
                  .content[0].value
              }
            </p>
          </div>
          <h3 className="heading-3">
            {contentfulEntries.pageContent[8].fields.headline}
          </h3>
          <div className="my-6 space-y-4">
            <p className="md:caption-regular-2 caption-regular-3">
              {
                contentfulEntries.pageContent[8].fields.bodyText.content[0]
                  .content[0].value
              }
            </p>
          </div>
          <h3 className="heading-3">
            {contentfulEntries.pageContent[9].fields.headline}
          </h3>
          <div className="my-6 space-y-4">
            <p className="md:caption-regular-2 caption-regular-3">
              {
                contentfulEntries.pageContent[9].fields.bodyText.content[0]
                  .content[0].value
              }
            </p>
          </div>
          <h3 className="heading-3">
            {contentfulEntries.pageContent[10].fields.headline}
          </h3>
          <div className="my-6 space-y-4">
            <p className="md:caption-regular-2 caption-regular-3">
              {
                contentfulEntries.pageContent[10].fields.bodyText.content[0]
                  .content[0].value
              }
            </p>
          </div>
          <h3 className="heading-3">
            {contentfulEntries.pageContent[11].fields.headline}
          </h3>
          <div className="my-6 space-y-4">
            <p className="md:caption-regular-2 caption-regular-3">
              {
                contentfulEntries.pageContent[11].fields.bodyText.content[0]
                  .content[0].value
              }
            </p>
          </div>
          <h3 className="heading-3">
            {contentfulEntries.pageContent[12].fields.headline}
          </h3>
          <div className="my-6 space-y-4">
            <p className="md:caption-regular-2 caption-regular-3">
              {
                contentfulEntries.pageContent[12].fields.bodyText.content[0]
                  .content[0].value
              }
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const contentType = 'landingPage'; // Modify content type here
  const { items } = await fetchContentfulEntries(contentType);

  const entries = items.find(
    (entry) => entry.fields.internalName === 'Privacy Policy',
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
