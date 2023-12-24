import React from 'react';
import Image from 'next/image';

import { Layout } from '@/components';
import { images } from '@/constants';

import styles from './SkillsBasedHiring.module.scss';

const index = () => {
  return (
    <Layout pageTitle="Skills Based Hiring - Blog">
      {/* Banner */}
      <section className="bg-[#F9F9F9] bg-blur bg-right bg-no-repeat pt-0">
        <div className="container mx-auto">
          <div className="relative flex flex-col items-center sm:static lg:flex-row">
            <div className="mb-16 mt-4 flex flex-col items-center text-center md:mb-0 md:w-full md:items-center md:px-[0px] md:py-[32px] md:text-left lg:mt-24 lg:flex-grow lg:items-start lg:pr-24">
              <h1 className="sm:heading-1 heading-2 mb-6 mt-20 ">
                Skills-based hiring
              </h1>
              <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-0 text-center lg:text-start">
                What is skills-based hiring? Why is it on the rise, and what are
                the best practices for adopting it in your organization? Here’s
                everything you need to know about this revolutionary new
                approach to recruitment.
              </p>
              <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-0 text-center lg:text-start">
                New for October 2023: The world's only report on the State of
                Skills-Based Hiring. Out now!{' '}
              </p>
              <div className="mb-6 flex justify-center">
                <button className="btn-medium sm:btn-normal">
                  Explore Our Report
                </button>
              </div>
            </div>
            <div className="relative flex w-full justify-center md:w-full lg:w-full lg:max-w-lg">
              <Image
                src={images.HeroImageSkillsBasedTraining}
                alt="Hero Image"
                width={512}
                height={638}
                sizes="100vw"
                className=" z-10 mt-20 flex h-auto w-[80%] md:w-[60%] lg:w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Browse Topics */}
      <section className={`${styles.section}`}>
        <div className={`container mx-auto`}>
          <div className={`${styles.content_wrapper}`}>
            <h2>Browse Topics</h2>
            <div className={`${styles.topicsIcon_wrapper}`}>
              <div className={`${styles.topic_single}`}>
                <Image
                  src="/assets/FAQ Icon_x40.png"
                  width={60}
                  height={60}
                  alt="Icon Topics FAQ"
                />
                <p>Understanding skills-based hiring</p>
              </div>
              <div className={`${styles.topic_single}`}>
                <Image
                  src="/assets/FAQ Icon_x40.png"
                  width={60}
                  height={60}
                  alt="Icon Topics FAQ"
                />
                <p>Understanding skills-based hiring</p>
              </div>
              <div className={`${styles.topic_single}`}>
                <Image
                  src="/assets/FAQ Icon_x40.png"
                  width={60}
                  height={60}
                  alt="Icon Topics FAQ"
                />
                <p>Understanding skills-based hiring</p>
              </div>
              <div className={`${styles.topic_single}`}>
                <Image
                  src="/assets/FAQ Icon_x40.png"
                  width={60}
                  height={60}
                  alt="Icon Topics FAQ"
                />
                <p>Understanding skills-based hiring</p>
              </div>
              <div className={`${styles.topic_single}`}>
                <Image
                  src="/assets/FAQ Icon_x40.png"
                  width={60}
                  height={60}
                  alt="Icon Topics FAQ"
                />
                <p>Understanding skills-based hiring</p>
              </div>
              <div className={`${styles.topic_single}`}>
                <Image
                  src="/assets/FAQ Icon_x40.png"
                  width={60}
                  height={60}
                  alt="Icon Topics FAQ"
                />
                <p>Understanding skills-based hiring</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills-based the best way */}
      <section className={`${styles.section_grey}`}>
        <div className={`container mx-auto`}>
          <div className={`${styles.content_wrapper}`}>
            <h2>Browse Topics</h2>
            <p>
              Our data shows extraordinary outcomes for employers and candidates
            </p>
            <div className={`${styles.topicsIcon_wrapper}`}>
              <div className={`${styles.topic_single}`}>
                <p className={`${styles.color_text} ${styles.color88}`}>88%</p>
                <p>of employers say skills-based hiring reduces mis-hires</p>
              </div>
              <div className={`${styles.topic_single}`}>
                <p className={`${styles.color_text} ${styles.color86}`}>86%</p>
                <p>
                  of employees say skills-based hiring can help them land their
                  dream job
                </p>
              </div>
              <div className={`${styles.topic_single}`}>
                <p className={`${styles.color_text} ${styles.color82}`}>82%</p>
                <p>of companies report a reduction in total cost-of-hire</p>
              </div>
              <div className={`${styles.topic_single}`}>
                <p className={`${styles.color_text} ${styles.color76}`}>76%</p>
                <p>of skills-based hires are happy in their role</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Middle Banner */}
      <section className="bg-[#0C4B9A] bg-no-repeat pt-0">
        <div className="container mx-auto">
          <div className="relative flex flex-col items-center sm:static lg:flex-row">
            <div className="mb-16 mt-4 flex flex-col items-center text-center md:mb-0 md:w-full md:items-center md:px-[0px] md:py-[32px] md:text-left lg:mt-24 lg:flex-grow lg:items-start lg:pr-24">
              <h1 className="sm:heading-1 heading-2 mb-6">
                The state of skills-based hiring in 2023
              </h1>
              <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-0 text-center lg:text-start">
                Recruitment is changing fast. Over the past year we’ve seen the
                red-hot candidate market give way to recessionary fears, and the
                rise of AI-based tools that promise a brand-new world of work.
                As businesses reshape their workforces to deal with these
                challenges,{' '}
                <span>
                  skills-based hiring has emerged as the preferred tool to find
                  and secure talent
                </span>
                .
              </p>
              <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-0 text-center lg:text-start">
                In{' '}
                <span>
                  the world's only annual report on skills-based hiring
                </span>
                , we deep dive into the revolutionary recruitment trend to find
                out how employers are leveraging this approach, how it’s
                affecting candidate experience in the current job market, and
                what the adoption of skills-based hiring practices means for
                diversity efforts across organizations.
              </p>
              <div className="mb-6 flex justify-center">
                <button className="btn-line-medium sm:btn-line-normal ml-4">
                  Explore the report
                </button>
              </div>
            </div>
            <div className="relative flex w-full justify-center md:w-full lg:w-full lg:max-w-lg">
              <Image
                src={images.iPad}
                alt="Hero Image"
                width={512}
                height={638}
                sizes="100vw"
                className=" z-10 mt-20 flex h-auto w-[80%] md:w-[60%] lg:w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default index;
