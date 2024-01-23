import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Layout } from '@/components';
import { images } from '@/constants';
import { fetchContentfulEntries } from '@/helper';

import styles from './TalentAssessment.module.scss';

export default function TalentAssessment({ contentfulEntries }) {
  console.log(contentfulEntries);

  return (
    <Layout pageTitle="Talent Assessment">
      {/* Banner */}
      <section className="bg-[#F9F9F9] bg-blur bg-right bg-no-repeat pb-6 pt-0 md:pb-[32px] lg:pb-[80px]">
        <div className="container mx-auto">
          <div className="relative flex flex-col items-center sm:static lg:flex-row">
            <div className="mt-4 flex flex-col items-center px-4 py-6 text-center md:mb-0 md:w-full md:items-center md:px-[0px] md:py-[32px] md:text-left lg:mt-24 lg:flex-grow lg:items-start lg:pr-24">
              <h1 className="sm:heading-1 heading-2 mb-6 mt-20 ">
                {contentfulEntries.topBanner.fields.headline}
              </h1>
              <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-0 text-center lg:text-start">
                {
                  contentfulEntries.topBanner.fields.bodyText.content[0]
                    .content[0].value
                }
              </p>
              <div className="mb-6 flex justify-center">
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
            </div>
            <div className="relative flex w-full justify-center md:w-full lg:mt-20 lg:w-full lg:max-w-lg">
              <Image
                src={`https://${contentfulEntries.topBanner.fields.image.fields.file.url}`}
                alt="Hero Image"
                width={580}
                height={494}
                sizes="100vw"
                className="z-10 flex h-auto w-[80%] md:w-[60%] lg:w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Browse Topics */}
      <section className={`${styles.section_grey}`}>
        <div className={`container mx-auto px-4 py-6`}>
          <div className={`${styles.content_wrapper}`}>
            <h3 className={`heading-2 md:heading-1`}>
              {contentfulEntries.topSection[0].fields.headline}
            </h3>
            <div className={`${styles.topicsIcon_wrapper}`}>
              {contentfulEntries.pageContent
                .slice(1, 7)
                .map((explanation, index) => (
                  <div className={`${styles.topic_single}`} key={index}>
                    <Image
                      src={`https:${explanation.fields.image.fields.file.url}`}
                      width={60}
                      height={60}
                      alt="Icon Browse FAQ"
                    />
                    <p>{explanation.fields.headline}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* The impact of talent assessment */}
      <section className="">
        <div className="container mx-auto">
          <div className="flex flex-col px-4 py-6 md:px-[40px] md:py-[32px] lg:px-16 lg:py-20">
            <h2 className="heading-2 md:heading-1 text-center lg:mb-6">
              {contentfulEntries.topSection[12].fields.headline}
            </h2>
            <p className="caption-semibold-1 text-center">
              {
                contentfulEntries.topSection[12].fields.bodyText.content[0]
                  .content[0].value
              }{' '}
              <span className="text-sm font-light italic">
                {
                  contentfulEntries.topSection[12].fields.bodyText.content[0]
                    .content[2].value
                }
              </span>
            </p>
            <div className="flex flex-col justify-center lg:mt-10 lg:flex-row lg:gap-6">
              {contentfulEntries.pageContent
                .slice(7, 10)
                .map((impact, index) => (
                  <div
                    className="flex max-w-full flex-col lg:max-w-[421px]"
                    key={index}
                  >
                    <div className="text-center text-[54px] font-bold text-primary-500">
                      {impact.fields.headline}
                    </div>
                    <p className="caption-regular-3 text-center">
                      {impact.fields.bodyText.content[0].content[0].value}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Explanation 1 */}
      <section className="flex h-fit items-center bg-white px-4 py-6 sm:min-h-[520px] md:px-[40px] md:py-[40px] lg:px-0 lg:py-0">
        <div className="container mx-auto ">
          <div className="flex flex-col-reverse items-center gap-6 lg:flex-row lg:py-[60px]">
            <div className="mb-16 w-full sm:w-1/2 md:mb-0 md:text-left ">
              <Image
                src={`https://${contentfulEntries.topSection[1].fields.image.fields.file.url}`}
                alt="Hero Image"
                width={517}
                height={544}
                sizes="100vw"
              />
            </div>
            <div className="relative flex w-full flex-col items-center space-y-6 md:w-full lg:w-1/2 lg:items-start">
              <h1 className="heading-2 sm:heading-1 mb-0 mt-0 text-center sm:text-start">
                {contentfulEntries.topSection[1].fields.internalName}
              </h1>
              <p className="caption-regular-3 sm:caption-regular-1 text-center lg:text-start">
                {
                  contentfulEntries.topSection[1].fields.bodyText.content[0]
                    .content[0].value
                }
              </p>
              <p className="caption-regular-3 sm:caption-regular-1 text-center lg:text-start">
                {
                  contentfulEntries.topSection[1].fields.bodyText.content[1]
                    .content[0].value
                }
              </p>
              <Link href={contentfulEntries.topSection[1].fields.ctaLink}>
                <button className="btn-line-normal-black">
                  {contentfulEntries.topSection[1].fields.ctaText}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid 1 */}
      <section className={styles.blog_container}>
        <div className={`container m-10 mx-auto`}>
          <h1 className="heading-2 md:heading-1 text-center lg:text-start">
            {contentfulEntries.topSection[2].fields.headline}
          </h1>
          <div className={`${styles.blog_wrapper}`}>
            <div className={styles.blog_single}>
              <Image
                src="/assets/mentor-science-1.png"
                alt="Blog Image Grid"
                width={389}
                height={226}
              />
              <h3 className={``}>What is skills-based hiring?</h3>
              <p className={``}>
                Skills-based hiring is a hiring process where evidence of
                candidates’ skills, rather than other information such as their
                prior experience or where they were e..
              </p>
            </div>
            <div className={styles.blog_single}>
              <Image
                src="/assets/mentor-science-2.png"
                alt="Blog Image Grid"
                width={389}
                height={226}
              />
              <h3 className={``}>
                Skills-based hiring is on the rise. What does this mean for
                recruitment?
              </h3>
              <p className={``}>
                In case you didn't know yet, skills-based hiring is on the rise.
                In this article, we’ll use data we collected from 3,000
                employers and employees to discuss the...
              </p>
            </div>
            <div className={styles.blog_single}>
              <Image
                src="/assets/mentor-science-3.png"
                alt="Blog Image Grid"
                width={389}
                height={226}
              />
              <h3 className={``}>
                How skills-based hiring delivers what job candidates want in
                2023
              </h3>
              <p className={``}>
                Job candidates are putting their desires front and center when
                searching for a new job in 2023.  In the aftermath of the
                Covid-19 pandemic and the Great R...
              </p>
            </div>
            <div className={styles.blog_single}>
              <Image
                src="/assets/mentor-science-4.png"
                alt="Blog Image Grid"
                width={389}
                height={226}
              />
              <h3 className={``}>
                How the focus on skills in hiring is driving the degree “reset”
                – and where universities...
              </h3>
              <p className={``}>
                One of the most controversial calls to action of skills-based
                hiring is for employers to ditch the typical requirement for a
                university degree and tear the pa...
              </p>
            </div>
            <div className={styles.blog_single}>
              <Image
                src="/assets/mentor-science-5.png"
                alt="Blog Image Grid"
                width={389}
                height={226}
              />
              <h3 className={``}>
                How skills-based hiring can change the way we view retention and
                internal mobility
              </h3>
              <p className={``}>
                Career progression is, understandably, front-of-mind for
                employees when evaluating whether to stay with their current
                employer or search elsewhere. In 2022...
              </p>
            </div>
            <div className={styles.blog_single}>
              <Image
                src="/assets/mentor-science-6.png"
                alt="Blog Image Grid"
                width={389}
                height={226}
              />
              <h3 className={``}>
                How skills-based hiring helps STARs tear down the paper ceiling
              </h3>
              <p className={``}>
                We know how this headline sounds, but no, this blog post isn’t
                about helping Dua Lipa start a new career as a warehouse
                supervisor. The term “STAR” actually sta...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Explanation 2 */}
      <section className="flex h-fit items-center bg-white px-4 py-6 sm:min-h-[520px] md:px-[40px] md:py-[40px] lg:px-0 lg:py-0">
        <div className="container mx-auto ">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row lg:py-[60px]">
            <div className="relative flex w-full flex-col items-center space-y-6 md:w-full lg:w-1/2 lg:items-start">
              <h1 className="heading-2 sm:heading-1 mb-0 mt-0 text-center sm:text-start">
                {contentfulEntries.topSection[3].fields.headline}
              </h1>
              <p className="caption-regular-3 sm:caption-regular-1 text-center lg:text-start">
                {
                  contentfulEntries.topSection[3].fields.bodyText.content[0]
                    .content[0].value
                }
              </p>
              <p className="caption-regular-3 sm:caption-regular-1 text-center lg:text-start">
                {
                  contentfulEntries.topSection[3].fields.bodyText.content[1]
                    .content[0].value
                }
              </p>
              <Link href={contentfulEntries.topSection[3].fields.ctaLink}>
                <button className="btn-line-normal-black">
                  {contentfulEntries.topSection[3].fields.ctaText}
                </button>
              </Link>
            </div>
            <div className="mb-16 w-full sm:w-1/2 md:mb-0 md:text-left ">
              <Image
                src={`https://${contentfulEntries.topSection[3].fields.image.fields.file.url}`}
                alt="Hero Image"
                width={645}
                height={513}
                sizes="100vw"
                className="img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid 2 */}
      <section className={styles.blog_container}>
        <div className={`container m-10 mx-auto`}>
          <h3 className="heading-2 md:heading-1 text-center lg:text-start">
            {contentfulEntries.topSection[4].fields.headline}
          </h3>
          <div className={`${styles.blog_wrapper}`}>
            <div className={styles.blog_single}>
              <Image
                src="/assets/mentor-science-1.png"
                alt="Blog Image Grid"
                width={389}
                height={226}
              />
              <h3 className={``}>What is skills-based hiring?</h3>
              <p className={``}>
                Skills-based hiring is a hiring process where evidence of
                candidates’ skills, rather than other information such as their
                prior experience or where they were e..
              </p>
            </div>
            <div className={styles.blog_single}>
              <Image
                src="/assets/mentor-science-2.png"
                alt="Blog Image Grid"
                width={389}
                height={226}
              />
              <h3 className={``}>
                Skills-based hiring is on the rise. What does this mean for
                recruitment?
              </h3>
              <p className={``}>
                In case you didn't know yet, skills-based hiring is on the rise.
                In this article, we’ll use data we collected from 3,000
                employers and employees to discuss the...
              </p>
            </div>
            <div className={styles.blog_single}>
              <Image
                src="/assets/mentor-science-3.png"
                alt="Blog Image Grid"
                width={389}
                height={226}
              />
              <h3 className={``}>
                How skills-based hiring delivers what job candidates want in
                2023
              </h3>
              <p className={``}>
                Job candidates are putting their desires front and center when
                searching for a new job in 2023.  In the aftermath of the
                Covid-19 pandemic and the Great R...
              </p>
            </div>
            <div className={styles.blog_single}>
              <Image
                src="/assets/mentor-science-4.png"
                alt="Blog Image Grid"
                width={389}
                height={226}
              />
              <h3 className={``}>
                How the focus on skills in hiring is driving the degree “reset”
                – and where universities...
              </h3>
              <p className={``}>
                One of the most controversial calls to action of skills-based
                hiring is for employers to ditch the typical requirement for a
                university degree and tear the pa...
              </p>
            </div>
            <div className={styles.blog_single}>
              <Image
                src="/assets/mentor-science-5.png"
                alt="Blog Image Grid"
                width={389}
                height={226}
              />
              <h3 className={``}>
                How skills-based hiring can change the way we view retention and
                internal mobility
              </h3>
              <p className={``}>
                Career progression is, understandably, front-of-mind for
                employees when evaluating whether to stay with their current
                employer or search elsewhere. In 2022...
              </p>
            </div>
            <div className={styles.blog_single}>
              <Image
                src="/assets/mentor-science-6.png"
                alt="Blog Image Grid"
                width={389}
                height={226}
              />
              <h3 className={``}>
                How skills-based hiring helps STARs tear down the paper ceiling
              </h3>
              <p className={``}>
                We know how this headline sounds, but no, this blog post isn’t
                about helping Dua Lipa start a new career as a warehouse
                supervisor. The term “STAR” actually sta...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Explanation 3 */}
      <section className="flex h-fit items-center bg-white px-4 py-6 sm:min-h-[520px] md:px-[40px] md:py-[40px] lg:px-0 lg:py-0">
        <div className="container mx-auto ">
          <div className="flex flex-col-reverse items-center gap-6 lg:flex-row lg:py-[60px]">
            <div className="mb-16 w-full sm:w-1/2 md:mb-0 md:text-left ">
              <Image
                src={`https://${contentfulEntries.topSection[5].fields.image.fields.file.url}`}
                alt="Hero Image"
                width={644}
                height={551}
                sizes="100vw"
                className="img"
              />
            </div>
            <div className="relative flex w-full flex-col items-center space-y-6 md:w-full lg:w-1/2 lg:items-start">
              <h1 className="heading-2 sm:heading-1 mb-0 mt-0 text-center sm:text-start">
                {contentfulEntries.topSection[5].fields.headline}
              </h1>
              <p className="caption-regular-3 sm:caption-regular-1 text-center lg:text-start">
                {
                  contentfulEntries.topSection[5].fields.bodyText.content[0]
                    .content[0].value
                }
              </p>
              <p className="caption-regular-3 sm:caption-regular-1 text-center lg:text-start">
                {
                  contentfulEntries.topSection[5].fields.bodyText.content[1]
                    .content[0].value
                }
              </p>
              <Link href={contentfulEntries.topSection[5].fields.ctaLink}>
                <button className="btn-line-normal-black">
                  {contentfulEntries.topSection[5].fields.ctaText}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid 3 */}
      <section className={styles.blog_container}>
        <div className={`container m-10 mx-auto`}>
          <h1 className="heading-2 md:heading-1 text-center lg:text-start">
            {contentfulEntries.topSection[6].fields.headline}
          </h1>
          <div className={`${styles.blog_wrapper}`}>
            <div className={styles.blog_single}>
              <Image
                src="/assets/mentor-science-1.png"
                alt="Blog Image Grid"
                width={389}
                height={226}
              />
              <h3 className={``}>What is skills-based hiring?</h3>
              <p className={``}>
                Skills-based hiring is a hiring process where evidence of
                candidates’ skills, rather than other information such as their
                prior experience or where they were e..
              </p>
            </div>
            <div className={styles.blog_single}>
              <Image
                src="/assets/mentor-science-2.png"
                alt="Blog Image Grid"
                width={389}
                height={226}
              />
              <h3 className={``}>
                Skills-based hiring is on the rise. What does this mean for
                recruitment?
              </h3>
              <p className={``}>
                In case you didn't know yet, skills-based hiring is on the rise.
                In this article, we’ll use data we collected from 3,000
                employers and employees to discuss the...
              </p>
            </div>
            <div className={styles.blog_single}>
              <Image
                src="/assets/mentor-science-3.png"
                alt="Blog Image Grid"
                width={389}
                height={226}
              />
              <h3 className={``}>
                How skills-based hiring delivers what job candidates want in
                2023
              </h3>
              <p className={``}>
                Job candidates are putting their desires front and center when
                searching for a new job in 2023.  In the aftermath of the
                Covid-19 pandemic and the Great R...
              </p>
            </div>
            <div className={styles.blog_single}>
              <Image
                src="/assets/mentor-science-4.png"
                alt="Blog Image Grid"
                width={389}
                height={226}
              />
              <h3 className={``}>
                How the focus on skills in hiring is driving the degree “reset”
                – and where universities...
              </h3>
              <p className={``}>
                One of the most controversial calls to action of skills-based
                hiring is for employers to ditch the typical requirement for a
                university degree and tear the pa...
              </p>
            </div>
            <div className={styles.blog_single}>
              <Image
                src="/assets/mentor-science-5.png"
                alt="Blog Image Grid"
                width={389}
                height={226}
              />
              <h3 className={``}>
                How skills-based hiring can change the way we view retention and
                internal mobility
              </h3>
              <p className={``}>
                Career progression is, understandably, front-of-mind for
                employees when evaluating whether to stay with their current
                employer or search elsewhere. In 2022...
              </p>
            </div>
            <div className={styles.blog_single}>
              <Image
                src="/assets/mentor-science-6.png"
                alt="Blog Image Grid"
                width={389}
                height={226}
              />
              <h3 className={``}>
                How skills-based hiring helps STARs tear down the paper ceiling
              </h3>
              <p className={``}>
                We know how this headline sounds, but no, this blog post isn’t
                about helping Dua Lipa start a new career as a warehouse
                supervisor. The term “STAR” actually sta...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Explanation 4 */}
      <section className="flex h-fit items-center bg-white px-4 py-6 sm:min-h-[520px] md:px-[40px] md:py-[40px] lg:px-0 lg:py-0">
        <div className="container mx-auto ">
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:py-[60px]">
            <div className="relative flex w-full flex-col items-center space-y-6 md:w-full lg:w-1/2 lg:items-start">
              <h1 className="heading-2 sm:heading-1 mb-0 mt-0 text-center lg:text-start">
                {contentfulEntries.topSection[7].fields.headline}
              </h1>
              <p className="caption-regular-3 sm:caption-regular-1 text-center lg:text-start">
                {
                  contentfulEntries.topSection[7].fields.bodyText.content[0]
                    .content[0].value
                }
              </p>
              <p className="caption-regular-3 sm:caption-regular-1 text-center lg:text-start">
                {
                  contentfulEntries.topSection[7].fields.bodyText.content[1]
                    .content[0].value
                }
              </p>
              <Link href={contentfulEntries.topSection[7].fields.ctaLink}>
                <button className="btn-line-normal-black">
                  {contentfulEntries.topSection[7].fields.ctaText}
                </button>
              </Link>
            </div>
            <div className="mb-16 w-full sm:w-1/2 md:mb-0 md:text-left ">
              <Image
                src={`https://${contentfulEntries.topSection[7].fields.image.fields.file.url}`}
                alt="Hero Image"
                width={643}
                height={588}
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid 4 */}
      <section className={styles.blog_container}>
        <div className={`container m-10 mx-auto`}>
          <h1 className="heading-2 md:heading-1 text-center lg:text-start">
            {contentfulEntries.topSection[8].fields.headline}
          </h1>
          <div className={`${styles.blog_wrapper}`}>
            <div className={styles.blog_single}>
              <Image
                src="/assets/mentor-science-1.png"
                alt="Blog Image Grid"
                width={389}
                height={226}
              />
              <h3 className={``}>What is skills-based hiring?</h3>
              <p className={``}>
                Skills-based hiring is a hiring process where evidence of
                candidates’ skills, rather than other information such as their
                prior experience or where they were e..
              </p>
            </div>
            <div className={styles.blog_single}>
              <Image
                src="/assets/mentor-science-2.png"
                alt="Blog Image Grid"
                width={389}
                height={226}
              />
              <h3 className={``}>
                Skills-based hiring is on the rise. What does this mean for
                recruitment?
              </h3>
              <p className={``}>
                In case you didn't know yet, skills-based hiring is on the rise.
                In this article, we’ll use data we collected from 3,000
                employers and employees to discuss the...
              </p>
            </div>
            <div className={styles.blog_single}>
              <Image
                src="/assets/mentor-science-3.png"
                alt="Blog Image Grid"
                width={389}
                height={226}
              />
              <h3 className={``}>
                How skills-based hiring delivers what job candidates want in
                2023
              </h3>
              <p className={``}>
                Job candidates are putting their desires front and center when
                searching for a new job in 2023.  In the aftermath of the
                Covid-19 pandemic and the Great R...
              </p>
            </div>
            <div className={styles.blog_single}>
              <Image
                src="/assets/mentor-science-4.png"
                alt="Blog Image Grid"
                width={389}
                height={226}
              />
              <h3 className={``}>
                How the focus on skills in hiring is driving the degree “reset”
                – and where universities...
              </h3>
              <p className={``}>
                One of the most controversial calls to action of skills-based
                hiring is for employers to ditch the typical requirement for a
                university degree and tear the pa...
              </p>
            </div>
            <div className={styles.blog_single}>
              <Image
                src="/assets/mentor-science-5.png"
                alt="Blog Image Grid"
                width={389}
                height={226}
              />
              <h3 className={``}>
                How skills-based hiring can change the way we view retention and
                internal mobility
              </h3>
              <p className={``}>
                Career progression is, understandably, front-of-mind for
                employees when evaluating whether to stay with their current
                employer or search elsewhere. In 2022...
              </p>
            </div>
            <div className={styles.blog_single}>
              <Image
                src="/assets/mentor-science-6.png"
                alt="Blog Image Grid"
                width={389}
                height={226}
              />
              <h3 className={``}>
                How skills-based hiring helps STARs tear down the paper ceiling
              </h3>
              <p className={``}>
                We know how this headline sounds, but no, this blog post isn’t
                about helping Dua Lipa start a new career as a warehouse
                supervisor. The term “STAR” actually sta...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Explanation 5 */}
      <section className="flex h-fit items-center bg-white px-4 py-6 sm:min-h-[520px] md:px-[40px] md:py-[40px] lg:px-0 lg:py-0">
        <div className="container mx-auto ">
          <div className="flex flex-col-reverse items-center gap-6 lg:flex-row lg:py-[60px]">
            <div className="mb-16 w-full sm:w-1/2 md:mb-0 md:text-left ">
              <Image
                src={`https://${contentfulEntries.topSection[9].fields.image.fields.file.url}`}
                alt="Hero Image"
                width={537}
                height={614}
                sizes="100vw"
              />
            </div>
            <div className="relative flex w-full flex-col items-center space-y-6 md:w-full lg:w-1/2 lg:items-start">
              <h1 className="heading-2 sm:heading-1 mb-0 mt-0 text-center sm:text-start">
                {contentfulEntries.topSection[9].fields.headline}
              </h1>
              <p className="caption-regular-3 sm:caption-regular-1 text-center lg:text-start">
                {
                  contentfulEntries.topSection[9].fields.bodyText.content[0]
                    .content[0].value
                }
              </p>
              <p className="caption-regular-3 sm:caption-regular-1 text-center lg:text-start">
                {
                  contentfulEntries.topSection[9].fields.bodyText.content[1]
                    .content[0].value
                }
              </p>
              <Link href={contentfulEntries.topSection[9].fields.ctaLink}>
                <button className="btn-line-normal-black">
                  {contentfulEntries.topSection[9].fields.ctaText}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid 5 */}
      <section className={styles.blog_container}>
        <div className={`container m-10 mx-auto`}>
          <h1 className="heading-2 md:heading-1 text-center lg:text-start">
            {contentfulEntries.topSection[10].fields.headline}
          </h1>
          <div className={`${styles.blog_wrapper}`}>
            <div className={styles.blog_single}>
              <Image
                src="/assets/mentor-science-1.png"
                alt="Blog Image Grid"
                width={389}
                height={226}
              />
              <h3 className={``}>What is skills-based hiring?</h3>
              <p className={``}>
                Skills-based hiring is a hiring process where evidence of
                candidates’ skills, rather than other information such as their
                prior experience or where they were e..
              </p>
            </div>
            <div className={styles.blog_single}>
              <Image
                src="/assets/mentor-science-2.png"
                alt="Blog Image Grid"
                width={389}
                height={226}
              />
              <h3 className={``}>
                Skills-based hiring is on the rise. What does this mean for
                recruitment?
              </h3>
              <p className={``}>
                In case you didn't know yet, skills-based hiring is on the rise.
                In this article, we’ll use data we collected from 3,000
                employers and employees to discuss the...
              </p>
            </div>
            <div className={styles.blog_single}>
              <Image
                src="/assets/mentor-science-3.png"
                alt="Blog Image Grid"
                width={389}
                height={226}
              />
              <h3 className={``}>
                How skills-based hiring delivers what job candidates want in
                2023
              </h3>
              <p className={``}>
                Job candidates are putting their desires front and center when
                searching for a new job in 2023.  In the aftermath of the
                Covid-19 pandemic and the Great R...
              </p>
            </div>
            <div className={styles.blog_single}>
              <Image
                src="/assets/mentor-science-4.png"
                alt="Blog Image Grid"
                width={389}
                height={226}
              />
              <h3 className={``}>
                How the focus on skills in hiring is driving the degree “reset”
                – and where universities...
              </h3>
              <p className={``}>
                One of the most controversial calls to action of skills-based
                hiring is for employers to ditch the typical requirement for a
                university degree and tear the pa...
              </p>
            </div>
            <div className={styles.blog_single}>
              <Image
                src="/assets/mentor-science-5.png"
                alt="Blog Image Grid"
                width={389}
                height={226}
              />
              <h3 className={``}>
                How skills-based hiring can change the way we view retention and
                internal mobility
              </h3>
              <p className={``}>
                Career progression is, understandably, front-of-mind for
                employees when evaluating whether to stay with their current
                employer or search elsewhere. In 2022...
              </p>
            </div>
            <div className={styles.blog_single}>
              <Image
                src="/assets/mentor-science-6.png"
                alt="Blog Image Grid"
                width={389}
                height={226}
              />
              <h3 className={``}>
                How skills-based hiring helps STARs tear down the paper ceiling
              </h3>
              <p className={``}>
                We know how this headline sounds, but no, this blog post isn’t
                about helping Dua Lipa start a new career as a warehouse
                supervisor. The term “STAR” actually sta...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-6 lg:px-16 lg:py-[60px]">
        <div className="container mx-auto">
          <h1 className="md:heading-1 heading-2 text-center lg:mb-8 lg:text-start">
            {contentfulEntries.topSection[11].fields.headline}
          </h1>
          <div className="flex flex-wrap justify-between gap-6 px-4 py-6 md:px-[40px] md:py-[32px] lg:px-0 lg:py-0">
            {contentfulEntries.faq.map((faq, index) => (
              <div className="flex max-h-[104px] w-full items-center gap-3 rounded-[10px] border-[0.5px]  border-[#CBCBCB] p-6 lg:w-[49%]">
                <Image
                  src={`https:${faq.fields.icon.fields.file.url}`}
                  width={46}
                  height={46}
                  alt="Icon Topics FAQ"
                />
                <p className="caption-semibold-1">
                  {faq.fields.headline}
                  {}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Banner */}
      <div className="min-h-[366px] w-full space-y-6 bg-primary-500">
        <div className="container mx-auto flex flex-col items-center justify-center space-y-6 px-4 py-6 text-center sm:px-0 sm:py-[60px]">
          <h1 className="heading-2 sm:heading-1 text-white">
            {contentfulEntries.extraSection[0].fields.headline}
          </h1>
          <p className="caption-regular-3 sm:caption-regular-1 text-center text-white">
            {
              contentfulEntries.extraSection[0].fields.bodyText.content[0]
                .content[0].value
            }
          </p>
          <p className="caption-regular-3 sm:caption-regular-1 text-center text-white">
            {
              contentfulEntries.extraSection[0].fields.bodyText.content[1]
                .content[0].value
            }
          </p>
          <div className="flex flex-row gap-4">
            <Link href={contentfulEntries.extraSection[0].fields.ctaUrl}>
              <button className="btn-line-medium-white">
                {contentfulEntries.extraSection[0].fields.ctaText}
              </button>
            </Link>
            <Link href={contentfulEntries.extraSection[0].fields.ctaUrl2}>
              <button className="btn-medium-white">
                {contentfulEntries.extraSection[0].fields.ctaText2}
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Search Bar*/}
      <section className="py-[60px]">
        <div className="container mx-auto">
          <h1 className="heading-2 md:heading-1 mb-6 text-center lg:mb-20">
            Latest posts on talent assessment
          </h1>
          <div className="flex w-full justify-center">
            <div className="relative w-fit justify-center">
              <input
                type="text"
                className="w-full rounded-[30px] bg-white px-6 py-3 shadow-[0_4px_10px_0px_rgba(0,0,0,0.15)] placeholder:text-base placeholder:text-[#CBCBCB] md:w-[600px]"
                placeholder="Search"
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
      </section>

      {/* Blog Grid 6 */}
      <section className="bg-grayscale-200 px-4 py-6 md:px-[40px] md:py-[32px] lg:px-0 lg:py-[60px]">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-[43px] ">
            <div className="max-w-[401px] space-y-4 rounded-[20px] bg-white p-4">
              <Image
                src="/assets/img-card-blog-1.png"
                alt="img-card-blog"
                width={369}
                height={226}
                sizes="100vw"
                className="rounded-[10px] object-cover"
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
            <div className="max-w-[401px] space-y-4 rounded-[20px] bg-white p-4">
              <Image
                src="/assets/img-card-blog-2.png"
                alt="img-card-blog"
                width={369}
                height={226}
                sizes="100vw"
                className="rounded-[10px] object-cover"
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
                  className="rounded-full object-cover"
                />
                <date className="caption-regular-4 ml-4">Desember 8, 2023</date>
              </div>
            </div>
            <div className="max-w-[401px] space-y-4 rounded-[20px] bg-white p-4">
              <Image
                src="/assets/img-card-blog-3.png"
                alt="img-card-blog"
                width={369}
                height={226}
                sizes="100vw"
                className="rounded-[10px] object-cover"
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
            <div className="max-w-[401px] space-y-4 rounded-[20px] bg-white p-4">
              <Image
                src="/assets/img-card-blog-4.png"
                alt="img-card-blog"
                width={369}
                height={226}
                sizes="100vw"
                className="rounded-[10px] object-cover"
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
            <div className="max-w-[401px] space-y-4 rounded-[20px] bg-white p-4">
              <Image
                src="/assets/img-card-blog-5.png"
                alt="img-card-blog"
                width={369}
                height={226}
                sizes="100vw"
                className="rounded-[10px] object-cover"
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
            <div className="max-w-[401px] space-y-4 rounded-[20px] bg-white p-4">
              <Image
                src="/assets/img-card-blog-6.png"
                alt="img-card-blog"
                width={369}
                height={226}
                sizes="100vw"
                className="rounded-[10px] object-cover"
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
            <div className="max-w-[401px] space-y-4 rounded-[20px] bg-white p-4">
              <Image
                src="/assets/img-card-blog-7.png"
                alt="img-card-blog"
                width={369}
                height={226}
                sizes="100vw"
                className="rounded-[10px] object-cover"
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
            <div className="max-w-[401px] space-y-4 rounded-[20px] bg-white p-4">
              <Image
                src="/assets/img-card-blog-8.png"
                alt="img-card-blog"
                width={369}
                height={226}
                sizes="100vw"
                className="rounded-[10px] object-cover"
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
            <div className="max-w-[401px] space-y-4 rounded-[20px] bg-white p-4">
              <Image
                src="/assets/img-card-blog-9.png"
                alt="img-card-blog"
                width={369}
                height={226}
                sizes="100vw"
                className="rounded-[10px] object-cover"
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
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const contentType = 'landingPage'; // Modify content type here
  const { items } = await fetchContentfulEntries(contentType);

  const entries = items.find(
    (entry) => entry.fields.internalName === 'Talent Assessment',
  );

  // Check if the entry is found
  if (entries) {
    console.log('Found the homepage entry:', entries);
  } else {
    console.log('Homepage entry not found.');
  }

  return {
    props: {
      contentfulEntries: entries ? entries.fields : {}, // Modify key-value of props
    },
  };
}
