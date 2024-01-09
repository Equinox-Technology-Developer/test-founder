import React from 'react';

import { Layout } from '@/components';
import Link from 'next/link';
import Image from 'next/image';

const HelpCenter = () => {
  return (
    <Layout pageTitle="For Candidates">
      <section className="bg-[#F9F9F9] bg-blur bg-right bg-no-repeat pt-0">
        <div className="container mx-auto px-4 py-6 sm:min-h-[520px] md:px-10 md:py-8 lg:px-0 lg:py-0">
          <div className="relative flex flex-col items-center sm:static lg:flex-row lg:gap-[27px] lg:py-[80px]">
            <div className="mb-0 mt-20 flex flex-col items-center text-center md:mb-0 md:w-full md:items-center md:px-[40px] md:py-[32px] md:text-left lg:mt-24 lg:w-1/2 lg:flex-grow lg:items-start lg:px-0">
              <h1 className="sm:heading-1 heading-2 mb-6 mt-0 text-center lg:text-start">
                Hi! How can we help?
              </h1>
              <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-0 text-center lg:text-start">
                Looking for help on a specific topic? Search to get started, or
                take a look at popular topics below.
              </p>
              <div className="relative flex w-full xl:w-fit">
                <input
                  type="text"
                  className="placeholder:caption-regular-3 w-full rounded-[30px] bg-white px-4 py-[10px] shadow-[0_4px_10px_0px_rgba(0,0,0,0.15)] placeholder:text-[#CBCBCB] xl:w-[600px]"
                  placeholder="Type your question here"
                />
                <Image
                  src="/assets/icon-search.svg"
                  alt="icon-search"
                  width={20}
                  height={20}
                  sizes="100vw"
                  className="absolute right-4 top-1/2 flex h-auto -translate-y-1/2"
                />
              </div>
            </div>
            <div className="flex w-full justify-center md:w-full lg:max-w-[46%]">
              <Image
                src="/assets/hero-image-help-center.png"
                alt="Hero Image"
                width={424}
                height={524}
                sizes="100vw"
                className="z-10 mt-8 flex h-auto w-[80%] md:w-[60%] lg:mt-20 lg:w-fit"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-grayscale-200 lg:py-[60px]">
        <div className="container mx-auto flex flex-col gap-4 px-4 py-6 md:flex-row md:px-[40px] md:py-[32px]">
          <div className="flex w-full flex-col items-start md:w-1/2">
            <h2 className="md:heading-2 heading-3 mb-3 md:mb-6">
              I’m applying
            </h2>
            <p className="caption-regular-3 md:caption-regular-1 mb-6 md:mb-8">
              If you're a candidate, start here. Read our candidate guides to
              help you find your dream job.
            </p>
            <button className="btn-normal text-[14px] font-semibold md:text-[18px]">
              Read candidate guides
            </button>
          </div>
          <div className="flex w-full flex-col items-start md:w-1/2">
            <h2 className="md:heading-2 heading-3 mb-3 md:mb-6">I’m hiring</h2>
            <p className="caption-regular-3 md:caption-regular-1 mb-6 md:mb-8">
              If you're an employer, start here. Our guides are there to help
              you hire your dream candidates.
            </p>
            <button className="btn-normal text-[14px] font-semibold md:text-[18px]">
              Read candidate guides
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#F9F9F9]">
        <div className="container mx-auto flex flex-col px-4 py-6 sm:min-h-[520px] md:px-10 md:py-8 lg:flex-row lg:px-0 lg:py-[80px]">
          <div className="w-full lg:w-1/2">
            <h2 className="heading-2 mb-8 text-start">
              Popular candidate topics
            </h2>
            <div className="flex flex-col flex-wrap gap-6">
              <div className="flex w-full flex-grow gap-6 rounded-[10px] bg-shade-0 p-4 lg:w-[calc(100%-12px)]">
                <div className="h-fit w-fit rounded-[5px] bg-primary-100 p-3">
                  <Image
                    src="/assets/assesment-for-candidate.svg"
                    alt="Hero Image"
                    width={40}
                    height={40}
                    sizes="100vw"
                    className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                  />
                </div>
                <div className="flex w-full items-center justify-between">
                  <div className="flex flex-col justify-center">
                    <h3 className="md:heading-3 body-1 font-semibold">
                      Tools for taking an assessment
                    </h3>
                    <p className="caption-regular-3">
                      Information to ensure that your assessment runs smothly
                    </p>
                  </div>
                  <Image
                    src="/assets/icon_next.svg"
                    alt="Hero Image"
                    width={40}
                    height={40}
                    sizes="100vw"
                    className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                  />
                </div>
              </div>
              <div className="flex w-full flex-grow gap-6 rounded-[10px] bg-shade-0 p-4 lg:w-[calc(100%-12px)]">
                <div className="h-fit w-fit rounded-[5px] bg-primary-100 p-3">
                  <Image
                    src="/assets/path-assessment-for-candidate.svg"
                    alt="Hero Image"
                    width={40}
                    height={40}
                    sizes="100vw"
                    className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                  />
                </div>
                <div className="flex w-full items-center justify-between">
                  <div className="flex flex-col justify-center">
                    <h3 className="md:heading-3 body-1 font-semibold">
                      FAQ and troubleshooting for candidates
                    </h3>
                    <p className="caption-regular-3">
                      Are you facing issues while taking your assessment? This
                      is your fastest sources of answer!
                    </p>
                  </div>
                  <Image
                    src="/assets/icon_next.svg"
                    alt="Hero Image"
                    width={40}
                    height={40}
                    sizes="100vw"
                    className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                  />
                </div>
              </div>
              <div className="flex w-full flex-grow  gap-6 rounded-[10px] bg-shade-0 p-4 lg:w-[calc(100%-12px)]">
                <div className="h-fit w-fit rounded-[5px] bg-primary-100 p-3">
                  <Image
                    src="/assets/tools_assessment.svg"
                    alt="Hero Image"
                    width={40}
                    height={40}
                    sizes="100vw"
                    className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                  />
                </div>
                <div className="flex w-full items-center justify-between">
                  <div className="flex flex-col justify-center">
                    <h3 className="md:heading-3 body-1 font-semibold">
                      Step-by-step guide to taking your assessment
                    </h3>
                    <p className="caption-regular-3">
                      A comprehensive walkthrough of what to expect in your
                      assessment
                    </p>
                  </div>
                  <Image
                    src="/assets/icon_next.svg"
                    alt="Hero Image"
                    width={40}
                    height={40}
                    sizes="100vw"
                    className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                  />
                </div>
              </div>
              <div className="flex w-full flex-grow  gap-6 rounded-[10px] bg-shade-0 p-4 lg:w-[calc(100%-12px)]">
                <div className="h-fit w-fit rounded-[5px] bg-primary-100 p-3">
                  <Image
                    src="/assets/user-for-candidate.svg"
                    alt="Hero Image"
                    width={40}
                    height={40}
                    sizes="100vw"
                    className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                  />
                </div>
                <div className="flex w-full items-center justify-between">
                  <div className="flex flex-col justify-center">
                    <h3 className="md:heading-3 body-1 font-semibold">
                      Guide to TestFounder Profiles
                    </h3>
                    <p className="caption-regular-3">
                      This guides illustrates the steps of creating a
                      TestFounder Profile and analyzing your result
                    </p>
                  </div>
                  <Image
                    src="/assets/icon_next.svg"
                    alt="Hero Image"
                    width={40}
                    height={40}
                    sizes="100vw"
                    className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="heading-2 mb-8 pt-6 text-start lg:pt-0">
              Popular employer topics
            </h2>
            <div className="flex flex-col flex-wrap gap-6">
              <div className="flex w-full flex-grow gap-6 rounded-[10px] bg-shade-0 p-4 lg:w-[calc(100%-12px)]">
                <div className="h-fit w-fit rounded-[5px] bg-primary-100 p-3">
                  <Image
                    src="/assets/help-candidates.svg"
                    alt="Hero Image"
                    width={40}
                    height={40}
                    sizes="100vw"
                    className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                  />
                </div>
                <div className="flex w-full items-center justify-between">
                  <div className="flex flex-col justify-center">
                    <h3 className="md:heading-3 body-1 font-semibold">
                      Guide to creating an assessment
                    </h3>
                    <p className="caption-regular-3">
                      Everything you need to know about making and editing an
                      assessment.
                    </p>
                  </div>
                  <Image
                    src="/assets/icon_next.svg"
                    alt="Hero Image"
                    width={40}
                    height={40}
                    sizes="100vw"
                    className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                  />
                </div>
              </div>
              <div className="flex w-full flex-grow gap-6 rounded-[10px] bg-shade-0 p-4 lg:w-[calc(100%-12px)]">
                <div className="h-fit w-fit rounded-[5px] bg-primary-100 p-3">
                  <Image
                    src="/assets/path-assessment-for-candidate.svg"
                    alt="Hero Image"
                    width={40}
                    height={40}
                    sizes="100vw"
                    className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                  />
                </div>
                <div className="flex w-full items-center justify-between">
                  <div className="flex flex-col justify-center">
                    <h3 className="md:heading-3 body-1 font-semibold">
                      Managing candidates
                    </h3>
                    <p className="caption-regular-3">
                      Invite, remind, delete, or check the status of your
                      candidates.
                    </p>
                  </div>
                  <Image
                    src="/assets/icon_next.svg"
                    alt="Hero Image"
                    width={40}
                    height={40}
                    sizes="100vw"
                    className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                  />
                </div>
              </div>
              <div className="flex w-full flex-grow  gap-6 rounded-[10px] bg-shade-0 p-4 lg:w-[calc(100%-12px)]">
                <div className="h-fit w-fit rounded-[5px] bg-primary-100 p-3">
                  <Image
                    src="/assets/analyst-result.svg"
                    alt="Hero Image"
                    width={40}
                    height={40}
                    sizes="100vw"
                    className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                  />
                </div>
                <div className="flex w-full items-center justify-between">
                  <div className="flex flex-col justify-center">
                    <h3 className="md:heading-3 body-1 font-semibold">
                      Guide to analyzing results
                    </h3>
                    <p className="caption-regular-3">
                      This guide illustrates the general steps of analyzing the
                      results of your candidates.
                    </p>
                  </div>
                  <Image
                    src="/assets/icon_next.svg"
                    alt="Hero Image"
                    width={40}
                    height={40}
                    sizes="100vw"
                    className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                  />
                </div>
              </div>
              <div className="flex w-full flex-grow  gap-6 rounded-[10px] bg-shade-0 p-4 lg:w-[calc(100%-12px)]">
                <div className="h-fit w-fit rounded-[5px] bg-primary-100 p-3">
                  <Image
                    src="/assets/plan-money.svg"
                    alt="Hero Image"
                    width={40}
                    height={40}
                    sizes="100vw"
                    className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                  />
                </div>
                <div className="flex w-full items-center justify-between">
                  <div className="flex flex-col justify-center">
                    <h3 className="md:heading-3 body-1 font-semibold">
                      Guide to your plan & billing
                    </h3>
                    <p className="caption-regular-3">
                      Help with anything related to the Plan & billing tab of
                      your account.
                    </p>
                  </div>
                  <Image
                    src="/assets/icon_next.svg"
                    alt="Hero Image"
                    width={40}
                    height={40}
                    sizes="100vw"
                    className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                  />
                </div>
              </div>
              <div className="flex w-full flex-grow  gap-6 rounded-[10px] bg-shade-0 p-4 lg:w-[calc(100%-12px)]">
                <div className="h-fit w-fit rounded-[5px] bg-primary-100 p-3">
                  <Image
                    src="/assets/settings-question.svg"
                    alt="Hero Image"
                    width={40}
                    height={40}
                    sizes="100vw"
                    className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                  />
                </div>
                <div className="flex w-full items-center justify-between">
                  <div className="flex flex-col justify-center">
                    <h3 className="md:heading-3 body-1 font-semibold">
                      FAQs and troubleshooting for customers
                    </h3>
                    <p className="caption-regular-3">
                      In this article, we answer some of the most commonly asked
                      questions.
                    </p>
                  </div>
                  <Image
                    src="/assets/icon_next.svg"
                    alt="Hero Image"
                    width={40}
                    height={40}
                    sizes="100vw"
                    className="z-10 flex h-[20px] w-[20px] md:h-fit md:w-fit lg:h-fit lg:w-fit"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full space-y-6 bg-[#D0F3FC26]">
        <div className="container mx-auto flex flex-col items-center justify-center space-y-6 px-4 py-6 md:px-10 md:py-8 lg:py-[60px]">
          <h1 className="heading-2 sm:heading-1 text-center">
            Connect with Us Today for Exceptional Solutions
          </h1>
          <p className="caption-regular-3 sm:caption-regular-1 text-center">
            Explore our Contact Options and Take the First Step Towards Success
          </p>
          <div className="flex flex-row justify-center gap-4">
            <Link href="/contact">
              <button className="btn-normal">Contact Now</button>
            </Link>
          </div>
        </div>
      </div>

      <section className="bg-[#F9F9F9]">
        <div className="container mx-auto flex flex-col px-4 py-6 sm:min-h-[520px] md:px-10 md:py-8 lg:flex-row lg:px-0 lg:py-[80px]">
          <div className="w-full lg:w-1/2">
            <h2 className="heading-2 mb-8 text-start">
              Candidate frequently asked questions
            </h2>
            <div className="flex flex-col flex-wrap gap-6">
              <div className="flex max-h-[104px] w-full items-center gap-3 rounded-[10px] border-[0.5px]  border-[#CBCBCB] p-6 lg:w-[calc(100%-12px)]">
                <Image
                  src="/assets/faq_grey.svg"
                  width={46}
                  height={46}
                  alt="Icon Topics FAQ"
                />
                <p className="caption-semibold-1">
                  Can Testfounder help me find a job?
                </p>
              </div>
              <div className="flex max-h-[104px] w-full items-center gap-3 rounded-[10px] border-[0.5px]  border-[#CBCBCB] p-6 lg:w-[calc(100%-12px)]">
                <Image
                  src="/assets/faq_grey.svg"
                  width={46}
                  height={46}
                  alt="Icon Topics FAQ"
                />
                <p className="caption-semibold-1">
                  Where can I see my results?
                </p>
              </div>
              <div className="flex max-h-[104px] w-full items-center gap-3 rounded-[10px] border-[0.5px]  border-[#CBCBCB] p-6 lg:w-[calc(100%-12px)]">
                <Image
                  src="/assets/faq_grey.svg"
                  width={46}
                  height={46}
                  alt="Icon Topics FAQ"
                />
                <p className="caption-semibold-1">
                  Can I try the assessment again?
                </p>
              </div>
              <div className="flex max-h-[104px] w-full items-center gap-3 rounded-[10px] border-[0.5px]  border-[#CBCBCB] p-6 lg:w-[calc(100%-12px)]">
                <Image
                  src="/assets/faq_grey.svg"
                  width={46}
                  height={46}
                  alt="Icon Topics FAQ"
                />
                <p className="caption-semibold-1">
                  I have completed my assessment. What happens next?
                </p>
              </div>
              <div className="flex max-h-[104px] w-full items-center gap-3 rounded-[10px] border-[0.5px]  border-[#CBCBCB] p-6 lg:w-[calc(100%-12px)]">
                <Image
                  src="/assets/faq_grey.svg"
                  width={46}
                  height={46}
                  alt="Icon Topics FAQ"
                />
                <p className="caption-semibold-1">
                  Why can’t I log in/create an account?
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="heading-2 mb-8 pt-6 text-start lg:pt-0">
              Employer frequently asked questions
            </h2>
            <div className="flex flex-col flex-wrap gap-6">
              <div className="flex max-h-[104px] w-full items-center gap-3 rounded-[10px] border-[0.5px]  border-[#CBCBCB] p-6 lg:w-[calc(100%-12px)]">
                <Image
                  src="/assets/faq_grey.svg"
                  width={46}
                  height={46}
                  alt="Icon Topics FAQ"
                />
                <p className="caption-semibold-1">
                  How do I add users to my account?
                </p>
              </div>
              <div className="flex max-h-[104px] w-full items-center gap-3 rounded-[10px] border-[0.5px]  border-[#CBCBCB] p-6 lg:w-[calc(100%-12px)]">
                <Image
                  src="/assets/faq_grey.svg"
                  width={46}
                  height={46}
                  alt="Icon Topics FAQ"
                />
                <p className="caption-semibold-1">Can I delete my account?</p>
              </div>
              <div className="flex max-h-[104px] w-full items-center gap-3 rounded-[10px] border-[0.5px]  border-[#CBCBCB] p-6 lg:w-[calc(100%-12px)]">
                <Image
                  src="/assets/faq_grey.svg"
                  width={46}
                  height={46}
                  alt="Icon Topics FAQ"
                />
                <p className="caption-semibold-1">
                  Where can I find my billing details?
                </p>
              </div>
              <div className="flex max-h-[104px] w-full items-center gap-3 rounded-[10px] border-[0.5px]  border-[#CBCBCB] p-6 lg:w-[calc(100%-12px)]">
                <Image
                  src="/assets/faq_grey.svg"
                  width={46}
                  height={46}
                  alt="Icon Topics FAQ"
                />
                <p className="caption-semibold-1">
                  Is it possible to make changes to my plan?
                </p>
              </div>
              <div className="flex max-h-[104px] w-full items-center gap-3 rounded-[10px] border-[0.5px]  border-[#CBCBCB] p-6 lg:w-[calc(100%-12px)]">
                <Image
                  src="/assets/faq_grey.svg"
                  width={46}
                  height={46}
                  alt="Icon Topics FAQ"
                />
                <p className="caption-semibold-1">
                  How do I interpret the results and make informed decisions?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full space-y-6 bg-primary-500">
        <div className="container mx-auto flex flex-col items-center justify-center space-y-6 px-4 py-6 text-center md:px-10 md:py-8 lg:py-[80px]">
          <h1 className="heading-2 sm:heading-1 text-white">
            Improve your hiring now.
          </h1>
          <p className="caption-regular-3 sm:caption-regular-1 text-center text-white">
            Start using Testfounder today, or talk to us about your hiring
            challenges to discover how we can help.
          </p>
          <div className="flex flex-row gap-4">
            <Link href="/signup">
              <button className="btn-medium-white">Free Demo</button>
            </Link>
            <Link href="/book-demo">
              <button className="btn-line-medium-white">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HelpCenter;
