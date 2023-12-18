import React from 'react';
import Image from 'next/image';
import { images } from '@/constants';
import Link from 'next/link';

import { Layout } from '@/components';
import { IoIosArrowForward } from "react-icons/io";

import { fetchContentfulEntries } from '@/helper/contenfulHelper';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import SwiperNavButton from '@/components/SwiperNavButton';
import 'swiper/css';
import 'swiper/css/navigation';

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

// const Products = ({ contentfulEntries }) => {
  // const bodyTextValue = contentfulEntries.topBanner.fields.bodyText.content[0].content[0].value || '';
  // const imageUrl = contentfulEntries.topBanner.fields.image.fields.file.url;
  // const fullImageUrl = `https://${imageUrl}`;

const Products = () => {
  return (
    <Layout pageTitle="Products">
      {/* Top Banner */}
      {/* <section className="bg-blur bg-right bg-no-repeat bg-[#F9F9F9]">
        <div className="container mx-auto">
          <div className="flex px-5 py-4 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center mt-24">
              <h1 className="heading-1 mb-6 mt-0">
                {contentfulEntries.topBanner.fields.headline
                  .split(' ')
                  .map((word, index) => (
                    <span
                      key={index}
                      className={word === 'Easy' ? 'text-primary-500' : ''}
                    >
                      {word}{' '}
                    </span>
                  ))}
              </h1>
              <p className="caption-regular-1 mt-0 mb-6">{bodyTextValue}</p>
              <div className="flex justify-center mb-6">
                <button className="text-white bg-primary-500 rounded-[40px] border-0 py-2 px-5 hover:bg-primary-600 caption-regular-1 flex">
                  <Link href={contentfulEntries.topBanner.fields.ctaUrl}>
                    {contentfulEntries.topBanner.fields.ctaText}
                  </Link>
                </button>
                <button className="ml-4 text-primary-500 bg-white border-[1px] border-primary-500 py-2 px-5 hover:bg-grayscale-100 rounded-[40px] caption-regular-1">
                  <Link href={contentfulEntries.topBanner.fields.ctaUrl2}>
                    {contentfulEntries.topBanner.fields.ctaText2}
                  </Link>
                </button>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative">
              <Image
                src={fullImageUrl}
                alt={contentfulEntries.topBanner.fields.image.fields.title}
                width={512}
                height={638}
                sizes="100vw"
                className="w-full h-auto z-50"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Explanation 3*/}
      {/* <section className="min-h-[700px] flex items-center bg-[#F9F9F9]">
        <div className="container mx-auto ">
          {contentfulEntries.topSection.map((content) => (
            <div key={content.fields.internalName} className="flex px-5 py-4 md:flex-row flex-col items-center gap-[21px]">
              <div className="w-1/2 md:w-1/2 md:text-left mb-16 md:mb-0 ">
                <Image
                  src={`https:${content.fields.image.fields.file.url}`}
                  alt="Hero Image"
                  width={644}
                  height={469}
                  sizes="100vw"
                  className="z-50"
                />
              </div>
              <div className="lg:w-1/2 md:w-1/2 w-5/6 relative flex flex-col md:items-start items-center space-y-6">
                <h1
                  key={content.fields.headline}
                  className="heading-1 mt-0 mb-0"
                >
                  {content.fields.headline}
                </h1>
                <p className={`caption-regular-1 ${styles.pre}`}>
                  {content.fields.bodyText.content[0].content[0].value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Testimonials */}
      {/* <div className="w-full bg-[#F9F9F9] pb-[100px] ">
        <div className="container mx-auto bg-white rounded-[20px] h-[367px] pb-[61px] px-[64px] flex items-center">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={40}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {contentfulEntries.pageContent.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-row max-w-[518px]">
                  <Image
                    src={`https:${testimonial.fields.photo[0].fields.file.url}`}
                    alt={testimonial.fields.photo[0].fields.title}
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
                      <h3 className="heading-3 mt-0">
                        {testimonial.fields.name}
                      </h3>
                      <p className="caption-regular-3">
                        {testimonial.fields.position}
                      </p>
                      <p className="caption-light-2">
                        {
                          testimonial.fields.testimonialText.content[0]
                            .content[0].value
                        }
                      </p>
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
            <SwiperNavButton />
          </Swiper>
        </div>
      </div> */}

      {/*Banner Bottom */}
      {/* <div className="w-full bg-[#D0F3FC26] min-h-[366px] space-y-6 pb-[60px]">
        <div className="container mx-auto flex flex-col items-center justify-center text-center space-y-6">
          <h1 className="heading-1">
            {contentfulEntries.extraSection[0].fields.headline}
          </h1>
          <p className={`caption-regular-1 text-center ${styles.pre}`}>
            {
              contentfulEntries.extraSection[0].fields.bodyText.content[0]
                .content[0].value
            }
          </p>
          <div className="flex flex-row gap-4">
            <button className="btn-line-medium">
              <Link href={contentfulEntries.extraSection[0].fields.ctaUrl}>
                {contentfulEntries.extraSection[0].fields.ctaText}
              </Link>
            </button>
            <button className="btn-medium">
              <Link href={contentfulEntries.extraSection[0].fields.ctaUrl2}>
                {contentfulEntries.extraSection[0].fields.ctaText2}
              </Link>
            </button>
          </div>
        </div>
      </div> */}

      {/* Banner */}
      <section className="bg-[#F9F9F9] bg-blur bg-right bg-no-repeat pt-0">
          <div className="container mx-auto">
            <div className="relative flex flex-col items-center sm:static lg:flex-row">
              <div className="mb-16 mt-4 flex flex-col items-center text-center md:mb-0 md:w-full md:items-center md:px-[40px] md:py-[32px] md:text-left lg:mt-24 lg:flex-grow lg:items-start lg:pr-24">
                <h1 className="sm:heading-1 heading-2 mb-6 mt-0 ">
                  <span className="text-primary-500">TestFounder</span> works.
                  Resumes don't.
                </h1>
                <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-0 text-center lg:text-start">
                  Our talent assessments screen and identify the best candidates
                  and make your hiring decisions faster, easier, and bias-free.
                </p>
                <div className="mb-6 flex justify-center">
                  <button className="btn-medium sm:btn-normal">
                    Get Started
                  </button>
                  <button className="btn-line-medium sm:btn-line-normal ml-4">
                   Watch Demo
                  </button>
                </div>
              </div>
              <div className="relative flex w-full justify-center md:w-full lg:w-full lg:max-w-lg">
                <Image
                  src={images.HeroImageProduct}
                  alt="Hero Image"
                  width={512}
                  height={638}
                  sizes="100vw"
                  className=" mt-20 z-10 flex h-auto w-[80%] md:w-[60%] lg:w-full"
                />
              </div>
            </div>
          </div>
      </section>

      {/* Section Click 1 */}
      <section>

      </section>

      {/* Testimonials */}
      <div className="w-full bg-[#F9F9F9] pb-[44px] sm:pb-[100px]">
          <div className="container mx-auto flex h-[367px] items-center rounded-[20px] bg-white px-[14px] py-[12px] md:px-[55px] md:py-[32px] lg:px-[82px] lg:py-[32px]">
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
                  <div className="flex max-w-[518px] flex-row">
                    <Image
                      src={testimonial.src}
                      alt="Testimonial Image"
                      width={170}
                      height={303}
                      sizes="100vw"
                      className="z-50 object-cover"
                    />
                    <div className="flex flex-col justify-between pl-3">
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
        <div className="min-h-[366px] w-full space-y-6 bg-[#D0F3FC26] pb-[60px]">
          <div className="container mx-auto flex flex-col items-center justify-center space-y-6 px-4 py-6 text-center sm:px-16 sm:py-[60px]">
            <h1 className="heading-2 sm:heading-1">
            Reinvent your hiring process now.
            </h1>
            <p className="caption-regular-3 sm:caption-regular-1 text-center">
            Start using TestFounder today, or talk to us about your hiring challenges to discover how we can help.
            </p>
            <div className="flex flex-row gap-4">
              <button className="btn-line-medium">Free Demo</button>
              <button className="btn-medium ">Get Started <span className='pl-2'><IoIosArrowForward /></span></button>
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
