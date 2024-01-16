import Image from 'next/image';
import Link from 'next/link';

import { Layout } from '../components';
import { fetchContentfulEntries } from '@/helper';

import SwiperNavButton from '../components/SwiperNavButton';
import SwiperTestimonialButton from '../components/SwiperTestimonialButton';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';

import styles from '../styles/Home.module.scss'

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

// export default function Home({ homepages }) {
export default function Home ({contentfulEntries}) {
  const bodyTextValue = contentfulEntries.topBanner.fields.bodyText.content[0].content[0].value || '';
  const imageUrl = contentfulEntries.topBanner.fields.image.fields.file.url;
  const fullImageUrl = `https:${imageUrl}`

  console.log(contentfulEntries)

  return (
    <>
      <Layout pageTitle="Homepage">
        {/* Banner */}
        <section className="bg-[#F9F9F9] bg-blur bg-right bg-no-repeat pt-0">
          <div className="container mx-auto">
            <div className="relative flex flex-col items-center sm:static lg:flex-row">
              <div className="mb-0 mt-20 flex flex-col items-center text-center md:mb-0 md:w-full md:items-center md:px-[40px] md:py-[32px] md:text-left lg:mt-24 lg:flex-grow lg:items-start lg:pr-24">
                <h1 className="sm:heading-1 heading-2 mb-6 mt-0 text-center lg:text-start">
                {contentfulEntries.topBanner.fields.headline
                  .split(' ')
                  .map((word, index) => (
                    <span
                      key={index}
                      className={word === 'TestFounder' ? 'text-primary-500' : ''}
                    >
                      {word}{' '}
                    </span>
                  ))}
                </h1>
                <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-0 text-center lg:text-start">
                { bodyTextValue}
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
                <div className="flex flex-col justify-center gap-[39px] sm:flex-row">
                  <div className="flex flex-shrink-0 justify-center space-x-4 md:justify-start">
                    <Image
                      src="/assets/badge-top-100.svg"
                      alt="Hero Image"
                      width={80}
                      height={90}
                      sizes="100vw"
                      className="h-auto w-fit"
                    />
                    <Image
                      src="/assets/badge-leader.svg"
                      alt="Hero Image"
                      width={80}
                      height={90}
                      sizes="100vw"
                      className="h-auto w-fit"
                    />
                  </div>
                  <p className="caption-regular-1 my-0 ml-0 ">
                    Rated #1 in talent assessments Top 100 fastest-growing
                    software globally
                  </p>
                </div>
                <div className="absolute -bottom-14 mt-[68px] px-4 md:-bottom-32 lg:static lg:block lg:px-0">
                  <p className="caption-regular-1 mb-0">
                    Join the{' '}
                    <span className="caption-bold-1 text-primary-500">
                      10,000+
                    </span>{' '}
                    companies replacing resumes with TestFounder
                  </p>
                </div>
              </div>
              <div className="flex w-full justify-center md:w-full lg:w-full lg:max-w-lg">
                <Image
                  src={fullImageUrl}
                  alt="Hero Image"
                  width={559}
                  height={638}
                  sizes="100vw"
                  className=" z-10 mt-20 flex h-auto w-[80%] md:w-[60%] lg:w-full img"
                />
              </div>
            </div>
            <div className="mt-20 pl-3 pr-3 sm:pr-16 md:mt-20 lg:mt-[19px]">
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

        {/* Explanation  */}
        <section className="z-50 flex h-fit items-center bg-[#F9F9F9] px-4 py-6 sm:min-h-[520px] md:px-[40px] md:py-[40px] lg:px-0 lg:py-0">
        <div className="container mx-auto ">
          {contentfulEntries.topSection.map((explanation, index) => (
            <div key={index} className={`flex flex-col items-center first:mt-24 lg:last:mb-20 lg:mb-8 mb-4 gap-[50px] justify-between lg:${explanation.fields.containerLayout ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className="z-50 mb-1 sm:mb-16 md:mb-0 md:w-full md:text-left lg:flex-grow">
                <Image
                  src={`https://${explanation.fields.image.fields.file.url}`}
                  alt="Hero Image"
                  width={616}
                  height={404}
                  className={styles.img}
                  sizes="100vw"
                />
              </div>
              <div className="relative z-50 flex w-full flex-col items-center space-y-6 md:w-full lg:w-full lg:items-start">
                <h1 className="heading-2 sm:heading-1 mb-0 mt-0 text-center lg:text-start">
                 {explanation.fields.headline}
                </h1>

                {explanation.fields.bodyText.content.map((content, index) => (
                  
                  <p key={index} className="caption-regular-3 sm:caption-regular-1 text-center lg:text-start">
                    {content.content[0].value}
                  </p>
                ))}

                <Link href={explanation.fields.ctaLink && explanation.fields.ctaText ? explanation.fields.ctaLink : "#"}>
                  {explanation.fields.ctaLink && explanation.fields.ctaText && (
                    <button className="btn-line-medium sm:btn-line-normal">
                      {explanation.fields.ctaText}
                    </button>
                  )}
                </Link>
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
          ))}
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
              {contentfulEntries.pageContent.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="mt-10 flex w-full flex-col px-[14px] py-[12px] sm:mt-0 md:h-[367px] md:max-w-[85%] md:flex-row md:py-[32px] md:pl-[0px] lg:max-w-[85%] lg:py-[32px] lg:pl-[82px]">
                    <div className="flex flex-row">
                      <Image
                        src={`https:${testimonial.fields.photo[0].fields.file.url}`}
                        alt={testimonial.fields.photo[0].fields.title}
                        width={170}
                        height={303}
                        sizes="100vw"
                        className="z-50 w-[40%] rounded-[10px] object-cover lg:w-auto"
                      />
                      <div className="flex flex-col justify-center pl-3 md:justify-between ">
                        <div className="flex flex-col">
                          <Image
                            src="/assets/quote.svg"
                            alt="Quote Image"
                            width={42}
                            height={42}
                            sizes="100vw"
                            className="z-50"
                          />
                          <h3 className="heading-3 mt-0">{testimonial.fields.name}</h3>
                          <p className="caption-regular-3">
                          {testimonial.fields.position}
                          </p>
                          <p className="caption-light-2 hidden md:block">
                            “{
                            testimonial.fields.testimonialText.content[0]
                              .content[0].value
                          }”
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
                            {new Date(testimonial.sys.updatedAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="caption-light-2 pt-[20px] md:hidden">
                    “{
                            testimonial.fields.testimonialText.content[0]
                              .content[0].value
                          }
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
                        {new Date(testimonial.sys.updatedAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <SwiperTestimonialButton />
            </Swiper>
          </div>
        </div>

        {/* Banner Bottom */}
        <div className="min-h-[366px] w-full space-y-6 bg-[#D0F3FC26]">
        {contentfulEntries.extraSection.map((content, index) => (
          <div key={index} className="container mx-auto flex flex-col items-center justify-center space-y-6 px-4 py-6 text-center md:px-[40px] md:py-[32px] lg:px-[62px] lg:py-[60px]">
            <h1 className="heading-2 sm:heading-1">
              {content.fields.headline}
            </h1>
            {content.fields.bodyText.content.map((content, index) => (
              <p key={index} className="caption-regular-3 sm:caption-regular-1 text-center lg:text-center">
                {content.content[0].value}
              </p>
            ))}
            <div className="flex flex-row gap-4">
              <Link href={content.fields.ctaUrl}>
                <button className="btn-line-normal">{content.fields.ctaText}</button>
              </Link>
              <Link href={content.fields.ctaUrl2}>
                <button className="btn-line-normal">{content.fields.ctaText2}</button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const contentType = 'landingPage'; // Modify content type here
  const { items } = await fetchContentfulEntries(contentType);

  const entries = items.find(
    (entry) => entry.fields.internalName === 'Homepage',
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
