import React from 'react';

import { Layout } from '@/components';
import Image from 'next/image';

const EmployerGuide = () => {
  return (
    <Layout pageTitle="Employer Guide">
      <section className="bg-[#F9F9F9]">
        <div className="container mx-auto mb-[80px] mt-[92px] px-4 py-6 md:px-10 md:py-8 lg:px-0 lg:py-0">
          <div className="mb-[24px] pt-[8px] md:mb-[40px] md:pt-0 lg:pt-[80px]">
            <h1 className="heading-2 md:heading-2 mb-4 md:mb-6">
              Company guides
            </h1>
            <p className="caption-regular-3 md:caption-regular-1">
              Testfounder platform from the employer's side
            </p>
          </div>
          <div className="flex flex-col flex-wrap gap-4 md:gap-6 lg:flex-row">
            <div className="flex w-full flex-col gap-4 rounded-[20px] bg-white px-6 pb-10 pt-6 shadow-[0_4px_10px_0px_rgba(0,0,0,0.15)] md:gap-6 lg:min-h-[416px] lg:w-[calc(50%-12px)]">
              <h2 className="heading-3 md:heading-2 ">Getting started</h2>
              <div className="flex flex-row items-center justify-between">
                <p className="caption-regular-2 md:caption-regular-1">
                  Upcoming changes to Testfounder’s free plan and free features
                </p>
                <Image
                  src="/assets/icon_next.svg"
                  alt="Hero Image"
                  width={24}
                  height={24}
                  sizes="100vw"
                  className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                />
              </div>
              <div className="flex flex-row items-center justify-between">
                <p className="caption-regular-2 md:caption-regular-1">
                  Creating an account
                </p>
                <Image
                  src="/assets/icon_next.svg"
                  alt="Hero Image"
                  width={24}
                  height={24}
                  sizes="100vw"
                  className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                />
              </div>
              <div className="flex flex-row items-center justify-between">
                <p className="caption-regular-2 md:caption-regular-1">
                  FAQs and troubleshooting for customers
                </p>
                <Image
                  src="/assets/icon_next.svg"
                  alt="Hero Image"
                  width={24}
                  height={24}
                  sizes="100vw"
                  className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                />
              </div>
            </div>
            <div className="flex w-full flex-col gap-4 rounded-[20px] bg-white px-6 pb-10 pt-6 shadow-[0_4px_10px_0px_rgba(0,0,0,0.15)] md:gap-6 lg:min-h-[416px] lg:w-[calc(50%-12px)]">
              <h2 className="heading-3 md:heading-2">
                Creating and managing assessments
              </h2>
              <div className="flex flex-row items-center justify-between">
                <p className="caption-regular-2 md:caption-regular-1">
                  Accommodations for candidates with extra requirementst
                </p>
                <Image
                  src="/assets/icon_next.svg"
                  alt="Hero Image"
                  width={24}
                  height={24}
                  sizes="100vw"
                  className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                />
              </div>
              <div className="flex flex-row items-center justify-between">
                <p className="caption-regular-2 md:caption-regular-1">
                  Advanced assessment options
                </p>
                <Image
                  src="/assets/icon_next.svg"
                  alt="Hero Image"
                  width={24}
                  height={24}
                  sizes="100vw"
                  className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                />
              </div>
              <div className="flex flex-row items-center justify-between">
                <p className="caption-regular-2 md:caption-regular-1">
                  Candidate communications through Testfounder
                </p>
                <Image
                  src="/assets/icon_next.svg"
                  alt="Hero Image"
                  width={24}
                  height={24}
                  sizes="100vw"
                  className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                />
              </div>
              <div className="flex flex-row items-center justify-between">
                <p className="caption-regular-2 md:caption-regular-1">
                  Guide to creating an assessment
                </p>
                <Image
                  src="/assets/icon_next.svg"
                  alt="Hero Image"
                  width={24}
                  height={24}
                  sizes="100vw"
                  className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                />
              </div>
              <div className="flex flex-row items-center justify-between">
                <p className="caption-regular-2 md:caption-regular-1">
                  Manage access to assessments
                </p>
                <Image
                  src="/assets/icon_next.svg"
                  alt="Hero Image"
                  width={24}
                  height={24}
                  sizes="100vw"
                  className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                />
              </div>
              <div className="flex flex-row items-center justify-between">
                <p className="caption-regular-2 md:caption-regular-1">
                  Managing candidates
                </p>
                <Image
                  src="/assets/icon_next.svg"
                  alt="Hero Image"
                  width={24}
                  height={24}
                  sizes="100vw"
                  className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                />
              </div>
            </div>
            <div className="flex w-full flex-col gap-4 rounded-[20px] bg-white px-6 pb-10 pt-6 shadow-[0_4px_10px_0px_rgba(0,0,0,0.15)] md:gap-6 lg:min-h-[416px] lg:w-[calc(50%-12px)]">
              <h2 className="heading-3 md:heading-2">Details test guides</h2>
              <div className="flex flex-row items-center justify-between">
                <p className="caption-regular-2 md:caption-regular-1">
                  Using the Motivation test
                </p>
                <Image
                  src="/assets/icon_next.svg"
                  alt="Hero Image"
                  width={24}
                  height={24}
                  sizes="100vw"
                  className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                />
              </div>
              <div className="flex flex-row items-center justify-between">
                <p className="caption-regular-2 md:caption-regular-1">
                  Using the culture add test
                </p>
                <Image
                  src="/assets/icon_next.svg"
                  alt="Hero Image"
                  width={24}
                  height={24}
                  sizes="100vw"
                  className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                />
              </div>
              <div className="flex flex-row items-center justify-between">
                <p className="caption-regular-2 md:caption-regular-1">
                  Comprehensive guide to test
                </p>
                <Image
                  src="/assets/icon_next.svg"
                  alt="Hero Image"
                  width={24}
                  height={24}
                  sizes="100vw"
                  className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                />
              </div>
            </div>
            <div className="flex w-full flex-col gap-4 rounded-[20px] bg-white px-6 pb-10 pt-6 shadow-[0_4px_10px_0px_rgba(0,0,0,0.15)] md:gap-6 lg:min-h-[416px] lg:w-[calc(50%-12px)]">
              <h2 className="heading-3 md:heading-2">
                Creating your own tests
              </h2>
              <div className="flex flex-row items-center justify-between">
                <p className="caption-regular-2 md:caption-regular-1">
                  Choosing a question type for your own tests
                </p>
                <Image
                  src="/assets/icon_next.svg"
                  alt="Hero Image"
                  width={24}
                  height={24}
                  sizes="100vw"
                  className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                />
              </div>
              <div className="flex flex-row items-center justify-between">
                <p className="caption-regular-2 md:caption-regular-1">
                  Developing an effective screening test
                </p>
                <Image
                  src="/assets/icon_next.svg"
                  alt="Hero Image"
                  width={24}
                  height={24}
                  sizes="100vw"
                  className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                />
              </div>
              <div className="flex flex-row items-center justify-between">
                <p className="caption-regular-2 md:caption-regular-1">
                  Writting situational judgment questions
                </p>
                <Image
                  src="/assets/icon_next.svg"
                  alt="Hero Image"
                  width={24}
                  height={24}
                  sizes="100vw"
                  className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                />
              </div>
              <div className="flex flex-row items-center justify-between">
                <p className="caption-regular-2 md:caption-regular-1">
                  Formatting test questions
                </p>
                <Image
                  src="/assets/icon_next.svg"
                  alt="Hero Image"
                  width={24}
                  height={24}
                  sizes="100vw"
                  className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                />
              </div>
              <div className="flex flex-row items-center justify-between">
                <p className="caption-regular-2 md:caption-regular-1">
                  Comprehensive guide to test
                </p>
                <Image
                  src="/assets/icon_next.svg"
                  alt="Hero Image"
                  width={24}
                  height={24}
                  sizes="100vw"
                  className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                />
              </div>
            </div>
            <div className="flex w-full flex-col gap-4 rounded-[20px] bg-white px-6 pb-10 pt-6 shadow-[0_4px_10px_0px_rgba(0,0,0,0.15)] md:gap-6 lg:min-h-[416px] lg:w-[calc(50%-12px)]">
              <h2 className="heading-3 md:heading-2">Analyzing results</h2>
              <div className="flex flex-row items-center justify-between">
                <p className="caption-regular-2 md:caption-regular-1">
                  Downloading and sharing results
                </p>
                <Image
                  src="/assets/icon_next.svg"
                  alt="Hero Image"
                  width={24}
                  height={24}
                  sizes="100vw"
                  className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                />
              </div>
              <div className="flex flex-row items-center justify-between">
                <p className="caption-regular-2 md:caption-regular-1">
                  Guide to analyzing results
                </p>
                <Image
                  src="/assets/icon_next.svg"
                  alt="Hero Image"
                  width={24}
                  height={24}
                  sizes="100vw"
                  className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                />
              </div>
              <div className="flex flex-row items-center justify-between">
                <p className="caption-regular-2 md:caption-regular-1">
                  Interpreting personality tests
                </p>
                <Image
                  src="/assets/icon_next.svg"
                  alt="Hero Image"
                  width={24}
                  height={24}
                  sizes="100vw"
                  className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                />
              </div>
              <div className="flex flex-row items-center justify-between">
                <p className="caption-regular-2 md:caption-regular-1">
                  Interpreting typing test results
                </p>
                <Image
                  src="/assets/icon_next.svg"
                  alt="Hero Image"
                  width={24}
                  height={24}
                  sizes="100vw"
                  className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                />
              </div>
              <div className="flex flex-row items-center justify-between">
                <p className="caption-regular-2 md:caption-regular-1">
                  Scorilng benchmark
                </p>
                <Image
                  src="/assets/icon_next.svg"
                  alt="Hero Image"
                  width={24}
                  height={24}
                  sizes="100vw"
                  className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                />
              </div>
            </div>
            <div className="flex w-full flex-col gap-4 rounded-[20px] bg-white px-6 pb-10 pt-6 shadow-[0_4px_10px_0px_rgba(0,0,0,0.15)] md:gap-6 lg:min-h-[416px] lg:w-[calc(50%-12px)]">
              <h2 className="heading-3 md:heading-2">
                Account management and billing
              </h2>
              <div className="flex flex-row items-center justify-between">
                <p className="caption-regular-2 md:caption-regular-1">
                  Introducing to our Starter and Pro plans
                </p>
                <Image
                  src="/assets/icon_next.svg"
                  alt="Hero Image"
                  width={24}
                  height={24}
                  sizes="100vw"
                  className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                />
              </div>
              <div className="flex flex-row items-center justify-between">
                <p className="caption-regular-2 md:caption-regular-1">
                  Subscribe to, change, or cancel a plant
                </p>
                <Image
                  src="/assets/icon_next.svg"
                  alt="Hero Image"
                  width={24}
                  height={24}
                  sizes="100vw"
                  className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                />
              </div>
              <div className="flex flex-row items-center justify-between">
                <p className="caption-regular-2 md:caption-regular-1">
                  Email notifications
                </p>
                <Image
                  src="/assets/icon_next.svg"
                  alt="Hero Image"
                  width={24}
                  height={24}
                  sizes="100vw"
                  className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                />
              </div>
              <div className="flex flex-row items-center justify-between">
                <p className="caption-regular-2 md:caption-regular-1">
                  Account settings
                </p>
                <Image
                  src="/assets/icon_next.svg"
                  alt="Hero Image"
                  width={24}
                  height={24}
                  sizes="100vw"
                  className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                />
              </div>
              <div className="flex flex-row items-center justify-between">
                <p className="caption-regular-2 md:caption-regular-1">
                  Legacy plans
                </p>
                <Image
                  src="/assets/icon_next.svg"
                  alt="Hero Image"
                  width={24}
                  height={24}
                  sizes="100vw"
                  className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                />
              </div>
              <div className="flex flex-row items-center justify-between">
                <p className="caption-regular-2 md:caption-regular-1">
                  Managing your team
                </p>
                <Image
                  src="/assets/icon_next.svg"
                  alt="Hero Image"
                  width={24}
                  height={24}
                  sizes="100vw"
                  className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                />
              </div>
            </div>
            <div className="flex w-full flex-col gap-4 rounded-[20px] bg-white px-6 pb-10 pt-6 shadow-[0_4px_10px_0px_rgba(0,0,0,0.15)] md:gap-6 lg:min-h-[416px] lg:w-[calc(50%-12px)]">
              <h2 className="heading-3 md:heading-2">Integrations and API</h2>
              <div className="flex flex-row items-center justify-between">
                <p className="caption-regular-2 md:caption-regular-1">
                  BambooHR integration
                </p>
                <Image
                  src="/assets/icon_next.svg"
                  alt="Hero Image"
                  width={24}
                  height={24}
                  sizes="100vw"
                  className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                />
              </div>
              <div className="flex flex-row items-center justify-between">
                <p className="caption-regular-2 md:caption-regular-1">
                  Breezy integration
                </p>
                <Image
                  src="/assets/icon_next.svg"
                  alt="Hero Image"
                  width={24}
                  height={24}
                  sizes="100vw"
                  className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                />
              </div>
              <div className="flex flex-row items-center justify-between">
                <p className="caption-regular-2 md:caption-regular-1">
                  Buk integration
                </p>
                <Image
                  src="/assets/icon_next.svg"
                  alt="Hero Image"
                  width={24}
                  height={24}
                  sizes="100vw"
                  className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                />
              </div>
              <div className="flex flex-row items-center justify-between">
                <p className="caption-regular-2 md:caption-regular-1">
                  Bullhorn integration
                </p>
                <Image
                  src="/assets/icon_next.svg"
                  alt="Hero Image"
                  width={24}
                  height={24}
                  sizes="100vw"
                  className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                />
              </div>
              <div className="flex flex-row items-center justify-between">
                <p className="caption-regular-2 md:caption-regular-1">
                  Freshteam integration
                </p>
                <Image
                  src="/assets/icon_next.svg"
                  alt="Hero Image"
                  width={24}
                  height={24}
                  sizes="100vw"
                  className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                />
              </div>
              <div className="flex flex-row items-center justify-between">
                <p className="caption-regular-2 md:caption-regular-1">
                  Greenhouse integration
                </p>
                <Image
                  src="/assets/icon_next.svg"
                  alt="Hero Image"
                  width={24}
                  height={24}
                  sizes="100vw"
                  className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                />
              </div>
            </div>
            <div className="flex w-full flex-col gap-4 rounded-[20px] bg-white px-6 pb-10 pt-6 shadow-[0_4px_10px_0px_rgba(0,0,0,0.15)] md:gap-6 lg:min-h-[416px] lg:w-[calc(50%-12px)]">
              <h2 className="heading-3 md:heading-2">
                Roadmap and release notes
              </h2>
              <div className="flex flex-row items-center justify-between">
                <p className="caption-regular-2 md:caption-regular-1">
                  Notes on our past realises
                </p>
                <Image
                  src="/assets/icon_next.svg"
                  alt="Hero Image"
                  width={24}
                  height={24}
                  sizes="100vw"
                  className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                />
              </div>
              <div className="flex flex-row items-center justify-between">
                <p className="caption-regular-2 md:caption-regular-1">
                  Notes on our recent release
                </p>
                <Image
                  src="/assets/icon_next.svg"
                  alt="Hero Image"
                  width={24}
                  height={24}
                  sizes="100vw"
                  className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                />
              </div>
              <div className="flex flex-row items-center justify-between">
                <p className="caption-regular-2 md:caption-regular-1">
                  Product roadmap
                </p>
                <Image
                  src="/assets/icon_next.svg"
                  alt="Hero Image"
                  width={24}
                  height={24}
                  sizes="100vw"
                  className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EmployerGuide;
