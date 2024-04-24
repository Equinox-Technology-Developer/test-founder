import React from 'react';
import { Layout } from '@/components';
import { fetchContentfulEntries } from '@/lib/contentful/client';
import TermsMenus from '@/components/TermsMenus';

export default function CookiePolicy({ contentfulEntries }) {
  console.log(contentfulEntries);
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
        return entry.fields.internalName === 'Cookie Policy';
      }).fields // Return only the .fields property
    : {};

  return {
    props: {
      contentfulEntries: filteredEntries,
    },
  };
}
