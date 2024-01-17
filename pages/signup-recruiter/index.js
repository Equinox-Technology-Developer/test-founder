import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { images } from '../../constants';

const SignupRecruiter = ({}) => {
  return (
    <>
      <main className="flex h-screen w-screen flex-col lg:flex-row">
        <div className="flex min-h-screen w-full justify-center bg-grayscale-100 px-[30px] py-[60px] md:px-0 md:py-[64px] lg:w-1/2 lg:pl-[132px] lg:pr-[92px]">
          <div className="flex w-[508px] flex-col items-start justify-center space-y-6">
            <Link href="/">
              <Image
                src={images.logo_desktop}
                width={120}
                height={50}
                alt="logo"
                priority
              />
            </Link>
            <h3 className="md:heading-3 text-[14px] font-bold leading-[16px]">
              How many people work in your company?
            </h3>
            <div className="flex flex-wrap gap-[24px]">
              <label
                htmlFor="company-size-1"
                className="flex max-h-[82px] w-[calc(50%-12px)] cursor-pointer items-center justify-center rounded-[10px] bg-[#D9D9D9] py-[29px] hover:bg-primary-500 hover:text-white"
              >
                <input
                  type="radio"
                  id="company-size-1"
                  name="company-size"
                  className="hidden"
                />
                <p className="body-1">1 - 15</p>
              </label>
              <label
                htmlFor="company-size-2"
                className="flex max-h-[82px] w-[calc(50%-12px)] cursor-pointer items-center justify-center rounded-[10px] bg-[#D9D9D9] py-[29px] hover:bg-primary-500 hover:text-white"
              >
                <input
                  type="radio"
                  id="company-size-2"
                  name="company-size"
                  className="hidden"
                />
                <p className="body-1">6 - 30</p>
              </label>
              <label
                htmlFor="company-size-3"
                className="flex max-h-[82px] w-[calc(50%-12px)] cursor-pointer items-center justify-center rounded-[10px] bg-[#D9D9D9] py-[29px] hover:bg-primary-500 hover:text-white"
              >
                <input
                  type="radio"
                  id="company-size-3"
                  name="company-size"
                  className="hidden"
                />
                <p className="body-1">31 - 50</p>
              </label>
              <label
                htmlFor="company-size-4"
                className="flex max-h-[82px] w-[calc(50%-12px)] cursor-pointer items-center justify-center rounded-[10px] bg-[#D9D9D9] py-[29px] hover:bg-primary-500 hover:text-white"
              >
                <input
                  type="radio"
                  id="company-size-4"
                  name="company-size"
                  className="hidden"
                />
                <p className="body-1">51 - 100</p>
              </label>
              <label
                htmlFor="company-size-5"
                className="flex max-h-[82px] w-[calc(50%-12px)] cursor-pointer items-center justify-center rounded-[10px] bg-[#D9D9D9] py-[29px] hover:bg-primary-500 hover:text-white"
              >
                <input
                  type="radio"
                  id="company-size-5"
                  name="company-size"
                  className="hidden"
                />
                <p className="body-1">101 - 500</p>
              </label>
              <label
                htmlFor="company-size-6"
                className="flex max-h-[82px] w-[calc(50%-12px)] cursor-pointer items-center justify-center rounded-[10px] bg-[#D9D9D9] py-[29px] hover:bg-primary-500 hover:text-white"
              >
                <input
                  type="radio"
                  id="company-size-6"
                  name="company-size"
                  className="hidden"
                />
                <p className="body-1">501 - 1000</p>
              </label>
              <label className="flex max-h-[82px] w-full items-center justify-center rounded-[10px] bg-[#D9D9D9] py-[29px] hover:bg-primary-500 hover:text-white">
                <input
                  type="radio"
                  id="company-size-7"
                  name="company-size"
                  className="hidden"
                />
                <p className="body-1">1000+</p>
              </label>
            </div>
          </div>
        </div>
        <div className="hidden w-full flex-col items-center justify-center space-y-[60px] bg-primary-500 px-[120px] lg:flex lg:w-1/2">
          <h1 className="text-center text-[60px] font-bold leading-[60px] tracking-[1%] text-shade-0">
            Is this the end of the resume
          </h1>
          <Image src="/assets/lamp-login.png" width="274" height="310" />
          <p className="heading-3 text-center text-shade-0">
            Discover more insights in our new report on the State of
            Skills-Based Hiring 2023
          </p>
        </div>
      </main>
    </>
  );
};

export default SignupRecruiter;
