import React, { useState } from 'react';
import Link from 'next/link';

import { FcGoogle } from 'react-icons/fc';
import { Layout } from '@/components';
import { LuEye, LuEyeOff } from 'react-icons/lu';
import { MdOutlineEmail } from 'react-icons/md';
import { FiAlertTriangle } from 'react-icons/fi';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const EquinoxSignup = ({}) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const schema = yup
    .object({
      full_name: yup.string().required(),
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
        'http://localhost:3000/api/auth/signup',
        data,
      );
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <>
      <Layout pageTitle="Equinox Login">
        <main className="flex h-screen w-screen flex-col lg:flex-row">
          <div className="flex min-h-screen w-full items-center justify-center bg-grayscale-100 px-[30px] py-[60px] md:px-0 md:py-0 lg:w-full">
            <div className="flex h-fit w-[580px] flex-col items-center justify-center space-y-6 rounded-[20px] px-[16px] py-[32px] md:px-[42px] md:py-[32px]">
              <h1 className="heading-2 md:heading-1 text-center">Sign up</h1>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex h-fit w-full flex-col items-start justify-center space-y-6"
              >
                <div className="w-full">
                  <input
                    type="text"
                    className="placeholder:caption-regular-3 placeholder:sm:caption-regular-2 h-[48px] w-full rounded-[5px] border-[0.75px] border-[#CBCBCB] bg-shade-0 px-4 py-[10px]"
                    placeholder="Full Name"
                    {...register('full_name')}
                  />
                  {errors.full_name && (
                    <div className="flex items-center gap-[7px]">
                      <FiAlertTriangle className="text-error-500" />
                      <span className="caption-regular-4 text-error-500">
                        {errors.full_name?.message &&
                          errors.full_name.message
                            .replace(/_/, ' ')
                            .replace(/^\w/, (c) => c.toUpperCase())}
                      </span>
                    </div>
                  )}
                </div>
                <div className="relative w-full">
                  <input
                    type="email"
                    className="placeholder:caption-regular-3 placeholder:sm:caption-regular-2 h-[48px] w-full rounded-[5px] border-[0.75px] border-[#CBCBCB] bg-shade-0 px-4 py-[10px]"
                    placeholder="Email"
                    {...register('email')}
                  />
                  <MdOutlineEmail className="text-shade-300 absolute right-4 top-3 h-6 w-6 transform text-[#CBCBCB]" />
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
                    className="h-[48px] w-full rounded-[5px] border-[0.75px] border-[#CBCBCB] bg-shade-0 px-4 py-[10px]"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    {...register('password')}
                  />
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
                </div>
                <button className="caption-semibold-3 sm:caption-semibold-1 mt-20 h-[48px] w-full rounded-[40px] bg-primary-500 px-[20px] py-[8px] text-center text-shade-0">
                  Create my account
                </button>
              </form>
              <p className="sm:caption-regular-3 text-xs font-normal">
                Already have account?
                <Link href="/equinox-login">
                  <span className="sm:caption-semibold-3 pl-2 text-xs font-bold">
                    Log in here
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

export default EquinoxSignup;
