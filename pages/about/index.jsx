import { Layout } from '@/components';
import React from 'react';
import Image from 'next/image';

import SwiperNavButton from '../../components/SwiperNavButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import { fetchContentfulEntries } from '@/lib/contentful/client';

import { FiAlertTriangle } from 'react-icons/fi';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import axios from 'axios';

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

const About = ({ contentfulEntries }) => {
  const bodyTextValue =
    contentfulEntries.topBanner.fields.bodyText.content[0].content[0].value ||
    '';

  const schema = yup
    .object({
      email: yup.string().email().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:3000/api/auth', data);
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <Layout pageTitle="About">
        {/* Top Banner */}
        <section className="bg-[#F9F9F9] bg-blur bg-right bg-no-repeat lg:py-[100px]">
          <div className="container mx-auto mt-20">
            <div className="relative flex flex-col items-start px-4 py-6 sm:static md:px-10 md:py-8 lg:flex-row lg:px-0 lg:py-0">
              <div className="mb-0 flex flex-col items-center text-center md:mb-0 md:w-full md:items-center md:text-left lg:w-1/2 ">
                <div className="flex h-[424px] flex-col justify-center lg:justify-between">
                  <div className="flex flex-col">
                    <h1 className="sm:heading-1 heading-2 mb-6 mt-0 text-center lg:text-start">
                      {contentfulEntries.topBanner.fields.headline
                        .split(' ')
                        .map((word, index) => (
                          <span
                            key={index}
                            className={
                              word === 'TestFounder' ? 'text-primary-500' : ''
                            }
                          >
                            {word}{' '}
                          </span>
                        ))}
                    </h1>
                    <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-0 text-center lg:text-start">
                      {bodyTextValue}
                    </p>
                  </div>

                  <div className="flex w-full gap-[10.64px] rounded-[10px] bg-shade-0 p-4 shadow-[0_4px_10px_0px_rgba(0,0,0,0.15)]">
                    {contentfulEntries.pageContent
                      .slice(0, 4)
                      .map((data, index) => (
                        <div
                          key={index}
                          className="flex flex-1 flex-col items-center gap-3"
                        >
                          <Image
                            src={`https:${data.fields.image.fields.file.url}`}
                            width={48}
                            height={48}
                            alt="About Us Icon"
                          />
                          <p className="caption-bold-1">
                            {data.fields.headline}
                          </p>
                          <p className="caption-regular-3">
                            {data.fields.bodyText.content[0].content[0].value}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              <div className="flex w-full justify-center md:w-full lg:w-1/2">
                <Image
                  src={`https:${contentfulEntries.topBanner.fields.image.fields.file.url}`}
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

        {/* Explanation 1 */}
        <section className="flex h-fit items-center bg-[#F9F9F9] px-4 py-6 sm:min-h-[520px] md:px-[40px] md:py-[40px] lg:px-0 lg:py-0">
          <div className="container mx-auto ">
            <div className="flex w-full flex-col-reverse items-center justify-between gap-6 lg:flex-row lg:py-[60px]">
              <div className="mb-16 w-full sm:w-1/2 md:mb-0 md:text-left ">
                <Image
                  src={`https:${contentfulEntries.topSection[0].fields.image.fields.file.url}`}
                  alt="Hero Image"
                  width={636}
                  height={476}
                  className="img z-50"
                />
              </div>
              <div className="relative flex w-full flex-col items-center space-y-6 md:w-full lg:w-1/2 lg:items-start">
                <h1 className="heading-2 sm:heading-1 mb-0 mt-0 text-center lg:text-start">
                  {contentfulEntries.topSection[0].fields.headline}
                </h1>
                <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                  {
                    contentfulEntries.topSection[0].fields.bodyText.content[0]
                      .content[0].value
                  }
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The PIllar */}
        <section className="bg-[#F9F9F9] px-4 py-6 md:px-10 md:py-8 lg:px-0 lg:py-0">
          <div className="flex flex-col lg:py-20">
            <h2 className="md:heading-1 heading-2 text-center lg:mb-6">
              {contentfulEntries.topSection[1].fields.headline}
            </h2>
            <div className="flex flex-col justify-center lg:mt-10 lg:flex-row lg:gap-6">
              {contentfulEntries.pageContent.slice(4, 7).map((data, index) => (
                <div
                  key={index}
                  className="flex max-w-full flex-col items-center lg:max-w-[421px]"
                >
                  <Image
                    src={`https:${data.fields.image.fields.file.url}`}
                    alt="Hero Image"
                    width={60}
                    height={60}
                    className="mb-4"
                  />
                  <div className="caption-semibold-2 text-center font-bold text-primary-500">
                    {data.fields.headline}
                  </div>
                  <p className="caption-regular-3 text-center">
                    {data.fields.bodyText.content[0].content[0].value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Partner */}
        <section className=" bg-[#F9F9F9] px-4 py-6 md:px-10 md:py-8 lg:px-0 lg:py-0">
          <div className="flex flex-col lg:px-16 lg:py-20">
            <h2 className="heading-1 text-center md:mb-[10px] lg:mb-6">
              Our Partner
            </h2>
            <div className=" container mx-auto mt-20 w-full pl-3 pr-3 sm:pr-0 md:mt-20 lg:mt-[19px]">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={40}
                loop={true}
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
                    slidesPerView: 4,
                    spaceBetween: 0,
                  },
                  1440: {
                    slidesPerView: 5,
                    spaceBetween: 0,
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
                      className="ml-0 max-h-[80px] w-full pl-0 pr-0"
                    />
                  </SwiperSlide>
                ))}
                <SwiperNavButton />
              </Swiper>
            </div>
          </div>
        </section>

        {/* Our Leaders */}
        <section className="h-full w-full bg-grayscale-200">
          <div className="container mx-auto px-4 py-6 md:px-10 md:py-8 lg:px-0 lg:py-0">
            <div className="flex flex-col lg:py-20">
              <h2 className="heading-1 text-center lg:mb-6">
                {contentfulEntries.topSection[2].fields.headline}
              </h2>
              <div className="grid grid-cols-1 justify-items-center gap-[26px] md:grid-cols-2 lg:grid-cols-4">
                {contentfulEntries.pageContent
                  .slice(7, 15)
                  .map((data, index) => (
                    <div key={index} className="flex flex-col p-4">
                      <Image
                        src={`https:${data.fields.image.fields.file.url}`}
                        width={276}
                        height={154}
                        className="mb-4"
                        alt="Leaders Image"
                      />
                      <p className="caption-semibold-1">
                        {data.fields.headline}
                      </p>
                      <p className="caption-light-2">
                        {data.fields.bodyText.content[0].content[0].value}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our CLient */}
        <section className=" bg-[#F9F9F9] px-4 py-6 md:px-10 md:py-8 lg:px-0 lg:py-0">
          <div className="flex flex-col lg:px-16 lg:py-20">
            <h2 className="heading-1 text-center md:mb-[10px] lg:mb-6">
              Our Client
            </h2>
            <div className=" container mx-auto mt-20 w-full pl-3 pr-3 sm:pr-0 md:mt-20 lg:mt-[19px]">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={40}
                loop={true}
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
                    slidesPerView: 4,
                    spaceBetween: 0,
                  },
                  1440: {
                    slidesPerView: 5,
                    spaceBetween: 0,
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
                      className="ml-0 max-h-[80px] w-full pl-0 pr-0"
                    />
                  </SwiperSlide>
                ))}
                <SwiperNavButton />
              </Swiper>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="flex h-fit items-center bg-[#F9F9F9] px-4 py-6 sm:min-h-[520px] md:px-[40px] md:py-[40px] lg:px-0 lg:py-0">
          <div className="container mx-auto">
            <div className="flex flex-col items-center gap-6 lg:flex-row lg:py-[60px]">
              <div className="relative flex w-full flex-col items-center space-y-6 md:w-full lg:w-1/2 lg:items-start">
                <h1 className="heading-2 sm:heading-1 mb-0 mt-0 text-center sm:text-start">
                  {contentfulEntries.topSection[3].fields.headline}
                </h1>
                <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                  {
                    contentfulEntries.topSection[3].fields.bodyText.content[0]
                      .content[0].value
                  }
                </p>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="relative w-[90%]"
                >
                  <input
                    type="email"
                    className={`placeholder:body-2 h-[48px] w-full rounded-[40px] bg-shade-0 py-3 pl-6 shadow-[0_4px_10px_0px_rgba(0,0,0,0.15)] placeholder:text-[#CBCBCB]`}
                    placeholder="Your e-mail"
                    {...register('email')}
                  />
                  {errors.email && (
                    <div className="mt-2 flex items-center gap-[7px]">
                      <FiAlertTriangle className="text-error-500" />
                      <span className="caption-regular-4 text-error-500">
                        {errors.email?.message &&
                          errors.email.message.replace(/^\w/, (c) =>
                            c.toUpperCase(),
                          )}
                      </span>
                    </div>
                  )}
                  <button className="absolute right-0 rounded-[40px] bg-primary-500 px-6 py-3 text-white">
                    Subscribe
                  </button>
                </form>
              </div>
              <div className="mb-16 flex w-full justify-center sm:w-1/2 md:mb-0 md:text-left">
                <Image
                  src="/assets/assets-subscribe.png"
                  alt={`https:${contentfulEntries.topSection[3].fields.image.fields.file.url}`}
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

export async function getStaticProps() {
  const contentfulEntries = await fetchContentfulEntries('landingPage');

  // Check if contentfulEntries is an array before filtering
  const filteredEntries = Array.isArray(contentfulEntries.items)
    ? contentfulEntries.items.find((entry) => {
        console.log(entry.fields.internalName);
        return entry.fields.internalName === 'About Us';
      }).fields // Return only the .fields property
    : {};

  return {
    props: {
      contentfulEntries: filteredEntries,
    },
  };
}

export default About;
