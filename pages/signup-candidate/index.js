import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { images } from '../../constants';
import { FcGoogle } from 'react-icons/fc';

const SignupCandidate = ({}) => {
  return (
    <>
      <main className="flex h-screen w-screen flex-col lg:flex-row">
        <div className="flex min-h-screen w-full items-center justify-center bg-grayscale-100 px-[30px] py-[60px] md:px-0 md:py-0 lg:w-full">
          <div className="flex h-fit w-[580px] flex-col items-start justify-center space-y-6 rounded-[20px] bg-white px-[16px] py-[32px] shadow-[0_4px_10px_0px_rgba(0,0,0,0.15)] md:px-[42px] md:py-[32px]">
            <Link href="/">
              <Image
                src={images.logo_desktop}
                width={120}
                height={50}
                alt="logo"
                priority
              />
            </Link>
            <h3 className="sm:heading-3 text-xs font-bold leading-[27.9px]">
              Create your TestFounder Profile
            </h3>
            <p className="caption-regular-4 sm:caption-regular-3">
              Enter the email address to which you received an assessment
              invite.
            </p>
            <button className="sm:caption-semibold-3 flex h-[48px] w-full items-center justify-center gap-[12px] rounded-[5px] border-[0.75px] border-[#CBCBCB] bg-shade-0 px-4 py-[10px] text-xs font-semibold leading-4">
              <FcGoogle className="h-6 w-6" />
              Continue for Google
            </button>
            <div className="flex items-center justify-center gap-6 self-stretch">
              <hr className="w-full border border-grayscale-300" />
              <p className="text-grayscale-300">or</p>
              <hr className="w-full border border-grayscale-300" />
            </div>
            <input
              type="email"
              className="placeholder:caption-regular-3 placeholder:sm:caption-regular-2 h-[48px] w-full rounded-[5px] border-[0.75px] border-[#CBCBCB] bg-shade-0 px-4 py-[10px]"
              placeholder="Work Email"
            />
            <button className="caption-semibold-3 sm:caption-semibold-1 h-[48px] w-full rounded-[40px] bg-primary-500 px-[20px] py-[8px] text-center text-shade-0">
              Create my account
            </button>
            <div className="flex items-center gap-[6px]">
              <input type="checkbox" className="accent-primary-500" />
              <p className="sm:caption-regular-3 caption-regular-4">
                I have read and accepted the
                <Link href="/candidate-terms">
                  {' '}
                  <span className="sm:caption-regular-3 caption-regular-4">
                    candidate terms
                  </span>
                </Link>
                <span> and </span>
                <Link href="/privacy-policy">
                  <span className="sm:caption-regular-3 caption-regular-4">
                    privacy policy
                  </span>
                </Link>
              </p>
            </div>
            <p className="sm:caption-regular-3 text-xs font-normal">
              Already have a TestFounder in account
              <Link href="/login">
                <span className="sm:caption-semibold-3 pl-2 text-xs font-bold">
                  Log in
                </span>
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default SignupCandidate;
