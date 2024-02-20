import { Layout } from '@/components';
import React from 'react';
import Image from 'next/image';

import Dropzone from '@/components/Dropzone';

import styles from './Contact.module.scss';
import { fetchContentfulEntries } from '@/lib/contentful/client';
export default function Contact({ contentfulEntries }) {
  return (
    <>
      <Layout pageTitle="Book a Demo" showNavbarSubmit={true}>
        <section className="bg-[#F9F9F9] bg-blur bg-right bg-no-repeat pt-0">
          <div className="container mx-auto pb-20">
            {' '}
            <div className={` ${styles.banner_topContent}`}>
              <div
                className={`mt-24 flex w-full justify-center px-4 py-6 sm:min-h-[520px] md:w-full md:px-[40px] md:py-[40px] lg:mt-0 lg:w-full lg:max-w-lg lg:px-0 lg:py-0  ${styles.banner_topContentImage}`}
              >
                <form className="h-full w-full rounded-[20px] bg-shade-0 px-[24px] py-[32px] shadow-[0_4px_10px_0px_rgba(0,0,0,0.15)] md:w-[580px]">
                  <div className="flex flex-col gap-6">
                    <h1 className="md:heading-1 heading-2">
                      {contentfulEntries.topBanner.fields.internalName}
                    </h1>
                    <div className="flex flex-col">
                      <label className="caption-regular-4 text-shade-100">
                        Your email address
                      </label>
                      <input
                        type="email"
                        className="h-[48px] rounded-[5px] border-[0.75px] border-[#CBCBCB] bg-shade-0 px-4 py-[10px] hover:border-primary-500 focus:border-primary-500 focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="caption-regular-4 text-shade-100">
                        What best describes your relationship with TestFounder?
                      </label>
                      <select className="h-[48px] rounded-[5px] border-[0.75px] border-[#CBCBCB] bg-shade-0 px-4 py-[10px] hover:border-primary-500 focus:border-primary-500 focus:outline-none">
                        <option value="DEFAULT" disabled selected hidden>
                          -
                        </option>
                        <option value="1-15">
                          I am a candidate using TestFounder to apply for a job.
                        </option>
                        <option value="16-30">
                          Our company uses TestFounder for screening applicants
                          (I am a customer).
                        </option>
                        <option value="31-50">
                          I may be interested in using TestFounder at my
                          company.
                        </option>
                        <option value="51-100">
                          None of the above apply to me.
                        </option>
                      </select>
                    </div>
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex w-full  flex-col">
                        <label className="caption-regular-4 text-shade-100">
                          Summary of Issue
                        </label>
                        <input
                          type="email"
                          className="h-[48px] rounded-[5px] border-[0.75px] border-[#CBCBCB] bg-shade-0 px-4 py-[10px] hover:border-primary-500 focus:border-primary-500 focus:outline-none"
                        />
                      </div>
                    </div>
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex w-full flex-col">
                        <label className="caption-regular-4 text-shade-100">
                          Description
                        </label>
                        <textarea className="h-[241px] resize-none rounded-[5px] border-[0.75px] border-[#CBCBCB] bg-shade-0 px-4 py-[10px] hover:border-primary-500 focus:border-primary-500 focus:outline-none"></textarea>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label className="caption-regular-4 text-shade-100">
                        Attachment (Optional)
                      </label>
                      <Dropzone />
                    </div>
                    <div className="flex w-full justify-center">
                      <button className="btn-normal flex w-full justify-center">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className={styles.banner_topContentText}>
                <div className="flex flex-row items-center gap-4">
                  <Image
                    src={`https:${contentfulEntries.topBanner.fields.image.fields.file.url}`}
                    alt="Hero Image"
                    width={343}
                    height={525}
                    sizes="100vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const contentfulEntries = await fetchContentfulEntries('landingPage');

  // Check if contentfulEntries is an array before filtering
  const filteredEntries = Array.isArray(contentfulEntries.items)
    ? contentfulEntries.items.find((entry) => {
        console.log(entry.fields.internalName);
        return entry.fields.internalName === 'Contact';
      }).fields // Return only the .fields property
    : {};

  return {
    props: {
      contentfulEntries: filteredEntries,
    },
  };
}
