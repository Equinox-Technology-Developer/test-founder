import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Layout } from '@/components';
import { fetchContentfulEntries } from '@/lib/contentful/client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import SwiperTestimonialButton from '@/components/SwiperTestimonialButton';

import { FiAlertTriangle } from 'react-icons/fi';
import { BiSolidQuoteAltLeft } from 'react-icons/bi';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import axios from 'axios';

export default function BookDemo({ contentfulEntries }) {
  const schema = yup
    .object({
      email: yup.string().email().required(),
      fullName: yup.string().required('Full name is required.'),
      jobFunction: yup.string().required('Job function is required.'),
      companyName: yup.string().required('Company name is required.'),
      fte: yup
        .string()
        .oneOf(
          ['1-15', '16-30', '31-50', '51-100'],
          'Please complete this required field.',
        )
        .required('FTE is required.'),
      hireNextYear: yup
        .string()
        .oneOf(
          ['1-15', '16-30', '31-50', '51-100'],
          'Please complete this required field.',
        )
        .required('Hire next year is required.'),
      ats: yup.string().nullable(),
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
      const response = await axios.post(
        'http://localhost:3000/api/auth/login',
        data,
      );
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <Layout pageTitle="Book a Demo">
        <section className="bg-[#F9F9F9] bg-blur bg-right bg-no-repeat pt-0">
          <div className="container mx-auto md:pb-[32px] lg:pb-20">
            {' '}
            <div className="flex w-full flex-col items-center justify-between lg:flex-row lg:px-0 lg:pb-[80px] lg:pt-[80px]">
              <div className="flex w-full max-w-[646px] flex-col items-start px-4 text-left">
                <h1 className="sm:heading-1 heading-2 mb-6 mt-[70px] w-full text-center md:mt-[100px] lg:mt-0 lg:text-start">
                  {contentfulEntries.topBanner.fields.headline}
                </h1>
                <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-0 text-center lg:text-start">
                  {
                    contentfulEntries.topBanner.fields.bodyText.content[0]
                      .content[0].value
                  }
                </p>
                <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-0 text-center lg:text-start">
                  <span className="font-bold">
                    {
                      contentfulEntries.topBanner.fields.bodyText.content[1]
                        .content[0].value
                    }{' '}
                  </span>{' '}
                  {
                    contentfulEntries.topBanner.fields.bodyText.content[1]
                      .content[1].value
                  }
                </p>
                <div className="mb-6 flex flex-row flex-wrap items-center justify-center gap-4 md:mb-[60px] lg:mb-0 lg:flex-nowrap lg:justify-start">
                  {contentfulEntries.pageContent
                    .slice(0, 5)
                    .map((logo, index) => (
                      <Image
                        key={index}
                        src={`https:${logo.fields.image.fields.file.url}`}
                        width="119"
                        height="80"
                        className="h-fit w-fit"
                        alt="logo-company"
                      />
                    ))}
                </div>
              </div>
              <div className="flex h-auto w-full justify-center px-4 md:w-full lg:min-h-[403px] lg:w-full lg:min-w-[609px] lg:max-w-lg lg:px-0">
                <form
                  className="h-full w-full rounded-[20px] bg-shade-0 px-[42px] py-[32px] shadow-[0_4px_10px_0px_rgba(0,0,0,0.15)] md:w-[580px]"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="flex flex-col gap-6 ">
                    <p className="caption-regular-2 flex w-full justify-end gap-2">
                      Not you? <span>Click here to reset</span>
                    </p>
                    <div className="flex flex-col">
                      <label className="caption-regular-4 text-[#CBCBCB]">
                        Work email address*
                      </label>
                      <input
                        type="email"
                        className="h-[48px] rounded-[5px] border-[0.75px] border-[#CBCBCB] bg-shade-0 px-4 py-[10px]"
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
                    </div>
                    <div className="flex flex-col">
                      <label className="caption-regular-4 text-[#CBCBCB]">
                        Full name*
                      </label>
                      <input
                        type="text"
                        className="h-[48px] rounded-[5px] border-[0.75px] border-[#CBCBCB] bg-shade-0 px-4 py-[10px]"
                        {...register('fullName')}
                      />
                      {errors.fullName && (
                        <div className="mt-2 flex items-center gap-[7px]">
                          <FiAlertTriangle className="text-error-500" />
                          <span className="caption-regular-4 text-error-500">
                            {errors.fullName?.message &&
                              errors.fullName.message.replace(/^\w/, (c) =>
                                c.toUpperCase(),
                              )}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-end justify-between gap-6 ">
                      <div className="flex w-1/2 flex-col md:w-full">
                        <label className="caption-regular-4 text-[#CBCBCB]">
                          Job function*
                        </label>
                        <input
                          type="text"
                          className="h-[48px] w-full rounded-[5px] border-[0.75px] border-[#CBCBCB] bg-shade-0 px-4 py-[10px]"
                          {...register('jobFunction')}
                        />
                        {errors.jobFunction && (
                          <div className="mt-2 flex items-center gap-[7px]">
                            <FiAlertTriangle className="text-error-500" />
                            <span className="caption-regular-4 text-error-500">
                              {errors.jobFunction?.message &&
                                errors.jobFunction.message.replace(/^\w/, (c) =>
                                  c.toUpperCase(),
                                )}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="flex w-1/2 flex-col md:w-full">
                        <label className="caption-regular-4 text-[#CBCBCB]">
                          Company name*
                        </label>
                        <input
                          type="text"
                          className="h-[48px] w-full rounded-[5px] border-[0.75px] border-[#CBCBCB] bg-shade-0 px-4 py-[10px]"
                          {...register('companyName')}
                        />
                        {errors.companyName && (
                          <div className="mt-2 flex items-center gap-[7px]">
                            <FiAlertTriangle className="text-error-500" />
                            <span className="caption-regular-4 text-error-500">
                              {errors.companyName?.message &&
                                errors.companyName.message.replace(/^\w/, (c) =>
                                  c.toUpperCase(),
                                )}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex items-end justify-between gap-6">
                      <div className="flex w-full flex-col">
                        <label className="caption-regular-4 text-[#CBCBCB]">
                          How many people work in your organization (Full Time
                          Equivalent)?*
                        </label>
                        <select
                          className="h-[48px] w-full rounded-[5px] border-[0.75px] border-[#CBCBCB] bg-shade-0 px-4 py-[10px]"
                          {...register('fte')}
                        >
                          <option value="DEFAULT" disabled selected hidden>
                            FTE
                          </option>
                          <option value="1-15">1-15</option>
                          <option value="16-30">16-30</option>
                          <option value="31-50">31-50</option>
                          <option value="51-100">51-100</option>
                        </select>
                        {errors.fte && (
                          <div className="mt-2 flex items-center gap-[7px]">
                            <FiAlertTriangle className="text-error-500" />
                            <span className="caption-regular-4 text-error-500">
                              {errors.fte?.message &&
                                errors.fte.message.replace(/^\w/, (c) =>
                                  c.toUpperCase(),
                                )}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="flex w-full flex-col">
                        <label className="caption-regular-4 text-[#CBCBCB]">
                          How many people are you planning to hire next year?*
                        </label>
                        <select
                          className="h-[48px] w-full rounded-[5px] border-[0.75px] border-[#CBCBCB] bg-shade-0 px-4 py-[10px]"
                          {...register('hireNextYear')}
                        >
                          <option value="DEFAULT" disabled selected hidden>
                            Please Select
                          </option>
                          <option value="1-15">1-15</option>
                          <option value="16-30">16-30</option>
                          <option value="31-50">31-50</option>
                          <option value="51-100">51-100</option>
                        </select>
                        {errors.hireNextYear && (
                          <div className="mt-2 flex items-center gap-[7px]">
                            <FiAlertTriangle className="text-error-500" />
                            <span className="caption-regular-4 text-error-500">
                              {errors.hireNextYear?.message &&
                                errors.hireNextYear.message.replace(
                                  /^\w/,
                                  (c) => c.toUpperCase(),
                                )}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label className="caption-regular-4 text-[#CBCBCB]">
                        Do you have an Applicant Tracking System (ATS)?
                      </label>
                      <select
                        className="h-[48px] rounded-[5px] border-[0.75px] border-[#CBCBCB] bg-shade-0 px-4 py-[10px]"
                        {...register('ats')}
                      >
                        <option value="DEFAULT" disabled selected hidden>
                          Unknown
                        </option>
                        <option value="1-15">1-15</option>
                        <option value="16-30">16-30</option>
                        <option value="31-50">31-50</option>
                        <option value="51-100">51-100</option>
                      </select>
                      {errors.ats && (
                        <div className="mt-2 flex items-center gap-[7px]">
                          <FiAlertTriangle className="text-error-500" />
                          <span className="caption-regular-4 text-error-500">
                            {errors.ats?.message &&
                              errors.ats.message.replace(/^\w/, (c) =>
                                c.toUpperCase(),
                              )}
                          </span>
                        </div>
                      )}
                    </div>
                    <p className="caption-regular-3">
                      TestFounder needs the contact information you provide to
                      us to contact you about our products and services. You may
                      unsubscribe from these communications at any time. For
                      information on how to unsubscribe, as well as our privacy
                      practices and commitment to protecting your privacy,
                      please review our Privacy Policy.
                    </p>
                    <div className="flex w-full justify-end">
                      <input
                        type="submit"
                        value="Next"
                        className="btn-normal"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F9F9F9] bg-no-repeat pt-0">
          <div className="container mx-auto">
            <div className="lg-pt-[32px] flex flex-col gap-[32px] px-[16px] py-[24px] md:flex-row md:px-[40px] md:py-[32px] lg:gap-[85px] lg:pb-[80px]">
              <div className="flex min-w-[228px] justify-center">
                <Image
                  src={`https:${contentfulEntries.topSection[1].fields.image.fields.file.url}`}
                  alt="Hero Image"
                  width={228}
                  height={354}
                  sizes="100vw"
                  className="z-50"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <BiSolidQuoteAltLeft className="text-5xl text-black" />
                <p className="md:text-lg lg:text-2xl">
                  {
                    contentfulEntries.topSection[1].fields.bodyText.content[0]
                      .content[0].value
                  }
                </p>
                <div>
                  <p className="caption-bold-1">
                    {
                      contentfulEntries.topSection[1].fields.bodyText.content[1]
                        .content[0].value
                    }
                  </p>
                  <p className="caption-regular-1">
                    {
                      contentfulEntries.topSection[1].fields.bodyText.content[2]
                        .content[0].value
                    }
                  </p>
                  <p className="caption-regular-1">
                    {
                      contentfulEntries.topSection[1].fields.bodyText.content[3]
                        .content[0].value
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary-700 pt-0">
          <div className="container mx-auto">
            <div className="flex flex-col items-center gap-8 px-[16px] py-[24px] md:px-[40px] md:py-[32px] lg:py-[64px]">
              <h2 className="heading-2 lg:heading-1 text-white">
                {contentfulEntries.topSection[2].fields.headline}
              </h2>
              <div className="flex flex-col gap-[24px] md:flex-row md:gap-[36px] lg:gap-[162px]">
                <div className="flex flex-col items-center">
                  <h3 className="heading-2 lg:heading-1 text-white">
                    {
                      contentfulEntries.topSection[2].fields.bodyText.content[0]
                        .content[0].value
                    }
                  </h3>
                  <p className="caption-semibold-2 lg:caption-semibold-1 text-white">
                    {
                      contentfulEntries.topSection[2].fields.bodyText.content[1]
                        .content[0].value
                    }
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <h3 className="heading-2 lg:heading-1 text-white">
                    {
                      contentfulEntries.topSection[2].fields.bodyText.content[2]
                        .content[0].value
                    }
                  </h3>
                  <p className="caption-semibold-2 lg:caption-semibold-1 text-white">
                    {
                      contentfulEntries.topSection[2].fields.bodyText.content[3]
                        .content[0].value
                    }
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <h3 className="heading-2 lg:heading-1 text-white">
                    {
                      contentfulEntries.topSection[2].fields.bodyText.content[4]
                        .content[0].value
                    }
                  </h3>
                  <p className="caption-semibold-2 lg:caption-semibold-1 text-white">
                    {
                      contentfulEntries.topSection[2].fields.bodyText.content[5]
                        .content[0].value
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

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
              {contentfulEntries.pageContent
                .slice(5, 9)
                .map((testimonial, index) => (
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
                            <h3 className="heading-3 mt-0">
                              {testimonial.fields.name}
                            </h3>
                            <p className="caption-regular-3">
                              {testimonial.fields.position}
                            </p>
                            <p className="caption-light-2 hidden md:block">
                              “
                              {
                                testimonial.fields.testimonialText.content[0]
                                  .content[0].value
                              }
                              ”
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
                              {new Date(
                                testimonial.sys.updatedAt,
                              ).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                      </div>
                      <p className="caption-light-2 pt-[20px] md:hidden">
                        “
                        {
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
                          {new Date(
                            testimonial.sys.updatedAt,
                          ).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              <SwiperTestimonialButton />
            </Swiper>
          </div>
        </div>

        <section className="flex h-fit items-center bg-[#F9F9F9] px-4 py-6 sm:min-h-[520px] md:px-[40px] md:py-[40px] lg:px-0 lg:py-0">
          <div className="container mx-auto ">
            <div className="flex flex-col items-center gap-6 lg:flex-row lg:py-[80px]">
              <div className="relative flex w-full flex-col items-center space-y-6 md:w-full md:items-start lg:w-1/2">
                <h1 className="heading-2 sm:heading-1 mb-0 mt-0 text-center sm:text-start">
                  {contentfulEntries.topSection[0].fields.headline}
                </h1>
                <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                  {
                    contentfulEntries.topSection[0].fields.bodyText.content[0]
                      .content[0].value
                  }
                </p>
                <Link href={contentfulEntries.topSection[0].fields.ctaLink}>
                  <button className="btn-line-normal-black">
                    {contentfulEntries.topSection[0].fields.ctaText}
                  </button>
                </Link>
              </div>
              <div className="mb-16 w-full sm:w-1/2 md:mb-0 md:text-left ">
                <Image
                  src={`https:${contentfulEntries.topSection[0].fields.image.fields.file.url}`}
                  alt="Hero Image"
                  width={462}
                  height={473}
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
}

export async function getStaticProps() {
  const contentfulEntries = await fetchContentfulEntries('landingPage');

  // Check if contentfulEntries is an array before filtering
  const filteredEntries = Array.isArray(contentfulEntries.items)
    ? contentfulEntries.items.find((entry) => {
        console.log(entry.fields.internalName);
        return entry.fields.internalName === 'Book Demo';
      }).fields // Return only the .fields property
    : {};

  return {
    props: {
      contentfulEntries: filteredEntries,
    },
  };
}
