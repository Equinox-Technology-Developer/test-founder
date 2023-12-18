import { Layout } from '@/components';
import React from 'react';
import Image from 'next/image';

const testLibrary = ({}) => {
  return (
    <>
      <Layout pageTitle="Test Library">
        <section className="max-h-[692px] bg-[#F9F9F9] bg-blur bg-right bg-no-repeat pt-0 lg:pb-9 lg:pt-[60px]">
          <div className="container mx-auto">
            <div className="relative flex flex-col items-center sm:static lg:flex-row">
              <div className="mb-16 mt-4 flex flex-col items-center text-center md:mb-0 md:w-full md:items-center md:px-[40px] md:py-[32px] md:text-left lg:mt-24 lg:flex-grow lg:items-start lg:pr-24">
                <h1 className="sm:heading-1 heading-2 mb-6 mt-0 ">
                  Resumes aren’t working. Skills-based hiring does.
                </h1>
                <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-0 text-center lg:text-start">
                  Choose from our 300+ candidate-friendly skills and personality
                  tests for fast and accurate pre-employment screening
                </p>
                <div className="mb-6 flex justify-center">
                  <button className="btn-medium sm:btn-normal">
                    Try for free!
                  </button>
                  <button className="btn-line-medium sm:btn-line-normal ml-4">
                    Book a demo
                  </button>
                </div>
              </div>
              <div className="relative flex w-full justify-center md:w-full lg:w-full lg:max-w-lg">
                <Image
                  src="/assets/hero-image-test-library.png"
                  alt="Hero Image Test Library"
                  width={512}
                  height={638}
                  sizes="100vw"
                  className="z-10 flex h-auto w-[80%] md:w-[60%] lg:w-full"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#F9F9F9] lg:pb-[62px] lg:pt-[60px]">
          <div className="container mx-auto">
            <h1 className="heading-1 text-center lg:mb-[34px]">
              Search our test library
            </h1>
            <div className="flex justify-between lg:mb-8">
              <div className="relative flex">
                <input
                  type="text"
                  className="w-full rounded-[5px] border-[0.75px] border-[#CBCBCB] bg-white px-4 py-[10px] placeholder:text-base placeholder:text-[#CBCBCB] xl:w-[644px]"
                  placeholder="Search anything here"
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
              <div className="flex">
                <select
                  name="test"
                  id="test"
                  className="w-full rounded-[5px] border-[0.75px] border-[#CBCBCB] bg-white px-4 py-[10px] placeholder:text-base placeholder:text-[#CBCBCB] xl:w-[644px] "
                  placeholder="Test Type"
                >
                  <option value="" disabled selected hidden clas>
                    Test Type
                  </option>
                  <option value="volvo">Language</option>
                  <option value="saab">Typing Speed</option>
                  <option value="mercedes">Programming</option>
                  <option value="audi">Software</option>
                </select>
              </div>
            </div>
            <div className="flex flex-wrap justify-start gap-3 2xl:gap-6">
              <div className="h-[481px] w-[310px] rounded-[10px] bg-white">
                <div className="flex items-center space-x-2 rounded-t-[10px] bg-primary-600 px-6 py-3 ">
                  <Image
                    src="/assets/candidates.svg"
                    alt="icon-candidates"
                    width={32}
                    height={32}
                    sizes="100vw"
                    className="flex h-auto"
                  />
                  <p className="text-white">Popular</p>
                </div>
                <div
                  id="content"
                  className="flex h-[90%] flex-col justify-between px-6 py-4"
                >
                  <div>
                    <h2 className="caption-bold-2 mb-4">Culture Add</h2>
                    <p className="caption-regular-3">
                      This culture add test assesses how a candidate’s values
                      and behaviors align with your organization values and the
                      behaviors that would make your ideal hire successful in a
                      specific role, based on a customized survey you fill out.
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-[6px]">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 13V9M21 6L19 4M10 2H14M12 21C9.87827 21 7.84344 20.1571 6.34315 18.6569C4.84285 17.1566 4 15.1217 4 13C4 10.8783 4.84285 8.84344 6.34315 7.34315C7.84344 5.84285 9.87827 5 12 5C14.1217 5 16.1566 5.84285 17.6569 7.34315C19.1571 8.84344 20 10.8783 20 13C20 15.1217 19.1571 17.1566 17.6569 18.6569C16.1566 20.1571 14.1217 21 12 21Z"
                          stroke="black"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <p>10 Min</p>
                    </div>
                    <button className="btn-line-small">Details</button>
                  </div>
                </div>
              </div>
              <div className="h-[481px] w-[310px] rounded-[10px] bg-white">
                <div className="flex items-center space-x-2 rounded-t-[10px] bg-primary-600 px-6 py-3 ">
                  <Image
                    src="/assets/star-new-test.svg"
                    alt="icon-star-new-test"
                    width={32}
                    height={32}
                    sizes="100vw"
                    className="flex h-auto"
                  />
                  <p className="text-white">New Test</p>
                </div>
                <div
                  id="content"
                  className="flex h-[90%] flex-col justify-between px-6 py-4"
                >
                  <div>
                    <h2 className="caption-bold-2 mb-4">
                      Coding: Entry-Level Algorithms
                    </h2>
                    <p className="caption-regular-3">
                      This coding test assesses candidates' ability to program a
                      basic algorithm, in the programming language of their
                      choice. You can configure which programming languages will
                      be available for your candidates to choose from.
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-[6px]">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 13V9M21 6L19 4M10 2H14M12 21C9.87827 21 7.84344 20.1571 6.34315 18.6569C4.84285 17.1566 4 15.1217 4 13C4 10.8783 4.84285 8.84344 6.34315 7.34315C7.84344 5.84285 9.87827 5 12 5C14.1217 5 16.1566 5.84285 17.6569 7.34315C19.1571 8.84344 20 10.8783 20 13C20 15.1217 19.1571 17.1566 17.6569 18.6569C16.1566 20.1571 14.1217 21 12 21Z"
                          stroke="black"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <p>10 Min</p>
                    </div>
                    <button className="btn-line-small">Details</button>
                  </div>
                </div>
              </div>
              <div className="h-[481px] w-[310px] rounded-[10px] bg-white">
                <div className="flex min-h-[56px] flex-col items-end justify-end space-x-2 rounded-t-[10px] px-6">
                  <span className="flex h-[2px] w-full bg-primary-600"></span>
                </div>
                <div
                  id="content"
                  className="flex h-[90%] flex-col justify-between  px-6 py-4"
                >
                  <div>
                    <h2 className="caption-bold-2 mb-4">Apex (Salesforce)</h2>
                    <p className="caption-regular-3">
                      This Apex (Salesforce) test assesses candidates'
                      proficiency in Apex fundamentals, the Salesforce data
                      model, SOQL/SOSL queries, and Apex design patterns. This
                      test will help you identify candidates skilled in
                      Lightning Platform...
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-[6px]">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 13V9M21 6L19 4M10 2H14M12 21C9.87827 21 7.84344 20.1571 6.34315 18.6569C4.84285 17.1566 4 15.1217 4 13C4 10.8783 4.84285 8.84344 6.34315 7.34315C7.84344 5.84285 9.87827 5 12 5C14.1217 5 16.1566 5.84285 17.6569 7.34315C19.1571 8.84344 20 10.8783 20 13C20 15.1217 19.1571 17.1566 17.6569 18.6569C16.1566 20.1571 14.1217 21 12 21Z"
                          stroke="black"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <p>10 Min</p>
                    </div>
                    <button className="btn-line-small">Details</button>
                  </div>
                </div>
              </div>
              <div className="h-[481px] w-[310px] rounded-[10px] bg-white">
                <div className="flex min-h-[56px] flex-col items-end justify-end space-x-2 rounded-t-[10px] px-6">
                  <span className="flex h-[2px] w-full bg-primary-600"></span>
                </div>
                <div
                  id="content"
                  className="flex h-[90%] flex-col justify-between  px-6 py-4"
                >
                  <div>
                    <h2 className="caption-bold-2 mb-4">Apex (Salesforce)</h2>
                    <p className="caption-regular-3">
                      This Apex (Salesforce) test assesses candidates'
                      proficiency in Apex fundamentals, the Salesforce data
                      model, SOQL/SOSL queries, and Apex design patterns. This
                      test will help you identify candidates skilled in
                      Lightning Platform...
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-[6px]">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 13V9M21 6L19 4M10 2H14M12 21C9.87827 21 7.84344 20.1571 6.34315 18.6569C4.84285 17.1566 4 15.1217 4 13C4 10.8783 4.84285 8.84344 6.34315 7.34315C7.84344 5.84285 9.87827 5 12 5C14.1217 5 16.1566 5.84285 17.6569 7.34315C19.1571 8.84344 20 10.8783 20 13C20 15.1217 19.1571 17.1566 17.6569 18.6569C16.1566 20.1571 14.1217 21 12 21Z"
                          stroke="black"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <p>10 Min</p>
                    </div>
                    <button className="btn-line-small">Details</button>
                  </div>
                </div>
              </div>
              <div className="h-[481px] w-[310px] rounded-[10px] bg-white">
                <div className="flex min-h-[56px] flex-col items-end justify-end space-x-2 rounded-t-[10px] px-6">
                  <span className="flex h-[2px] w-full bg-primary-600"></span>
                </div>
                <div
                  id="content"
                  className="flex h-[90%] flex-col justify-between  px-6 py-4"
                >
                  <div>
                    <h2 className="caption-bold-2 mb-4">Apex (Salesforce)</h2>
                    <p className="caption-regular-3">
                      This Apex (Salesforce) test assesses candidates'
                      proficiency in Apex fundamentals, the Salesforce data
                      model, SOQL/SOSL queries, and Apex design patterns. This
                      test will help you identify candidates skilled in
                      Lightning Platform...
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-[6px]">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 13V9M21 6L19 4M10 2H14M12 21C9.87827 21 7.84344 20.1571 6.34315 18.6569C4.84285 17.1566 4 15.1217 4 13C4 10.8783 4.84285 8.84344 6.34315 7.34315C7.84344 5.84285 9.87827 5 12 5C14.1217 5 16.1566 5.84285 17.6569 7.34315C19.1571 8.84344 20 10.8783 20 13C20 15.1217 19.1571 17.1566 17.6569 18.6569C16.1566 20.1571 14.1217 21 12 21Z"
                          stroke="black"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <p>10 Min</p>
                    </div>
                    <button className="btn-line-small">Details</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default testLibrary;
