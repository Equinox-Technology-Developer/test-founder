import React from 'react';
import { Layout } from '@/components';
import { fetchContentfulEntries } from '@/lib/contentful/client';
import TermsMenus from '@/components/TermsMenus';

export default function ServiceLevelAgreement({ contentfulEntries }) {
  return (
    <Layout pageTitle="Terms of use">
      <main className="container mx-auto px-4 py-[20px] md:px-[40px] md:py-[80px] lg:px-16 lg:py-[80px]">
        <div className="px-0 lg:px-[100px]">
          <TermsMenus />
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
          <p className="md:caption-regular-2 caption-regular-3">
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
        <h3 className="heading-3">
          {contentfulEntries.pageContent[2].fields.headline}
        </h3>
        <div className="my-6 space-y-4">
          <p className="md:caption-bold-2 caption-bold-3">
            {
              contentfulEntries.pageContent[2].fields.bodyText.content[0]
                .content[0].value
            }
          </p>
        </div>
        <table className="w-fit border-collapse">
          <tbody>
            <tr>
              {contentfulEntries.pageContent[2].fields.bodyText.content[1].content[0].content.map(
                (data, index) => (
                  <th className="border border-black" key={index}>
                    {data.content[0].content[0].value}
                  </th>
                ),
              )}
            </tr>
            <tr>
              {contentfulEntries.pageContent[2].fields.bodyText.content[1].content[1].content.map(
                (data, index) => (
                  <td className="border border-black" key={index}>
                    {data.content[0].content[0].value}
                  </td>
                ),
              )}
            </tr>
            <tr>
              {contentfulEntries.pageContent[2].fields.bodyText.content[1].content[2].content.map(
                (data, index) => (
                  <td className="border border-black" key={index}>
                    {data.content[0].content[0].value}
                  </td>
                ),
              )}
            </tr>
          </tbody>
        </table>
        <p className="md:caption-regular-2 caption-regular-3 my-4">
          {
            contentfulEntries.pageContent[2].fields.bodyText.content[2]
              .content[0].value
          }
        </p>
        <p className="md:caption-bold-2 caption-bold-3 my-4">
          {
            contentfulEntries.pageContent[2].fields.bodyText.content[3]
              .content[0].value
          }
        </p>
        <p className="md:caption-regular-2 caption-regular-3 my-4">
          {
            contentfulEntries.pageContent[2].fields.bodyText.content[4]
              .content[0].value
          }
        </p>
        <p className="md:caption-regular-2 caption-regular-3 my-4">
          {
            contentfulEntries.pageContent[2].fields.bodyText.content[5]
              .content[0].value
          }
        </p>
        <div className="my-6 space-y-4">
          <p className="md:caption-bold-2 caption-bold-3">
            {
              contentfulEntries.pageContent[2].fields.bodyText.content[6]
                .content[0].value
            }
          </p>
        </div>
        <table className="w-fit border-collapse">
          <tbody>
            <tr>
              {contentfulEntries.pageContent[2].fields.bodyText.content[7].content[0].content.map(
                (data, index) => (
                  <th className="border border-black" key={index}>
                    {data.content[0].content[0].value}
                  </th>
                ),
              )}
            </tr>
            <tr>
              {contentfulEntries.pageContent[2].fields.bodyText.content[7].content[1].content.map(
                (data, index) => (
                  <td className="border border-black" key={index}>
                    {data.content[0].content[0].value}
                  </td>
                ),
              )}
            </tr>
            <tr>
              {contentfulEntries.pageContent[2].fields.bodyText.content[7].content[2].content.map(
                (data, index) => (
                  <td className="border border-black" key={index}>
                    {data.content[0].content[0].value}
                  </td>
                ),
              )}
            </tr>
            <tr>
              {contentfulEntries.pageContent[2].fields.bodyText.content[7].content[3].content.map(
                (data, index) => (
                  <td className="border border-black" key={index}>
                    {data.content[0].content[0].value}
                  </td>
                ),
              )}
            </tr>
          </tbody>
        </table>
        <p className="md:caption-regular-2 caption-regular-3 my-4">
          {
            contentfulEntries.pageContent[2].fields.bodyText.content[8]
              .content[0].value
          }
        </p>
        <p className="md:caption-regular-2 caption-regular-3 my-4">
          {
            contentfulEntries.pageContent[2].fields.bodyText.content[9]
              .content[0].value
          }
        </p>
        <div className="my-6 space-y-4">
          <p className="md:caption-bold-2 caption-bold-3">
            {
              contentfulEntries.pageContent[2].fields.bodyText.content[10]
                .content[0].value
            }
          </p>
        </div>
        <p className="md:caption-regular-2 caption-regular-3 my-4">
          {
            contentfulEntries.pageContent[2].fields.bodyText.content[11]
              .content[0].value
          }
        </p>
        <p className="md:caption-regular-2 caption-regular-3 my-4">
          {
            contentfulEntries.pageContent[2].fields.bodyText.content[12]
              .content[0].value
          }
        </p>
        <p className="md:caption-regular-2 caption-regular-3 my-4">
          {
            contentfulEntries.pageContent[2].fields.bodyText.content[13]
              .content[0].value
          }
        </p>
        <table className="w-fit border-collapse">
          <tbody>
            <tr>
              {contentfulEntries.pageContent[2].fields.bodyText.content[14].content[0].content.map(
                (data, index) => (
                  <th className="border border-black" key={index}>
                    {data.content[0].content[0].value}
                  </th>
                ),
              )}
            </tr>
            <tr>
              {contentfulEntries.pageContent[2].fields.bodyText.content[14].content[1].content.map(
                (data, index) => (
                  <td className="border border-black" key={index}>
                    {data.content[0].content[0].value}
                  </td>
                ),
              )}
            </tr>
            <tr>
              {contentfulEntries.pageContent[2].fields.bodyText.content[14].content[2].content.map(
                (data, index) => (
                  <td className="border border-black" key={index}>
                    {data.content[0].content[0].value}
                  </td>
                ),
              )}
            </tr>
            <tr>
              {contentfulEntries.pageContent[2].fields.bodyText.content[14].content[3].content.map(
                (data, index) => (
                  <td className="border border-black" key={index}>
                    {data.content[0].content[0].value}
                  </td>
                ),
              )}
            </tr>
          </tbody>
        </table>
        <p className="md:caption-regular-2 caption-regular-3 my-4">
          {
            contentfulEntries.pageContent[2].fields.bodyText.content[15]
              .content[0].value
          }
        </p>
        <p className="md:caption-regular-2 caption-regular-3 my-4">
          {
            contentfulEntries.pageContent[2].fields.bodyText.content[16]
              .content[0].value
          }
        </p>
        <div className="my-6 space-y-4">
          <p className="md:caption-bold-2 caption-bold-3">
            {
              contentfulEntries.pageContent[2].fields.bodyText.content[17]
                .content[0].value
            }
          </p>
        </div>
        <p className="md:caption-regular-2 caption-regular-3 my-4">
          {
            contentfulEntries.pageContent[2].fields.bodyText.content[18]
              .content[0].value
          }
        </p>
        <table className="w-fit border-collapse">
          <tbody>
            <tr>
              {contentfulEntries.pageContent[2].fields.bodyText.content[19].content[0].content.map(
                (data, index) => (
                  <th className="border border-black" key={index}>
                    {data.content[0].content[0].value}
                  </th>
                ),
              )}
            </tr>
            <tr>
              {contentfulEntries.pageContent[2].fields.bodyText.content[19].content[1].content.map(
                (data, index) => (
                  <td className="border border-black" key={index}>
                    {data.content[0].content[0].value}
                  </td>
                ),
              )}
            </tr>
            <tr>
              {contentfulEntries.pageContent[2].fields.bodyText.content[19].content[2].content.map(
                (data, index) => (
                  <td className="border border-black" key={index}>
                    {data.content[0].content[0].value}
                  </td>
                ),
              )}
            </tr>
            <tr>
              {contentfulEntries.pageContent[2].fields.bodyText.content[19].content[3].content.map(
                (data, index) => (
                  <td className="border border-black" key={index}>
                    {data.content[0].content[0].value}
                  </td>
                ),
              )}
            </tr>
          </tbody>
        </table>
        <p className="md:caption-regular-2 caption-regular-3 my-4">
          {
            contentfulEntries.pageContent[2].fields.bodyText.content[20]
              .content[0].value
          }
        </p>
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
        return entry.fields.internalName === 'Service Level Agreement';
      }).fields // Return only the .fields property
    : {};

  return {
    props: {
      contentfulEntries: filteredEntries,
    },
  };
}
