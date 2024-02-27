import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { images } from '../../constants';

import { HiArrowLeft } from 'react-icons/hi';
import { MdOutlineEmail } from 'react-icons/md';
import { FiAlertTriangle } from 'react-icons/fi';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import axios from 'axios';
const Signup = ({}) => {
  const schema = yup
    .object({
      email: yup.string().email().required(),
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
                  type="email"
                  className={`placeholder:caption-regular-3 placeholder:sm:caption-regular-2 h-[48px] w-full rounded-[5px] border-[0.75px] border-[#CBCBCB] bg-shade-0 px-4 py-[10px] ${
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
                <MdOutlineEmail className="text-shade-300 absolute right-4 top-3 h-6 w-6 transform text-[#CBCBCB]" />
              </div>
              <input
                type="submit"
                value="Reset password"
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
