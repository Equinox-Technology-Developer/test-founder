import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Layout } from '@/components';
import { images } from '@/constants';

import styles from './Blog.module.scss';

const Resources = () => {
  return (
    <Layout pageTitle="Blog">
      {/* Bottom Banner */}
      <section className="bg-[#F9F9F9] pt-0">
        <div className="container mx-auto px-4 py-8 md:px-[40px] md:py-[60px]">
          <div className={` ${styles.banner_blogContainer}`}>
            <div className={styles.banner_blogContentText}>
              <h1 className="sm:heading-1 heading-2">TestFounder Blog!</h1>
              <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-0 text-center lg:text-start">
                Hire smarter not harder. We bring you the best advice and guides
                on talent assessments, skills-based hiring technology, and
                remote work.
              </p>
              <div className="relative flex w-full xl:w-fit">
                <input
                  type="text"
                  className="w-full rounded-[30px] bg-white px-4 py-[10px] shadow-[0_4px_10px_0px_rgba(0,0,0,0.15)] placeholder:text-base placeholder:text-[#CBCBCB]  xl:w-[600px]"
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
        <div
          className={`container mx-auto md:px-[40px] md:py-8 lg:px-[64px] lg:py-[60px]`}
        >
          <div className={styles.blog_categoriesHeader}>
            <p className={styles.active}>All</p>
            <p>Hiring</p>
            <p>Human Resources</p>
            <p>Science</p>
            <p>Skills-based Hiring</p>
            <p>Talent Assessment</p>
            <p>TestFounder</p>
          </div>
          <div className="flex flex-wrap justify-center gap-[43px]">
            <div className="max-w-[401px] space-y-4 rounded-[20px] bg-white p-4 md:max-w-full lg:max-w-[401px]">
              <Image
                src="/assets/img-card-blog-1.png"
                alt="img-card-blog"
                width={369}
                height={226}
                sizes="100vw"
                className="w-full rounded-[10px] object-cover"
              />
              <p className="caption-semibold-3">Hiring & Recruiting</p>
              <div className="space-y-1">
                <h3 className="caption-semibold-1">
                  How to hire a procurement manager
                </h3>
                <p className="caption-light-3">
                  When hiring a supply chain specialist – specifically a
                  procurement manager – you want to ensure the candidate you’re
                  selecting is up to the task.  Does your candidate kn...
                </p>
              </div>
              <div className="flex flex-shrink-0 items-center">
                <Image
                  src="/assets/benjamin-walker.png"
                  alt="img-card-blog"
                  width={24}
                  height={24}
                  sizes="100vw"
                  className="rounded-full object-cover"
                />
                <date className="caption-regular-4 ml-4">Desember 8, 2023</date>
              </div>
            </div>
            <div className="max-w-[401px] space-y-4 rounded-[20px] bg-white p-4 md:max-w-full lg:max-w-[401px]">
              <Image
                src="/assets/img-card-blog-2.png"
                alt="img-card-blog"
                width={369}
                height={226}
                sizes="100vw"
                className="w-full rounded-[10px] object-cover"
              />
              <p className="caption-semibold-3">Human Resources</p>
              <div className="space-y-1">
                <h3 className="caption-semibold-1">
                  How to hire a Drupal developer
                </h3>
                <p className="caption-light-3">
                  Drupal, an open-source content management system (CMS), is
                  known for its flexibility and security, making it a top choice
                  for building robust websites. The right Drupal...
                </p>
              </div>
              <div className="flex flex-shrink-0 items-center">
                <Image
                  src="/assets/chase.png"
                  alt="img-card-blog"
                  width={24}
                  height={24}
                  sizes="100vw"
                  className=" rounded-full object-cover"
                />
                <date className="caption-regular-4 ml-4">Desember 8, 2023</date>
              </div>
            </div>
            <div className="max-w-[401px] space-y-4 rounded-[20px] bg-white p-4 md:max-w-full lg:max-w-[401px]">
              <Image
                src="/assets/img-card-blog-3.png"
                alt="img-card-blog"
                width={369}
                height={226}
                sizes="100vw"
                className="w-full rounded-[10px] object-cover"
              />
              <p className="caption-semibold-3">Hiring & Recruiting</p>
              <div className="space-y-1">
                <h3 className="caption-semibold-1">
                  How to recruit collage students
                </h3>
                <p className="caption-light-3">
                  Hiring college students can be a great way to bring in fresh
                  talent at lower costs while giving students much-needed job
                  experience.  Unfortunately, recruiters don’t always know how
                  to best appeal to and interact with today’s...
                </p>
              </div>
              <div className="flex flex-shrink-0 items-center">
                <Image
                  src="/assets/maxwell-redwood.png"
                  alt="img-card-blog"
                  width={24}
                  height={24}
                  sizes="100vw"
                  className="rounded-full object-cover"
                />
                <date className="caption-regular-4 ml-4">Desember 8, 2023</date>
              </div>
            </div>
            <div className="max-w-[401px] space-y-4 rounded-[20px] bg-white p-4 md:max-w-full lg:max-w-[401px]">
              <Image
                src="/assets/img-card-blog-4.png"
                alt="img-card-blog"
                width={369}
                height={226}
                sizes="100vw"
                className="w-full rounded-[10px] object-cover"
              />
              <p className="caption-semibold-3">Science</p>
              <div className="space-y-1">
                <h3 className="caption-semibold-1">
                  A brief introducing to classical test theory
                </h3>
                <p className="caption-light-3">
                  Science series materials are brought to you by TestFounder’s
                  Assessment Team: A group of IO psychology, data, and
                  psychometric experts with a deep...
                </p>
              </div>
              <div className="flex flex-shrink-0 items-center">
                <Image
                  src="/assets/christopher-griffin.png"
                  alt="img-card-blog"
                  width={24}
                  height={24}
                  sizes="100vw"
                  className="rounded-full object-cover"
                />
                <date className="caption-regular-4 ml-4">Desember 8, 2023</date>
              </div>
            </div>
            <div className="max-w-[401px] space-y-4 rounded-[20px] bg-white p-4 md:max-w-full lg:max-w-[401px]">
              <Image
                src="/assets/img-card-blog-5.png"
                alt="img-card-blog"
                width={369}
                height={226}
                sizes="100vw"
                className="w-full rounded-[10px] object-cover"
              />
              <p className="caption-semibold-3">Science</p>
              <div className="space-y-1">
                <h3 className="caption-semibold-1">
                  How to hire a Bootsrap developer
                </h3>
                <p className="caption-light-3">
                  A skilled Bootstrap developer is crucial for the success of
                  your web projects. Their expertise can elevate your online
                  presence with responsive and user-friendly interfaces...
                </p>
              </div>
              <div className="flex flex-shrink-0 items-center">
                <Image
                  src="/assets/dominic-carrington.png"
                  alt="img-card-blog"
                  width={24}
                  height={24}
                  sizes="100vw"
                  className="rounded-full object-cover"
                />
                <date className="caption-regular-4 ml-4">Desember 8, 2023</date>
              </div>
            </div>
            <div className="max-w-[401px] space-y-4 rounded-[20px] bg-white p-4 md:max-w-full lg:max-w-[401px]">
              <Image
                src="/assets/img-card-blog-6.png"
                alt="img-card-blog"
                width={369}
                height={226}
                sizes="100vw"
                className="w-full rounded-[10px] object-cover"
              />
              <p className="caption-semibold-3">Science</p>
              <div className="space-y-1">
                <h3 className="caption-semibold-1">
                  How to write a Django developer job description
                </h3>
                <p className="caption-light-3">
                  rafting a compelling job description is an essential first
                  step to attracting top-tier Django developers. But there’s...
                </p>
              </div>
              <div className="flex flex-shrink-0 items-center">
                <Image
                  src="/assets/kanzaak.png"
                  alt="img-card-blog"
                  width={24}
                  height={24}
                  sizes="100vw"
                  className="rounded-full object-cover"
                />
                <date className="caption-regular-4 ml-4">Desember 8, 2023</date>
              </div>
            </div>
            <div className="max-w-[401px] space-y-4 rounded-[20px] bg-white p-4 md:max-w-full lg:max-w-[401px]">
              <Image
                src="/assets/img-card-blog-7.png"
                alt="img-card-blog"
                width={369}
                height={226}
                sizes="100vw"
                className="w-full rounded-[10px] object-cover"
              />
              <p className="caption-semibold-3">Talent Assessment</p>
              <div className="space-y-1">
                <h3 className="caption-semibold-1">
                  How to hire a top-performing IT Team
                </h3>
                <p className="caption-light-3">
                  A dedicated IT team to keep your systems up and running around
                  the clock has become essential for every business, regardless
                  of size. Even a few hours off the grid can spell..
                </p>
              </div>
              <div className="flex flex-shrink-0 items-center">
                <Image
                  src="/assets/olivia-abigail.png"
                  alt="img-card-blog"
                  width={24}
                  height={24}
                  sizes="100vw"
                  className="rounded-full object-cover"
                />
                <date className="caption-regular-4 ml-4">Desember 8, 2023</date>
              </div>
            </div>
            <div className="max-w-[401px] space-y-4 rounded-[20px] bg-white p-4 md:max-w-full lg:max-w-[401px]">
              <Image
                src="/assets/img-card-blog-8.png"
                alt="img-card-blog"
                width={369}
                height={226}
                sizes="100vw"
                className="w-full rounded-[10px] object-cover"
              />
              <p className="caption-semibold-3">Hiring & Recruiting</p>
              <div className="space-y-1">
                <h3 className="caption-semibold-1">
                  How to hire a B2B salesperson
                </h3>
                <p className="caption-light-3">
                  Skilled auditors are crucial in examining a company's
                  financial records, ensuring everything aligns with
                  regulations, and maintaining financial transparency...
                </p>
              </div>
              <div className="flex flex-shrink-0 items-center">
                <Image
                  src="/assets/kylian-pandhita.png"
                  alt="img-card-blog"
                  width={24}
                  height={24}
                  sizes="100vw"
                  className="rounded-full object-cover"
                />
                <date className="caption-regular-4 ml-4">Desember 8, 2023</date>
              </div>
            </div>
            <div className="max-w-[401px] space-y-4 rounded-[20px] bg-white p-4 md:max-w-full lg:max-w-[401px]">
              <Image
                src="/assets/img-card-blog-9.png"
                alt="img-card-blog"
                width={369}
                height={226}
                sizes="100vw"
                className="w-full rounded-[10px] object-cover"
              />
              <p className="caption-semibold-3">Hiring & Recruiting</p>
              <div className="space-y-1">
                <h3 className="caption-semibold-1">How to hire an auditor</h3>
                <p className="caption-light-3">
                  Skilled auditors are crucial in examining a company's
                  financial records, ensuring everything aligns with
                  regulations, and maintaining financial transparency. How...
                </p>
              </div>
              <div className="flex flex-shrink-0 items-center">
                <Image
                  src="/assets/maxwell-redwood.png"
                  alt="img-card-blog"
                  width={24}
                  height={24}
                  sizes="100vw"
                  className="rounded-full object-cover"
                />
                <date className="caption-regular-4 ml-4">Desember 8, 2023</date>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Banner */}
      <section className="bg-[#F9F9F9] bg-blur bg-right bg-no-repeat pt-0">
        <div className="container mx-auto px-4 py-6 md:px-10 md:py-8">
          {' '}
          <div className={` ${styles.banner_topContent}`}>
            <div className={styles.banner_topContentText}>
              <h1 className="sm:heading-1 heading-2 text-center lg:text-start">
                Hire the best candidates with TestFounder!
              </h1>
              <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-6 text-center lg:text-start">
                Create talent assessments in minutes to screen candidates, save
                time, and hire the best talent.{' '}
              </p>
              <div className="mb-6 flex w-full justify-center lg:w-fit">
                <Link href="/signup">
                  <button className="btn-line-medium sm:btn-line-normal">
                    Try for free!
                  </button>
                </Link>
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
                className={`z-10 flex h-auto w-[80%] md:w-[80%] lg:w-full `}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resources;
