import { Layout } from '@/components';
import React from 'react';
import Image from 'next/image';
import { images } from '@/constants';

import styles from './BookDemo.module.scss';

const BookDemo = ({}) => {
  return (
    <>
      <Layout pageTitle="Book a Demo">
        <section className="bg-[#F9F9F9] bg-blur bg-right bg-no-repeat pt-0">
          <div className="container mx-auto pb-20">
            {' '}
            <div className={` ${styles.banner_topContent}`}>
              <div className={styles.banner_topContentText}>
                <h1 className="sm:heading-1 heading-2 mb-6 w-full text-center lg:text-start">
                  Objective hiring starts here. Book your demo now.
                </h1>
                <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-0 text-center lg:text-start">
                  Book a demo with a member of our team to understand if
                  TestFounder is the right tool for your recruitment strategy,
                  learn about our platform and features, and explore the
                  available payment plans.
                </p>
                <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-0 text-center lg:text-start">
                  <span className="font-bold">
                    TestFounder has helped more than 10,000 companies{' '}
                  </span>{' '}
                  streamline their hiring processes by reducing mis-hires and
                  cutting costs.
                </p>
                <div className="flex flex-row items-center gap-4">
                  <Image
                    src="/assets/abbot.svg"
                    width="119"
                    height="80"
                    className="h-fit w-fit"
                  />
                  <Image
                    src="/assets/barila.svg"
                    width="119"
                    height="80"
                    className="h-fit w-fit"
                  />
                  <Image
                    src="/assets/berkshire.svg"
                    width="119"
                    height="80"
                    className="h-fit w-fit"
                  />
                  <Image
                    src="/assets/bmw.svg"
                    width="119"
                    height="80"
                    className="h-fit w-fit"
                  />
                  <Image
                    src="/assets/british-airways.svg"
                    width="119"
                    height="80"
                    className="h-fit w-fit"
                  />
                </div>
              </div>
              <div
                className={`flex w-full justify-center md:w-full lg:w-full lg:max-w-lg ${styles.banner_topContentImage}`}
              >
                <form className="h-full w-[580px] rounded-[20px] bg-shade-0 px-[42px] py-[32px] shadow-[0_4px_10px_0px_rgba(0,0,0,0.15)]">
                  <div className="flex flex-col gap-6">
                    <p className="caption-regular-2 flex w-full justify-end gap-2">
                      Not you? <span>Click here to reset</span>
                    </p>
                    <div className="flex flex-col">
                      <label className="caption-regular-4 text-[#CBCBCB]">
                        Work email address*
                      </label>
                      <input
                        type="email"
                        className="h-[48px] rounded-[5px] border-[0.75px] border-[#CBCBCB] bg-shade-0"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="caption-regular-4 text-[#CBCBCB]">
                        Full name*
                      </label>
                      <input
                        type="text"
                        className="h-[48px] rounded-[5px] border-[0.75px] border-[#CBCBCB] bg-shade-0"
                      />
                    </div>
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex w-full max-w-[240px] flex-col">
                        <label className="caption-regular-4 text-[#CBCBCB]">
                          Job function*
                        </label>
                        <input
                          type="email"
                          className="h-[48px] rounded-[5px] border-[0.75px] border-[#CBCBCB] bg-shade-0"
                        />
                      </div>
                      <div className="flex w-full max-w-[240px] flex-col">
                        <label className="caption-regular-4 text-[#CBCBCB]">
                          Company name*
                        </label>
                        <input
                          type="text"
                          className="h-[48px] rounded-[5px] border-[0.75px] border-[#CBCBCB] bg-shade-0"
                        />
                      </div>
                    </div>
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex w-full max-w-[240px] flex-col">
                        <label className="caption-regular-4 text-[#CBCBCB]">
                          How many people work in your organization (Full Time
                          Equivalent)?*
                        </label>
                        <select className="h-[48px] rounded-[5px] border-[0.75px] border-[#CBCBCB] bg-shade-0 px-4 py-[10px]">
                          <option value="DEFAULT" disabled selected hidden>
                            FTE
                          </option>
                          <option value="1-15">1-15</option>
                          <option value="16-30">16-30</option>
                          <option value="31-50">31-50</option>
                          <option value="51-100">51-100</option>
                        </select>
                      </div>
                      <div className="flex w-full max-w-[240px] flex-col">
                        <label className="caption-regular-4 text-[#CBCBCB]">
                          How many people are you planning to hire next year?*
                        </label>
                        <select className="h-[48px] rounded-[5px] border-[0.75px] border-[#CBCBCB] bg-shade-0 px-4 py-[10px]">
                          <option value="DEFAULT" disabled selected hidden>
                            Please Select
                          </option>
                          <option value="1-15">1-15</option>
                          <option value="16-30">16-30</option>
                          <option value="31-50">31-50</option>
                          <option value="51-100">51-100</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label className="caption-regular-4 text-[#CBCBCB]">
                        Do you have an Applicant Tracking System (ATS)?
                      </label>
                      <select className="h-[48px] rounded-[5px] border-[0.75px] border-[#CBCBCB] bg-shade-0 px-4 py-[10px]">
                        <option value="DEFAULT" disabled selected hidden>
                          Unknown
                        </option>
                        <option value="1-15">1-15</option>
                        <option value="16-30">16-30</option>
                        <option value="31-50">31-50</option>
                        <option value="51-100">51-100</option>
                      </select>
                    </div>
                    <p className="caption-regular-3">
                      TestFounder needs the contact information you provide to
                      us to contact you about our products and services. You may
                      unsubscribe from these communications at any time. For
                      information on how to unsubscribe, as well as our privacy
                      practices and commitment to protecting your privacy,
                      please review our Privacy Policy.
                    </p>
                    <div className="flex w-full justify-end">
                      <button className="btn-normal">Next</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="flex h-fit items-center bg-[#F9F9F9] px-4 py-6 sm:min-h-[520px] md:px-[40px] md:py-[40px] lg:px-0 lg:py-0">
          <div className="container mx-auto ">
            <div className="flex flex-col items-center gap-6 lg:flex-row lg:py-[60px]">
              <div className="relative flex w-full flex-col items-center space-y-6 md:w-full md:items-start lg:w-1/2">
                <h1 className="heading-2 sm:heading-1 mb-0 mt-0 text-center sm:text-start">
                  74% of employers reduced cost-to-hire when they used
                  skills-based hiring
                </h1>
                <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                  Fill out the form above and let us show you how TestGorilla
                  can help improve your hiring.
                </p>
                <button className="btn-line-normal-black">Book a Demo</button>
              </div>
              <div className="mb-16 w-full sm:w-1/2 md:mb-0 md:text-left ">
                <Image
                  src="/assets/book-a-demo.png"
                  alt="Hero Image"
                  width={644}
                  height={484}
                  sizes="100vw"
                  className="z-50"
                />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default BookDemo;
