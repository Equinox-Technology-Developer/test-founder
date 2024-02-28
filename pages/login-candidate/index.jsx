import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { images } from '../../constants';

import { LuEye, LuEyeOff } from 'react-icons/lu';
import { FcGoogle } from 'react-icons/fc';
import { FiAlertTriangle } from 'react-icons/fi';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import axios from 'axios';

const LoginCandidate = ({}) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const schema = yup
    .object({
      email: yup.string().email().required(),
      password: yup.string().required(),
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
      <main className="flex h-screen w-screen flex-col lg:flex-row">
        <div className="relative flex min-h-screen w-full justify-center bg-grayscale-100 px-[30px] py-[60px] md:px-0 md:py-[64px] lg:w-1/2 lg:pl-[132px] lg:pr-[92px]">
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
              We are glad to see you again.
            </h3>
            <button className="md:caption-regular-3 flex h-[48px] w-full items-center justify-center gap-[12px] rounded-[5px] border-[0.75px] border-[#CBCBCB] bg-shade-0 px-4 py-[10px] text-xs leading-[24px]">
              <FcGoogle className="h-6 w-6" />
              Continue for Google
            </button>
            <div className="flex items-center justify-center gap-6 self-stretch">
              <hr className="w-full border border-grayscale-300" />
              <p className="text-grayscale-300">or</p>
              <hr className="w-full border border-grayscale-300" />
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex w-full flex-col space-y-6"
            >
              <div>
                <input
                  type="email"
                  className={`h-[48px] w-full rounded-[5px] border-[0.75px] bg-shade-0 px-4 py-[10px] ${
                    errors.email ? 'border-error-500' : 'border-[#CBCBCB]'
                  }`}
                  placeholder="Email"
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
              <div className="relative w-full">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className={`h-[48px] w-full rounded-[5px] border-[0.75px] bg-shade-0 px-4 py-[10px] ${
                    errors.password ? 'border-error-500' : 'border-[#CBCBCB]'
                  }`}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  {...register('password', { required: true })}
                />
                {errors.password && (
                  <div className="mt-2 flex items-center gap-[7px]">
                    <FiAlertTriangle className="text-error-500" />
                    <span className="caption-regular-4 text-error-500">
                      {errors.password?.message &&
                        errors.password.message.replace(/^\w/, (c) =>
                          c.toUpperCase(),
                        )}
                    </span>
                  </div>
                )}
                {showPassword ? (
                  <LuEyeOff
                    className="absolute right-4 top-4 h-5 w-5"
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <LuEye
                    className="absolute right-4 top-4 h-5 w-5"
                    onClick={() => setShowPassword(true)}
                  />
                )}
              </div>
              <div className="flex h-full w-full items-center justify-between">
                <div className="flex items-center gap-[6px]">
                  <input type="checkbox" className="accent-primary-500" />
                  <span className="caption-regular-3">Keep me logged</span>
                </div>
                <Link href="/forgot-password">
                  <p className="text-xs text-black ">Set or Reset Password</p>
                </Link>
              </div>
              <input
                type="submit"
                value="Login"
                className="caption-semibold-1 h-[48px] w-full cursor-pointer rounded-[40px] bg-primary-500 px-[20px] py-[8px] text-center text-shade-0"
              />
            </form>
            <p className="caption-regular-3">
              Don’t have an account?
              <Link href="/signup-candidate">
                <span className="caption-semibold-3 pl-2">create one here</span>
              </Link>
            </p>
          </div>
        </div>
        <div className="hidden w-full flex-col items-center justify-center space-y-[60px] bg-primary-500 px-[120px] lg:flex lg:w-1/2">
          <h1 className="text-center text-[60px] font-bold leading-[60px] tracking-[1%] text-shade-0">
            Is this the end of the resume
          </h1>
          <Image
            src="/assets/illustration-login.png"
            width="334"
            height="367"
          />
          <p className="heading-3 text-center text-shade-0">
            Discover more insights in our new report on the State of
            Skills-Based Hiring 2023
          </p>
          <button className="caption-semibold-1 rounded-[40px] bg-shade-0 px-5 py-2 text-shade-100">
            Learn More
          </button>
        </div>
      </main>
    </>
  );
};

export default LoginCandidate;
