import React from 'react';
import { Layout } from '@/components';
import { fetchContentfulEntries } from '@/lib/contentful/client';
import TermsMenus from '@/components/TermsMenus';

export default function CandidateTerms({ contentfulEntries }) {
  return (
    <Layout pageTitle="Terms of use">
      <main className="container mx-auto px-4 py-[120px] md:px-[40px] md:py-[130px] lg:px-16 lg:py-[140px]">
        <div className="px-0 lg:px-[100px]">
          <TermsMenus />
        </div>
        <h1 className="md:heading-1 heading-2">
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
        {contentfulEntries.pageContent.slice(1).map((entry, index) => (
          <React.Fragment key={index}>
            <h3 className="heading-3">{entry.fields.headline}</h3>
            <div className="my-6 space-y-4">
              {entry.fields.bodyText.content.map((data, dataIndex) => (
                <p
                  className="md:caption-regular-2 caption-regular-3"
                  key={dataIndex}
                >
                  {data.content[0].value}
                </p>
              ))}
            </div>
          </React.Fragment>
        ))}
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const contentType = 'landingPage'; // Modify content type here
  const { items } = await fetchContentfulEntries(contentType);

  const entries = items.find(
    (entry) => entry.fields.internalName === 'Candidate Terms',
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
