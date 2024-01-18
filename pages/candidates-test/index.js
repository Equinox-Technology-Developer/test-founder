import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { images } from '../../constants';
import { FcGoogle } from 'react-icons/fc';
import { LuEye, LuEyeOff } from 'react-icons/lu';
import { Layout } from '@/components';

const candidateTest = ({}) => {
  return (
    <>
      <main className="flex h-screen w-screen flex-col lg:flex-row">
        <div className="lgpy-[64px] flex min-h-screen w-full justify-center bg-[#F9F9F9] px-[30px] py-[60px] md:px-0 md:py-[64px] lg:w-1/2  lg:pl-[64px] lg:pr-[92px]">
          <Image
            src="/assets/chart-test-question.png"
            width={644}
            height={718}
            alt="logo"
            priority
            className="w-auto"
          />
        </div>
        <div className="flex w-full flex-col items-start justify-between bg-white px-[120px] lg:flex lg:w-1/2 lg:px-6 lg:py-8 lg:pb-4">
          <div className="flex flex-col gap-3">
            <p className="caption-bold-1">QUESTION 1</p>
            <p className="caption-regular-1">
              What was the approximate percentage increase in the value of Royer
              inc's textile sales from 2021 to 2022?
            </p>
            <div className="flex gap-[10px]">
              <input type="radio" id="7.3%" name="answer_test" value="7.3%" />
              <label htmlFor="html">7.3%</label>
            </div>
            <div className="flex gap-[10px]">
              <input type="radio" id="7.9%" name="answer_test" value="6.1%" />
              <label htmlFor="html">6.1%</label>
            </div>
            <div className="flex gap-[10px]">
              <input type="radio" id="7.9%" name="answer_test" value="7.9%" />
              <label htmlFor="html">7.9%</label>
            </div>
            <div className="flex gap-[10px]">
              <input type="radio" id="8.2%" name="answer_test" value="8.2%" />
              <label htmlFor="html">8.2%</label>
            </div>
            <a className="font-normal text-primary-500 underline">
              Show the solution
            </a>
          </div>
          <div className="flex w-full justify-end gap-6">
            <button className="btn-line-normal">Back</button>
            <button className="btn-normal">Next</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default candidateTest;
