import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { LuEye, LuEyeOff } from 'react-icons/lu';
import { FiAlertTriangle } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';

export default function AssessmentInvite({}) {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const schema = yup
    .object({
      email: yup.string().email().required(),
      password: yup.string().min(12).required(),
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
      <div className="grid h-fit max-w-[580px] grid-cols-1 gap-x-[24px] rounded-[20px] bg-white p-[42px] shadow-[0_4px_10px_0px_rgba(0,0,0,0.15)]">
        <div className="space-y-[24px]">
          <Image src="/assets/logo-desktop.png" width={126} height={60} />
          <h2 className="heading-3">Get started with your Free plan.</h2>
          <p className="caption-regular-3">
            Enter the email address to which you received an assessment invite.
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-full flex-col space-y-6"
          >
            <div className="relative w-full">
              <input
                type="email"
                className={`h-[48px] w-full rounded-[5px] border-[0.75px] bg-shade-0 px-4 py-[10px] ${
                  errors.email ? 'border-error-500' : 'border-[#CBCBCB]'
                }`}
                placeholder="Email*"
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
              <MdOutlineEmail className="absolute right-4 top-4 h-5 w-5 text-[#CBCBCB]" />
            </div>
            <div className="relative w-full">
              <input
                type={showPassword ? 'text' : 'password'}
                className={`h-[48px] w-full rounded-[5px] border-[0.75px] bg-shade-0 px-4 py-[10px] ${
                  errors.password ? 'border-error-500' : 'border-[#CBCBCB]'
                }`}
                placeholder="Password*"
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
                  className="absolute right-4 top-4 h-5 w-5 text-[#CBCBCB]"
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <LuEye
                  className="absolute right-4 top-4 h-5 w-5 text-[#CBCBCB]"
                  onClick={() => setShowPassword(true)}
                />
              )}
            </div>
            <div className="flex h-full w-full items-center justify-between">
              <div className="flex items-center gap-[6px]">
                <input
                  type="checkbox"
                  className="h-[18px] w-[18px] accent-primary-500"
                />
                <span className="caption-regular-3">
                  I have read and accepted the candidate terms and privacy
                  policy
                </span>
              </div>
            </div>
            <div className="flex justify-start">
              <input
                type="submit"
                value="Next"
                className="caption-semibold-1 flex min-w-[82px] items-center rounded-[40px] bg-primary-500 px-[20px] py-[8px] text-white hover:bg-primary-600"
              />
            </div>
            <p className="caption-regular-2">
              Already have an account?{' '}
              <Link href="/login" className="text-black">
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
