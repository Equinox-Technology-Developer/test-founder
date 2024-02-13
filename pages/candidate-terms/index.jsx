import React from 'react';

import { Layout } from '@/components';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { fetchContentfulEntries } from '@/lib/contentful/client';

export default function CandidateTerms({ contentfulEntries }) {
  const router = useRouter();
  console.log(contentfulEntries);
  return (
    <Layout pageTitle="Terms of use">
      <main className="container mx-auto px-4 py-[120px] md:px-[40px] md:py-[130px] lg:px-16 lg:py-[140px]">
        <div className="px-0">
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
                <p
                  className="md:caption-regular-2 caption-regular-3"
                  key={index}
                >
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
        </div>
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
