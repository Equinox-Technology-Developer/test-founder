import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { AiOutlineMail } from 'react-icons/ai';

import { images } from '../../constants';

const SignupRecruiter = ({}) => {
  const [selectedCompanySize, setSelectedCompanySize] = useState(null);

  const handleCompanySizeChange = (value) => {
    setSelectedCompanySize(value);
  };

  return (
    <>
      <main className="flex h-screen w-screen flex-col lg:flex-row">
        <div className="flex min-h-screen w-full justify-center bg-grayscale-100 px-[30px] py-[60px] md:px-0 md:py-[64px] lg:w-1/2 lg:pl-[132px] lg:pr-[92px]">
          {!selectedCompanySize && (
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
                    onChange={() => handleCompanySizeChange('1-15')}
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
                    onChange={() => handleCompanySizeChange('6-30')}
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
                    onChange={() => handleCompanySizeChange('31-50')}
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
                    onChange={() => handleCompanySizeChange('51-100')}
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
                    onChange={() => handleCompanySizeChange('101-500')}
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
                    onChange={() => handleCompanySizeChange('501-1000')}
                  />
                  <p className="body-1">501 - 1000</p>
                </label>
                <label className="flex max-h-[82px] w-full items-center justify-center rounded-[10px] bg-[#D9D9D9] py-[29px] hover:bg-primary-500 hover:text-white">
                  <input
                    type="radio"
                    id="company-size-7"
                    name="company-size"
                    className="hidden"
                    onChange={() => handleCompanySizeChange('1000+')}
                  />
                  <p className="body-1">1000+</p>
                </label>
              </div>
            </div>
          )}
          {selectedCompanySize && (
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
                Invite your team to use TestFounder together - for free.
              </h3>
              <p className="caption-regular-2 md:caption-regular-1">
                Give our premium features a trial run and assess candidates
                together.
              </p>
              <div className="flex w-full flex-wrap gap-[24px]">
                <div className="relative w-full">
                  <input
                    type="email"
                    className="h-[48px] w-full rounded-[5px] border-[0.75px] border-[#CBCBCB] bg-shade-0 px-[44px] py-[10px] focus:border-[0.75px] focus:border-primary-500 focus:outline-none"
                    placeholder="Email"
                  />
                  <AiOutlineMail className="absolute left-4 top-[15px] h-5 w-5 text-[#CBCBCB] " />
                </div>
                <div className="relative w-full">
                  <input
                    type="email"
                    className="h-[48px] w-full rounded-[5px] border-[0.75px] border-[#CBCBCB] bg-shade-0 px-[44px] py-[10px] focus:border-[0.75px] focus:border-primary-500 focus:outline-none"
                    placeholder="Email"
                  />
                  <AiOutlineMail className="absolute left-4 top-[15px] h-5 w-5 text-[#CBCBCB]" />
                </div>
                <div className="relative w-full">
                  <input
                    type="email"
                    className="h-[48px] w-full rounded-[5px] border-[0.75px] border-[#CBCBCB] bg-shade-0 px-[44px] py-[10px] focus:border-[0.75px] focus:border-primary-500 focus:outline-none"
                    placeholder="Email"
                  />
                  <AiOutlineMail className="absolute left-4 top-[15px] h-5 w-5 text-[#CBCBCB]" />
                </div>
                <div className="relative w-full">
                  <input
                    type="email"
                    className="h-[48px] w-full rounded-[5px] border-[0.75px] border-[#CBCBCB] bg-shade-0 px-[44px] py-[10px] focus:border-[0.75px] focus:border-primary-500 focus:outline-none"
                    placeholder="Email"
                  />
                  <AiOutlineMail className="absolute left-4 top-[15px] h-5 w-5 text-[#CBCBCB]" />
                </div>
              </div>
              <div className="flex w-full flex-row gap-6">
                <button className="btn-line-normal">Skip</button>
                <button className="btn-normal flex w-full justify-center">
                  Finish
                </button>
              </div>
            </div>
          )}
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
