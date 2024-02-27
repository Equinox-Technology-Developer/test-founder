import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { images } from '../../constants';

import { LuEye, LuEyeOff } from 'react-icons/lu';
import { HiArrowLeft } from 'react-icons/hi';
import { MdOutlineEmail } from 'react-icons/md';
import { FiAlertTriangle } from 'react-icons/fi';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import axios from 'axios';
const Signup = ({}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const schema = yup
    .object({
      password: yup.string().required(),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
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
      const response = await axios.post('http://localhost:3000/api/auth', data);
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
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
              Reset your password
            </h3>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex h-fit w-full flex-col items-start justify-center space-y-6"
            >
              <div className="relative w-full">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className={`placeholder:caption-regular-3 placeholder:sm:caption-regular-2 h-[48px] w-full rounded-[5px] border-[0.75px] border-[#CBCBCB] bg-shade-0 px-4 py-[10px] ${
                    errors.password ? 'border-error-500' : 'border-[#CBCBCB]'
                  }`}
                  placeholder="Password*"
                  {...register('password')}
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
              <div className="relative w-full">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  className={`placeholder:caption-regular-3 placeholder:sm:caption-regular-2 h-[48px] w-full rounded-[5px] border-[0.75px] border-[#CBCBCB] bg-shade-0 px-4 py-[10px] ${
                    errors.confirmPassword
                      ? 'border-error-500'
                      : 'border-[#CBCBCB]'
                  }`}
                  placeholder="Reply Your Password*"
                  {...register('confirmPassword')}
                />
                {errors.confirmPassword && (
                  <div className="mt-2 flex items-center gap-[7px]">
                    <FiAlertTriangle className="text-error-500" />
                    <span className="caption-regular-4 text-error-500">
                      {errors.confirmPassword?.message &&
                        errors.confirmPassword.message.replace(/^\w/, (c) =>
                          c.toUpperCase(),
                        )}
                    </span>
                  </div>
                )}
                {showConfirmPassword ? (
                  <LuEyeOff
                    className="absolute right-4 top-4 h-5 w-5"
                    onClick={() => setShowConfirmPassword(false)}
                  />
                ) : (
                  <LuEye
                    className="absolute right-4 top-4 h-5 w-5"
                    onClick={() => setShowConfirmPassword(true)}
                  />
                )}
              </div>
              <input
                type="submit"
                value="Confirm your password"
                className="caption-semibold-3 sm:caption-semibold-1 h-[48px] w-fit rounded-[40px] bg-primary-500 px-[20px] py-[8px] text-center text-shade-0 hover:bg-primary-400"
              />
              <Link href="/login" className="text-black">
                <buttom className="flex items-center gap-2">
                  <HiArrowLeft className="h-6 w-6" />
                  <span className="caption-regular-3">Back to login</span>
                </buttom>
              </Link>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Signup;
