import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Layout } from '@/components';
import { images } from '@/constants';

import styles from './TestLibrary.module.scss';

const testLibrary = ({}) => {
  return (
    <>
      <Layout pageTitle="Test Library">
        {/* Top Banner */}
        <section className="bg-[#F9F9F9] bg-blur bg-right bg-no-repeat pt-0">
          <div className="container mx-auto p-[10px] md:px-[40px] md:py-[58px]">
            {' '}
            <div className={` ${styles.banner_topContent}`}>
              <div className={styles.banner_topContentText}>
                <h1 className="sm:heading-1 heading-2 text-center lg:text-start">
                  Resumes aren’t working.{' '}
                  <span className="text-primary-500"> Skills-based </span>{' '}
                  hiring does.
                </h1>
                <p className="caption-regular-3 sm:caption-regular-1 mb-4 mt-4 text-center md:mb-6 md:mt-6 lg:text-start">
                  Choose from our 300+ candidate-friendly skills and personality
                  tests for fast and accurate pre-employment screening
                </p>
                <div className="mb-6 flex w-full justify-center lg:justify-start">
                  <Link href="/signup">
                    <button className="btn-medium sm:btn-normal">
                      Try for free!
                    </button>
                  </Link>
                  <Link href="/book-demo">
                    <button className="btn-line-medium sm:btn-line-normal ml-4">
                      Book a demo
                    </button>
                  </Link>
                </div>
              </div>
              <div
                className={`relative flex w-full justify-center md:w-full lg:w-full lg:max-w-lg ${styles.banner_topContentImage}`}
              >
                <Image
                  src={images.top_banner_testLibrary}
                  alt="Hero Image"
                  width={617}
                  height={602}
                  sizes="100vw"
                  className={`z-10 flex h-auto w-[80%] md:w-[60%] lg:w-full `}
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
                    src="/assets/candidates.svg"
                    alt="icon-candidates"
                    width={32}
                    height={32}
                    sizes="100vw"
                    className="flex h-auto"
                  />
                  <p className="text-white">Popular</p>
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
                    src="/assets/candidates.svg"
                    alt="icon-candidates"
                    width={32}
                    height={32}
                    sizes="100vw"
                    className="flex h-auto"
                  />
                  <p className="text-white">Popular</p>
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
                    src="/assets/candidates.svg"
                    alt="icon-candidates"
                    width={32}
                    height={32}
                    sizes="100vw"
                    className="flex h-auto"
                  />
                  <p className="text-white">Popular</p>
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
                    src="/assets/candidates.svg"
                    alt="icon-candidates"
                    width={32}
                    height={32}
                    sizes="100vw"
                    className="flex h-auto"
                  />
                  <p className="text-white">Popular</p>
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
                    src="/assets/candidates.svg"
                    alt="icon-candidates"
                    width={32}
                    height={32}
                    sizes="100vw"
                    className="flex h-auto"
                  />
                  <p className="text-white">Popular</p>
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
                    src="/assets/candidates.svg"
                    alt="icon-candidates"
                    width={32}
                    height={32}
                    sizes="100vw"
                    className="flex h-auto"
                  />
                  <p className="text-white">Popular</p>
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
                    src="/assets/candidates.svg"
                    alt="icon-candidates"
                    width={32}
                    height={32}
                    sizes="100vw"
                    className="flex h-auto"
                  />
                  <p className="text-white">Popular</p>
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
                    src="/assets/candidates.svg"
                    alt="icon-candidates"
                    width={32}
                    height={32}
                    sizes="100vw"
                    className="flex h-auto"
                  />
                  <p className="text-white">Popular</p>
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
                    src="/assets/candidates.svg"
                    alt="icon-candidates"
                    width={32}
                    height={32}
                    sizes="100vw"
                    className="flex h-auto"
                  />
                  <p className="text-white">Popular</p>
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
                    src="/assets/candidates.svg"
                    alt="icon-candidates"
                    width={32}
                    height={32}
                    sizes="100vw"
                    className="flex h-auto"
                  />
                  <p className="text-white">Popular</p>
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
                    src="/assets/candidates.svg"
                    alt="icon-candidates"
                    width={32}
                    height={32}
                    sizes="100vw"
                    className="flex h-auto"
                  />
                  <p className="text-white">Popular</p>
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
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default testLibrary;
