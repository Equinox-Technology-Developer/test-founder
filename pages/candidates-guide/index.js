import React from 'react';

import { Layout } from '@/components';
import Link from 'next/link';
import Image from 'next/image';

const CandidatesGuide = () => {
  return (
    <Layout pageTitle="For Candidates">
      <section className="bg-[#F9F9F9] bg-blur bg-right bg-no-repeat pt-0">
        <div className="container mx-auto">
          <div className="relative flex flex-col items-center sm:static lg:flex-row lg:py-[80px]">
            <div className="mb-0 mt-20 flex flex-col items-center text-center md:mb-0 md:w-full md:items-center md:px-[40px] md:py-[32px] md:text-left lg:mt-24 lg:flex-grow lg:items-start lg:pr-24">
              <h1 className="sm:heading-1 heading-2 mb-6 mt-0 text-center lg:text-start">
                Candidate support
              </h1>
              <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-0 text-center lg:text-start">
                Have you been asked to complete a Testfounder assessment and
                aren’t sure what to expect? This space is for you and has
                everything you need, including troubleshooting help and answers
                to your FAQs.
              </p>
              <div className="relative flex w-full xl:w-fit">
                <input
                  type="text"
                  className="w-full rounded-[30px] bg-white px-4 py-[10px] shadow-[0_4px_10px_0px_rgba(0,0,0,0.15)] placeholder:text-base placeholder:text-[#CBCBCB]  xl:w-[600px]"
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
            <div className="flex w-full justify-center md:w-full lg:w-full lg:max-w-lg">
              <Image
                src="/assets/hero-image-for-candidate.png"
                alt="Hero Image"
                width={599}
                height={531}
                sizes="100vw"
                className=" z-10 mt-20 flex h-auto w-[80%] md:w-[60%] lg:w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-grayscale-200">
        <div className="container mx-auto py-[80px]">
          <h2 className="heading-2 mb-8">
            Our recommended reads to help you get started
          </h2>
          <div className="flex flex-wrap gap-6">
            <div className="flex w-[calc(50%-12px)] flex-grow gap-6 rounded-[10px] bg-shade-0 p-4">
              <div className="h-16 w-16 rounded-[5px] bg-primary-100 p-3">
                <Image
                  src="/assets/assesment-for-candidate.svg"
                  alt="Hero Image"
                  width={40}
                  height={40}
                  sizes="100vw"
                  className="z-10 flex h-auto w-[80%] md:w-[60%] lg:w-full"
                />
              </div>
              <div className="flex w-full justify-between">
                <div className="flex flex-col justify-center">
                  <h3 className="heading-3">Tools for taking an assessment</h3>
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
                  className="z-10 flex h-auto w-[80%] md:w-[60%] lg:w-fit"
                />
              </div>
            </div>
            <div className="flex w-[calc(50%-12px)] flex-grow gap-6 rounded-[10px] bg-shade-0 p-4">
              <div className="h-16 w-16 rounded-[5px] bg-primary-100 p-3">
                <Image
                  src="/assets/path-assessment-for-candidate.svg"
                  alt="Hero Image"
                  width={40}
                  height={40}
                  sizes="100vw"
                  className="z-10 flex h-auto w-[80%] md:w-[60%] lg:w-full"
                />
              </div>
              <div className="flex w-full justify-between">
                <div className="flex flex-col justify-center">
                  <h3 className="heading-3">
                    FAQ and troubleshooting for candidates
                  </h3>
                  <p className="caption-regular-3">
                    Are you facing issues while taking your assessment? This is
                    your fastest sources of answer!
                  </p>
                </div>
                <Image
                  src="/assets/icon_next.svg"
                  alt="Hero Image"
                  width={40}
                  height={40}
                  sizes="100vw"
                  className="z-10 flex h-auto w-[80%] md:w-[60%] lg:w-fit"
                />
              </div>
            </div>
            <div className="flex w-[calc(50%-12px)] flex-grow gap-6 rounded-[10px] bg-shade-0 p-4">
              <div className="h-16 w-16 rounded-[5px] bg-primary-100 p-3">
                <Image
                  src="/assets/settings-question-for-candidate.svg"
                  alt="Hero Image"
                  width={40}
                  height={40}
                  sizes="100vw"
                  className="z-10 flex h-auto w-[80%] md:w-[60%] lg:w-full"
                />
              </div>
              <div className="flex w-full justify-between">
                <div className="flex flex-col justify-center">
                  <h3 className="heading-3">
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
                  className="z-10 flex h-auto w-[80%] md:w-[60%] lg:w-fit"
                />
              </div>
            </div>
            <div className="flex w-[calc(50%-12px)] flex-grow gap-6 rounded-[10px] bg-shade-0 p-4">
              <div className="h-16 w-16 rounded-[5px] bg-primary-100 p-3">
                <Image
                  src="/assets/user-for-candidate.svg"
                  alt="Hero Image"
                  width={40}
                  height={40}
                  sizes="100vw"
                  className="z-10 flex h-auto w-[80%] md:w-[60%] lg:w-full"
                />
              </div>
              <div className="flex w-full justify-between">
                <div className="flex flex-col justify-center">
                  <h3 className="heading-3">Guide to TestFounder Profiles</h3>
                  <p className="caption-regular-3">
                    This guides illustrates the steps of creating a TestFounder
                    Profile and analyzing your result
                  </p>
                </div>
                <Image
                  src="/assets/icon_next.svg"
                  alt="Hero Image"
                  width={40}
                  height={40}
                  sizes="100vw"
                  className="z-10 flex h-auto w-[80%] md:w-[60%] lg:w-fit"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex h-fit items-center bg-white px-4 py-6 sm:min-h-[520px] md:px-[40px] md:py-[40px] lg:px-0 lg:py-0">
        <div className="container mx-auto ">
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:py-[60px]">
            <div className="relative flex w-full flex-col items-center space-y-6 md:w-full md:items-start lg:w-1/2">
              <h1 className="heading-2 sm:heading-1 mb-0 mt-0 text-center sm:text-start">
                Practice makes perfect
              </h1>
              <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                Practice is crucial for success, so in order to get used to our
                platform you’ll receive 4 practice questions at the start of
                each test. Your answers to these questions do not contribute to
                your final score, nor does the employer see your answers to
                them. They are there to help you feel comfortable with the test
                format.
              </p>
              <Link href="">
                <button className="btn-line-normal-black">Read more</button>
              </Link>
            </div>
            <div className="mb-16 w-full sm:w-1/2 md:mb-0 md:text-left ">
              <Image
                src="/assets/practice-makes-perfect.png"
                alt="Hero Image"
                width={537}
                height={525}
                sizes="100vw"
                className="z-50"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="flex h-fit items-center bg-white px-4 py-6 sm:min-h-[520px] md:px-[40px] md:py-[40px] lg:px-0 lg:py-0">
        <div className="container mx-auto">
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:py-[60px]">
            <div className="mb-16 w-full sm:w-1/2 md:mb-0 md:text-left ">
              <Image
                src="/assets/taking-the-tests.png"
                alt="Hero Image"
                width={575}
                height={531}
                sizes="100vw"
                className="z-50"
              />
            </div>
            <div className="relative flex w-full flex-col items-center space-y-6 md:w-full md:items-start lg:w-1/2">
              <h1 className="heading-2 sm:heading-1 mb-0 mt-0 text-center sm:text-start">
                Taking the tests
              </h1>
              <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                After the practice questions, your test will begin. The
                different types of questions you may be asked to answer are:
                multiple-choice, multiple-select, true/false, essay questions,
                file uploads, video recordings, and coding challenges. The types
                of questions will depend on the position you are applying for.
              </p>
              <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                You will see a time and progress bar along the top of the
                assessment to help you best manage your time. Keep an eye on
                this throughout the assessment! Don’t worry, there are points
                where you will be able to take a break and the timer will pause.
              </p>
              <Link href="">
                <button className="btn-line-normal-black">Read more</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="flex h-fit items-center bg-white px-4 py-6 sm:min-h-[520px] md:px-[40px] md:py-[40px] lg:px-0 lg:py-0">
        <div className="container mx-auto ">
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:py-[60px]">
            <div className="relative flex w-full flex-col items-center space-y-6 md:w-full md:items-start lg:w-1/2">
              <h1 className="heading-2 sm:heading-1 mb-0 mt-0 text-center sm:text-start">
                Taking a break
              </h1>
              <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                We know that taking a test can be a stressful experience, which
                is why our platform allows for breaks between tests in an
                assessment.
              </p>
              <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                Our platform will prompt you when you are able to take a break,
                and you will be able to close the window. When you’re ready to
                start again, you’ll be able to simply follow the link found in
                your invitation.
              </p>
              <Link href="">
                <button className="btn-line-normal-black">Read More</button>
              </Link>
            </div>
            <div className="mb-16 w-full sm:w-1/2 md:mb-0 md:text-left ">
              <Image
                src="/assets/taking-a-break.png"
                alt="Hero Image"
                width={595}
                height={554}
                sizes="100vw"
                className="z-50"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-grayscale-200">
        <div className="container mx-auto py-[80px]">
          <h2 className="heading-2 mb-8">Relate Post</h2>
          <div className="flex flex-wrap gap-6">
            <div className="w-[calc(33%-12px)] p-4">
              <Image
                src="/assets/relate-post-1.png"
                alt="Hero Image"
                width={389}
                height={228}
                sizes="100vw mb-4 w-full"
              />
              <p className="caption-semibold-1">
                Do years of experience make candidates qualified?
              </p>
            </div>
            <div className="w-[calc(33%-12px)] p-4">
              <Image
                src="/assets/relate-post-2.png"
                alt="Hero Image"
                width={389}
                height={228}
                sizes="100vw mb-4"
              />
              <p className="caption-semibold-1">
                Do years of experience make candidates qualified?
              </p>
            </div>
            <div className="w-[calc(33%-12px)] p-4">
              <Image
                src="/assets/relate-post-3.png"
                alt="Hero Image"
                width={389}
                height={228}
                sizes="100vw mb-4"
              />
              <p className="caption-semibold-1">
                Do years of experience make candidates qualified?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:px-16 lg:py-[60px]">
        <div className="container mx-auto">
          <h1 className="heading-1 lg:mb-8">Frequently asked question</h1>
          <div className="flex flex-wrap justify-between gap-6">
            <div className="flex max-h-[104px] w-[49%] items-center gap-3 rounded-[10px] border-[0.5px] border-[#CBCBCB] p-6">
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
            <div className="flex max-h-[104px] w-[49%] items-center gap-3 rounded-[10px] border-[0.5px] border-[#CBCBCB] p-6">
              <Image
                src="/assets/faq_grey.svg"
                width={46}
                height={46}
                alt="Icon Topics FAQ"
              />
              <p className="caption-semibold-1">
                What should I do if I haven't received my email invitation yet?
              </p>
            </div>
            <div className="flex max-h-[104px] w-[49%] items-center gap-3 rounded-[10px] border-[0.5px] border-[#CBCBCB] p-6">
              <Image
                src="/assets/faq_grey.svg"
                width={46}
                height={46}
                alt="Icon Topics FAQ"
              />
              <p className="caption-semibold-1">
                I am using a public invitation link, but my email address is not
                accepted. How do I take the assessment?
              </p>
            </div>
            <div className="flex max-h-[104px] w-[49%] items-center gap-3 rounded-[10px] border-[0.5px] border-[#CBCBCB] p-6">
              <Image
                src="/assets/faq_grey.svg"
                width={46}
                height={46}
                alt="Icon Topics FAQ"
              />
              <p className="caption-semibold-1">Where can I see my results?</p>
            </div>
            <div className="flex max-h-[104px] w-[49%] items-center gap-3 rounded-[10px] border-[0.5px] border-[#CBCBCB] p-6">
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
            <div className="flex max-h-[104px] w-[49%] items-center gap-3 rounded-[10px] border-[0.5px] border-[#CBCBCB] p-6">
              <Image
                src="/assets/faq_grey.svg"
                width={46}
                height={46}
                alt="Icon Topics FAQ"
              />
              <p className="caption-semibold-1">
                Why did my assessment end after only a few questions?
              </p>
            </div>
            <div className="flex max-h-[104px] w-[49%] items-center gap-3 rounded-[10px] border-[0.5px] border-[#CBCBCB] p-6">
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
            <div className="flex max-h-[104px] w-[49%] items-center gap-3 rounded-[10px] border-[0.5px] border-[#CBCBCB] p-6">
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
            <div className="flex max-h-[104px] w-[49%] items-center gap-3 rounded-[10px] border-[0.5px] border-[#CBCBCB] p-6">
              <Image
                src="/assets/faq_grey.svg"
                width={46}
                height={46}
                alt="Icon Topics FAQ"
              />
              <p className="caption-semibold-1">
                What do I do if the questions are loading slowly or my test has
                frozen?
              </p>
            </div>
            <div className="flex max-h-[104px] w-[49%] items-center gap-3 rounded-[10px] border-[0.5px] border-[#CBCBCB] p-6">
              <Image
                src="/assets/faq_grey.svg"
                width={46}
                height={46}
                alt="Icon Topics FAQ"
              />
              <p className="caption-semibold-1">
                When I click the link why does the page say, "The assessment is
                no longer available"/"The assessment is currently unavailable"?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex h-full min-h-[366px] w-full items-center space-y-6 bg-primary-500">
        <div className="container mx-auto flex flex-col items-center justify-center space-y-6 px-4 py-6 text-center sm:px-0 sm:py-[60px]">
          <h1 className="heading-2 sm:heading-1 text-white">
            Looking for more information?
          </h1>
          <p className="caption-regular-3 sm:caption-regular-1 text-center text-white">
            Find out more about how TestFounder assessments are reinventing
            hiring.
          </p>
          <div className="flex flex-row gap-4">
            <Link href="/sciences">
              <button className="btn-medium-white">
                Science behind TestFounder
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CandidatesGuide;
