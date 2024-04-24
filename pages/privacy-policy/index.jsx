import React from 'react';
import { Layout } from '@/components';
import { IoCheckmark } from 'react-icons/io5';
import { fetchContentfulEntries } from '@/lib/contentful/client';
import TermsMenus from '@/components/TermsMenus';

export default function PrivacyPolicy({ contentfulEntries }) {
  return (
    <Layout pageTitle="Terms of use">
      <main className="container mx-auto px-4 py-[20px] md:px-[40px] md:py-[80px] lg:px-16 lg:py-[80px]">
        <div className="px-0 lg:px-[100px]">
          <TermsMenus />
        </div>
        <h1 className="md:heading-1 heading-2 text-start">
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
  const contentfulEntries = await fetchContentfulEntries('landingPage');

  // Check if contentfulEntries is an array before filtering
  const filteredEntries = Array.isArray(contentfulEntries.items)
    ? contentfulEntries.items.find((entry) => {
        console.log(entry.fields.internalName);
        return entry.fields.internalName === 'Privacy Policy';
      }).fields // Return only the .fields property
    : {};

  return {
    props: {
      contentfulEntries: filteredEntries,
    },
  };
}
