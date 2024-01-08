import { Layout } from '@/components';
import React from 'react';
import Image from 'next/image';

import SwiperNavButton from '../../components/SwiperNavButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
// import { fetchContentfulEntries } from '@/helper/contenfulHelper';

const slideData = [
  { src: '/assets/abbot.svg', alt: 'Abbot', width: 180, height: 80 },
  { src: '/assets/barila.svg', alt: 'Barila', width: 180, height: 80 },
  { src: '/assets/berkshire.svg', alt: 'Berkshire', width: 180, height: 80 },
  { src: '/assets/bmw.svg', alt: 'Bmw', width: 180, height: 80 },
  {
    src: '/assets/british-airways.svg',
    alt: 'British',
    width: 180,
    height: 80,
  },
  { src: '/assets/dolce-gabana.svg', alt: 'Dolce', width: 180, height: 80 },
  { src: '/assets/everlast.svg', alt: 'Everlast', width: 180, height: 80 },
  { src: '/assets/ferrero.svg', alt: 'Ferrero', width: 180, height: 80 },
  { src: '/assets/forbes.svg', alt: 'Forbes', width: 180, height: 80 },
  { src: '/assets/foxnews.svg', alt: 'Fox News', width: 180, height: 80 },
];

const About = ({ resources }) => {
  return (
    <>
      <Layout pageTitle="About">
        <section className="bg-[#F9F9F9] bg-blur bg-right bg-no-repeat lg:py-[100px]">
          <div className="container mx-auto mt-20">
            <div className="relative flex flex-col items-start px-4 py-6 sm:static md:px-10 md:py-8 lg:flex-row lg:px-0 lg:py-0">
              <div className="mb-0 flex flex-col items-center text-center md:mb-0 md:w-full md:items-center md:text-left lg:w-1/2 ">
                <div className="flex h-[424px] flex-col justify-center lg:justify-between">
                  <div className="flex flex-col">
                    <h1 className="sm:heading-1 heading-2 mb-6 mt-0 text-center lg:text-start">
                      <span className="text-primary-500">TestFounder</span>{' '}
                      Change Technology for Recruiter
                    </h1>
                    <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-0 text-center lg:text-start">
                      Navigating the Future of Recruitment: A Deep Dive into the
                      Impact of Assessment Technology on Talent Acquisition
                    </p>
                  </div>
                  <div className="flex w-full gap-[10.64px] rounded-[10px] bg-shade-0 p-4 shadow-[0_4px_10px_0px_rgba(0,0,0,0.15)]">
                    <div className="flex flex-1 flex-col items-center gap-3">
                      <Image
                        src="/assets/employee.svg"
                        width={48}
                        height={48}
                      />
                      <p className="caption-bold-1">129+</p>
                      <p className="caption-regular-3">Employee</p>
                    </div>
                    <div className="flex flex-1 flex-col items-center gap-3">
                      <Image src="/assets/team.svg" width={48} height={48} />
                      <p className="caption-bold-1">199</p>
                      <p className="caption-regular-3">Partner</p>
                    </div>
                    <div className="flex flex-1 flex-col items-center gap-3">
                      <Image
                        src="/assets/user_load.svg"
                        width={48}
                        height={48}
                      />
                      <p className="caption-bold-1">199</p>
                      <p className="caption-regular-3">Partner</p>
                    </div>
                    <div className="flex flex-1 flex-col items-center gap-3">
                      <Image
                        src="/assets/daily_load.svg"
                        width={48}
                        height={48}
                      />
                      <p className="caption-bold-1">199</p>
                      <p className="caption-regular-3">Partner</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full justify-center md:w-full lg:w-1/2">
                <Image
                  src="/assets/hero-about.png"
                  alt="Hero About"
                  width={644}
                  height={424}
                  sizes="100vw"
                  className="flex h-auto w-[80%] md:w-[60%] lg:w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="flex h-fit items-center bg-[#F9F9F9] px-4 py-6 sm:min-h-[520px] md:px-[40px] md:py-[40px] lg:px-0 lg:py-0">
          <div className="container mx-auto ">
            <div className="flex flex-col-reverse items-center gap-6 lg:flex-row lg:py-[60px]">
              <div className="mb-16 w-full sm:w-1/2 md:mb-0 md:text-left ">
                <Image
                  src="/assets/smile-chart.png"
                  alt="Hero Image"
                  width={478}
                  height={471}
                  sizes="100vw"
                  className="z-50"
                />
              </div>
              <div className="relative flex w-full flex-col items-center space-y-6 md:w-full lg:w-1/2 lg:items-start">
                <h1 className="heading-2 sm:heading-1 mb-0 mt-0 text-center lg:text-start">
                  About TestFounder
                </h1>
                <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                  In the ever-evolving landscape of talent acquisition,
                  recruiters are embracing a game-changing tool: Assessment
                  Technology. This innovative approach is reshaping traditional
                  recruitment processes, providing invaluable insights into
                  candidates' skills, aptitudes, and cultural fit. Join us as we
                  explore the transformative power of assessment technology and
                  how it is revolutionizing the way recruiters identify,
                  evaluate, and select top-tier talent.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto bg-[#F9F9F9] px-4 py-6 md:px-10 md:py-8 lg:px-0 lg:py-0">
          <div className="flex flex-col lg:py-20">
            <h2 className="md:heading-1 heading-2 text-center lg:mb-6">
              Our Three Pillar of TestFounder
            </h2>
            <div className="flex flex-col justify-center lg:mt-10 lg:flex-row lg:gap-6">
              <div className="flex max-w-full flex-col items-center lg:max-w-[421px]">
                <Image
                  src="/assets/time_efficiency.svg"
                  alt="Hero Image"
                  width={60}
                  height={60}
                  className="mb-4"
                />
                <div className="caption-semibold-2 text-center font-bold text-primary-500">
                  Time Efficiency
                </div>
                <p className="caption-regular-3 text-center">
                  of organizations using talent assessment tests saw a reduction
                  in mis-hires
                </p>
              </div>
              <div className="flex max-w-full flex-col items-center lg:max-w-[421px]">
                <Image
                  src="/assets/detection-making.svg"
                  alt="Hero Image"
                  width={60}
                  height={60}
                  className="mb-4"
                />
                <div className="caption-semibold-2 text-center font-bold text-primary-500">
                  Objective-Decition Making
                </div>
                <p className="caption-regular-3 text-center">
                  of organizations using talent assessment tools reported a
                  reduction in cost-to-hire
                </p>
              </div>
              <div className="flex max-w-full flex-col items-center lg:max-w-[421px]">
                <Image
                  src="/assets/candidate-experience.svg"
                  alt="Hero Image"
                  width={60}
                  height={60}
                  className="mb-4"
                />
                <div className="caption-semibold-2 text-center font-bold text-primary-500">
                  Enchanced Candidate Experience
                </div>
                <p className="caption-regular-3 text-center">
                  of candidates said they prefer a hiring process that includes
                  talent assessment tests
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto bg-[#F9F9F9] px-4 py-6 md:px-10 md:py-8 lg:px-0 lg:py-0">
          <div className="flex flex-col lg:px-16 lg:py-20">
            <h2 className="heading-1 text-center md:mb-[10px] lg:mb-6">
              Our Partner
            </h2>
            <div className="flex justify-center lg:mt-10 lg:gap-6">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={40}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                  },
                }}
              >
                {slideData.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      width={slide.width}
                      height={slide.height}
                      sizes="100vw"
                      className="ml-0 max-h-[80px] w-full max-w-[180px] pl-0 pr-0 xl:pl-14 xl:pr-5 2xl:ml-14 2xl:pr-5"
                    />
                  </SwiperSlide>
                ))}
                <SwiperNavButton />
              </Swiper>
            </div>
          </div>
        </section>

        <section className="h-full w-full bg-grayscale-200">
          <div className="container mx-auto px-4 py-6 md:px-10 md:py-8 lg:px-0 lg:py-0">
            <div className="flex flex-col lg:py-20">
              <h2 className="heading-1 text-center lg:mb-6">
                Meet our leaders
              </h2>
              <div className="flex flex-wrap justify-center gap-[26px]">
                <div className="flex flex-col p-4">
                  <Image
                    src="/assets/brooklyn-simmons.png"
                    width={276}
                    height={154}
                    className="mb-4"
                  />
                  <p className="caption-semibold-1">Brooklyn Simmons</p>
                  <p className="caption-light-2">Founder, President</p>
                </div>
                <div className="flex flex-col p-4">
                  <Image
                    src="/assets/ronald-richards.png"
                    width={276}
                    height={154}
                    className="mb-4"
                  />
                  <p className="caption-semibold-1">Ronald Richards</p>
                  <p className="caption-light-2">Founder, CEO</p>
                </div>
                <div className="flex flex-col p-4">
                  <Image
                    src="/assets/floyd-miles.png"
                    width={276}
                    height={154}
                    className="mb-4"
                  />
                  <p className="caption-semibold-1">Floyd Miles</p>
                  <p className="caption-light-2">Chief Technology Officer</p>
                </div>
                <div className="flex flex-col p-4">
                  <Image
                    src="/assets/theresa-webb-leaders.png"
                    width={276}
                    height={154}
                    className="mb-4"
                  />
                  <p className="caption-semibold-1">Theresa Webb</p>
                  <p className="caption-light-2">Chief Financial Officer</p>
                </div>
                <div className="flex flex-col p-4">
                  <Image
                    src="/assets/marvin-mckinney.png"
                    width={276}
                    height={154}
                    className="mb-4"
                  />
                  <p className="caption-semibold-1">Marvin McKinney</p>
                  <p className="caption-light-2">Senior Product Designer</p>
                </div>
                <div className="flex flex-col p-4">
                  <Image
                    src="/assets/david-fernandes.png"
                    width={276}
                    height={154}
                    className="mb-4"
                  />
                  <p className="caption-semibold-1">David Fernandes</p>
                  <p className="caption-light-2">Fullstack Developer</p>
                </div>
                <div className="flex flex-col p-4">
                  <Image
                    src="/assets/annette-black.png"
                    width={276}
                    height={154}
                    className="mb-4"
                  />
                  <p className="caption-semibold-1">Annette Black</p>
                  <p className="caption-light-2">Head of Talent Aquisition</p>
                </div>
                <div className="flex flex-col p-4">
                  <Image
                    src="/assets/jane-cooper.png"
                    width={276}
                    height={154}
                    className="mb-4"
                  />
                  <p className="caption-semibold-1">Jane Cooper</p>
                  <p className="caption-light-2">Chief Legal Officer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-6 md:px-10 md:py-8 lg:px-0 lg:py-0">
          <div className="flex flex-col lg:px-16 lg:py-20">
            <h2 className="heading-1 text-center md:mb-[10px] lg:mb-6">
              Our Client
            </h2>
            <div className="flex justify-center lg:mt-10 lg:gap-6">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={40}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                  },
                }}
              >
                {slideData.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      width={slide.width}
                      height={slide.height}
                      sizes="100vw"
                      className="ml-0 max-h-[80px] w-full max-w-[180px] pl-0 pr-0 xl:pl-14 xl:pr-5 2xl:ml-14 2xl:pr-5"
                    />
                  </SwiperSlide>
                ))}
                <SwiperNavButton />
              </Swiper>
            </div>
          </div>
        </section>

        <section className="flex h-fit items-center bg-[#F9F9F9] px-4 py-6 sm:min-h-[520px] md:px-[40px] md:py-[40px] lg:px-0 lg:py-0">
          <div className="container mx-auto">
            <div className="flex flex-col items-center gap-6 lg:flex-row lg:py-[60px]">
              <div className="relative flex w-full flex-col items-center space-y-6 md:w-full lg:w-1/2 lg:items-start">
                <h1 className="heading-2 sm:heading-1 mb-0 mt-0 text-center sm:text-start">
                  Endless Discovey in Your Inbox
                </h1>
                <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                  Join our mailing list to receive insider updates on our latest
                  collections, invites to private events, and other personalized
                  offerings.
                </p>
                <div className="relative w-[90%]">
                  <input
                    type="email"
                    className="placeholder:body-2 h-[48px] w-full rounded-[40px] bg-shade-0 py-3 pl-6 shadow-[0_4px_10px_0px_rgba(0,0,0,0.15)] placeholder:text-[#CBCBCB]"
                    placeholder="Your e-mail"
                  />
                  <button className="absolute right-0 rounded-[40px] bg-primary-500 px-6 py-3 text-white">
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="mb-16 flex w-full justify-center sm:w-1/2 md:mb-0 md:text-left">
                <Image
                  src="/assets/assets-subscribe.png"
                  alt="Hero Image"
                  width={407}
                  height={399}
                  sizes="100vw"
                  className="z-50"
                />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

// export async function getStaticProps() {
//   const contentType = 'landingPage'; // Modify the content type here
//   const propsKey = 'resources'; // Modify the props key here
//   const catchKey = 'error'; // Modify the catch key here
//   const indexToRead = 9; // Modify the index you want to read

//   try {
//     const dynamicData = await fetchContentfulEntries(
//       contentType,
//       propsKey,
//       catchKey,
//       indexToRead,
//     );

//     return {
//       props: dynamicData,
//     };
//   } catch (error) {
//     console.error('Error in getStaticProps:', error);
//     return {
//       props: {
//         [catchKey]: 'An unexpected error occurred.',
//       },
//     };
//   }
// }

export default About;
