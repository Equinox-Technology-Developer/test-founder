import React from 'react';
import Image from 'next/image';

import { Layout } from '@/components';
import { images } from '@/constants';

import styles from './Blog.module.scss';

const Resources = () => {
  return (
    <Layout pageTitle="Blog">
      {/* Bottom Banner */}
      <section className="bg-[#F9F9F9] bg-blur bg-right bg-no-repeat pt-0">
        <div className="container mx-auto">
          <div className={` ${styles.banner_blogContainer}`}>
            <div className={styles.banner_blogContentText}>
              <h1 className="sm:heading-1 heading-2">TestFounder Blog!</h1>
              <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-0 text-center lg:text-start">
                Hire smarter not harder. We bring you the best advice and guides
                on talent assessments, skills-based hiring technology, and
                remote work.
              </p>
              <div className="relative flex">
                <input
                  type="text"
                  className="w-full rounded-[30px] border-[0.75px] border-[#CBCBCB] bg-white px-4 py-[10px] placeholder:text-base placeholder:text-[#CBCBCB] xl:w-[644px]"
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
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <div className={styles.blog_container}>
        <div className={`container m-10 mx-auto`}>
          <div className={styles.blog_categoriesHeader}>
            <p className={styles.active}>All</p>
            <p>Hiring</p>
            <p>Human Resources</p>
            <p>Science</p>
            <p>Skills-based Hiring</p>
            <p>Talent Assessment</p>
            <p>TestFounder</p>
          </div>
          <div className={`${styles.blog_wrapper}`}>
            <div className={styles.blog_single}>
              <Image
                src="/assets/Mentor-1.png"
                alt="Blog Image Grid"
                width={321}
                height={213}
              />
              <h4 className={`${styles.blog_categories}`}>
                Hiring & Recruiting
              </h4>
              <h3 className={``}>How to hire a procurement manager</h3>
              <p className={``}>
                When hiring a supply chain specialist – specifically a
                procurement manager – you want to ensure the candidate you’re
                selecting is up to the task.  Does your candidate kno...
              </p>
              <div className={`${styles.published_at}`}>
                <div className={`${styles.author_wrapper}`}>
                  <Image
                    src="/assets/benjamin-walker.png"
                    width={24}
                    height={24}
                  />
                  <p>Benjamin Walker</p>
                </div>
                <p>Desember 8, 2023</p>
              </div>
            </div>
            <div className={styles.blog_single}>
              <Image
                src="/assets/Mentor-1.png"
                alt="Blog Image Grid"
                width={321}
                height={213}
              />
              <h4 className={`${styles.blog_categories}`}>Human Resources</h4>
              <h3 className={``}>How to hire a Drupal developer</h3>
              <p className={``}>
                Drupal, an open-source content management system (CMS), is known
                for its flexibility and security, making it a top choice for
                building robust websites. The right Drupal...
              </p>
              <div className={`${styles.published_at}`}>
                <div className={`${styles.author_wrapper}`}>
                  <Image
                    src="/assets/benjamin-walker.png"
                    width={24}
                    height={24}
                  />
                  <p>Benjamin Walker</p>
                </div>
                <p>Desember 8, 2023</p>
              </div>
            </div>
            <div className={styles.blog_single}>
              <Image
                src="/assets/Mentor-1.png"
                alt="Blog Image Grid"
                width={321}
                height={213}
              />
              <h4 className={`${styles.blog_categories}`}>
                Hiring & Recruiting
              </h4>
              <h3 className={``}>How to recruit collage students</h3>
              <p className={``}>
                Hiring college students can be a great way to bring in fresh
                talent at lower costs while giving students much-needed job
                experience.  Unfortunately, recruiters don’t always kno...
              </p>
              <div className={`${styles.published_at}`}>
                <div className={`${styles.author_wrapper}`}>
                  <Image
                    src="/assets/benjamin-walker.png"
                    width={24}
                    height={24}
                  />
                  <p>Benjamin Walker</p>
                </div>
                <p>Desember 8, 2023</p>
              </div>
            </div>
            <div className={styles.blog_single}>
              <Image
                src="/assets/Mentor-1.png"
                alt="Blog Image Grid"
                width={321}
                height={213}
              />
              <h4 className={`${styles.blog_categories}`}>
                Hiring & Recruiting
              </h4>
              <h3 className={``}>A brief introduction to: Test validation</h3>
              <p className={``}>
                Science series materials are brought to you by TestFounder’s
                Assessment Team: A group of IO psycho...
              </p>
              <div className={`${styles.published_at}`}>
                <div className={`${styles.author_wrapper}`}>
                  <Image
                    src="/assets/benjamin-walker.png"
                    width={24}
                    height={24}
                  />
                  <p>Benjamin Walker</p>
                </div>
                <p>Desember 8, 2023</p>
              </div>
            </div>
            <div className={styles.blog_single}>
              <Image
                src="/assets/Mentor-1.png"
                alt="Blog Image Grid"
                width={321}
                height={213}
              />
              <h4 className={`${styles.blog_categories}`}>
                Hiring & Recruiting
              </h4>
              <h3 className={``}>A brief introduction to: Test validation</h3>
              <p className={``}>
                Science series materials are brought to you by TestFounder’s
                Assessment Team: A group of IO psycho...
              </p>
              <div className={`${styles.published_at}`}>
                <div className={`${styles.author_wrapper}`}>
                  <Image
                    src="/assets/benjamin-walker.png"
                    width={24}
                    height={24}
                  />
                  <p>Benjamin Walker</p>
                </div>
                <p>Desember 8, 2023</p>
              </div>
            </div>
            <div className={styles.blog_single}>
              <Image
                src="/assets/Mentor-1.png"
                alt="Blog Image Grid"
                width={321}
                height={213}
              />
              <h4 className={`${styles.blog_categories}`}>
                Hiring & Recruiting
              </h4>
              <h3 className={``}>A brief introduction to: Test validation</h3>
              <p className={``}>
                Science series materials are brought to you by TestFounder’s
                Assessment Team: A group of IO psycho...
              </p>
              <div className={`${styles.published_at}`}>
                <div className={`${styles.author_wrapper}`}>
                  <Image
                    src="/assets/benjamin-walker.png"
                    width={24}
                    height={24}
                  />
                  <p>Benjamin Walker</p>
                </div>
                <p>Desember 8, 2023</p>
              </div>
            </div>
            <div className={styles.blog_single}>
              <Image
                src="/assets/Mentor-1.png"
                alt="Blog Image Grid"
                width={321}
                height={213}
              />
              <h4 className={`${styles.blog_categories}`}>
                Hiring & Recruiting
              </h4>
              <h3 className={``}>A brief introduction to: Test validation</h3>
              <p className={``}>
                Science series materials are brought to you by TestFounder’s
                Assessment Team: A group of IO psycho...
              </p>
              <div className={`${styles.published_at}`}>
                <div className={`${styles.author_wrapper}`}>
                  <Image
                    src="/assets/benjamin-walker.png"
                    width={24}
                    height={24}
                  />
                  <p>Benjamin Walker</p>
                </div>
                <p>Desember 8, 2023</p>
              </div>
            </div>
            <div className={styles.blog_single}>
              <Image
                src="/assets/Mentor-1.png"
                alt="Blog Image Grid"
                width={321}
                height={213}
              />
              <h4 className={`${styles.blog_categories}`}>
                Hiring & Recruiting
              </h4>
              <h3 className={``}>A brief introduction to: Test validation</h3>
              <p className={``}>
                Science series materials are brought to you by TestFounder’s
                Assessment Team: A group of IO psycho...
              </p>
              <div className={`${styles.published_at}`}>
                <div className={`${styles.author_wrapper}`}>
                  <Image
                    src="/assets/benjamin-walker.png"
                    width={24}
                    height={24}
                  />
                  <p>Benjamin Walker</p>
                </div>
                <p>Desember 8, 2023</p>
              </div>
            </div>
            <div className={styles.blog_single}>
              <Image
                src="/assets/Mentor-1.png"
                alt="Blog Image Grid"
                width={321}
                height={213}
              />
              <h4 className={`${styles.blog_categories}`}>
                Hiring & Recruiting
              </h4>
              <h3 className={``}>A brief introduction to: Test validation</h3>
              <p className={``}>
                Science series materials are brought to you by TestFounder’s
                Assessment Team: A group of IO psycho...
              </p>
              <div className={`${styles.published_at}`}>
                <div className={`${styles.author_wrapper}`}>
                  <Image
                    src="/assets/benjamin-walker.png"
                    width={24}
                    height={24}
                  />
                  <p>Benjamin Walker</p>
                </div>
                <p>Desember 8, 2023</p>
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
