import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Layout } from '@/components';
import CardAssessmentDefault from '../../components/CardAssessment/CardAssessmentDefault';

const Careers = () => {
  return (
    <Layout pageTitle="Talent Assessment">
      {/* Banner */}
      <section className="bg-grayscale-100">
        <div className="container mx-auto px-4 py-6 md:px-[40px] md:py-[32px] lg:px-0 lg:py-[60px]">
          <div className="relative flex flex-col items-center sm:static lg:flex-row">
            <div className="flex flex-col items-center text-center md:mb-0 md:w-full md:items-center md:text-left lg:w-1/2 lg:flex-grow lg:items-start ">
              <h1 className="sm:heading-1 heading-2 mb-6 mt-20 ">
                Join us. From anywhere.
              </h1>
              <p className="caption-regular-3 md:caption-regular-1 mb-6 mt-0 text-center lg:text-start">
                At Testfounder, we’re building a global team of amazing people
                who want to change the way companies hire. If you’re curious,
                ambitious, and ready to grow your career with us, we’d love to
                meet you!
              </p>
              <Link href="#">
                <button className="btn-line-normal-black">See jobs</button>
              </Link>
            </div>
            <div className="relative flex w-full justify-center md:w-full lg:mt-20 lg:w-1/2">
              <Image
                src="/assets/hero-image-careers.png"
                alt="Hero Image"
                width={635}
                height={524}
                sizes="100vw"
                className="mt-[21px] flex h-auto w-[80%] md:w-[92%] lg:mt-0 lg:w-[97%]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-grayscale-100">
        <div className="container mx-auto px-4 py-6 md:px-[40px] md:py-[32px] lg:px-0 lg:py-[60px]">
          <div className="flex flex-col items-center">
            <h2 className="md:heading-1 heading-2 mb-[40px] text-center">
              We have 154 team members working in 43 countries
            </h2>
            <Image
              src="/assets/map-world.png"
              alt="Hero Image"
              width={1105}
              height={541}
              sizes="100vw"
              className="flex h-auto w-full md:w-full lg:w-[97%] lg:px-[102px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-grayscale-100">
        <div className="container mx-auto px-4 py-6 md:px-[40px] md:py-[32px] lg:px-0 lg:py-[60px]">
          <h2 className="md:heading-1 heading-2 mb-[24px] text-center lg:text-start">
            Become a part of something big
          </h2>
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2">
              <CardAssessmentDefault
                title="Make work that matters"
                paragraph="At Testfounder, your skills and talent will help thousands of people find their dream jobs every day. You'll also help change the way companies hire in a new (and more equal) era for top talent worldwide."
              />
              <CardAssessmentDefault
                title="Find freedom (and an awesome team!)"
                paragraph="Connect, meet, and bond with colleagues from all over the world. With our 100% remote structure, you'll have the support, freedom, and trust you deserve to truly grow and succeed."
                icon_url={'/assets/icon-plus-product.svg'}
              />
              <CardAssessmentDefault
                title="Be there at the beginning"
                paragraph="Testfounder has become a globally recognized startup by top investors. We’re in the spotlight and growing rapidly. And our customers happen to love us too, with plenty of glowing reviews.When you join Testfounder, you'll have a chance to shape our company and culture—and grow as fast as us!"
                icon_url={'/assets/icon-plus-product.svg'}
              />
            </div>
            <div className="hidden items-center justify-end lg:flex lg:w-1/2">
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
            </div>
          </div>
        </div>
      </section>

      <section className="bg-grayscale-100">
        <div className="container mx-auto px-4 py-6 md:px-[40px] md:py-[32px] lg:px-0 lg:py-[60px]">
          <h2 className="md:heading-1 heading-2 mb-[24px] text-center lg:text-start">
            What we value
          </h2>
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2">
              <CardAssessmentDefault
                title="Putting Talent first"
                icon_url={'/assets/icon-star-2.svg'}
              />
              <CardAssessmentDefault
                title="Being Bold"
                icon_url={'/assets/icon-plus-product.svg'}
              />
              <CardAssessmentDefault
                title="Taking ownership"
                icon_url={'/assets/icon-plus-product.svg'}
              />
              <CardAssessmentDefault
                title="Executing with pride"
                icon_url={'/assets/icon-plus-product.svg'}
              />
              <CardAssessmentDefault
                title="Support each other"
                icon_url={'/assets/icon-plus-product.svg'}
              />
              <CardAssessmentDefault
                title="Acting with integrity"
                icon_url={'/assets/icon-plus-product.svg'}
              />
            </div>
            <div className="hidden items-center justify-end lg:flex lg:w-1/2">
              <div className="flex flex-col p-4">
                <p className="caption-regular-2 mb-[20px]">
                  <span className="caption-semibold-2">What this means:</span>{' '}
                  We recognize that taking an assessment is a high-stakes
                  experience that can lead to a dream job. To level the playing
                  field for all global talent, all candidates should get a fair
                  chance.
                </p>
                <p className="caption-semibold-2">How can I apply this?</p>
                <ul className="caption-regular-2 list-inside list-disc">
                  <li>Prioritize the needs of candidates, always.</li>
                  <li>Treat candidates with respect and empathy.</li>
                  <li>
                    Help customers apply best practices in assessing candidates.
                  </li>
                  <li>
                    Safeguard the integrity and confidential nature of test
                    results.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-grayscale-100">
        <div className="container mx-auto px-4 py-6 md:px-[40px] md:py-[32px] lg:px-0 lg:py-[60px]">
          <h2 className="md:heading-1 heading-2 mb-[32px] text-center lg:text-start">
            Job openings
          </h2>
          <div className="mb-[32px] flex flex-col lg:flex-row">
            <div className="flex w-full flex-col gap-6 lg:flex-row">
              <div className="relative flex w-full lg:w-[33%]">
                <input
                  type="text"
                  className="w-full border-[0.75px] border-[#CBCBCB] bg-white px-4 py-[10px] placeholder:text-base placeholder:text-[#CBCBCB] xl:w-full"
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
              <div className="relative flex w-full lg:w-[33%]">
                <select className="w-full border-[0.75px] border-[#CBCBCB] bg-white px-4 py-[10px] placeholder:text-base placeholder:text-[#CBCBCB] xl:w-full">
                  <option value="DEFAULT" selected>
                    All departments
                  </option>
                  <option value="1-15">People & Culture</option>
                  <option value="16-30">Finance</option>
                  <option value="31-50">Assessment</option>
                  <option value="51-100">Product</option>
                </select>
              </div>
              <div className="relative flex w-full lg:w-[33%]">
                <select className="w-full border-[0.75px] border-[#CBCBCB] bg-white px-4 py-[10px] placeholder:text-base placeholder:text-[#CBCBCB] xl:w-full">
                  <option value="DEFAULT" selected>
                    All job locations
                  </option>
                  <option value="1-15">100% Remote</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="flex w-full flex-col gap-6 lg:flex-row">
              <div className="relative flex w-full flex-col gap-3 bg-white p-6 lg:w-[33%]">
                <h3 className="md:caption-semibold-1 caption-bold-3">
                  VP of Sales
                </h3>
                <div className="flex gap-3">
                  <Image
                    src="/assets/icon-employee.svg"
                    alt="icon-employee"
                    width={24}
                    height={24}
                    sizes="100vw"
                    className="flex h-auto"
                  />
                  <p className="caption-regular-3">Sales</p>
                </div>
                <div className="flex gap-3">
                  <Image
                    src="/assets/icon-job-status.svg"
                    alt="icon-job-status"
                    width={24}
                    height={24}
                    sizes="100vw"
                    className="flex h-auto"
                  />
                  <p className="caption-regular-3">100% Remote</p>
                </div>
                <button className="btn-line-normal-black flex self-end">
                  More Details
                </button>
              </div>
              <div className="relative flex w-full flex-col gap-3 bg-white p-6 lg:w-[33%]">
                <h3 className="md:caption-semibold-1 caption-bold-3">
                  Designer
                </h3>
                <div className="flex gap-3">
                  <Image
                    src="/assets/icon-employee.svg"
                    alt="icon-employee"
                    width={24}
                    height={24}
                    sizes="100vw"
                    className="flex h-auto"
                  />
                  <p className="caption-regular-3">Marketing</p>
                </div>
                <div className="flex gap-3">
                  <Image
                    src="/assets/icon-job-status.svg"
                    alt="icon-job-status"
                    width={24}
                    height={24}
                    sizes="100vw"
                    className="flex h-auto"
                  />
                  <p className="caption-regular-3">100% Remote</p>
                </div>
                <button className="btn-line-normal-black flex self-end">
                  More Details
                </button>
              </div>
              <div className="relative flex w-full flex-col gap-3 bg-white p-6 lg:w-[33%]">
                <h3 className="md:caption-semibold-1 caption-bold-3">
                  Senior Quality Engineer
                </h3>
                <div className="flex gap-3">
                  <Image
                    src="/assets/icon-employee.svg"
                    alt="icon-employee"
                    width={24}
                    height={24}
                    sizes="100vw"
                    className="flex h-auto"
                  />
                  <p className="caption-regular-3">Sales</p>
                </div>
                <div className="flex gap-3">
                  <Image
                    src="/assets/icon-job-status.svg"
                    alt="icon-job-status"
                    width={24}
                    height={24}
                    sizes="100vw"
                    className="flex h-auto"
                  />
                  <p className="caption-regular-3">100% Remote</p>
                </div>
                <button className="btn-line-normal-black flex self-end">
                  More Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
