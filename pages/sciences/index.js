import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Layout } from '@/components';
import { images } from '@/constants';
import { fetchContentfulEntries } from '@/helper/contenfulHelper';

import styles from './Sciences.module.scss';

const ProductScience = () => {
  return (
    <>
      <Layout pageTitle="Product Science">
        {/* Top Banner */}
        <section className="bg-[#F9F9F9] bg-blur bg-right bg-no-repeat pt-0">
          <div className="container mx-auto pb-20">
            {' '}
            <div className={` ${styles.banner_topContent}`}>
              <div className={styles.banner_topContentText}>
                <h1 className="sm:heading-1 heading-2 mb-6 w-full text-center lg:text-start">
                  The science behind
                  <span className="block text-primary-500 lg:block">
                    TestFounder.
                  </span>
                </h1>
                <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-0 text-center lg:text-start">
                  Our mission is to provide you and your candidates with an
                  enjoyable, highly accurate, and science-backed talent
                  assessment experience – without bias or stress. We achieve
                  this by taking a deeply scientific, multi-layered approach
                  that ensures our screening tests are always valid, reliable,
                  and fair.
                </p>
                <div className="mb-6 flex w-full justify-center lg:justify-start">
                  <button className="btn-line-medium sm:btn-line-normal">
                    Get Started
                  </button>
                </div>
              </div>
              <div
                className={`relative flex w-full justify-center md:w-full lg:w-full lg:max-w-lg ${styles.banner_topContentImage}`}
              >
                <Image
                  src={images.top_banner_science}
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

        {/* Explanation 1 */}
        <section className="z-50 flex h-fit items-center bg-[#F9F9F9] px-4 py-6 sm:min-h-[520px] md:px-[40px] md:py-[40px] lg:px-0 lg:py-0">
          <div className="container mx-auto ">
            <div className="flex flex-col items-center gap-[50px] lg:flex-row">
              <div className="z-50 mb-1 sm:mb-16 md:mb-0 md:w-full md:text-left lg:flex-grow">
                <Image
                  src="/assets/young-businessman.png"
                  alt="Hero Image"
                  width={616}
                  height={404}
                  sizes="100vw"
                />
              </div>
              <div className="relative z-50 flex w-full flex-col items-center space-y-6 md:w-full md:items-start lg:w-full">
                <h1 className="heading-2 sm:heading-1 mb-0 mt-0 text-center sm:text-start">
                  Created and validated by experts.
                </h1>
                <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                  It all starts with our psychometrics team. First, we use the
                  proven and well-established principles of test theory to
                  design the framework for our tests. Then, subject-matter
                  experts in each field develop the questions for these tests
                  with guidance from our team. These tests are then peer
                  reviewed by other experts to ensure their accuracy and
                  effectiveness.
                </p>
              </div>
              <Image
                src="/assets/bg_blur_2.png"
                alt="Hero Image"
                width={730}
                height={565}
                sizes="100vw"
                className="absolute"
              />
            </div>
          </div>
        </section>

        {/* Explanation 2 */}
        <section className="flex h-fit items-center bg-[#F9F9F9] px-4 py-6 sm:min-h-[520px] md:px-[40px] md:py-[40px] lg:px-0 lg:py-0">
          <div className="container mx-auto">
            <div className="flex flex-col-reverse items-center md:flex-col-reverse lg:flex-row">
              <div className="z-50 mb-1 flex flex-col items-center text-center sm:mb-16 md:mb-0 md:w-full md:items-start md:pr-0 md:text-left lg:w-1/2 lg:flex-grow lg:pr-0">
                <h1 className="heading-2 sm:heading-1 mb-6 mt-0">
                  Reliable, science-backed tests.
                </h1>
                <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-0">
                  Our work doesn’t stop there. Our advanced statistical
                  algorithms analyze key indicators that verify and improve our
                  tests on an ongoing basis. We use measures such as Cronbach’s
                  alpha to help us track and confirm the internal consistency of
                  the questions in a test.
                </p>
              </div>
              <div className="flex w-full justify-start md:w-full lg:w-1/2">
                <Image
                  src="/assets/reliable-science.png"
                  alt="Hero Image"
                  width={617}
                  height={422}
                  sizes="100vw"
                  className="z-50"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Explanation 3*/}
        <section className="flex h-fit items-center bg-[#F9F9F9] px-4 py-6 sm:min-h-[520px] md:px-[40px] md:py-[40px] lg:px-0 lg:py-0">
          <div className="container mx-auto ">
            <div className="flex flex-col items-center gap-[50px] lg:flex-row">
              <div className="mb-16 w-full sm:w-fit md:mb-0 md:text-left ">
                <Image
                  src="/assets/young-woman-office.png"
                  alt="Hero Image"
                  width={584}
                  height={624}
                  sizes="100vw"
                  className="z-50"
                />
              </div>
              <div className="relative flex w-full flex-col items-center space-y-6 md:w-full md:items-start lg:w-1/2">
                <h1 className="heading-2 sm:heading-1 mb-0 mt-0 text-center sm:text-start">
                  Predicting job success with data.
                </h1>
                <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                  Using the UGESP framework of employee selection and the US
                  Department of Labor’s skills analyses, we verify the content
                  validity (what a test evaluates) of each of our tests.
                </p>
                <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                  We also collect feedback from our customers about the
                  performance of candidates they hire. This helps us confirm the
                  predictive validity of each test and allows us to make
                  data-driven recommendations about which tests to use for a
                  given job role.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Explanation 4 */}
        <section className="flex h-fit items-center bg-[#F9F9F9] px-4 py-6 sm:min-h-[520px] md:px-[40px] md:py-[40px] lg:px-0 lg:py-0">
          <div className="container mx-auto">
            <div className="flex flex-col-reverse items-center gap-[41px] md:flex-col-reverse lg:flex-row">
              <div className="z-50 mb-16 flex flex-col items-center text-center md:mb-0 md:w-full md:items-start md:pr-16 md:text-left lg:w-1/2 lg:flex-grow lg:pr-0">
                <h1 className="heading-2 sm:heading-1 mb-6 mt-0">
                  Fair for all candidates.
                </h1>
                <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-0">
                  We’ve built our platform and tests on the standards of the
                  Equal Employment Opportunity Commission (EEOC) to remove
                  unconscious bias from the hiring process. This means you’ll
                  see your best candidates ranked the highest regardless of
                  gender, race, ethnicity, or age. We also periodically use
                  differential item functioning (DIF) studies performed on data
                  collected from candidates. This helps us to continually remove
                  any potential adverse impact from the hiring process.
                </p>
              </div>
              <div className="flex w-full justify-center md:w-full lg:w-1/2">
                <Image
                  src="/assets/fair-for-all.png"
                  alt="Hero Image"
                  width={618}
                  height={357}
                  sizes="100vw"
                  className="z-50"
                />
              </div>
            </div>
          </div>
          <Image
            src="/assets/bg_blur_3.png"
            alt="Hero Image"
            width={730}
            height={565}
            sizes="100vw"
            className="absolute right-10"
          />
        </section>

        {/* Explanation 5 */}
        <section className="flex h-fit items-center bg-[#F9F9F9] px-4 py-6 sm:h-fit sm:min-h-[520px] md:px-[40px] md:py-[40px] lg:px-0 lg:py-0">
          <div className="container mx-auto ">
            <div className="flex flex-col items-center gap-0 sm:gap-[21px] lg:flex-row">
              <div className="z-50 mb-1 w-full sm:mb-16 md:mb-0 md:w-1/2 md:text-left">
                <Image
                  src="/assets/an-enjoyable.png"
                  alt="Hero Image"
                  width={636}
                  height={603}
                  sizes="100vw"
                  className="z-50"
                />
              </div>
              <div className="relative z-50 flex w-full flex-col items-center space-y-6 md:w-full md:items-start lg:w-1/2">
                <h1 className="heading-2 sm:heading-1 mb-0 mt-0 text-center sm:text-start">
                  An enjoyable user experience.
                </h1>
                <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                  TestFounder’s simple, streamlined design lets your candidates
                  focus on what matters most: showing their skills. Our
                  questions provide candidates with realistic scenarios that
                  closely mimic the experience of working in the positions
                  they’re applying for.
                </p>
              </div>
              <Image
                src="/assets/bg_blur_4.png"
                alt="Hero Image"
                width={730}
                height={565}
                sizes="100vw"
                className="absolute pl-10"
              />
            </div>
          </div>
        </section>

        <section className="flex h-fit items-center bg-[#F9F9F9] px-4 py-6 sm:min-h-[520px] md:px-[40px] md:py-[40px] lg:px-0 lg:py-0">
          <div className="container mx-auto">
            <div className="flex flex-col-reverse items-center gap-[41px] md:flex-col-reverse lg:flex-row">
              <div className="z-50 mb-16 flex flex-col items-center text-center md:mb-0 md:w-full md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
                <h1 className="heading-2 sm:heading-1 mb-6 mt-0">
                  Insightful and uncomplicated.
                </h1>
                <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-0">
                  Finally, we put just as much thought and care into the reports
                  and insights we deliver you as we do our tests. That’s why our
                  platform is ranked number one on customer satisfaction on the
                  software review site G2.
                </p>
                <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-0">
                  In just a few clicks, TestFounder lets you review, rank, and
                  quickly understand your candidates’ strengths and weaknesses.
                  Our clear and organized reports are designed to help you focus
                  on accurate, data-driven hiring decisions that will positively
                  impact the long-term success of your company.
                </p>
              </div>
              <div className="flex w-full justify-center md:w-full lg:w-1/2">
                <Image
                  src="/assets/insightful.png"
                  alt="Hero Image"
                  width={603}
                  height={301}
                  sizes="100vw"
                  className="z-50"
                />
              </div>
            </div>
          </div>
          <Image
            src="/assets/bg_blur_3.png"
            alt="Hero Image"
            width={730}
            height={565}
            sizes="100vw"
            className="absolute right-10"
          />
        </section>

        {/* Blog Section */}
        <div className={styles.blog_container}>
          <div className={`container m-10 mx-auto`}>
            <h1>Read more about science-backed hiring</h1>
            <div className={`${styles.blog_wrapper}`}>
              <div className={styles.blog_single}>
                <Image
                  src="/assets/Mentor-1.png"
                  alt="Blog Image Grid"
                  width={321}
                  height={213}
                />
                <h3 className={``}>A brief introduction to: Test validation</h3>
                <p className={``}>
                  Science series materials are brought to you by TestFounder’s
                  Assessment Team: A group of IO psycho...
                </p>
              </div>
              <div className={styles.blog_single}>
                <Image
                  src="/assets/Mentor-2.png"
                  alt="Blog Image Grid"
                  width={321}
                  height={213}
                />
                <h3 className={``}>A brief introduction to: Test validation</h3>
                <p className={``}>
                  Science series materials are brought to you by TestFounder’s
                  Assessment Team: A group of IO psycho...
                </p>
              </div>
              <div className={styles.blog_single}>
                <Image
                  src="/assets/Mentor-3.png"
                  alt="Blog Image Grid"
                  width={321}
                  height={213}
                />
                <h3 className={``}>A brief introduction to: Test validation</h3>
                <p className={``}>
                  Science series materials are brought to you by TestFounder’s
                  Assessment Team: A group of IO psycho...
                </p>
              </div>
              <div className={styles.blog_single}>
                <Image
                  src="/assets/Mentor-4.png"
                  alt="Blog Image Grid"
                  width={321}
                  height={213}
                />
                <h3 className={``}>A brief introduction to: Test validation</h3>
                <p className={``}>
                  Science series materials are brought to you by TestFounder’s
                  Assessment Team: A group of IO psycho...
                </p>
              </div>
              <div className={styles.blog_single}>
                <Image
                  src="/assets/Mentor-5.png"
                  alt="Blog Image Grid"
                  width={321}
                  height={213}
                />
                <h3 className={``}>A brief introduction to: Test validation</h3>
                <p className={``}>
                  Science series materials are brought to you by TestFounder’s
                  Assessment Team: A group of IO psycho...
                </p>
              </div>
              <div className={styles.blog_single}>
                <Image
                  src="/assets/Mentor-6.png"
                  alt="Blog Image Grid"
                  width={321}
                  height={213}
                />
                <h3 className={``}>A brief introduction to: Test validation</h3>
                <p className={``}>
                  Science series materials are brought to you by TestFounder’s
                  Assessment Team: A group of IO psycho...
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Explanation 7 */}
        <div className="min-h-[366px] w-full space-y-6 bg-[#D0F3FC26]">
          <div className="container mx-auto flex flex-col items-center justify-center space-y-6 px-4 py-6 text-center sm:px-0 sm:py-[60px]">
            <h1 className="heading-2 sm:heading-1">Improve your hiring now.</h1>
            <p className="caption-regular-3 sm:caption-regular-1 text-center">
              Start using TestFounder today, or talk to us about your hiring
              challenges to discover how we can help.
            </p>
            <div className="flex flex-row gap-4">
              <button className="btn-line-medium">Request demo</button>
              <button className="btn-medium">Get started</button>
            </div>
            <p className="italic">
              The contents of this page are intended for general information
              purposes only and do not constitute legal advice, nor do they
              substitute legal counsel.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProductScience;
