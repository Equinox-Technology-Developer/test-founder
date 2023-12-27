import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { images } from '../../constants';
import { FcGoogle } from 'react-icons/fc';

const Signup = ({}) => {
  return (
    <>
      <main className="flex h-screen w-screen flex-col lg:flex-row">
        <div className="flex w-full items-center justify-center bg-grayscale-100 lg:w-full">
          <div className="flex h-fit w-[580px] flex-col items-start justify-center space-y-6 rounded-[20px] bg-white px-[42px] py-[32px] shadow-[0_4px_10px_0px_rgba(0,0,0,0.15)]">
            <Link href="/">
              <Image
                src={images.logo_desktop}
                width={120}
                height={50}
                alt="logo"
                priority
              />
            </Link>
            <h3 className="heading-3">Get started with your Free plan.</h3>
            <p className="caption-regular-3">
              Account creation is exclusively for companies. Click{' '}
              <Link href="/candidates-guide">
                {' '}
                <span className="caption-bold-3 text-primary-500">here</span>
              </Link>{' '}
              if you’re a candidate.
            </p>
            <button className="caption-semibold-3 flex h-[48px] w-full items-center justify-center gap-[12px] rounded-[5px] border-[0.75px] border-[#CBCBCB] bg-shade-0 px-4 py-[10px]">
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
              className="h-[48px] w-full rounded-[5px] border-[0.75px] border-[#CBCBCB] bg-shade-0 px-4 py-[10px]"
              placeholder="Work Email"
            />
            <button className="caption-semibold-1 h-[48px] w-full rounded-[40px] bg-primary-500 px-[20px] py-[8px] text-center text-shade-0">
              Create my account
            </button>
            <p className="caption-regular-3">
              Already have a TestFounder in account
              <Link href="/login">
                <span className="caption-semibold-3 pl-2">Log in</span>
              </Link>
            </p>
            <p className="caption-regular-3">
              By creating an account, you confirm that you have read and agree
              to TestFounder's
              <Link href="/terms">
                {' '}
                <span className="caption-semibold-3">terms of use</span>
              </Link>
              <span> and </span>
              <Link href="/privacy-policy">
                <span className="caption-semibold-3">privacy policy</span>
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Signup;
