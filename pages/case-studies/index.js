import React from 'react';
import Image from 'next/image';

import { Layout } from '@/components';
import { images } from '@/constants';
import { MdChevronRight } from 'react-icons/md';

import styles from './CaseStudies.module.scss';

const Resources = () => {
  return (
    <Layout pageTitle="Case Studies">
      {/* Bottom Banner */}
      <section className="bg-[#F9F9F9] bg-blur bg-right bg-no-repeat pt-0">
        <div className="container mx-auto">
          <div className={` ${styles.banner_blogContainer}`}>
            <div className={styles.banner_blogContentText}>
              <h1 className="sm:heading-1 heading-2">
                TestFounder case studies
              </h1>
              <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-0 text-center lg:text-start">
                Discover how we’re helping companies like yours save time and
                money through our pre-employment assessments.{' '}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <div className={styles.blog_container}>
        <div className={`container m-10 mx-auto`}>
          <div className={`${styles.blog_wrapper}`}>
            <div className={`${styles.blog_single}`}>
              <Image
                src="/assets/dyninno.png"
                alt="Case Studies Image 1"
                width={392}
                height={236}
              />
              <div className={styles.content}>
                <h3>
                  Dyninno Group improves recruitment productivity by 400% using
                  TestFounder
                </h3>
                <p>
                  Dyninno is a group of companies,  providing products and
                  services in the travel, finance, entertainment, and technology
                  sectors in more than 50 countries. Founded in 2004, now the
                  company has 25 offices with total headcount of 5,000
                  employees.   Since the start of 2022, Dyninno Group has
                  rapidly expanded its business across multiple companies and
                  divisions, and as a result, needed to recruit more than 2,000
                  employees in less than six months in 2023. However, Pavel
                  Bahu, Global human resources director at Trevolution (travel
                  division of Dyninno), faced the challenge of effectively
                  screening the increased number of candidates without
                  diminishing the efficiency of their current hiring process –
                  especially as they continue to hire 100s of candidates each
                  month in different locations.
                </p>
                <div className={styles.readmore}>
                  <p>
                    Read More{' '}
                    <span>
                      <MdChevronRight />
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className={`${styles.blog_single}`}>
              <Image
                src="/assets/lilab.png"
                alt="Case Studies Image 1"
                width={392}
                height={236}
              />
              <div className={styles.content}>
                <h3>LILAB boosts new employee retention up to 90%</h3>
                <p>
                  Based in Peru, Lima Innovation Lab (LILAB) is a leading
                  software company dedicated to creating innovative digital
                  solutions. From the start, their team of over 100 people has
                  been committed to providing the best service in the digital
                  technology field. We spoke with Dayana Castro, recruiter at
                  LILAB.
                </p>
                <div className={styles.readmore}>
                  <p>
                    Read More{' '}
                    <span>
                      <MdChevronRight />
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className={`${styles.blog_single}`}>
              <Image
                src="/assets/design-pickle.png"
                alt="Case Studies Image 1"
                width={392}
                height={236}
              />
              <div className={styles.content}>
                <h3>
                  Design Pickle boost applicant completion rate 25% by using
                  TestFounder
                </h3>
                <p>
                  Design Pickle is a subscription-based creative services
                  platform from Scottsdale, in the United States, that has a
                  remote-first workforce in 14 countries. Since their beginning
                  eight years ago, their mission has been to deliver reliable,
                  affordable, and scalable content to any business.&nbsp; With a
                  growing team of more than 500 employees around the world,
                  Design Pickle was in need of a scalable recruitment solution
                  to help validate creative quality from creatives with more
                  efficiency than time-consuming traditional methods like
                  checking resumes and portfolios. Cailean Bailey, Design
                  Pickle’s Head of Global Talent Acquisition, is responsible for
                  the company’s talent acquisition and recruiting.
                </p>
                <div className={styles.readmore}>
                  <p>
                    Read More{' '}
                    <span>
                      <MdChevronRight />
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className={`${styles.blog_single}`}>
              <Image
                src="/assets/revolut.png"
                alt="Case Studies Image 1"
                width={392}
                height={236}
              />
              <div className={styles.content}>
                <h3>Revolut improves time-to-hire by 40% using TestFounder</h3>
                <p>
                  Design Pickle is a subscription-based creative services
                  platform from Scottsdale, in the United States, that has a
                  remote-first workforce in 14 countries. Since their beginning
                  eight years ago, their mission has been to deliver reliable,
                  affordable, and scalable content to any business.&nbsp; With a
                  growing team of more than 500 employees around the world,
                  Design Pickle was in need of a scalable recruitment solution
                  to help validate creative quality from creatives with more
                  efficiency than time-consuming traditional methods like
                  checking resumes and portfolios. Cailean Bailey, Design
                  Pickle’s Head of Global Talent Acquisition, is responsible for
                  the company’s talent acquisition and recruiting.
                </p>
                <div className={styles.readmore}>
                  <p>
                    Read More{' '}
                    <span>
                      <MdChevronRight />
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className={`${styles.blog_single}`}>
              <Image
                src="/assets/trutrip.png"
                alt="Case Studies Image 1"
                width={392}
                height={236}
              />
              <div className={styles.content}>
                <h3>
                  How TestFounder helped TruTrip save money and improve the
                  employee experience
                </h3>
                <p>
                  TruTrip is a Singapore-based company that aims to take the
                  stress out of business travel management and make it more
                  intuitive, useful, straightforward, and accessible. To achieve
                  this, the company combines the latest travel technology with
                  Southeast Asia’s travel ecosystem into a simple and affordable
                  travel-management tool for businesses of all sizes. Hugh
                  Batley, the founder of TruTrip, needed a way to reliably
                  assess candidates’ skills when hiring and avoid mis-hires that
                  cost the organization time and money – and had negatively
                  affected teamwork in the past.
                </p>
                <div className={styles.readmore}>
                  <p>
                    Read More{' '}
                    <span>
                      <MdChevronRight />
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className={`${styles.blog_single}`}>
              <Image
                src="/assets/digital-care.png"
                alt="Case Studies Image 1"
                width={392}
                height={236}
              />
              <div className={styles.content}>
                <h3>
                  How TestFounder transformed Digital Care’s hiring process
                </h3>
                <p>
                  Digital Care is a South African business process outsourcing
                  (BPO) company working with large enterprise clients in the
                  telecommunications industry.  Francois Allison, Digital Care’s
                  Operational Manager, is responsible for talent acquisition and
                  recruiting. He and his team were looking for ways to improve
                  their hiring process to find the best candidates for their
                  open roles.
                </p>
                <div className={styles.readmore}>
                  <p>
                    Read More{' '}
                    <span>
                      <MdChevronRight />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Banner */}
      <section className="bg-[#F9F9F9] bg-blur bg-right bg-no-repeat pt-0">
        <div className="container mx-auto">
          {' '}
          <div className={` ${styles.banner_topContent}`}>
            <div className={styles.banner_topContentText}>
              <h1 className="sm:heading-1 heading-2">
                Hire the best candidates with TestFounder!
              </h1>
              <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-0 text-center lg:text-start">
                Create talent assessments in minutes to screen candidates, save
                time, and hire the best talent.{' '}
              </p>
              <div className="mb-6 flex justify-center">
                <button className="btn-line-medium sm:btn-line-normal">
                  Try for free!
                </button>
              </div>
            </div>
            <div
              className={`relative flex w-full justify-center md:w-full lg:w-full lg:max-w-lg ${styles.banner_topContentImage}`}
            >
              <Image
                src={images.HeroImageProduct}
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
    </Layout>
  );
};

export default Resources;
