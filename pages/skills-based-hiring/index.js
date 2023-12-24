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
              <p className="caption-semibold-3 sm:caption-semibold-1 mb-6 mt-0 text-center lg:text-start">
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
                width={575}
                height={467}
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
                  src="/assets/Star 3_x40.png"
                  width={60}
                  height={60}
                  alt="Icon Topics FAQ"
                />
                <p>Benefits of skills-based hiring</p>
              </div>
              <div className={`${styles.topic_single}`}>
                <Image
                  src="/assets/global.png"
                  width={60}
                  height={60}
                  alt="Icon Topics FAQ"
                />
                <p>Skills-based hiring practices</p>
              </div>
              <div className={`${styles.topic_single}`}>
                <Image
                  src="/assets/path.png"
                  width={60}
                  height={60}
                  alt="Icon Topics FAQ"
                />
                <p>Implementing skills-based hiring</p>
              </div>
              <div className={`${styles.topic_single}`}>
                <Image
                  src="/assets/key.png"
                  width={60}
                  height={60}
                  alt="Icon Topics FAQ"
                />
                <p>Skills-based hiring resources</p>
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

      {/* Skills-based the best way */}
      <section className={`${styles.section_grey}`}>
        <div className={`container mx-auto`}>
          <div className={`${styles.content_wrapper}`}>
            <h2>Skills-based hiring is the best way to recruit</h2>
            <p className={`${styles.sub_heading}`}>
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
              <h1 className="sm:heading-1 heading-2 mb-6 text-shade-0">
                The state of skills-based hiring in 2023
              </h1>
              <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-0 text-center text-shade-0 lg:text-start">
                Recruitment is changing fast. Over the past year we’ve seen the
                red-hot candidate market give way to recessionary fears, and the
                rise of AI-based tools that promise a brand-new world of work.
                As businesses reshape their workforces to deal with these
                challenges,{' '}
                <span className="caption-bold-3 sm:caption-bold-1">
                  skills-based hiring has emerged as the preferred tool to find
                  and secure talent
                </span>
                .
              </p>
              <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-0 text-center text-shade-0 lg:text-start">
                In{' '}
                <span className="caption-bold-3 sm:caption-bold-1">
                  the world's only annual report on skills-based hiring
                </span>
                , we deep dive into the revolutionary recruitment trend to find
                out how employers are leveraging this approach, how it’s
                affecting candidate experience in the current job market, and
                what the adoption of skills-based hiring practices means for
                diversity efforts across organizations.
              </p>
              <div className="mb-6 flex justify-center">
                <button className="btn-line-medium-white">
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

      <section className="flex h-fit items-center bg-white px-4 py-6 sm:min-h-[520px] md:px-[40px] md:py-[40px] lg:px-0 lg:py-0">
        <div className="container mx-auto ">
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:py-[60px]">
            <div className="mb-16 w-full sm:w-1/2 md:mb-0 md:text-left ">
              <Image
                src="/assets/portrait-smiling.png"
                alt="Hero Image"
                width={557}
                height={508}
                sizes="100vw"
                className="z-50"
              />
            </div>
            <div className="relative flex w-full flex-col items-center space-y-6 md:w-full md:items-start lg:w-1/2">
              <h1 className="heading-2 sm:heading-1 mb-0 mt-0 text-center sm:text-start">
                What is skills-based hiring?
              </h1>
              <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                Looking to make faster, more accurate, and higher quality
                recruitment decisions? At a time when great talent comes at a
                significant premium employers are realizing that they need tools
                to assess candidates’ skills more quickly and reliably. Enter
                skills-based hiring. Read on to find out how this new approach
                to recruitment is driving managers to ditch resumes and expand
                their applicant pools.
              </p>
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
                Why skills-based hiring?
              </h1>
              <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                Our data shows that 76% of employers are ready to make the
                switch to skills-based hiring. Find out{' '}
                <span className="font-bold italic">why</span> skills-based
                hiring is on the rise and the wide-ranging benefits it can bring
                to your business.
              </p>
            </div>
            <div className="mb-16 w-full sm:w-fit md:mb-0 md:text-left">
              <Image
                src="/assets/img-why-skill-based-hiring.png"
                alt="Hero Image"
                width={562}
                height={516}
                sizes="100vw"
                className="z-50"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.blog_container}>
        <div className={`container m-10 mx-auto`}>
          <h1>Learn more</h1>
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

      <section className="flex h-fit items-center bg-white px-4 py-6 sm:min-h-[520px] md:px-[40px] md:py-[40px] lg:px-0 lg:py-0">
        <div className="container mx-auto ">
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:py-[60px]">
            <div className="mb-16 w-full sm:w-1/2 md:mb-0 md:text-left ">
              <Image
                src="/assets/img-who-using-skill-based.png"
                alt="Hero Image"
                width={557}
                height={508}
                sizes="100vw"
                className="z-50"
              />
            </div>
            <div className="relative flex w-full flex-col items-center space-y-6 md:w-full md:items-start lg:w-1/2">
              <h1 className="heading-2 sm:heading-1 mb-0 mt-0 text-center sm:text-start">
                Who is using skills-based hiring?
              </h1>
              <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                Skills-based hiring has quickly become a global trend helping
                reshape recruitment practices across many regions and
                industries. From the United States to Singapore, recruiters are
                embracing skills-based hiring to attract and keep top global
                talent. Reasons for its popularity differ across regions. Some
                use it to streamline high-volume hiring, while others are using
                it build fairer, more diverse teams. Read on to find out who is
                using skills-based hiring and how they will benefit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.blog_container}>
        <div className={`container m-10 mx-auto`}>
          <h1>By Region</h1>
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
          <h1>By Role</h1>
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
          <h1>By Industry</h1>
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

      <section className="flex h-fit items-center bg-white px-4 py-6 sm:min-h-[520px] md:px-[40px] md:py-[40px] lg:px-0 lg:py-0">
        <div className="container mx-auto ">
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:py-[60px]">
            <div className="relative flex w-full flex-col items-center space-y-6 md:w-full md:items-start lg:w-1/2">
              <h1 className="heading-2 sm:heading-1 mb-0 mt-0 text-center sm:text-start">
                How to implement skills-based hiring
              </h1>
              <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                Skills-based hiring is a broad hiring approach that covers
                everything from job descriptions and talent assessments, to
                structured interviews and work samples. Find out how to
                implement skills-based hiring for your organization in the best
                possible way.
              </p>
            </div>
            <div className="mb-16 w-full sm:w-fit md:mb-0 md:text-left ">
              <Image
                src="/assets/img-implement-skill-based-hiring.png"
                alt="Hero Image"
                width={562}
                height={516}
                sizes="100vw"
                className="z-50"
              />
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

      <section className="flex h-fit items-center bg-white px-4 py-6 sm:min-h-[520px] md:px-[40px] md:py-[40px] lg:px-0 lg:py-0">
        <div className="container mx-auto ">
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:py-[60px]">
            <div className="mb-16 w-full sm:w-1/2 md:mb-0 md:text-left ">
              <Image
                src="/assets/skill-based-hiring-resources.png"
                alt="Hero Image"
                width={562}
                height={562}
                sizes="100vw"
                className="z-50"
              />
            </div>
            <div className="relative flex w-full flex-col items-center space-y-6 md:w-full md:items-start lg:w-1/2">
              <h1 className="heading-2 sm:heading-1 mb-0 mt-0 text-center sm:text-start">
                Skills-based hiring resources
              </h1>
              <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                Skills-based hiring is a growing trend that shows no signs of
                abating, with 53.4% of respondents believing it will be the
                dominant hiring method in the future. Stay ahead of the curve by
                reading all the insights from our annual report, and explore our
                range of resources to help you make better skills-based hiring
                decisions.
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
                src={images.iPad}
                alt="Hero Image"
                width={777}
                height={530}
                sizes="100vw"
                className="z-50"
              />
            </div>
            <div className="relative flex w-full flex-col items-center space-y-6 md:w-full md:items-start lg:w-1/2">
              <h1 className="heading-2 sm:heading-1 mb-0 mt-0 text-center sm:text-start">
                Report
              </h1>
              <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                TestFounder's annual report: The State of Skills Based Hiring
              </p>
              <button className="btn-line-normal-black">Read Now</button>
            </div>
          </div>
        </div>
      </section>

      <section className="flex h-fit items-center bg-white px-4 py-6 sm:min-h-[520px] md:px-[40px] md:py-[40px] lg:px-0 lg:py-0">
        <div className="container mx-auto ">
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:py-[60px]">
            <div className="mb-16 w-full sm:w-1/2 md:mb-0 md:text-left ">
              <Image
                src="/assets/science-series.png"
                alt="Hero Image"
                width={643}
                height={428}
                sizes="100vw"
                className="z-50"
              />
            </div>
            <div className="relative flex w-full flex-col items-center space-y-6 md:w-full md:items-start lg:w-1/2">
              <h1 className="heading-2 sm:heading-1 mb-0 mt-0 text-center sm:text-start">
                Science series
              </h1>
              <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                Explore our science series to learn more about the science
                behind skills-based hiring
              </p>
              <button className="btn-line-normal-black">Read Now</button>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:px-16 lg:py-[60px]">
        <div className="container mx-auto">
          <h1 className="heading-1 lg:mb-8">Skills-based hiring FAQ</h1>
          <div className="flex flex-wrap justify-between gap-6">
            <div className="flex max-h-[104px] w-[49%] items-center gap-3 rounded-[10px] border-[0.5px] border-[#CBCBCB] p-6">
              <Image
                src="/assets/faq_grey.svg"
                width={46}
                height={46}
                alt="Icon Topics FAQ"
              />
              <p className="caption-semibold-1">
                Whats is skills-based hiring?
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
                How does skills-based hiring work?
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
                What are the benefits of skills-based hiring?
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
                How do you adopt skills-based hiring practices?
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
                What are the challenges of implementing skills-based hiring?
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
                What is a skills-based organization?
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
                How does skills-based hiring impact diversity, equity, and
                inclusion (DE&I) effort?
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
                Does skills-based hiring impact gender equity?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[60px]">
        <div className="container mx-auto">
          <h1 className="heading-1 text-center lg:mb-20">
            Latest posts on skills-based hiring
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
