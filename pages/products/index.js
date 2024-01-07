import React from 'react';
import Image from 'next/image';
import { images } from '@/constants';
import Link from 'next/link';

import { Layout } from '@/components';
import { IoIosArrowForward } from 'react-icons/io';

import { fetchContentfulEntries } from '@/helper/contenfulHelper';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import SwiperTestimonialButton from '../../components/SwiperTestimonialButton';
import 'swiper/css';
import 'swiper/css/navigation';
import CardAssessmentDefault from '../../components/CardAssessment/CardAssessmentDefault';

import styles from './Products.module.scss';

const testimonies = [
  {
    name: 'Ralph Edwards',
    company: 'Cresco Labs',
    quote:
      'TesFounder has a full feature set. It is very reasonable from a price standpoint and extremely accurate. And so, we decided to go with TesFounder.',
    src: '/assets/ralph-edwards.png',
    date: '11/12/2023',
  },
  {
    name: 'Theresa Webb',
    company: 'User with Parkinson’s',
    quote:
      'I really like TesFounder. Using the keyboard shortcuts or the quick navigation bar makes it easy for me to read, access, use, or navigate a website.',
    src: '/assets/theresa-webb.png',
    date: '05/12/2023',
  },
  {
    name: 'Cameron Williamson',
    company: 'User, Talent Aquitition',
    quote:
      "When a website uses TesFounder, I can navigate using my keyboard. That reverses my whole experience. I'm relaxed because I can read, access, and buy what I need.",
    src: '/assets/cameron-williamson.png',
    date: '22/11/2023',
  },
  {
    name: 'Kathryn Murphy',
    company: 'Founder Wonder Wood',
    quote:
      "TesFounder was the simplest for us to implement, and it's really the easiest to use. Honestly, I wish that accessiBe was on every website everywhere.",
    src: '/assets/kathryn-murphy.png',
    date: '20/11/2023',
  },
  {
    name: 'Bessie Cooper',
    company: 'Talent Aquitition Specialist',
    quote:
      '“We evaluated many options, and for us, the integration and simple installation were magic. It makes all the difference.”',
    src: '/assets/bessie-cooper.png',
    date: '10/11/2023',
  },
  {
    name: 'Leslie Alexander',
    company: 'Founder, Incann',
    quote:
      "I started researching and was so excited to find accessiBe. It was the simplest and easiest to integrate. I'm so impressed. These people are geniuses!",
    src: '/assets/leslie-alexander.png',
    date: '5/11/2023',
  },
];

