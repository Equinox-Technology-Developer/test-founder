import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';

import { Layout } from '@/components';
import { fetchContentfulEntries } from '@/lib/contentful/client';

import styles from './TestLibrary.module.scss';

const testLibrary = ({ contentfulEntries }) => {
  const bodyTextValue =
    contentfulEntries.topBanner.fields.bodyText.content[0].content[0].value ||
    '';
  const imageUrl = contentfulEntries.topBanner.fields.image.fields.file.url;
  const fullImageUrl = `https:${imageUrl}`;

  return (
    <>
      <Layout pageTitle="Test Library">
        {/* Top Banner */}
        <section className="bg-[#F9F9F9] bg-blur bg-right bg-no-repeat pt-0">
          <div className="container mx-auto p-[10px] md:px-[40px] md:py-[58px]">
            <div className={`gap-5 ${styles.banner_topContent}`}>
              <div className={`${styles.banner_topContentText}`}>
                <h1 className="sm:heading-1 heading-2 text-center lg:text-start">
                  {contentfulEntries.topBanner.fields.headline
                    .split(' ')
                    .map((word, index) => (
                      <span
                        key={index}
                        className={
                          word === 'Skills-based' ? 'text-primary-500' : ''
                        }
                      >
                        {word}{' '}
                      </span>
                    ))}
                </h1>
                <p className="caption-regular-3 sm:caption-regular-1 mb-4 mt-4 text-center md:mb-6 md:mt-6 lg:text-start">
                  {bodyTextValue}
                </p>
                <div className="mb-6 flex w-full justify-center lg:justify-start">
                  <Link href={contentfulEntries.topBanner.fields.ctaUrl}>
                    <button className="btn-medium sm:btn-normal">
                      {contentfulEntries.topBanner.fields.ctaText}
                    </button>
                  </Link>
                  <Link href={contentfulEntries.topBanner.fields.ctaUrl2}>
                    <button className="btn-line-medium sm:btn-line-normal ml-4">
                      {contentfulEntries.topBanner.fields.ctaText2}
                    </button>
                  </Link>
                </div>
                <div className="flex items-center gap-2 ">
                  <div>
                    <Image
                      src="/assets/test-library-banner_people.png"
                      width={140}
                      height={44}
                      alt="test-library-banner_people"
                    />
                  </div>
                  <div>
                    <div className="flex text-star">
                      <FaStar className="svg-star" />
                      <FaStar className="svg-star" />
                      <FaStar className="svg-star" />
                      <FaStar className="svg-star" />
                      <FaStar className="svg-star" />
                    </div>
                    <p>Used by 500K+ recruiters </p>
                  </div>
                </div>
              </div>
              <div
                className={`flex w-full justify-center md:w-full lg:w-full lg:max-w-lg ${styles.banner_topContentImage}`}
              >
                <Image
                  src={fullImageUrl}
                  alt="Hero Image"
                  width={617}
                  height={602}
                  sizes="100vw"
                  className={`flex h-auto w-[80%] md:w-[60%] lg:w-full `}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Library */}
        <section className="bg-[#F9F9F9] px-4 lg:px-0 lg:pb-[62px] lg:pt-[60px]">
          <div className="container mx-auto">
            <h1 className="heading-2 md:heading-1 my-[24px] text-center md:my-[32px] lg:mb-[34px] lg:mt-[24px]">
              Search our test library
            </h1>
            <div className="mb-4 flex flex-col justify-between gap-6 md:mb-6 lg:mb-8 lg:flex-row lg:gap-0">
              <div className="relative flex">
                <input
                  type="text"
                  className="w-full rounded-[5px] border-[0.75px] border-[#CBCBCB] bg-white px-4 py-[10px] placeholder:text-base placeholder:text-[#CBCBCB] lg:w-[500px] xl:w-[644px]"
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
                  className="w-full rounded-[5px] border-[0.75px] border-[#CBCBCB] bg-white px-4 py-[10px] placeholder:text-base placeholder:text-[#CBCBCB] lg:w-[500px] xl:w-[644px] "
                  placeholder="Test Type"
                  defaultValue={'DEFAULT'}
                >
                  <option value="DEFAULT" disabled selected hidden>
                    Test Type
                  </option>
                  <option value="volvo">Language</option>
                  <option value="saab">Typing Speed</option>
                  <option value="mercedes">Programming</option>
                  <option value="audi">Software</option>
                </select>
              </div>
            </div>
            <div className={`${styles.library_wrapper}`}>
              <div className={`${styles.exercise_cards}`}>
                <div className={`${styles.cards_tags}`}>
                  <Image
                    src="/assets/candidates.svg"
                    alt="icon-candidates"
                    width={32}
                    height={32}
                    sizes="100vw"
                    className="flex h-auto"
                  />
                  <p className="text-white" text="Popular">
                    Popular
                  </p>
                </div>
                <div className={`${styles.cards_content}`}>
                  <div className={`${styles.cards_contentText}`}>
                    <h3>Culture add</h3>
                    <p>
                      This culture add test assesses how a candidate’s values
                      and behaviors align with your organization values and the
                      behaviors that would make your ideal hire successful in a
                      specific role, based on a customized survey you fill out.
                    </p>
                  </div>
                  <div className={`${styles.cards_contentDetails}`}>
                    <div className={`${styles.time}`}>
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
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p>10 Min</p>
                    </div>
                    <button className="btn-line-small">Details</button>
                  </div>
                </div>
              </div>
              <div className={`${styles.exercise_cards}`}>
                <div className={`${styles.cards_tags}`}>
                  <Image
                    src="/assets/star-new-test.svg"
                    alt="icon-star-new-test"
                    width={32}
                    height={32}
                    sizes="100vw"
                    className="flex h-auto"
                  />
                  <p className="text-white">New test</p>
                </div>
                <div className={`${styles.cards_content}`}>
                  <div className={`${styles.cards_contentText}`}>
                    <h3>Coding: Entry-Level Algorithms</h3>
                    <p>
                      This coding test assesses candidates' ability to program a
                      basic algorithm, in the programming language of their
                      choice. You can configure which programming languages will
                      be available for your candidates to choose from.
                    </p>
                  </div>
                  <div className={`${styles.cards_contentDetails}`}>
                    <div className={`${styles.time}`}>
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
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p>10 Min</p>
                    </div>
                    <button className="btn-line-small">Details</button>
                  </div>
                </div>
              </div>
              <div className={`${styles.exercise_cards}`}>
                <div className={`${styles.cards_tags}`}>
                  <Image
                    src="/assets/star-new-test.svg"
                    alt="icon-star-new-test"
                    width={32}
                    height={32}
                    sizes="100vw"
                    className="flex h-auto"
                  />
                  <p className="text-white">New test</p>
                </div>
                <div className={`${styles.cards_content}`}>
                  <div className={`${styles.cards_contentText}`}>
                    <h3>Coding: Intermediate-Level Algorithms</h3>
                    <p>
                      This coding test assesses candidates' intermediate-level
                      programming skills, in the programming language of their
                      choice. You can configure which programming languages will
                      be available for your candidates to choose from.
                    </p>
                  </div>
                  <div className={`${styles.cards_contentDetails}`}>
                    <div className={`${styles.time}`}>
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
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p>10 Min</p>
                    </div>
                    <button className="btn-line-small">Details</button>
                  </div>
                </div>
              </div>
              <div className={`${styles.exercise_cards}`}>
                <div className={`${styles.cards_tags}`}>
                  <Image
                    src="/assets/star-new-test.svg"
                    alt="icon-star-new-test"
                    width={32}
                    height={32}
                    sizes="100vw"
                    className="flex h-auto"
                  />
                  <p className="text-white">New test</p>
                </div>
                <div className={`${styles.cards_content}`}>
                  <div className={`${styles.cards_contentText}`}>
                    <h3>Data Analytics in Google Cloud Platform (GCP)</h3>
                    <p>
                      This Data Analytics in Google Cloud Platform (GCP) test
                      evaluates a candidate's ability to use, manage, and
                      optimize data analysis procedures on GCP, helping hire
                      experts who can drive data-driven decisions for your...
                    </p>
                  </div>
                  <div className={`${styles.cards_contentDetails}`}>
                    <div className={`${styles.time}`}>
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
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p>10 Min</p>
                    </div>
                    <button className="btn-line-small">Details</button>
                  </div>
                </div>
              </div>
              <div className={`${styles.exercise_cards}`}>
                <div className={`${styles.cards_tags}`}>
                  <Image
                    src="/assets/star-new-test.svg"
                    alt="icon-star-new-test"
                    width={32}
                    height={32}
                    sizes="100vw"
                    className="flex h-auto"
                  />
                  <p className="text-white">New test</p>
                </div>
                <div className={`${styles.cards_content}`}>
                  <div className={`${styles.cards_contentText}`}>
                    <h3>Multi-Task Learning (MTL)</h3>
                    <p>
                      This Multi-Task Learning (MTL) test evaluates candidates'
                      ability to optimize models across diverse tasks, driving
                      innovation and efficiency. This screening test will help
                      you hire MTL experts who can give you a competitive edge
                      in data
                    </p>
                  </div>
                  <div className={`${styles.cards_contentDetails}`}>
                    <div className={`${styles.time}`}>
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
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p>10 Min</p>
                    </div>
                    <button className="btn-line-small">Details</button>
                  </div>
                </div>
              </div>
              <div className={`${styles.exercise_cards}`}>
                <div className={`${styles.cards_tags}`}>
                  <Image
                    src="/assets/star-new-test.svg"
                    alt="icon-start-new-test"
                    width={32}
                    height={32}
                    sizes="100vw"
                    className="flex h-auto"
                  />
                  <p className="text-white">New Test</p>
                </div>
                <div className={`${styles.cards_content}`}>
                  <div className={`${styles.cards_contentText}`}>
                    <h3>Computer Vision</h3>
                    <p>
                      This Computer Vision test evaluates candidates' abilities
                      to apply visual data analysis skills, helping you hire
                      experts who can drive innovation in diverse fields from
                      healthcare to autonomous vehicles.
                    </p>
                  </div>
                  <div className={`${styles.cards_contentDetails}`}>
                    <div className={`${styles.time}`}>
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
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p>10 Min</p>
                    </div>
                    <button className="btn-line-small">Details</button>
                  </div>
                </div>
              </div>
              <div className={`${styles.exercise_cards}`}>
                <div className={`${styles.cards_tags}`}>
                  <Image
                    src="/assets/star-new-test.svg"
                    alt="icon-star-new-test"
                    width={32}
                    height={32}
                    sizes="100vw"
                    className="flex h-auto"
                  />
                  <p className="text-white">New test</p>
                </div>
                <div className={`${styles.cards_content}`}>
                  <div className={`${styles.cards_contentText}`}>
                    <h3>Microsoft Access</h3>
                    <p>
                      This MS Access screening test will help you hire
                      professionals who can design front-end software products
                      to integrate with your Microsoft Office environment. It
                      evaluates knowledge of front-end/back-end database
                      development using MS
                    </p>
                  </div>
                  <div className={`${styles.cards_contentDetails}`}>
                    <div className={`${styles.time}`}>
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
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p>10 Min</p>
                    </div>
                    <button className="btn-line-small">Details</button>
                  </div>
                </div>
              </div>
              <div className={`${styles.exercise_cards}`}>
                <div className={`${styles.cards_tags}`}>
                  <Image
                    src="/assets/star-new-test.svg"
                    alt="icon-star-new-test"
                    width={32}
                    height={32}
                    sizes="100vw"
                    className="flex h-auto"
                  />
                  <p className="text-white">New test</p>
                </div>
                <div className={`${styles.cards_content}`}>
                  <div className={`${styles.cards_contentText}`}>
                    <h3>Basic Math Calculations</h3>
                    <p>
                      This Basic Math Calculations test evaluates candidates’
                      ability to solve addition, subtraction, multiplication,
                      and division problems. This test will help you identify
                      candidates who can solve calculations that use double- and
                      triple
                    </p>
                  </div>
                  <div className={`${styles.cards_contentDetails}`}>
                    <div className={`${styles.time}`}>
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
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p>10 Min</p>
                    </div>
                    <button className="btn-line-small">Details</button>
                  </div>
                </div>
              </div>
              <div className={`${styles.exercise_cards}`}>
                <div className={`${styles.cards_tags}`}>
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
                <div className={`${styles.cards_content}`}>
                  <div className={`${styles.cards_contentText}`}>
                    <h3>Japanese (intermediate/B1)</h3>
                    <p>
                      The Japanese (intermediate/B1) test evaluates a
                      candidate’s Japanese proficiency at the B1 level of the
                      CEFR framework. This test will help you hire employees who
                      can communicate in Japanese on subjects commonly...
                    </p>
                  </div>
                  <div className={`${styles.cards_contentDetails}`}>
                    <div className={`${styles.time}`}>
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
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p>10 Min</p>
                    </div>
                    <button className="btn-line-small">Details</button>
                  </div>
                </div>
              </div>
              <div className={`${styles.exercise_cards}`}>
                <div className={`${styles.cards_line}`}>
                  <hr className={`${styles.line}`} />
                </div>
                <div className={`${styles.cards_content}`}>
                  <div className={`${styles.cards_contentText}`}>
                    <h3>Apex (Salesforce)</h3>
                    <p>
                      This Apex (Salesforce) test assesses candidates'
                      proficiency in Apex fundamentals, the Salesforce data
                      model, SOQL/SOSL queries, and Apex design patterns. This
                      test will help you identify candidates skilled in
                      Lightning Platform...
                    </p>
                  </div>
                  <div className={`${styles.cards_contentDetails}`}>
                    <div className={`${styles.time}`}>
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
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p>10 Min</p>
                    </div>
                    <button className="btn-line-small">Details</button>
                  </div>
                </div>
              </div>
              <div className={`${styles.exercise_cards}`}>
                <div className={`${styles.cards_line}`}>
                  <hr className={`${styles.line}`} />
                </div>
                <div className={`${styles.cards_content}`}>
                  <div className={`${styles.cards_contentText}`}>
                    <h3>Design Thinking</h3>
                    <p>
                      This Design Thinking test evaluates candidates' skills in
                      user-centric problem-solving, fostering innovation that
                      enhances business competitiveness. It helps you hire
                      design thinking experts who drive user satisfaction
                      through...
                    </p>
                  </div>
                  <div className={`${styles.cards_contentDetails}`}>
                    <div className={`${styles.time}`}>
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
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p>10 Min</p>
                    </div>
                    <button className="btn-line-small">Details</button>
                  </div>
                </div>
              </div>
              <div className={`${styles.exercise_cards}`}>
                <div className={`${styles.cards_line}`}>
                  <hr className={`${styles.line}`} />
                </div>
                <div className={`${styles.cards_content}`}>
                  <div className={`${styles.cards_contentText}`}>
                    <h3>Shift Coordination</h3>
                    <p>
                      This Shift Coordination test evaluates a candidate’s
                      ability to organize schedules, communicate effectively,
                      and manage tasks. This screening test will help you hire
                      adept shift management experts who can help streamline
                      operations and boost...
                    </p>
                  </div>
                  <div className={`${styles.cards_contentDetails}`}>
                    <div className={`${styles.time}`}>
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
                          strokeLinecap="round"
                          strokeLinejoin="round"
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

export async function getStaticProps() {
  const contentfulEntries = await fetchContentfulEntries('landingPage');

  // Check if contentfulEntries is an array before filtering
  const filteredEntries = Array.isArray(contentfulEntries.items)
    ? contentfulEntries.items.find((entry) => {
        console.log(entry.fields.internalName);
        return entry.fields.internalName === 'Test Library';
      }).fields // Return only the .fields property
    : {};

  return {
    props: {
      contentfulEntries: filteredEntries,
    },
  };
}
