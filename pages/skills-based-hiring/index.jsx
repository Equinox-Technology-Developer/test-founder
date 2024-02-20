import React from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

import { Layout } from '@/components';
import { images } from '@/constants';
import { fetchContentfulEntries } from '@/lib/contentful/client';

import styles from './SkillsBasedHiring.module.scss';

export default function SkillsBasedHiring({ contentfulEntries }) {
  return (
    <Layout pageTitle="Skills Based Hiring - Blog">
      {/* Banner */}
      <section className="bg-[#F9F9F9] bg-blur bg-right bg-no-repeat pt-0">
        <div className="container mx-auto">
          <div className="relative flex flex-col items-center px-4 py-6 sm:static md:px-[40px] md:py-[32px] lg:flex-row lg:px-0 lg:py-0">
            <div className="mb-16 mt-4 flex flex-col items-center text-center md:mb-0 md:w-full md:items-center md:px-[0px] md:py-[32px] md:text-left lg:mt-24 lg:flex-grow lg:items-start lg:pr-24">
              <h1 className="sm:heading-1 heading-2 mb-6 mt-20 ">
                {contentfulEntries.topBanner.fields.headline}
              </h1>
              <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-0 text-center lg:text-start">
                {
                  contentfulEntries.topBanner.fields.bodyText.content[0]
                    .content[0].value
                }
              </p>
              <p className="caption-semibold-3 sm:caption-semibold-1 mb-6 mt-0 text-center lg:text-start">
                {
                  contentfulEntries.topBanner.fields.bodyText.content[1]
                    .content[0].value
                }
              </p>
              <div className="mb-6 flex justify-center">
                <button className="btn-medium sm:btn-normal">
                  {contentfulEntries.topBanner.fields.ctaText}
                </button>
              </div>
              <div className="flex items-center gap-2 ">
                <div>
                  <Image
                    src="/assets/test-library-banner_people.png"
                    width={140}
                    height={44}
                    alt="Test Library People"
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
                  <p>{contentfulEntries.pageContent[0].fields.headline}</p>
                </div>
              </div>
            </div>
            <div className="relative flex w-full justify-center md:w-full lg:mt-20 lg:w-full lg:max-w-lg">
              <Image
                src={`https:${contentfulEntries.topBanner.fields.image.fields.file.url}`}
                alt="Hero Image"
                width={575}
                height={467}
                sizes="100vw"
                className="flex h-auto w-[80%] md:w-[60%] lg:w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Browse Topics */}
      <section className={`${styles.section}`}>
        <div className={`container mx-auto`}>
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

      {/* Skills-based the best way */}
      <section className={`${styles.section_grey}`}>
        <div className={`container mx-auto`}>
          <div className={`${styles.content_wrapper}`}>
            <h2>{contentfulEntries.topSection[1].fields.headline}</h2>
            <p className={`${styles.sub_heading}`}>
              {
                contentfulEntries.topSection[1].fields.bodyText.content[0]
                  .content[0].value
              }
            </p>
            <div className={`${styles.topicsIcon_wrapper}`}>
              <div className={`${styles.topic_single}`}>
                <p className={`${styles.color_text} ${styles.color88}`}>
                  {contentfulEntries.pageContent[7].fields.headline}
                </p>
                <p>
                  {
                    contentfulEntries.pageContent[7].fields.bodyText.content[0]
                      .content[0].value
                  }
                </p>
              </div>
              <div className={`${styles.topic_single}`}>
                <p className={`${styles.color_text} ${styles.color86}`}>
                  {contentfulEntries.pageContent[8].fields.headline}
                </p>
                <p>
                  {
                    contentfulEntries.pageContent[8].fields.bodyText.content[0]
                      .content[0].value
                  }
                </p>
              </div>
              <div className={`${styles.topic_single}`}>
                <p className={`${styles.color_text} ${styles.color82}`}>
                  {contentfulEntries.pageContent[9].fields.headline}
                </p>
                <p>
                  {
                    contentfulEntries.pageContent[9].fields.bodyText.content[0]
                      .content[0].value
                  }
                </p>
              </div>
              <div className={`${styles.topic_single}`}>
                <p className={`${styles.color_text} ${styles.color76}`}>
                  {contentfulEntries.pageContent[10].fields.headline}
                </p>
                <p>
                  {
                    contentfulEntries.pageContent[10].fields.bodyText.content[0]
                      .content[0].value
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Middle Banner */}
      <section className="bg-[#0C4B9A] bg-no-repeat pt-0">
        <div className="container mx-auto">
          <div className="relative flex flex-col-reverse items-center px-4 py-6 sm:static md:px-[40px] md:py-[32px] lg:flex-row lg:px-0 lg:py-0">
            <div className="mb-16 mt-4 flex flex-col items-center text-center md:mb-0 md:w-full md:items-center md:px-[0px] md:py-[32px] md:text-left lg:mt-24 lg:flex-grow lg:items-start lg:pr-24">
              <h1 className="sm:heading-1 heading-2 mb-6 text-shade-0">
                {contentfulEntries.topSection[2].fields.headline}
              </h1>
              <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-0 text-center text-shade-0 lg:text-start">
                {
                  contentfulEntries.topSection[2].fields.bodyText.content[0]
                    .content[0].value
                }
                <span className="caption-bold-3 sm:caption-bold-1">
                  {
                    contentfulEntries.topSection[2].fields.bodyText.content[0]
                      .content[1].value
                  }
                </span>
                .
              </p>
              <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-0 text-center text-shade-0 lg:text-start">
                {
                  contentfulEntries.topSection[2].fields.bodyText.content[1]
                    .content[0].value
                }
                <span className="caption-bold-3 sm:caption-bold-1">
                  {
                    contentfulEntries.topSection[2].fields.bodyText.content[1]
                      .content[1].value
                  }
                </span>
                {
                  contentfulEntries.topSection[2].fields.bodyText.content[1]
                    .content[2].value
                }
              </p>
              <div className="mb-6 flex justify-center">
                <button className="btn-line-medium-white">
                  {contentfulEntries.topSection[2].fields.ctaText}
                </button>
              </div>
            </div>
            <div className="relative flex w-full justify-center md:w-full lg:w-full lg:max-w-lg">
              <Image
                src={`https:${contentfulEntries.topSection[2].fields.image.fields.file.url}`}
                alt="Hero Image"
                width={512}
                height={638}
                sizes="100vw"
                className="z-10 flex h-auto w-[90%] md:w-[75%] lg:w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Explanation 1 */}
      <section className="flex h-fit items-center bg-white px-4 py-6 sm:min-h-[520px] md:px-[40px] md:py-[40px] lg:px-0 lg:py-0">
        <div className="container mx-auto ">
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:py-[60px]">
            <div className="mb-16 w-full sm:w-1/2 md:mb-0 md:text-left ">
              <Image
                src={`https:${contentfulEntries.topSection[3].fields.image.fields.file.url}`}
                alt="Hero Image"
                width={557}
                height={508}
                sizes="100vw"
                className="z-50"
              />
            </div>
            <div className="relative flex w-full flex-col items-center space-y-6 md:w-full md:items-start lg:w-1/2">
              <h1 className="heading-2 sm:heading-1 mb-0 mt-0 text-center sm:text-start">
                {contentfulEntries.topSection[3].fields.headline}
              </h1>
              <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                {
                  contentfulEntries.topSection[3].fields.bodyText.content[0]
                    .content[0].value
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid 1 */}
      <section className={styles.blog_container}>
        <div className={`container m-10 mx-auto`}>
          <h1 className="text-center lg:text-start">
            {contentfulEntries.topSection[4].fields.headline}
          </h1>
          <div className={`${styles.blog_wrapper}`}>
            <div className={styles.blog_single}>
              <Image
                src="/assets/mentor-science-1.png"
                alt="Blog Image Grid"
                width={389}
                height={226}
                className="object-cover md:max-h-[327px]"
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
            <div className="relative flex w-full flex-col items-center space-y-6 md:w-full md:items-start lg:w-1/2">
              <h1 className="heading-2 sm:heading-1 mb-0 mt-0 text-center sm:text-start">
                {contentfulEntries.topSection[5].fields.headline}
              </h1>
              <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                {
                  contentfulEntries.topSection[5].fields.bodyText.content[0]
                    .content[0].value
                }
                <span className="font-bold italic">
                  {
                    contentfulEntries.topSection[5].fields.bodyText.content[0]
                      .content[1].value
                  }
                </span>{' '}
                {
                  contentfulEntries.topSection[5].fields.bodyText.content[0]
                    .content[2].value
                }
              </p>
            </div>
            <div className="mb-16 w-full sm:w-fit md:mb-0 md:text-left">
              <Image
                src={`https:${contentfulEntries.topSection[5].fields.image.fields.file.url}`}
                alt="Hero Image"
                width={575}
                height={449}
                sizes="100vw"
                className="img z-50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid 2 */}
      <section className={styles.blog_container}>
        <div className={`container m-10 mx-auto`}>
          <h1>{contentfulEntries.topSection[6].fields.headline}</h1>
          <div className={`${styles.blog_wrapper}`}>
            <div className={styles.blog_single}>
              <Image
                src="/assets/learn-more-1.png"
                alt="Blog Image Grid"
                width={389}
                height={226}
              />
              <h3 className={``}>
                10 stories that demonstrate the power of skills-based hiring
              </h3>
              <p className={``}>
                We’ve been carefully building a team since TestFounder launched
                over two years ago, and today we hired our 100th team member. 
                We practice wha..
              </p>
            </div>
            <div className={styles.blog_single}>
              <Image
                src="/assets/learn-more-2.png"
                alt="Blog Image Grid"
                width={389}
                height={226}
              />
              <h3 className={``}>5 business benefits of skills-based hiring</h3>
              <p className={``}>
                Skills-based hiring requires hiring managers to break from
                traditional recruitment practices and adopt a new mindset. But
                as well as being a fairer way to ide..
              </p>
            </div>
            <div className={styles.blog_single}>
              <Image
                src="/assets/learn-more-3.png"
                alt="Blog Image Grid"
                width={389}
                height={226}
              />
              <h3 className={``}>Skills-based hiring and lowering costs</h3>
              <p className={``}>
                Hiring costs add up very quickly if an efficient process is not
                in place. Traditional hiring methods are bogged down with direct
                costs, like recruiter fees and the co...
              </p>
            </div>
            <div className={styles.blog_single}>
              <Image
                src="/assets/learn-more-4.png"
                alt="Blog Image Grid"
                width={389}
                height={226}
              />
              <h3 className={``}>
                How skills-based hiring can build a culture of belonging
              </h3>
              <p className={``}>
                When employees feel like they belong at work and are an integral
                part of a close-knit team, the results are far-reaching: Their
                job performance increases by 56...
              </p>
            </div>
            <div className={styles.blog_single}>
              <Image
                src="/assets/learn-more-5.png"
                alt="Blog Image Grid"
                width={389}
                height={226}
              />
              <h3 className={``}>
                Skills-based success: 10 recruiting case studies
              </h3>
              <p className={``}>
                The working world has been turned on its head with the pandemic,
                the Great Reshuffle, and the resulting skills shortage.
                Companies are searching for a power...
              </p>
            </div>
            <div className={styles.blog_single}>
              <Image
                src="/assets/learn-more-6.png"
                alt="Blog Image Grid"
                width={389}
                height={226}
              />
              <h3 className={``}>
                4 reasons employers hire faster with skills-based hiring
              </h3>
              <p className={``}>
                It's safe to say that traditional hiring methods aren't saving
                time for anyone. Job seekers spend hours tweaking resumes,
                whilst recruiters spend their days...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Explanation 3 */}
      <section className="flex h-fit items-center bg-white px-4 py-6 sm:min-h-[520px] md:px-[40px] md:py-[40px] lg:px-0 lg:py-0">
        <div className="container mx-auto ">
          <div className="flex flex-col-reverse items-center justify-between gap-6 lg:flex-row lg:py-[60px]">
            <div className="mb-16 w-full sm:w-1/2 md:mb-0 md:text-left ">
              <Image
                src={`https:${contentfulEntries.topSection[7].fields.image.fields.file.url}`}
                alt="Hero Image"
                width={524}
                height={375}
                sizes="100vw"
                className="img z-50"
              />
            </div>
            <div className="relative flex w-full flex-col items-center space-y-6 md:w-full md:items-start lg:w-1/2">
              <h1 className="heading-2 sm:heading-1 mb-0 mt-0 text-center sm:text-start">
                {contentfulEntries.topSection[7].fields.headline}
              </h1>
              <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                {
                  contentfulEntries.topSection[7].fields.bodyText.content[0]
                    .content[0].value
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid 3 */}
      <section className={styles.blog_container}>
        <div className={`container m-10 mx-auto`}>
          <h1>{contentfulEntries.topSection[8].fields.headline}</h1>
          <div className={`${styles.blog_wrapper}`}>
            <div className={styles.blog_single}>
              <Image
                src="/assets/by-region-1.png"
                alt="Blog Image Grid"
                width={389}
                height={226}
              />
              <h3 className={``}>
                Skills-based hiring around the world: Who’s leading the charge?
              </h3>
              <p className={``}>
                If you aren’t doing it yet, that’s ok: 58% of companies we
                surveyed only just adopted skills-based hiring in the past two
                years. But from the United States to Sin..
              </p>
            </div>
            <div className={styles.blog_single}>
              <Image
                src="/assets/by-region-2.png"
                alt="Blog Image Grid"
                width={389}
                height={226}
              />
              <h3 className={``}>
                What these 5 US states can teach us about skills-based hiring
              </h3>
              <p className={``}>
                States across the US are implementing a skills-based approach to
                hiring and rewriting the rules to traditional hiring practices. 
                Instead of evaluating can...
              </p>
            </div>
            <div className={styles.blog_single}>
              <Image
                src="/assets/by-region-3.png"
                alt="Blog Image Grid"
                width={389}
                height={226}
              />
              <h3 className={``}>
                What businesses can learn from skills-based hiring trends in
                Asia-Pacific
              </h3>
              <p className={``}>
                The global skills shortage is ongoing.  Many skilled workers are
                being turned away by employers because of a lack of formal
                education or experience on their r...
              </p>
            </div>
          </div>
          <h1>{contentfulEntries.topSection[9].fields.headline}</h1>
          <div className={`${styles.blog_wrapper}`}>
            <div className={styles.blog_single}>
              <Image
                src="/assets/by-role-1.png"
                alt="Blog Image Grid"
                width={389}
                height={226}
              />
              <h3 className={``}>
                How to take a skills-based approach to blue-collar recruitment
              </h3>
              <p className={``}>
                Employers are finding it increasingly difficult to fill their
                blue-collar job openings. The Covid-19 pandemic and the Great
                Resignation have contributed to this h...
              </p>
            </div>
            <div className={styles.blog_single}>
              <Image
                src="/assets/by-role-2.png"
                alt="Blog Image Grid"
                width={389}
                height={226}
              />
              <h3 className={``}>
                How to recruit for white-collar jobs using skills-based hiring
              </h3>
              <p className={``}>
                White-collar jobs can be really difficult to hire for because
                the roles and responsibilities of white-collar workers are often
                a blend of high-level hard and soft...
              </p>
            </div>
            <div className={styles.blog_single}>
              <Image
                src="/assets/by-role-3.png"
                alt="Blog Image Grid"
                width={389}
                height={226}
              />
              <h3 className={``}>
                How skills-based hiring is transforming entry-level hiring
              </h3>
              <p className={``}>
                Entry-level jobs are historically difficult to fill, with 41% of
                recruiters reporting that they are the hardest positions to hire
                for.[1] Although many employers bl...
              </p>
            </div>
          </div>
          <h1>{contentfulEntries.topSection[10].fields.headline}</h1>
          <div className={`${styles.blog_wrapper}`}>
            <div className={styles.blog_single}>
              <Image
                src="/assets/by-industry-1.png"
                alt="Blog Image Grid"
                width={389}
                height={226}
              />
              <h3 className={``}>
                Hiring for startups: Should you hire for a short-term fit or the
                potential to scale?
              </h3>
              <p className={``}>
                When you’re launching a startup, building the right team is
                everything: 14% of startups fail due to not having the right
                people on board.[1] And yet, it’s frau...
              </p>
            </div>
            <div className={styles.blog_single}>
              <Image
                src="/assets/by-industry-2.png"
                alt="Blog Image Grid"
                width={389}
                height={226}
              />
              <h3 className={``}>
                Skills-based hiring in the healthcare industry
              </h3>
              <p className={``}>
                The healthcare industry is one of the largest in the US. The
                market size was valued at $359.2bn in 2022 and is projected to
                reach $781.5bn by 2030.[1] This mas...
              </p>
            </div>
            <div className={styles.blog_single}>
              <Image
                src="/assets/by-industry-3.png"
                alt="Blog Image Grid"
                width={389}
                height={226}
              />
              <h3 className={``}>
                What’s causing inequality in STEM, and is skills-based hiring
                the solution?
              </h3>
              <p className={``}>
                It’s well-known that STEM industries – industries under the
                umbrella of science, technology, engineering, and math – are
                some of the least divers...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Explanation 4 */}
      <section className="flex h-fit items-center bg-white px-4 py-6 sm:min-h-[520px] md:px-[40px] md:py-[40px] lg:px-0 lg:py-0">
        <div className="container mx-auto ">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row lg:py-[60px]">
            <div className="relative flex w-full flex-col items-center space-y-6 md:w-full md:items-start lg:w-1/2">
              <h1 className="heading-2 sm:heading-1 mb-0 mt-0 text-center sm:text-start">
                {contentfulEntries.topSection[11].fields.headline}
              </h1>
              <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                {
                  contentfulEntries.topSection[11].fields.bodyText.content[0]
                    .content[0].value
                }
              </p>
            </div>
            <div className="mb-16 w-full sm:w-fit md:mb-0 md:text-left ">
              <Image
                src={`https:${contentfulEntries.topSection[11].fields.image.fields.file.url}`}
                alt="Hero Image"
                width={485}
                height={509}
                sizes="100vw"
                className="img z-50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid 4 */}
      <section className={styles.blog_container}>
        <div className={`container m-10 mx-auto`}>
          <h1>{contentfulEntries.topSection[4].fields.headline}</h1>
          <div className={`${styles.blog_wrapper}`}>
            <div className={styles.blog_single}>
              <Image
                src="/assets/read-more-skill-based-1.png"
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
                src="/assets/read-more-skill-based-2.png"
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
                src="/assets/read-more-skill-based-3.png"
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
                src="/assets/read-more-skill-based-4.png"
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
                src="/assets/read-more-skill-based-5.png"
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
                src="/assets/read-more-skill-based-6.png"
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
          <div className="flex flex-col-reverse items-center justify-between gap-6 lg:flex-row lg:py-[60px]">
            <div className="mb-16 flex h-full w-full content-stretch justify-center sm:w-1/2 md:mb-0 md:text-left">
              <Image
                src={`https:${contentfulEntries.topSection[12].fields.image.fields.file.url}`}
                alt="Hero Image"
                width={575}
                height={467}
                sizes="100vw"
                className="img flex h-auto object-cover"
              />
            </div>
            <div className="relative flex w-full flex-col items-center space-y-6 md:w-full md:items-start lg:w-1/2">
              <h1 className="heading-2 md:heading-1 mb-0 mt-0 text-center sm:text-start">
                {contentfulEntries.topSection[12].fields.headline}
              </h1>
              <p className="caption-regular-3 md:caption-regular-1 text-center sm:text-start">
                {
                  contentfulEntries.topSection[12].fields.bodyText.content[0]
                    .content[0].value
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Explanation 6 */}
      <section className="flex h-fit items-center bg-white px-4 py-6 sm:min-h-[520px] md:px-[40px] md:py-[40px] lg:px-0 lg:py-0">
        <div className="container mx-auto ">
          <div className="flex flex-col-reverse items-center gap-6 lg:flex-row lg:py-[60px]">
            <div className="mb-16 flex w-full justify-center md:mb-0 md:text-left lg:w-1/2">
              <Image
                src={`https:${contentfulEntries.topSection[13].fields.image.fields.file.url}`}
                alt="Hero Image"
                width={644}
                height={530}
                sizes="100vw"
                className="flex h-auto lg:w-full"
              />
            </div>
            <div className="relative flex w-full flex-col items-center space-y-6 md:w-full lg:w-1/2 lg:items-start">
              <h1 className="heading-2 sm:heading-1 mb-0 mt-0 text-center sm:text-start">
                {contentfulEntries.topSection[13].fields.headline}
              </h1>
              <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                {
                  contentfulEntries.topSection[13].fields.bodyText.content[0]
                    .content[0].value
                }
              </p>
              <button className="btn-line-normal-black">
                {contentfulEntries.topSection[13].fields.ctaText}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Explanation 7 */}
      <section className="flex h-fit items-center bg-white px-4 py-6 sm:min-h-[520px] md:px-[40px] md:py-[40px] lg:px-0 lg:py-0">
        <div className="container mx-auto ">
          <div className="flex flex-col-reverse items-center gap-6 lg:flex-row lg:py-[60px]">
            <div className="mb-16 w-full sm:w-1/2 md:mb-0 md:text-left ">
              <Image
                src={`https:${contentfulEntries.topSection[14].fields.image.fields.file.url}`}
                alt="Hero Image"
                width={533}
                height={473}
                sizes="100vw"
                className="z-50"
              />
            </div>
            <div className="relative flex w-full flex-col items-center space-y-6 md:w-full lg:w-1/2 lg:items-start">
              <h1 className="heading-2 sm:heading-1 mb-0 mt-0 text-center sm:text-start">
                {contentfulEntries.topSection[14].fields.headline}
              </h1>
              <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                {
                  contentfulEntries.topSection[14].fields.bodyText.content[0]
                    .content[0].value
                }
              </p>
              <button className="btn-line-normal-black">
                {contentfulEntries.topSection[14].fields.ctaText}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="lg:px-16 lg:py-[60px]">
        <div className="container mx-auto">
          <h1 className="md:heading-1 heading-2 text-center lg:mb-8 lg:text-start">
            Skills-based hiring FAQ
          </h1>
          <div className="flex flex-wrap justify-between gap-6 px-4 py-6 md:px-[40px] md:py-[32px] lg:px-0 lg:py-0">
            {contentfulEntries.faq.map((faq, index) => (
              <div
                className="flex max-h-[104px]  w-full items-center gap-3 rounded-[10px] border-[0.5px] border-[#CBCBCB] p-6 lg:w-[49%]"
                key={index}
              >
                <Image
                  src={`https:${faq.fields.icon.fields.file.url}`}
                  width={46}
                  height={46}
                  alt="Icon Topics FAQ"
                />
                <p className="caption-semibold-1">{faq.fields.headline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-[60px]">
        <div className="container mx-auto hidden md:block">
          <h1 className="heading-1 text-center md:mb-8">
            Latest posts on skills-based hiring
          </h1>
          <div className="flex w-full justify-center">
            <div className="relative w-fit justify-center">
              <input
                type="text"
                className="w-full rounded-[30px] bg-white px-6 py-3 shadow-[0_4px_10px_0px_rgba(0,0,0,0.15)] placeholder:text-base placeholder:text-[#CBCBCB] md:w-[552px]"
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

      {/* Blog Grid 5 */}
      <section className="bg-grayscale-200 lg:py-[60px]">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-[43px] px-4 py-6 md:px-[40px] md:py-[32px] lg:px-0 lg:py-0">
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
  const contentfulEntries = await fetchContentfulEntries('landingPage');

  // Check if contentfulEntries is an array before filtering
  const filteredEntries = Array.isArray(contentfulEntries.items)
    ? contentfulEntries.items.find((entry) => {
        console.log(entry.fields.internalName);
        return entry.fields.internalName === 'Skill-based hiring';
      }).fields // Return only the .fields property
    : {};

  return {
    props: {
      contentfulEntries: filteredEntries,
    },
  };
}
