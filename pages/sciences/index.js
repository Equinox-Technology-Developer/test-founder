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
          <div className="container mx-auto pb-20"> <div className={` ${styles.banner_topContent}`}>
            <div className={styles.banner_topContentText}>
              <h1 className="sm:heading-1 heading-2">
                The science behind
                <span className="text-primary-500"> TestFounder</span>.
              </h1>
              <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-0 text-center lg:text-start">
                Our mission is to provide you and your candidates with an enjoyable, highly accurate, and science-backed talent assessment experience – without bias or stress. We achieve this by taking a deeply scientific, multi-layered approach that ensures our screening tests are always valid, reliable, and fair.
              </p>
              <div className="mb-6 flex justify-center">
                <button className="btn-line-medium sm:btn-line-normal">
                  Get Started
                </button>
              </div>
            </div>
            <div className={`relative flex w-full justify-center md:w-full lg:w-full lg:max-w-lg ${styles.banner_topContentImage}`}>
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
        <section className='z-50 flex h-fit items-center bg-[#F9F9F9] px-4 py-6 sm:min-h-[520px] md:px-[40px] md:py-[40px] lg:px-0 lg:py-0'>
          <div className="container mx-auto ">
            <div className="flex flex-col items-center gap-[50px] lg:flex-row">
              <div className="z-50 mb-1 sm:mb-16 md:mb-0 md:w-full md:text-left lg:flex-grow">
                <Image
                  src="/assets/explaination-banner.png"
                  alt="Hero Image"
                  width={616}
                  height={404}
                  sizes="100vw"
                />
              </div>
              <div className="relative z-50 flex w-full flex-col items-center space-y-6 md:w-full md:items-start lg:w-full">
                <h1 className="heading-2 sm:heading-1 mb-0 mt-0 text-center sm:text-start">
                  A barometer for job success.
                </h1>
                <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                  Use our library of 401 scientifically validated tests.
                </p>
                <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                  Test candidates for job-specific skills like coding or digital
                  marketing, as well as more general skills like critical
                  thinking.
                </p>
                <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                  Our unique personality and value tests allow you to get to
                  know your applicants as real people – not just pieces of
                  paper.
                </p>
                <button className="btn-line-medium sm:btn-line-normal">
                  See Tests
                </button>
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
            <div className="flex flex-col-reverse items-center gap-[41px] md:flex-col-reverse lg:flex-row">
              <div className="z-50 mb-1 flex flex-col items-center text-center sm:mb-16 md:mb-0 md:w-full md:items-start  md:pr-16 md:text-left lg:flex-grow lg:pr-24">
                <h1 className="heading-2 sm:heading-1 mb-6 mt-0">
                  Quality time for quality candidates.
                </h1>
                <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-0">
                  Boom. No more time wasted on screening resumes and
                  pre-qualifying interviews.
                </p>
                <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-0">
                  We automatically grade and rank your candidates. In the time
                  it takes to savor a cup of coffee, you can watch video
                  responses to custom questions.
                </p>
                <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-0">
                  Our screening process automation lets you focus on the best
                  people for the job.
                </p>
              </div>
              <div className="flex w-full justify-start md:w-full lg:w-1/2">
                <Image
                  src="/assets/anim-conf.png"
                  alt="Hero Image"
                  width={624}
                  height={449}
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
              <div className="mb-16 w-full sm:w-full md:mb-0 md:text-left ">
                <Image
                  src="/assets/man-percent.png"
                  alt="Hero Image"
                  width={644}
                  height={469}
                  sizes="100vw"
                  className="z-50"
                />
              </div>
              <div className="relative flex w-full flex-col items-center space-y-6 md:w-full md:items-start lg:w-1/2">
                <h1 className="heading-2 sm:heading-1 mb-0 mt-0 text-center sm:text-start">
                  Say goodbye to unconscious bias.
                </h1>
                <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                  Diverse teams perform better.
                </p>
                <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                  With TestFounder, you give all applicants an equal, unbiased
                  opportunity to showcase themselves.
                </p>
                <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                  This ensures you get the best talent from all walks of life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Explanation 4 */}
        <section className="flex h-fit items-center bg-[#F9F9F9] px-4 py-6 sm:min-h-[520px] md:px-[40px] md:py-[40px] lg:px-0 lg:py-0">
          <div className="container mx-auto">
            <div className="flex flex-col-reverse items-center gap-[41px] md:flex-col-reverse lg:flex-row">
              <div className="z-50 mb-16 flex flex-col items-center text-center md:mb-0 md:w-full md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
                <h1 className="heading-2 sm:heading-1 mb-6 mt-0">
                  Offer a positive candidate experience.
                </h1>
                <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-0">
                  Good candidates appreciate good screening tests.
                </p>
                <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-0">
                  Our professional, well-designed tests serve as an extension of
                  your brand and personality.
                </p>
                <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-0">
                  Your applicants get the motivation and engagement they need to
                  truly shine.
                </p>
              </div>
              <div className="flex w-full justify-center md:w-full lg:w-1/2">
                <Image
                  src="/assets/global-people.png"
                  alt="Hero Image"
                  width={628}
                  height={596}
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
              <div className="z-50 mb-1 w-full sm:mb-16 md:mb-0 md:w-full md:text-left">
                <Image
                  src="/assets/people-conection.png"
                  alt="Hero Image"
                  width={616}
                  height={344}
                  sizes="100vw"
                  className="z-50"
                />
              </div>
              <div className="relative z-50 flex w-full flex-col items-center space-y-6 md:w-full md:items-start lg:w-1/2">
                <h1 className="heading-2 sm:heading-1 mb-0 mt-0 text-center sm:text-start">
                  Champion a data-driven HR culture.
                </h1>
                <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                  We rank your applicants according to test scores certified by
                  our experts. This means your HR team can rely on good data to
                  make important decisions – and not just their gut feeling.
                </p>
                <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                  With TestGorilla, you’ll lead the shift to a more professional
                  and data-focused HR culture in your company.
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


        {/* Blog Section */}
        <div className={styles.blog_container}>
          <div className={`container mx-auto m-10`}>
            <h1>Read more about science-backed hiring</h1>
            <div className={`${styles.blog_wrapper}`}>
              <div className={styles.blog_single}>
                <Image src='/assets/Mentor-1.png' alt='Blog Image Grid' width={321} height={213} />
                <h3 class={``}>A brief introduction to: Test validation</h3>
                <p className={``}>Science series materials are brought to you by TestFounder’s Assessment Team: A group of IO psycho...</p>
              </div>
              <div className={styles.blog_single}>
                <Image src='/assets/Mentor-1.png' alt='Blog Image Grid' width={321} height={213} />
                <h3 class={``}>A brief introduction to: Test validation</h3>
                <p className={``}>Science series materials are brought to you by TestFounder’s Assessment Team: A group of IO psycho...</p>
              </div>
              <div className={styles.blog_single}>
                <Image src='/assets/Mentor-1.png' alt='Blog Image Grid' width={321} height={213} />
                <h3 class={``}>A brief introduction to: Test validation</h3>
                <p className={``}>Science series materials are brought to you by TestFounder’s Assessment Team: A group of IO psycho...</p>
              </div>
              <div className={styles.blog_single}>
                <Image src='/assets/Mentor-1.png' alt='Blog Image Grid' width={321} height={213} />
                <h3 class={``}>A brief introduction to: Test validation</h3>
                <p className={``}>Science series materials are brought to you by TestFounder’s Assessment Team: A group of IO psycho...</p>
              </div>
              <div className={styles.blog_single}>
                <Image src='/assets/Mentor-1.png' alt='Blog Image Grid' width={321} height={213} />
                <h3 class={``}>A brief introduction to: Test validation</h3>
                <p className={``}>Science series materials are brought to you by TestFounder’s Assessment Team: A group of IO psycho...</p>
              </div>
              <div className={styles.blog_single}>
                <Image src='/assets/Mentor-1.png' alt='Blog Image Grid' width={321} height={213} />
                <h3 class={``}>A brief introduction to: Test validation</h3>
                <p className={``}>Science series materials are brought to you by TestFounder’s Assessment Team: A group of IO psycho...</p>
              </div>
            </div>
          </div>
        </div>

        {/* Explanation 7 */}
        <div className="min-h-[366px] w-full space-y-6 bg-[#D0F3FC26]">
          <div className="container mx-auto flex flex-col items-center justify-center space-y-6 px-4 py-6 text-center sm:px-0 sm:py-[60px]">
            <h1 className="heading-2 sm:heading-1">
              Top talent is priceless. We make finding it affordable.
            </h1>
            <p className="caption-regular-3 sm:caption-regular-1 text-center">
              A time-consuming screening process costs you a lot. Painful
              mis-hires cost you much, much more. With TestGorilla, you avoid
              all of this and see a huge return on investment every single year.
            </p>
            <p className="caption-regular-3 sm:caption-regular-1 text-center">
              Start screening with us today on our free plan.
            </p>
            <div className="flex flex-row gap-4">
              <button className="btn-line-medium">Talk to us</button>
              <button className="btn-medium">Sign Up Free</button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProductScience;
