import React from 'react';
import { Layout } from '@/components';
import { fetchContentfulEntries } from '@/lib/contentful/client';
import TermsMenus from '@/components/TermsMenus';

export default function Terms({ contentfulEntries }) {
  return (
    <Layout pageTitle="Terms of use">
      <main className="container mx-auto px-4 py-[20px] md:px-[40px] md:py-[80px] lg:px-16 lg:py-[80px]">
        <div className="px-0 lg:px-[100px]">
          <TermsMenus />
        </div>
        <h1 className="md:heading-1 heading-2 TermsMenus">
          {contentfulEntries.pageContent[0].fields.headline}
        </h1>
        <div className="my-6 space-y-4">
          <p className="md:caption-regular-2 caption-regular-3">
            {
              contentfulEntries.pageContent[0].fields.bodyText.content[0]
                .content[0].value
            }
          </p>
          <p className="md:caption-semibold-2 caption-semibold-3">
            {
              contentfulEntries.pageContent[0].fields.bodyText.content[1]
                .content[0].value
            }
          </p>
          {contentfulEntries.pageContent[0].fields.bodyText.content
            .slice(2, 6)
            .map((data, index) => (
              <p className="md:caption-regular-2 caption-regular-3" key={index}>
                {data.content[0].value}
              </p>
            ))}
        </div>
        <h3 className="heading-3">
          {contentfulEntries.pageContent[1].fields.headline}
        </h3>
        <div className="my-6 space-y-4">
          {contentfulEntries.pageContent[1].fields.bodyText.content.map(
            (data, index) => (
              <p className="md:caption-regular-2 caption-regular-3" key={index}>
                {data.content[0].value}
              </p>
            ),
          )}
        </div>
        <h3 className="heading-3">
          {contentfulEntries.pageContent[2].fields.headline}
        </h3>
        <div className="my-6 space-y-4">
          {contentfulEntries.pageContent[2].fields.bodyText.content.map(
            (data, index) => (
              <p className="md:caption-regular-2 caption-regular-3" key={index}>
                {data.content[0].value}
              </p>
            ),
          )}
        </div>
        <h3 className="heading-3">
          {contentfulEntries.pageContent[3].fields.headline}
        </h3>
        <div className="my-6 space-y-4">
          {contentfulEntries.pageContent[3].fields.bodyText.content.map(
            (data, index) => (
              <p className="md:caption-regular-2 caption-regular-3" key={index}>
                {data.content[0].value}
              </p>
            ),
          )}
        </div>
        <h3 className="heading-3">
          {contentfulEntries.pageContent[4].fields.headline}
        </h3>
        <div className="my-6 space-y-4">
          {contentfulEntries.pageContent[4].fields.bodyText.content.map(
            (data, index) => (
              <p className="md:caption-regular-2 caption-regular-3" key={index}>
                {data.content[0].value}
              </p>
            ),
          )}
        </div>
        <h3 className="heading-3">
          {contentfulEntries.pageContent[5].fields.headline}
        </h3>
        <div className="my-6 space-y-4">
          {contentfulEntries.pageContent[5].fields.bodyText.content.map(
            (data, index) => (
              <p className="md:caption-regular-2 caption-regular-3" key={index}>
                {data.content[0].value}
              </p>
            ),
          )}
        </div>
        <h3 className="heading-3">
          {contentfulEntries.pageContent[6].fields.headline}
        </h3>
        <div className="my-6 space-y-4">
          {contentfulEntries.pageContent[6].fields.bodyText.content.map(
            (data, index) => (
              <p className="md:caption-regular-2 caption-regular-3" key={index}>
                {data.content[0].value}
              </p>
            ),
          )}
          <h3 className="heading-3">
            {contentfulEntries.pageContent[7].fields.headline}
          </h3>
          <div className="my-6 space-y-4">
            {contentfulEntries.pageContent[7].fields.bodyText.content.map(
              (data, index) => (
                <p
                  className="md:caption-regular-2 caption-regular-3"
                  key={index}
                >
                  {data.content[0].value}
                </p>
              ),
            )}
          </div>
          <h3 className="heading-3">
            {contentfulEntries.pageContent[8].fields.headline}
          </h3>
          <div className="my-6 space-y-4">
            {contentfulEntries.pageContent[8].fields.bodyText.content.map(
              (data, index) => (
                <p
                  className="md:caption-regular-2 caption-regular-3"
                  key={index}
                >
                  {data.content[0].value}
                </p>
              ),
            )}
          </div>
          <h3 className="heading-3">
            {contentfulEntries.pageContent[9].fields.headline}
          </h3>
          <div className="my-6 space-y-4">
            {contentfulEntries.pageContent[9].fields.bodyText.content.map(
              (data, index) => (
                <p
                  className="md:caption-regular-2 caption-regular-3"
                  key={index}
                >
                  {data.content[0].value}
                </p>
              ),
            )}
          </div>
          <h3 className="heading-3">
            {contentfulEntries.pageContent[10].fields.headline}
          </h3>
          <div className="my-6 space-y-4">
            {contentfulEntries.pageContent[10].fields.bodyText.content.map(
              (data, index) => (
                <p
                  className="md:caption-regular-2 caption-regular-3"
                  key={index}
                >
                  {data.content[0].value}
                </p>
              ),
            )}
          </div>
          <h3 className="heading-3">
            {contentfulEntries.pageContent[11].fields.headline}
          </h3>
          <div className="my-6 space-y-4">
            {contentfulEntries.pageContent[11].fields.bodyText.content.map(
              (data, index) => (
                <p
                  className="md:caption-regular-2 caption-regular-3"
                  key={index}
                >
                  {data.content[0].value}
                </p>
              ),
            )}
          </div>
          <h3 className="heading-3">
            {contentfulEntries.pageContent[12].fields.headline}
          </h3>
          <div className="my-6 space-y-4">
            {contentfulEntries.pageContent[12].fields.bodyText.content.map(
              (data, index) => (
                <p
                  className="md:caption-regular-2 caption-regular-3"
                  key={index}
                >
                  {data.content[0].value}
                </p>
              ),
            )}
          </div>
          <h3 className="heading-3">
            {contentfulEntries.pageContent[13].fields.headline}
          </h3>
          <div className="my-6 space-y-4">
            {contentfulEntries.pageContent[13].fields.bodyText.content.map(
              (data, index) => (
                <p
                  className="md:caption-regular-2 caption-regular-3"
                  key={index}
                >
                  {data.content[0].value}
                </p>
              ),
            )}
          </div>
          <h3 className="heading-3">
            {contentfulEntries.pageContent[14].fields.headline}
          </h3>
          <div className="my-6 space-y-4">
            {contentfulEntries.pageContent[14].fields.bodyText.content.map(
              (data, index) => (
                <p
                  className="md:caption-regular-2 caption-regular-3"
                  key={index}
                >
                  {data.content[0].value}
                </p>
              ),
            )}
          </div>
          <h3 className="heading-3">
            {contentfulEntries.pageContent[15].fields.headline}
          </h3>
          <div className="my-6 space-y-4">
            {contentfulEntries.pageContent[15].fields.bodyText.content.map(
              (data, index) => (
                <p
                  className="md:caption-regular-2 caption-regular-3"
                  key={index}
                >
                  {data.content[0].value}
                </p>
              ),
            )}
          </div>
          <h3 className="heading-3">
            {contentfulEntries.pageContent[16].fields.headline}
          </h3>
          <div className="my-6 space-y-4">
            {contentfulEntries.pageContent[16].fields.bodyText.content.map(
              (data, index) => (
                <p
                  className="md:caption-regular-2 caption-regular-3"
                  key={index}
                >
                  {data.content[0].value}
                </p>
              ),
            )}
          </div>
          <h3 className="heading-3">
            {contentfulEntries.pageContent[17].fields.headline}
          </h3>
          <div className="my-6 space-y-4">
            {contentfulEntries.pageContent[17].fields.bodyText.content.map(
              (data, index) => (
                <p
                  className="md:caption-regular-2 caption-regular-3"
                  key={index}
                >
                  {data.content[0].value}
                </p>
              ),
            )}
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
    (entry) => entry.fields.internalName === 'Legal Stuff',
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
