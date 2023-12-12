import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

import { Layout } from '../components';
import SwiperNavButton from '../components/SwiperNavButton';
import { createClient } from 'contentful';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';

export async function getStaticProps() {
  try {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });

    const res = await client.getEntries({ content_type: 'homepage' });

    return {
      props: {
        homepages: res.items,
      },
    };
  } catch (error) {
    console.error('Error fetching Contentful entries:', error);
    return {
      props: {
        homepages: [],
      },
    };
  }
}

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
        <section className="bg-blur bg-right bg-no-repeat">
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
                  <button className="text-white bg-primary-500 rounded-[40px] border-0 py-2 px-5 hover:bg-primary-600 caption-regular-1 flex">
                    Try for free!
                  </button>
                  <button className="ml-4 text-primary-500 bg-white border-[1px] border-primary-500 py-2 px-5 hover:bg-grayscale-100 rounded-[40px] caption-regular-1">
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
                  delay: 2500,
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
        <section className="bg-blur-2 bg-left bg-no-repeat min-h-[700px] bg-contain flex items-center">
          <div className="container mx-auto ">
            <div className="flex px-5 py-4 md:flex-row flex-col items-center gap-[50px]">
              <div className="lg:flex-grow md:w-1/2 md:text-left mb-16 md:mb-0 ">
                <Image
                  src="/assets/explaination-banner.png"
                  alt="Hero Image"
                  width={616}
                  height={404}
                  sizes="100vw"
                  className="z-50"
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
                <button className="py-2 px-5 w-fit h-fit bg-transparent border-shade-100 border-[1px] rounded-[40px] text-shade-100 caption-semibold-1 text-center">
                  See Tests
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Explanation 2 */}
        <section className="min-h-[700px] flex items-center">
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
        <section className="min-h-[700px] bg-contain flex items-center">
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
        <section className="min-h-[700px] flex items-center bg-blur-3 bg-right bg-no-repeat">
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
        </section>

        {/* Explanation 5 */}
        <section className="min-h-[700px] flex items-center bg-blur-3 bg-left bg-no-repeat bg-contain">
          <div className="container mx-auto ">
            <div className="flex px-5 py-4 md:flex-row flex-col items-center gap-[21px]">
              <div className="w-1/2 md:w-1/2 md:text-left mb-16 md:mb-0 ">
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
        </section>

        {/* Testimonials */}
        <div className="container my-24 mx-auto md:px-6">
          <section className="mb-32 text-center">
            <h2 className="mb-12 pb-4 text-center text-3xl font-bold">
              Testimonials
            </h2>

            <div className="grid gap-6 md:grid-cols-3 xl:gap-x-12">
              <div className="mb-6 lg:mb-0">
                <div className="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div className="flex">
                    <div
                      className="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      <img
                        src="https://mdbcdn.b-cdn.net/img/new/avatars/8.jpg"
                        className="w-full"
                      />
                      <a href="#!">
                        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h5 className="mb-2 text-lg font-bold">John Doe</h5>
                    <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                      Web Developer
                    </h6>
                    <ul className="mb-6 flex justify-center">
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="currentColor"
                            d="m480 757 157 95-42-178 138-120-182-16-71-168v387ZM233 976l65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                    </ul>
                    <p>
                      Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                      placerat vulputate. Ut vulputate est non quam dignissim
                      elementum. Donec a ullamcorper diam.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-6 lg:mb-0">
                <div className="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div className="flex">
                    <div
                      className="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      <img
                        src="https://mdbcdn.b-cdn.net/img/new/avatars/6.jpg"
                        className="w-full"
                      />
                      <a href="#!">
                        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h5 className="mb-2 text-lg font-bold">Halley Frank</h5>
                    <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                      Marketing Specialist
                    </h6>
                    <ul className="mb-6 flex justify-center">
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="currentColor"
                            d="m323 851 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178Zm-90 125 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-355Z"
                          />
                        </svg>
                      </li>
                    </ul>
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium accusamus contestatur
                      voluptatum deleniti atque corrupti.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-0">
                <div className="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div className="flex">
                    <div
                      className="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      <img
                        src="https://mdbcdn.b-cdn.net/img/new/avatars/18.jpg"
                        className="w-full"
                      />
                      <a href="#!">
                        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h5 className="mb-2 text-lg font-bold">Lisa Trey</h5>
                    <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                      Public Relations
                    </h6>
                    <ul className="mb-6 flex justify-center">
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                    </ul>
                    <p>
                      Enim ad minima veniam, quis nostrum exercitationem ullam
                      corporis suscipit laboriosam, nisi ut aliquid commodi quis
                      nostrum minima.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
