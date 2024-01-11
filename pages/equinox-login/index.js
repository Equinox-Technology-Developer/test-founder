import React from 'react';
import Link from 'next/link';

import { FcGoogle } from 'react-icons/fc';
import { Layout } from '@/components';

const EquinoxLogin = ({}) => {
  return (
    <>
      <Layout pageTitle="Equinox Login">
        <main className="flex h-screen w-screen flex-col lg:flex-row">
          <div className="flex min-h-screen w-full items-center justify-center bg-grayscale-100 px-[30px] py-[60px] md:px-0 md:py-0 lg:w-full">
            <div className="flex h-fit w-[580px] flex-col items-center justify-center space-y-6 rounded-[20px]  px-[16px] py-[32px]  md:px-[42px] md:py-[32px]">
              <h1 className="heading-2 md:heading-1 text-center">Login</h1>
              <input
                type="email"
                className="placeholder:caption-regular-3 placeholder:sm:caption-regular-2 h-[48px] w-full rounded-[5px] border-[0.75px] border-[#CBCBCB] bg-shade-0 px-4 py-[10px]"
                placeholder="Email"
              />
              <input
                type="password"
                className="placeholder:caption-regular-3 placeholder:sm:caption-regular-2 h-[48px] w-full rounded-[5px] border-[0.75px] border-[#CBCBCB] bg-shade-0 px-4 py-[10px]"
                placeholder="Password"
              />
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-[6px]">
                  <input type="checkbox" className="accent-primary-500" />
                  <span className="caption-regular-3">Keep me logged</span>
                </div>
                <Link href="/forgot-password">
                  <p className="text-xs text-black ">Forgot your Password?</p>
                </Link>
              </div>
              <button className="caption-semibold-3 sm:caption-semibold-1 h-[48px] w-full rounded-[40px] bg-primary-500 px-[20px] py-[8px] text-center text-shade-0">
                Login
              </button>
              <p className="sm:caption-regular-3 text-xs font-normal">
                Don’t have an account?
                <Link href="/equinox-signup">
                  <span className="sm:caption-semibold-3 pl-2 text-xs font-bold">
                    create one here
                  </span>
                </Link>
              </p>
              <div className="flex items-center justify-center gap-6 self-stretch">
                <hr className="w-full border border-grayscale-300" />
                <p className="text-grayscale-300">or</p>
                <hr className="w-full border border-grayscale-300" />
              </div>
              <button className="sm:caption-semibold-3 flex h-[48px] w-full items-center justify-center gap-[12px] rounded-[5px] border-[0.75px] border-[#CBCBCB] bg-shade-0 px-4 py-[10px] text-xs font-semibold leading-4">
                <FcGoogle className="h-6 w-6" />
                Continue for Google
              </button>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default EquinoxLogin;
