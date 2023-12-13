import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

import { Layout } from '../components';
import SwiperNavButton from '../components/SwiperNavButton';
// import { createClient } from 'contentful';
import { fetchContentfulEntries } from '@/helper/contenfulHelper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';

const slideData = [
  { src: '/assets/abbot.svg', alt: 'Abbot', width: 180, height: 80 },
  { src: '/assets/barila.svg', alt: 'Barila', width: 180, height: 80 },
  { src: '/assets/berkshire.svg', alt: 'Barila', width: 180, height: 80 },
  { src: '/assets/bmw.svg', alt: 'Barila', width: 180, height: 80 },
  { src: '/assets/british-airways.svg', alt: 'Barila', width: 180, height: 80 },
  { src: '/assets/dolce-gabana.svg', alt: 'Barila', width: 180, height: 80 },
  { src: '/assets/everlast.svg', alt: 'Barila', width: 180, height: 80 },
  { src: '/assets/ferrero.svg', alt: 'Barila', width: 180, height: 80 },
  { src: '/assets/forbes.svg', alt: 'Barila', width: 180, height: 80 },
  { src: '/assets/foxnews.svg', alt: 'Fox News', width: 180, height: 80 },
];

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

export default function Home({ homepages }) {
  return (
    <>
      <Head>
        <meta name="description" content="Test Founder" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <meta property="og:title" content="Test Founder" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>

      <Layout pageTitle="Homepage">
        {/* Banner */}
        <section className="bg-blur bg-right bg-no-repeat bg-[#F9F9F9]">
          <div className="container mx-auto">
            <div className="flex px-5 py-4 md:flex-row flex-col items-center">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center mt-24">
                <h1 className="heading-1 mb-6 mt-0">
                  <span className="text-primary-500">TestGorilla</span> works.
                  Resumes don't.
                </h1>
                <p className="caption-regular-1 mt-0 mb-6">
                  Our talent assessments screen and identify the best candidates
                  and make your hiring decisions faster, easier, and bias-free.
                </p>
                <div className="flex justify-center mb-6">
                  <button className="btn-normal">Try for free!</button>
                  <button className="ml-4 btn-line-normal">
                    Talk to sales
                  </button>
                </div>
                <div className="flex justify-center">
                  <div className="flex space-x-4">
                    <Image
                      src="/assets/badge-top-100.svg"
                      alt="Hero Image"
                      width={80}
                      height={90}
                      sizes="100vw"
                      className="w-fit h-auto"
                    />
                    <Image
                      src="/assets/badge-leader.svg"
                      alt="Hero Image"
                      width={80}
                      height={90}
                      sizes="100vw"
                      className="w-fit h-auto"
                    />
                  </div>
                  <p className="caption-regular-1 ml-10 my-0">
                    Rated #1 in talent assessments Top 100 fastest-growing
                    software globally
                  </p>
                </div>
                <div className="mt-[68px]">
                  <p className="caption-regular-1 mb-0">
                    Join the{' '}
                    <span className="text-primary-500 caption-bold-1">
                      10,000+
                    </span>{' '}
                    companies replacing resumes with TestFounder
                  </p>
                </div>
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative">
                <Image
                  src="/assets/hero-image.png"
                  alt="Hero Image"
                  width={512}
                  height={638}
                  sizes="100vw"
                  className="w-full h-auto z-50"
                />
                <Image
                  src="/assets/card-customer.png"
                  alt="Hero Image"
                  width={325}
                  height={151}
                  sizes="100vw"
                  className="w-full h-auto max-w-[325px] max-h-[151px] absolute -left-12 bottom-24"
                />
              </div>
            </div>
            <div className="mt-[19px] pr-16 pl-3 ">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={40}
                slidesPerView={5}
                autoplay={{
                  delay: 500,
                  disableOnInteraction: false,
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
                      className="w-full max-w-[180px] max-h-[80px] 2xl:ml-14 2xl:pr-5 xl:pl-14 xl:pr-5"
                    />
                  </SwiperSlide>
                ))}
                <SwiperNavButton />
              </Swiper>
            </div>
          </div>
        </section>
        {/* Explanation */}
        <section className="min-h-[700px] bg-contain flex items-center bg-[#F9F9F9] z-50">
          <div className="container mx-auto ">
            <div className="flex px-5 py-4 md:flex-row flex-col items-center gap-[50px]">
              <div className="lg:flex-grow md:w-1/2 md:text-left mb-16 md:mb-0 z-50">
                <Image
                  src="/assets/explaination-banner.png"
                  alt="Hero Image"
                  width={616}
                  height={404}
                  sizes="100vw"
                />
              </div>
              <div className="lg:w-full md:w-1/2 w-5/6 relative flex flex-col md:items-start items-center space-y-6">
                <h1 className="heading-1 mt-0 mb-0">
                  A barometer for job success.
                </h1>
                <p className="caption-regular-1">
                  Use our library of 401 scientifically validated tests.
                </p>
                <p className="caption-regular-1">
                  Test candidates for job-specific skills like coding or digital
                  marketing, as well as more general skills like critical
                  thinking.
                </p>
                <p className="caption-regular-1">
                  Our unique personality and value tests allow you to get to
                  know your applicants as real people – not just pieces of
                  paper.
                </p>
                <button className="btn-line-normal">See Tests</button>
              </div>
            </div>
          </div>
          <Image
            src="/assets/bg_blur_2.png"
            alt="Hero Image"
            width={730}
            height={565}
            sizes="100vw"
            className="absolute left-[10%] blur-xl"
          />
        </section>
        {/* Explanation 2 */}
        <section className="min-h-[700px] flex items-center bg-[#F9F9F9]">
          <div className="container mx-auto">
            <div className="flex px-5 py-4 md:flex-row flex-col items-center gap-[41px]">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="heading-1 mb-6 mt-0">
                  Quality time for quality candidates.
                </h1>
                <p className="caption-regular-1 mt-0 mb-6">
                  Boom. No more time wasted on screening resumes and
                  pre-qualifying interviews.
                </p>
                <p className="caption-regular-1 mt-0 mb-6">
                  We automatically grade and rank your candidates. In the time
                  it takes to savor a cup of coffee, you can watch video
                  responses to custom questions.
                </p>
                <p className="caption-regular-1 mt-0 mb-6">
                  Our screening process automation lets you focus on the best
                  people for the job.
                </p>
              </div>
              <div className="lg:w-1/2 md:w-1/2 w-5/6 flex justify-start">
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
        <section className="min-h-[700px] flex items-center bg-[#F9F9F9]">
          <div className="container mx-auto ">
            <div className="flex px-5 py-4 md:flex-row flex-col items-center gap-[21px]">
              <div className="w-1/2 md:w-1/2 md:text-left mb-16 md:mb-0 ">
                <Image
                  src="/assets/man-percent.png"
                  alt="Hero Image"
                  width={644}
                  height={469}
                  sizes="100vw"
                  className="z-50"
                />
              </div>
              <div className="lg:w-1/2 md:w-1/2 w-5/6 relative flex flex-col md:items-start items-center space-y-6">
                <h1 className="heading-1 mt-0 mb-0">
                  Say goodbye to unconscious bias.
                </h1>
                <p className="caption-regular-1">
                  Diverse teams perform better.
                </p>
                <p className="caption-regular-1">
                  With TestFounder, you give all applicants an equal, unbiased
                  opportunity to showcase themselves.
                </p>
                <p className="caption-regular-1">
                  This ensures you get the best talent from all walks of life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Explanation 4 */}
        <section className="min-h-[700px] flex items-center bg-[#F9F9F9] ">
          <div className="container mx-auto">
            <div className="flex px-5 py-4 md:flex-row flex-col items-center gap-[41px]">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="heading-1 mb-6 mt-0">
                  Offer a positive candidate experience.
                </h1>
                <p className="caption-regular-1 mt-0 mb-6">
                  Good candidates appreciate good screening tests.
                </p>
                <p className="caption-regular-1 mt-0 mb-6">
                  Our professional, well-designed tests serve as an extension of
                  your brand and personality.
                </p>
                <p className="caption-regular-1 mt-0 mb-6">
                  Your applicants get the motivation and engagement they need to
                  truly shine.
                </p>
              </div>
              <div className="lg:w-1/2 md:w-1/2 w-5/6 flex justify-center">
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
            className="z-0 absolute right-[10%] blur-xl"
          />
        </section>

        {/* Explanation 5 */}
        <section className="min-h-[700px] flex items-center bg-[#F9F9F9]">
          <div className="container mx-auto ">
            <div className="flex px-5 py-4 md:flex-row flex-col items-center gap-[21px]">
              <div className="w-1/2 md:w-1/2 md:text-left mb-16 md:mb-0 z-50">
                <Image
                  src="/assets/people-conection.png"
                  alt="Hero Image"
                  width={616}
                  height={344}
                  sizes="100vw"
                  className="z-50"
                />
              </div>
              <div className="lg:w-1/2 md:w-1/2 w-5/6 relative flex flex-col md:items-start items-center space-y-6">
                <h1 className="heading-1 mt-0 mb-0">
                  Champion a data-driven HR culture.
                </h1>
                <p className="caption-regular-1">
                  We rank your applicants according to test scores certified by
                  our experts. This means your HR team can rely on good data to
                  make important decisions – and not just their gut feeling.
                </p>
                <p className="caption-regular-1">
                  With TestGorilla, you’ll lead the shift to a more professional
                  and data-focused HR culture in your company.
                </p>
              </div>
            </div>
          </div>
          <Image
            src="/assets/bg_blur_4.png"
            alt="Hero Image"
            width={730}
            height={565}
            sizes="100vw"
            className="absolute left-[10%] blur-xl"
          />
        </section>

        {/* Testimonials */}

        <div className="w-full bg-[#F9F9F9] pb-[100px] ">
          <div className="container mx-auto bg-white rounded-[20px] h-[367px] pb-[61px] px-[64px] flex items-center">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={40}
              slidesPerView={2}
              // autoplay={{
              //   delay: 500,
              //   disableOnInteraction: false,
              // }}
            >
              {testimonies.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-row max-w-[518px]">
                    <Image
                      src={testimonial.src}
                      alt="Testimonial Image"
                      width={170}
                      height={303}
                      sizes="100vw"
                      className="z-50"
                    />
                    <div className="pl-3 flex flex-col justify-between">
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
                        <p className="caption-light-2">{testimonial.quote}</p>
                      </div>
                      <div className="flex justify-between">
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
                </SwiperSlide>
              ))}
              {/* <SwiperNavButton /> */}
            </Swiper>
          </div>
        </div>

        {/* Explanation 7 */}
        <div className="w-full bg-[#D0F3FC26] min-h-[366px] space-y-6 pb-[60px]">
          <div className="container mx-auto flex flex-col items-center justify-center text-center space-y-6">
            <h1 className="heading-1">
              Top talent is priceless. We make finding it affordable.
            </h1>
            <p className="caption-regular-1 text-center">
              A time-consuming screening process costs you a lot. Painful
              mis-hires cost you much, much more. With TestGorilla, you avoid
              all of this and see a huge return on investment every single year.
            </p>
            <p className="caption-regular-1 text-center">
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
}

export async function getStaticProps() {
  const contentType = 'landingPage'; // Modify the content type here
  const propsKey = 'homepages'; // Modify the props key here
  const catchKey = 'error'; // Modify the catch key here
  const indexToRead = 11; // Modify the index you want to read

  try {
    const dynamicData = await fetchContentfulEntries(
      contentType,
      propsKey,
      catchKey,
      indexToRead,
    );

    return {
      props: dynamicData,
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return {
      props: {
        [catchKey]: 'An unexpected error occurred.',
      },
    };
  }
}