const Products = () => {
  return (
    <Layout pageTitle="Products">
      {/* Banner */}
      <section className="bg-[#F9F9F9] bg-blur bg-right bg-no-repeat pt-0">
        <div className="container mx-auto ">
          <div className="relative flex flex-col items-center sm:static lg:flex-row">
            <div className="mt-20 flex flex-col items-center text-center md:mb-0 md:w-full md:items-center md:px-[0px] md:py-[32px] md:text-left lg:mb-16 lg:mt-24 lg:flex-grow lg:items-start lg:pr-24 ">
              <h1 className="sm:heading-1 heading-2 mb-6 mt-0 ">
                <span className="text-primary-500">TestFounder</span> works.
                Resumes don't.
              </h1>
              <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-0 text-center lg:text-start">
                Our talent assessments screen and identify the best candidates
                and make your hiring decisions faster, easier, and bias-free.
              </p>
              <div className="mb-6 flex justify-center">
                <Link href="/signup">
                  <button className="btn-medium sm:btn-normal">
                    Get Started
                  </button>
                </Link>
                <button className="btn-line-medium sm:btn-line-normal ml-4">
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="relative flex w-full justify-center md:w-full lg:mt-20 lg:w-full lg:max-w-lg">
              <Image
                src={images.HeroImageProduct}
                alt="Hero Image"
                width={512}
                height={638}
                sizes="100vw"
                className="z-10 flex h-auto w-[80%] md:w-[60%] lg:w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Click 1 */}
      <section className="bg-[#F9F9F9] px-4 py-6 md:px-[50px] md:py-[10px] lg:pb-[46px]">
        <div className="container mx-auto">
          <h1 className="heading-2 md:heading-1 mb-6">
            1. Create high-quality assessments, fast.
          </h1>
          <p className="caption-regular-3 md:caption-regular-1 mb-6 sm:mb-0">
            Building assessments is a breeze with TestFounder. Get started with
            these simple steps.
          </p>
          <div className="flex flex-col lg:flex-row">
            <div className="lg:mt-12 lg:w-1/2">
              <CardAssessmentDefault
                title="Pick the perfect assessment name"
                paragraph="Organize and optimize your assessment by choosing a distinct name and job role"
                paragraph_2="Creating a unique and detailed name allows you to easily keep track of assessments. Selecting a job role lets us recommend the most relevant tests"
                icon_url={'/assets/assessment.svg'}
              />
              <CardAssessmentDefault
                title="Pick the perfect assessment name"
                paragraph="Explore our test library and find the best tests for any job role"
                icon_url={'/assets/icon-plus-product.svg'}
              />
              <CardAssessmentDefault
                title="Get personal with your own custom questions"
                paragraph="Video responses from your candidates give unique insight into their personality"
                icon_url={'/assets/icon-plus-product.svg'}
              />
            </div>
            <div className="flex items-center justify-end lg:w-1/2">
              <Image
                src="/assets/pick-assesment.png"
                alt="Pick Assesment"
                width={566}
                height={357}
                sizes="100vw"
                className="z-50 hidden object-cover lg:block"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F9F9F9] px-4 py-6 md:px-[50px] md:py-[40px]">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:mt-12 lg:w-1/2">
              <Image
                src="/assets/hero-mail.png"
                alt="Hero Mail"
                width={566}
                height={357}
                sizes="100vw"
                className="z-50 object-cover"
              />
            </div>
            <div className="flex flex-col justify-center lg:w-1/2">
              <h1 className="heading-2 md:heading-1 mb-6">
                2. Invite candidates your way.
              </h1>
              <p className="caption-regular-1">
                Connect with candidates by sending email invites directly from
                TestFounder or straight from your ATS. Have a long list of
                candidates? Easily send multiple invites with a single click. Or
                have candidates sign up by sharing a direct link.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F9F9F9] px-4 py-6 md:px-[50px] md:py-[40px] lg:pb-[98px] lg:pt-[60px]">
        <div className="container mx-auto">
          <h1 className="heading-2 md:heading-1 mb-6">
            3. Analyze and decide on the best candidates.
          </h1>
          <p className="caption-regular-3 md:caption-regular-1 mb-6 sm:mb-0">
            Watch the results roll in and discover your strongest candidates
            with TestFounder’s easy-to-read output reports.
          </p>
          <div className="flex flex-col lg:flex-row">
            <div className="lg:mt-12 lg:w-1/2">
              <CardAssessmentDefault
                title="Real-time assessment results"
                paragraph="Review every single assessment status at a glance"
                paragraph_2="See stats for each assesment, including how many candidates have started or finished and when the latest activity took place"
                icon_url={'/assets/assessment.svg'}
              />
              <CardAssessmentDefault
                title="Compare your candidates instantly"
                paragraph="See your candidates ranked right away when you click on an assessment"
                icon_url={'/assets/icon-plus-product.svg'}
              />
              <CardAssessmentDefault
                title="Go in-depth with a candidate review"
                paragraph="Know your candidates from every angle by exploring detailed reports and watching their personalized video"
                icon_url={'/assets/icon-plus-product.svg'}
              />
            </div>
            <div className="flex items-center justify-end lg:w-1/2">
              <Image
                src="/assets/assesment-table.png"
                alt="Pick Assesment"
                width={577}
                height={281}
                sizes="100vw"
                className="z-50 hidden object-cover lg:block"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#D0F3FC26] px-8 py-6 md:px-[50px] md:py-[40px] lg:py-[60px]">
        <div className="container mx-auto">
          <h1 className="heading-2 md:heading-1 mb-6 text-start md:text-center">
            More reasons businesses are choosing TestFounder.
          </h1>
          <div className="flex flex-col justify-center space-y-6 md:flex-row md:flex-wrap md:gap-6 lg:w-full ">
            <div className="flex max-w-full flex-col items-center md:mt-6 md:max-w-[310px] md:items-start lg:mt-[24px] lg:max-w-[310px]">
              <Image
                src="/assets/icon-simple.svg"
                alt="icon-simple"
                width={64}
                height={64}
                sizes="100vw"
                className="z-50 h-[40px] w-[40px] object-cover md:h-[64px] md:w-[64px]"
              />
              <p className="caption-semibold-3 md:caption-semibold-1">
                Surprisingly simple
              </p>
              <p className="caption-light-3 md:caption-light-2 text-center md:text-start">
                We’ve designed it so anyone can easily create assessments, add
                custom questions, rank candidates, export custom CSV files and
                more.
              </p>
            </div>
            <div className="flex max-w-full flex-col items-center md:max-w-[310px] md:items-start lg:mt-[34px] lg:max-w-[310px]">
              <Image
                src="/assets/icon-value.svg"
                alt="icon-simple"
                width={64}
                height={64}
                sizes="100vw"
                className="z-50 h-[40px] w-[40px] object-cover md:h-[64px] md:w-[64px]"
              />
              <p className="caption-semibold-3 md:caption-semibold-1">
                Incredible value
              </p>
              <p className="caption-light-3 md:caption-light-2 text-center md:text-start">
                We make professional assessments affordable for everyone and
                streamline the hiring process for any size business.
              </p>
            </div>
            <div className="flex max-w-full flex-col items-center md:max-w-[310px] md:items-start lg:mt-[34px] lg:max-w-[310px]">
              <Image
                src="/assets/icon-positive-candidte.svg"
                alt="icon-simple"
                width={64}
                height={64}
                sizes="100vw"
                className="z-50 h-[40px] w-[40px] object-cover md:h-[64px] md:w-[64px]"
              />
              <p className="caption-semibold-3 md:caption-semibold-1">
                Positive candidate experience
              </p>
              <p className="caption-light-3 md:caption-light-2 text-center md:text-start">
                No accounts necessary for candidates taking your assessment.
                Utilize your logo to leave a lasting brand impression.
              </p>
            </div>
            <div className="flex max-w-full flex-col items-center md:max-w-[310px] md:items-start lg:mt-[34px] lg:max-w-[310px]">
              <Image
                src="/assets/icon-simple.svg"
                alt="icon-simple"
                width={64}
                height={64}
                sizes="100vw"
                className="z-50 h-[40px] w-[40px] object-cover md:h-[64px] md:w-[64px]"
              />
              <p className="caption-semibold-3 md:caption-semibold-1">
                Cheating prevention
              </p>
              <p className="caption-light-3 md:caption-light-2 text-center md:text-start">
                View automatic snapshots of candidates as they’re being tested.
                Receive alerts if a candidate exits full-screen mode.
              </p>
            </div>
            <div className="flex max-w-full flex-col items-center md:max-w-[310px] md:items-start lg:mt-[34px] lg:max-w-[310px]">
              <Image
                src="/assets/icon-flexible-file-upload.svg"
                alt="icon-simple"
                width={64}
                height={64}
                sizes="100vw"
                className="z-50 h-[40px] w-[40px] object-cover md:h-[64px] md:w-[64px]"
              />
              <p className="caption-semibold-3 md:caption-semibold-1">
                Flexible file uploads
              </p>
              <p className="caption-light-3 md:caption-light-2 text-center md:text-start">
                Allow candidates to upload key documents such as a resume or
                portfolio.
              </p>
            </div>
            <div className="flex max-w-full flex-col items-center md:max-w-[310px] md:items-start lg:mt-[34px] lg:max-w-[310px]">
              <Image
                src="/assets/icon-support.svg"
                alt="icon-simple"
                width={64}
                height={64}
                sizes="100vw"
                className="z-50 h-[40px] w-[40px] object-cover md:h-[64px] md:w-[64px]"
              />
              <p className="caption-semibold-3 md:caption-semibold-1">
                Stellar support
              </p>
              <p className="caption-light-3 md:caption-light-2 text-center md:text-start">
                Get answers to your questions, fast. Our team is always here to
                help.
              </p>
            </div>
            <div className="flex max-w-full flex-col items-center md:max-w-[310px] md:items-start lg:mt-[34px] lg:max-w-[310px]">
              <Image
                src="/assets/icon-smarter-integration.svg"
                alt="icon-simple"
                width={64}
                height={64}
                sizes="100vw"
                className="z-50 h-[40px] w-[40px] object-cover md:h-[64px] md:w-[64px]"
              />
              <p className="caption-semibold-3 md:caption-semibold-1">
                Smarter integration
              </p>
              <p className="caption-light-3 md:caption-light-2 text-center md:text-start">
                Native integration with software like Workable, Greenhouse,
                Lever, SmartRecruiters, Recruitee, BreezyHR, Bullhorn, JazzHR,
                and Zapier.
              </p>
            </div>
            <div className="flex max-w-full flex-col items-center md:max-w-[310px] md:items-start lg:mt-[34px] lg:max-w-[310px]">
              <Image
                src="/assets/icon-mobile-friendly.svg"
                alt="icon-simple"
                width={64}
                height={64}
                sizes="100vw"
                className="z-50 h-[40px] w-[40px] object-cover md:h-[64px] md:w-[64px]"
              />
              <p className="caption-semibold-3 md:caption-semibold-1">
                Mobile-friendly features
              </p>
              <p className="caption-light-3 md:caption-light-2 text-center md:text-start">
                Optimized for all platforms. Build and review assessments on the
                go. Let candidates showcase their talents on any device.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <div className="w-full bg-[#F9F9F9] pb-[44px] sm:pb-[100px] lg:pt-[100px]">
        <div className="container mx-auto flex h-full items-center rounded-[20px] bg-white">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={40}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
          >
            {testimonies.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="mt-10 flex w-full flex-col px-[14px] py-[12px] sm:mt-0 md:h-[367px] md:max-w-[85%] md:flex-row md:py-[32px] md:pl-[0px] lg:max-w-[85%] lg:py-[32px] lg:pl-[82px]">
                  <div className="flex flex-row">
                    <Image
                      src={testimonial.src}
                      alt="Testimonial Image"
                      width={170}
                      height={303}
                      sizes="100vw"
                      className="z-50 w-[40%] rounded-[10px] object-cover lg:w-auto"
                    />
                    <div className="flex flex-col justify-center pl-3 md:justify-between ">
                      <div className="flex flex-col">
                        <Image
                          src="/assets/quote.svg"
                          alt="Hero Image"
                          width={42}
                          height={42}
                          sizes="100vw"
                          className="z-50"
                        />
                        <h3 className="heading-3 mt-0">{testimonial.name}</h3>
                        <p className="caption-regular-3">
                          {testimonial.company}
                        </p>
                        <p className="caption-light-2 hidden md:block">
                          “{testimonial.quote}”
                        </p>
                      </div>
                      <div className="hidden justify-between md:flex">
                        <div className="flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M12 17.2698L16.15 19.7798C16.91 20.2398 17.84 19.5598 17.64 18.6998L16.54 13.9798L20.21 10.7998C20.88 10.2198 20.52 9.11977 19.64 9.04977L14.81 8.63977L12.92 4.17977C12.58 3.36977 11.42 3.36977 11.08 4.17977L9.19 8.62977L4.36 9.03977C3.48 9.10977 3.12 10.2098 3.79 10.7898L7.46 13.9698L6.36 18.6898C6.16 19.5498 7.09 20.2298 7.85 19.7698L12 17.2698Z"
                              fill="#FCC773"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M12 17.2698L16.15 19.7798C16.91 20.2398 17.84 19.5598 17.64 18.6998L16.54 13.9798L20.21 10.7998C20.88 10.2198 20.52 9.11977 19.64 9.04977L14.81 8.63977L12.92 4.17977C12.58 3.36977 11.42 3.36977 11.08 4.17977L9.19 8.62977L4.36 9.03977C3.48 9.10977 3.12 10.2098 3.79 10.7898L7.46 13.9698L6.36 18.6898C6.16 19.5498 7.09 20.2298 7.85 19.7698L12 17.2698Z"
                              fill="#FCC773"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M12 17.2698L16.15 19.7798C16.91 20.2398 17.84 19.5598 17.64 18.6998L16.54 13.9798L20.21 10.7998C20.88 10.2198 20.52 9.11977 19.64 9.04977L14.81 8.63977L12.92 4.17977C12.58 3.36977 11.42 3.36977 11.08 4.17977L9.19 8.62977L4.36 9.03977C3.48 9.10977 3.12 10.2098 3.79 10.7898L7.46 13.9698L6.36 18.6898C6.16 19.5498 7.09 20.2298 7.85 19.7698L12 17.2698Z"
                              fill="#FCC773"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M12 17.2698L16.15 19.7798C16.91 20.2398 17.84 19.5598 17.64 18.6998L16.54 13.9798L20.21 10.7998C20.88 10.2198 20.52 9.11977 19.64 9.04977L14.81 8.63977L12.92 4.17977C12.58 3.36977 11.42 3.36977 11.08 4.17977L9.19 8.62977L4.36 9.03977C3.48 9.10977 3.12 10.2098 3.79 10.7898L7.46 13.9698L6.36 18.6898C6.16 19.5498 7.09 20.2298 7.85 19.7698L12 17.2698Z"
                              fill="#FCC773"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M12 17.2698L16.15 19.7798C16.91 20.2398 17.84 19.5598 17.64 18.6998L16.54 13.9798L20.21 10.7998C20.88 10.2198 20.52 9.11977 19.64 9.04977L14.81 8.63977L12.92 4.17977C12.58 3.36977 11.42 3.36977 11.08 4.17977L9.19 8.62977L4.36 9.03977C3.48 9.10977 3.12 10.2098 3.79 10.7898L7.46 13.9698L6.36 18.6898C6.16 19.5498 7.09 20.2298 7.85 19.7698L12 17.2698Z"
                              fill="#FCC773"
                            />
                          </svg>
                        </div>
                        <p className="caption-regular-3 text-neutral-100">
                          {testimonial.date}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="caption-light-2 pt-[20px] md:hidden">
                    “{testimonial.quote}
                  </p>
                  <div className="mt-4 flex justify-between md:hidden">
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 17.2698L16.15 19.7798C16.91 20.2398 17.84 19.5598 17.64 18.6998L16.54 13.9798L20.21 10.7998C20.88 10.2198 20.52 9.11977 19.64 9.04977L14.81 8.63977L12.92 4.17977C12.58 3.36977 11.42 3.36977 11.08 4.17977L9.19 8.62977L4.36 9.03977C3.48 9.10977 3.12 10.2098 3.79 10.7898L7.46 13.9698L6.36 18.6898C6.16 19.5498 7.09 20.2298 7.85 19.7698L12 17.2698Z"
                          fill="#FCC773"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 17.2698L16.15 19.7798C16.91 20.2398 17.84 19.5598 17.64 18.6998L16.54 13.9798L20.21 10.7998C20.88 10.2198 20.52 9.11977 19.64 9.04977L14.81 8.63977L12.92 4.17977C12.58 3.36977 11.42 3.36977 11.08 4.17977L9.19 8.62977L4.36 9.03977C3.48 9.10977 3.12 10.2098 3.79 10.7898L7.46 13.9698L6.36 18.6898C6.16 19.5498 7.09 20.2298 7.85 19.7698L12 17.2698Z"
                          fill="#FCC773"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 17.2698L16.15 19.7798C16.91 20.2398 17.84 19.5598 17.64 18.6998L16.54 13.9798L20.21 10.7998C20.88 10.2198 20.52 9.11977 19.64 9.04977L14.81 8.63977L12.92 4.17977C12.58 3.36977 11.42 3.36977 11.08 4.17977L9.19 8.62977L4.36 9.03977C3.48 9.10977 3.12 10.2098 3.79 10.7898L7.46 13.9698L6.36 18.6898C6.16 19.5498 7.09 20.2298 7.85 19.7698L12 17.2698Z"
                          fill="#FCC773"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 17.2698L16.15 19.7798C16.91 20.2398 17.84 19.5598 17.64 18.6998L16.54 13.9798L20.21 10.7998C20.88 10.2198 20.52 9.11977 19.64 9.04977L14.81 8.63977L12.92 4.17977C12.58 3.36977 11.42 3.36977 11.08 4.17977L9.19 8.62977L4.36 9.03977C3.48 9.10977 3.12 10.2098 3.79 10.7898L7.46 13.9698L6.36 18.6898C6.16 19.5498 7.09 20.2298 7.85 19.7698L12 17.2698Z"
                          fill="#FCC773"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 17.2698L16.15 19.7798C16.91 20.2398 17.84 19.5598 17.64 18.6998L16.54 13.9798L20.21 10.7998C20.88 10.2198 20.52 9.11977 19.64 9.04977L14.81 8.63977L12.92 4.17977C12.58 3.36977 11.42 3.36977 11.08 4.17977L9.19 8.62977L4.36 9.03977C3.48 9.10977 3.12 10.2098 3.79 10.7898L7.46 13.9698L6.36 18.6898C6.16 19.5498 7.09 20.2298 7.85 19.7698L12 17.2698Z"
                          fill="#FCC773"
                        />
                      </svg>
                    </div>
                    <p className="caption-regular-3 text-neutral-100">
                      {testimonial.date}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <SwiperTestimonialButton />
          </Swiper>
        </div>
      </div>

      {/* Explanation 7 */}
      <div className="min-h-[366px] w-full space-y-6 bg-[#D0F3FC26] pb-[60px]">
        <div className="container mx-auto flex flex-col items-center justify-center space-y-6 px-4 py-6 text-center sm:px-16 sm:py-[60px]">
          <h1 className="heading-2 sm:heading-1">
            Reinvent your hiring process now.
          </h1>
          <p className="caption-regular-3 sm:caption-regular-1 text-center">
            Start using TestFounder today, or talk to us about your hiring
            challenges to discover how we can help.
          </p>
          <div className="flex flex-row gap-4">
            <Link href="/book-demo">
              <button className="btn-line-medium">Free Demo</button>
            </Link>
            <Link href="/signup">
              <button className="btn-medium ">
                Get Started{' '}
                <span className="pl-2">
                  <IoIosArrowForward />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// export async function getStaticProps() {
//   const contentType = 'landingPage'; // Modify content type here
//   const { items } = await fetchContentfulEntries(contentType);

//   const entries = items.find(
//     (entry) => entry.fields.internalName === 'Products',
//   );

//   // Check if the entry is found
//   if (entries) {
//     console.log('Found the homepage entry:', entries);
//   } else {
//     console.log('Homepage entry not found.');
//   }

//   return {
//     props: {
//       contentfulEntries: entries ? entries.fields : {}, // Modify key-value of props
//     },
//   };
// }

export default Products;
