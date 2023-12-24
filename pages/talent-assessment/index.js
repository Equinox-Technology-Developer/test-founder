import React from 'react';
import Image from 'next/image';

import { Layout } from '@/components';
import { images } from '@/constants';

import styles from './TalentAssessment.module.scss';

const index = () => {
  return (
    <Layout pageTitle="Talent Assesment">
      {/* Banner */}
      <section className="bg-[#F9F9F9] bg-blur bg-right bg-no-repeat pt-0">
        <div className="container mx-auto">
          <div className="relative flex flex-col items-center sm:static lg:flex-row">
            <div className="mb-16 mt-4 flex flex-col items-center text-center md:mb-0 md:w-full md:items-center md:px-[0px] md:py-[32px] md:text-left lg:mt-24 lg:flex-grow lg:items-start lg:pr-24">
              <h1 className="sm:heading-1 heading-2 mb-6 mt-20 ">
                Talent assessment
              </h1>
              <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-0 text-center lg:text-start">
                Find out what talent assessment is. Our articles give recruiters
                and hiring managers key insights into candidate potential.
              </p>
              <div className="mb-6 flex justify-center">
                <button className="btn-medium sm:btn-normal">
                  Try for free!
                </button>
                <button className="btn-line-medium sm:btn-line-normal ml-4">
                  Get a demo
                </button>
              </div>
            </div>
            <div className="relative flex w-full justify-center md:w-full lg:w-full lg:max-w-lg">
              <Image
                src={images.HeroImageTestAssessment}
                alt="Hero Image"
                width={512}
                height={638}
                sizes="100vw"
                className="z-10 mt-20 flex h-auto w-[80%] md:w-[60%] lg:w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Browse Topics */}
      <section className={`${styles.section_grey}`}>
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
                <p>What is talent assessment?</p>
              </div>
              <div className={`${styles.topic_single}`}>
                <Image
                  src="/assets/star_benefit.png"
                  width={60}
                  height={60}
                  alt="Icon Topics FAQ"
                />
                <p>Benefits of talent assessments</p>
              </div>
              <div className={`${styles.topic_single}`}>
                <Image
                  src="/assets/tools_assessment.png"
                  width={60}
                  height={60}
                  alt="Icon Topics FAQ"
                />
                <p>Talent assessment tools</p>
              </div>
              <div className={`${styles.topic_single}`}>
                <Image
                  src="/assets/tools_comparison.png"
                  width={60}
                  height={60}
                  alt="Icon Topics FAQ"
                />
                <p>Talent assessment tools comparison</p>
              </div>
              <div className={`${styles.topic_single}`}>
                <Image
                  src="/assets/path_recruit.png"
                  width={60}
                  height={60}
                  alt="Icon Topics FAQ"
                />
                <p>How to recruit talent</p>
              </div>
              <div className={`${styles.topic_single}`}>
                <Image
                  src="/assets/ask.png"
                  width={60}
                  height={60}
                  alt="Icon Topics FAQ"
                />
                <p>Frequently asked questions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The impact of talent assessment */}
      <section className="">
        <div className="container mx-auto">
          <div className="flex lg:flex-col lg:px-16 lg:py-20">
            <h2 className="heading-1 lg:mb-6 lg:text-center">
              The impact of talent assessment
            </h2>
            <p className="caption-semibold-1 lg:text-center">
              Source:{' '}
              <span className="text-sm font-light italic">
                TestFounder’s State of Skills-based Hiring 2023 report
              </span>
            </p>
            <div className="flex justify-center lg:mt-10 lg:gap-6">
              <div className="flex max-w-[421px] flex-col">
                <div className="text-center text-[54px] font-bold text-primary-500">
                  92%
                </div>
                <p className="caption-regular-3 text-center">
                  of organizations using talent assessment tests saw a reduction
                  in mis-hires
                </p>
              </div>
              <div className="flex max-w-[421px] flex-col">
                <div className="text-center text-[54px] font-bold text-primary-500">
                  89%
                </div>
                <p className="caption-regular-3 text-center">
                  of organizations using talent assessment tools reported a
                  reduction in cost-to-hire
                </p>
              </div>
              <div className="flex max-w-[421px] flex-col">
                <div className="text-center text-[54px] font-bold text-primary-500">
                  54%
                </div>
                <p className="caption-regular-3 text-center">
                  of candidates said they prefer a hiring process that includes
                  talent assessment tests
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Middle Banner */}
      <section className="flex h-fit items-center bg-white px-4 py-6 sm:min-h-[520px] md:px-[40px] md:py-[40px] lg:px-0 lg:py-0">
        <div className="container mx-auto ">
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:py-[60px]">
            <div className="mb-16 w-full sm:w-1/2 md:mb-0 md:text-left ">
              <Image
                src="/assets/img-talent-1.png"
                alt="Hero Image"
                width={644}
                height={551}
                sizes="100vw"
                className="z-50"
              />
            </div>
            <div className="relative flex w-full flex-col items-center space-y-6 md:w-full md:items-start lg:w-1/2">
              <h1 className="heading-2 sm:heading-1 mb-0 mt-0 text-center sm:text-start">
                What is talent assessment?
              </h1>
              <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                Unlock the power of talent assessment, which provides recruiters
                and hiring managers with invaluable insights into candidate
                potential.
              </p>
              <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                Explore the significance of evaluating skills, behavior, and
                culture add, streamlining the hiring process for optimal talent
                acquisition. Learn how to make data-driven decisions, ensuring
                the right match between candidates and organizational goals for
                sustained success.
              </p>
              <button className="btn-line-normal-black">
                Try us for free now!
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.blog_container}>
        <div className={`container m-10 mx-auto`}>
          <h1>Read more</h1>
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

      <section className="flex h-fit items-center bg-white px-4 py-6 sm:min-h-[520px] md:px-[40px] md:py-[40px] lg:px-0 lg:py-0">
        <div className="container mx-auto ">
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:py-[60px]">
            <div className="relative flex w-full flex-col items-center space-y-6 md:w-full md:items-start lg:w-1/2">
              <h1 className="heading-2 sm:heading-1 mb-0 mt-0 text-center sm:text-start">
                Benefits of talent assessments
              </h1>
              <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                How can talent assessments help your business grow? Explore our
                talent assessment gateway to see the many benefits it offers for
                recruiters and hiring managers.
              </p>
              <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                Gain a comprehensive understanding of how talent assessments
                streamline the hiring process, ensuring optimal candidate
                selection. Discover how these assessments drive informed
                decisions, enhance employee retention, and cultivate a
                high-performing workforce, ultimately boosting organizational
                productivity and success.
              </p>
              <button className="btn-line-normal-black">
                Try us for free now!
              </button>
            </div>
            <div className="mb-16 w-full sm:w-1/2 md:mb-0 md:text-left ">
              <Image
                src="/assets/img-talent-2.png"
                alt="Hero Image"
                width={645}
                height={513}
                sizes="100vw"
                className="z-50"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.blog_container}>
        <div className={`container m-10 mx-auto`}>
          <h1>Read more about the benefit</h1>
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

      <section className="flex h-fit items-center bg-white px-4 py-6 sm:min-h-[520px] md:px-[40px] md:py-[40px] lg:px-0 lg:py-0">
        <div className="container mx-auto ">
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:py-[60px]">
            <div className="mb-16 w-full sm:w-1/2 md:mb-0 md:text-left ">
              <Image
                src="/assets/img-talent-3.png"
                alt="Hero Image"
                width={644}
                height={551}
                sizes="100vw"
                className="z-50"
              />
            </div>
            <div className="relative flex w-full flex-col items-center space-y-6 md:w-full md:items-start lg:w-1/2">
              <h1 className="heading-2 sm:heading-1 mb-0 mt-0 text-center sm:text-start">
                Talent assessment tools
              </h1>
              <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                Discover the diverse, effective ways to evaluate candidate
                potential. Find out how cognitive tests, skills-based
                evaluations, and behavioral assessments offer recruiters and
                hiring managers invaluable insights for informed
                decision-making.
              </p>
              <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                Uncover the power of tailored assessment strategies in
                identifying top-tier talent aligned with your organizational
                objectives and company culture.
              </p>
              <button className="btn-line-normal-black">
                Try us for free now!
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.blog_container}>
        <div className={`container m-10 mx-auto`}>
          <h1>Read more about the different talent assessment tools...</h1>
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

      <section className="flex h-fit items-center bg-white px-4 py-6 sm:min-h-[520px] md:px-[40px] md:py-[40px] lg:px-0 lg:py-0">
        <div className="container mx-auto ">
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:py-[60px]">
            <div className="relative flex w-full flex-col items-center space-y-6 md:w-full md:items-start lg:w-1/2">
              <h1 className="heading-2 sm:heading-1 mb-0 mt-0 text-center sm:text-start">
                Talent assessment tools comparison
              </h1>
              <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                Explore our talent assessment tools comparison in our
                'TestFounder vs.' series. We'll break down the features and
                pricing of different tools and help you understand their pros
                and cons.
              </p>
              <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                Discover which one suits your recruitment needs best and makes
                hiring top talent a breeze. Make informed decisions to enhance
                your hiring process with our insights and comparisons.
              </p>
              <button className="btn-line-normal-black">
                Try us for free now!
              </button>
            </div>
            <div className="mb-16 w-full sm:w-1/2 md:mb-0 md:text-left ">
              <Image
                src="/assets/img-talent-4.png"
                alt="Hero Image"
                width={643}
                height={564}
                sizes="100vw"
                className="z-50"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.blog_container}>
        <div className={`container m-10 mx-auto`}>
          <h1>Talent Assessment tools comparison</h1>
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

      <section className="flex h-fit items-center bg-white px-4 py-6 sm:min-h-[520px] md:px-[40px] md:py-[40px] lg:px-0 lg:py-0">
        <div className="container mx-auto ">
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:py-[60px]">
            <div className="mb-16 w-full sm:w-1/2 md:mb-0 md:text-left ">
              <Image
                src="/assets/img-talent-5.png"
                alt="Hero Image"
                width={644}
                height={551}
                sizes="100vw"
                className="z-50"
              />
            </div>
            <div className="relative flex w-full flex-col items-center space-y-6 md:w-full md:items-start lg:w-1/2">
              <h1 className="heading-2 sm:heading-1 mb-0 mt-0 text-center sm:text-start">
                How to recruit talent
              </h1>
              <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                How and where do you find the best talent? Maximize your
                recruitment success with our top blogs, which provide essential
                insights for recruiters and hiring managers. Discover innovative
                strategies to attract top-tier talent, how to take advantage of
                comprehensive recruitment methods, and how to foster a diverse,
                inclusive workforce.
              </p>
              <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                Uncover the key to successful talent acquisition, from crafting
                compelling job descriptions to implementing effective
                interviewing techniques, to ensure a seamless recruitment
                process.
              </p>
              <button className="btn-line-normal-black">
                Try us for free now!
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.blog_container}>
        <div className={`container m-10 mx-auto`}>
          <h1>Read more about how to recruit the best talent</h1>
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

      <section className="lg:px-16 lg:py-[60px]">
        <div className="container mx-auto">
          <h1 className="heading-1 lg:mb-8">Talent Assessment FAQ</h1>
          <div className="flex flex-wrap justify-between gap-6">
            <div className="flex max-h-[104px] w-[49%] items-center gap-3 rounded-[10px] border-[0.5px] border-[#CBCBCB] p-6">
              <Image
                src="/assets/faq_grey.svg"
                width={46}
                height={46}
                alt="Icon Topics FAQ"
              />
              <p className="caption-semibold-1">
                What are the three components for conducting a talent
                assessment?
              </p>
            </div>
            <div className="flex max-h-[104px] w-[49%] items-center gap-3 rounded-[10px] border-[0.5px] border-[#CBCBCB] p-6">
              <Image
                src="/assets/faq_grey.svg"
                width={46}
                height={46}
                alt="Icon Topics FAQ"
              />
              <p className="caption-semibold-1">
                How do I choose the right talent assessment for my needs?
              </p>
            </div>
            <div className="flex max-h-[104px] w-[49%] items-center gap-3 rounded-[10px] border-[0.5px] border-[#CBCBCB] p-6">
              <Image
                src="/assets/faq_grey.svg"
                width={46}
                height={46}
                alt="Icon Topics FAQ"
              />
              <p className="caption-semibold-1">
                How can I ensure that my talent assessments are fair and
                unbiased?
              </p>
            </div>
            <div className="flex max-h-[104px] w-[49%] items-center gap-3 rounded-[10px] border-[0.5px] border-[#CBCBCB] p-6">
              <Image
                src="/assets/faq_grey.svg"
                width={46}
                height={46}
                alt="Icon Topics FAQ"
              />
              <p className="caption-semibold-1">
                How do I interpret the results of talent assessments?
              </p>
            </div>
            <div className="flex max-h-[104px] w-[49%] items-center gap-3 rounded-[10px] border-[0.5px] border-[#CBCBCB] p-6">
              <Image
                src="/assets/faq_grey.svg"
                width={46}
                height={46}
                alt="Icon Topics FAQ"
              />
              <p className="caption-semibold-1">
                What are the best practices for using talent assessments in HR?
              </p>
            </div>
            <div className="flex max-h-[104px] w-[49%] items-center gap-3 rounded-[10px] border-[0.5px] border-[#CBCBCB] p-6">
              <Image
                src="/assets/faq_grey.svg"
                width={46}
                height={46}
                alt="Icon Topics FAQ"
              />
              <p className="caption-semibold-1">
                What is the purpose of talent assessment?
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="min-h-[366px] w-full space-y-6 bg-primary-500">
        <div className="container mx-auto flex flex-col items-center justify-center space-y-6 px-4 py-6 text-center sm:px-0 sm:py-[60px]">
          <h1 className="heading-2 sm:heading-1 text-white">
            Top talent is priceless. We make finding it affordable.
          </h1>
          <p className="caption-regular-3 sm:caption-regular-1 text-center text-white">
            A time-consuming screening process costs you a lot. Painful
            mis-hires cost you much, much more. With TestGorilla, you avoid all
            of this and see a huge return on investment every single year.
          </p>
          <p className="caption-regular-3 sm:caption-regular-1 text-center text-white">
            Start screening with us today on our free plan.
          </p>
          <div className="flex flex-row gap-4">
            <button className="btn-line-medium-white">Talk to us</button>
            <button className="btn-medium-white">Try us for free!</button>
          </div>
        </div>
      </div>

      <section className="py-[60px]">
        <div className="container mx-auto">
          <h1 className="heading-1 text-center lg:mb-20">
            Latest posts on talent assessment
          </h1>
          <div className="flex w-full justify-center">
            <div className="relative w-fit justify-center">
              <input
                type="text"
                className="w-full rounded-[30px] bg-white px-6 py-3 shadow-[0_4px_10px_0px_rgba(0,0,0,0.15)] placeholder:text-base placeholder:text-[#CBCBCB] xl:w-[600px]"
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

      <section className="bg-grayscale-200 lg:py-[60px]">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-[43px]">
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
};

export default index;
