import React from 'react';
import Image from 'next/image';

const Components = () => {
  return (
    <>
      <main className="px-5 py-5 space-x-10 flex">
        <div className="flex flex-col space-y-10 w-[50%]">
          <div className="flex items-start w-fit max-w-[508px] p-3 ">
            <div className="flex items-center">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.9222 20.1048C31.528 19.501 32.5106 19.5007 33.1168 20.104L36.2116 23.1835C36.8126 23.7816 36.8189 24.75 36.2256 25.3557L34.172 27.4524L28.8568 22.1632L30.9222 20.1048Z"
                  stroke="black"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.6142 30.3797L27.5405 23.475L32.8716 28.78L26.0005 35.8274C25.4748 36.3642 24.7537 36.6668 24.0008 36.6668L20.5828 36.6666C20.0532 36.6666 19.6303 36.2273 19.6526 35.7004L19.7993 32.2289C19.8287 31.5326 20.1196 30.8726 20.6142 30.3797Z"
                  stroke="black"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M31.2484 16.0947L31.2484 7.67517C31.2484 5.27726 29.3045 3.33337 26.9066 3.33337L7.67538 3.33337C5.27747 3.33337 3.33358 5.27726 3.33358 7.67517L3.33358 32.2241C3.33358 34.622 5.27747 36.5659 7.67538 36.5659L15.6959 36.5659"
                  stroke="black"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                />
                <path
                  d="M18.8754 23.4562H7.70943"
                  stroke="black"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                />
                <path
                  d="M14.8877 27.9761H7.70959"
                  stroke="black"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                />
                <path
                  d="M26.3192 14.4174L7.70932 14.4174"
                  stroke="black"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                />
                <path
                  d="M21.8002 18.9364L7.70983 18.9364"
                  stroke="black"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                />
                <path
                  d="M26.3192 9.89749L7.70932 9.89749"
                  stroke="black"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="flex flex-col pl-3">
              <h1 className="body-1 m-0">Lorem Ipsum</h1>
              <p className="caption-light-2 mt-1 ">
                Lorem ipsum dolor sit amet consectetur. Egestas facilisis dictum
                eget laoreet ac eget sagittis cras cursus.{' '}
              </p>
            </div>
          </div>
          <div
            className="flex items-start w-full max-w-[508px] rounded-tr-[5px] rounded-br-[5px] shadow-[0_4px_10px_0px_rgba(0,0,0,0.15)] p-3 border-black
            border-l-2 border-0 border-solid"
          >
            <div className="flex items-center">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.9222 20.1048C31.528 19.501 32.5106 19.5007 33.1168 20.104L36.2116 23.1835C36.8126 23.7816 36.8189 24.75 36.2256 25.3557L34.172 27.4524L28.8568 22.1632L30.9222 20.1048Z"
                  stroke="black"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.6142 30.3797L27.5405 23.475L32.8716 28.78L26.0005 35.8274C25.4748 36.3642 24.7537 36.6668 24.0008 36.6668L20.5828 36.6666C20.0532 36.6666 19.6303 36.2273 19.6526 35.7004L19.7993 32.2289C19.8287 31.5326 20.1196 30.8726 20.6142 30.3797Z"
                  stroke="black"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M31.2484 16.0947L31.2484 7.67517C31.2484 5.27726 29.3045 3.33337 26.9066 3.33337L7.67538 3.33337C5.27747 3.33337 3.33358 5.27726 3.33358 7.67517L3.33358 32.2241C3.33358 34.622 5.27747 36.5659 7.67538 36.5659L15.6959 36.5659"
                  stroke="black"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                />
                <path
                  d="M18.8754 23.4562H7.70943"
                  stroke="black"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                />
                <path
                  d="M14.8877 27.9761H7.70959"
                  stroke="black"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                />
                <path
                  d="M26.3192 14.4174L7.70932 14.4174"
                  stroke="black"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                />
                <path
                  d="M21.8002 18.9364L7.70983 18.9364"
                  stroke="black"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                />
                <path
                  d="M26.3192 9.89749L7.70932 9.89749"
                  stroke="black"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="flex flex-col pl-3 ">
              <h1 className="body-1 m-0">Lorem Ipsum</h1>
              <p className="caption-light-2 mt-1 ">
                Lorem ipsum dolor sit amet consectetur. Egestas facilisis dictum
                eget laoreet ac eget sagittis cras cursus.{' '}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-10 w-[50%]">
          <div className="flex items-start w-fit max-w-[508px] p-3 ">
            <div className="flex items-center">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.9222 20.1048C31.528 19.501 32.5106 19.5007 33.1168 20.104L36.2116 23.1835C36.8126 23.7816 36.8189 24.75 36.2256 25.3557L34.172 27.4524L28.8568 22.1632L30.9222 20.1048Z"
                  stroke="black"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.6142 30.3797L27.5405 23.475L32.8716 28.78L26.0005 35.8274C25.4748 36.3642 24.7537 36.6668 24.0008 36.6668L20.5828 36.6666C20.0532 36.6666 19.6303 36.2273 19.6526 35.7004L19.7993 32.2289C19.8287 31.5326 20.1196 30.8726 20.6142 30.3797Z"
                  stroke="black"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M31.2484 16.0947L31.2484 7.67517C31.2484 5.27726 29.3045 3.33337 26.9066 3.33337L7.67538 3.33337C5.27747 3.33337 3.33358 5.27726 3.33358 7.67517L3.33358 32.2241C3.33358 34.622 5.27747 36.5659 7.67538 36.5659L15.6959 36.5659"
                  stroke="black"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                />
                <path
                  d="M18.8754 23.4562H7.70943"
                  stroke="black"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                />
                <path
                  d="M14.8877 27.9761H7.70959"
                  stroke="black"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                />
                <path
                  d="M26.3192 14.4174L7.70932 14.4174"
                  stroke="black"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                />
                <path
                  d="M21.8002 18.9364L7.70983 18.9364"
                  stroke="black"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                />
                <path
                  d="M26.3192 9.89749L7.70932 9.89749"
                  stroke="black"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="flex flex-col pl-3">
              <h1 className="body-1 m-0">Lorem Ipsum</h1>
              <p className="caption-light-2 mt-1 ">
                Lorem ipsum dolor sit amet consectetur. Egestas facilisis dictum
                eget laoreet ac eget sagittis cras cursus.{' '}
              </p>
              <button className="border-0 bg-transparent caption-semibold-1 text-black w-fit px-0 bg-url cursor-pointer">
                Button
                <Image
                  src="/assets/dropdown2.svg"
                  alt="Picture of the author"
                  width={16}
                  height={16}
                  className="ml-1 align-middle mb-1"
                />
              </button>
            </div>
          </div>
          <div className="flex items-start w-fit max-w-[508px] p-6 bg-grayscale-100">
            <div className="flex items-center">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.9222 20.1048C31.528 19.501 32.5106 19.5007 33.1168 20.104L36.2116 23.1835C36.8126 23.7816 36.8189 24.75 36.2256 25.3557L34.172 27.4524L28.8568 22.1632L30.9222 20.1048Z"
                  stroke="black"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.6142 30.3797L27.5405 23.475L32.8716 28.78L26.0005 35.8274C25.4748 36.3642 24.7537 36.6668 24.0008 36.6668L20.5828 36.6666C20.0532 36.6666 19.6303 36.2273 19.6526 35.7004L19.7993 32.2289C19.8287 31.5326 20.1196 30.8726 20.6142 30.3797Z"
                  stroke="black"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M31.2484 16.0947L31.2484 7.67517C31.2484 5.27726 29.3045 3.33337 26.9066 3.33337L7.67538 3.33337C5.27747 3.33337 3.33358 5.27726 3.33358 7.67517L3.33358 32.2241C3.33358 34.622 5.27747 36.5659 7.67538 36.5659L15.6959 36.5659"
                  stroke="black"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                />
                <path
                  d="M18.8754 23.4562H7.70943"
                  stroke="black"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                />
                <path
                  d="M14.8877 27.9761H7.70959"
                  stroke="black"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                />
                <path
                  d="M26.3192 14.4174L7.70932 14.4174"
                  stroke="black"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                />
                <path
                  d="M21.8002 18.9364L7.70983 18.9364"
                  stroke="black"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                />
                <path
                  d="M26.3192 9.89749L7.70932 9.89749"
                  stroke="black"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="flex flex-col pl-3">
              <h1 className="body-1 m-0">Lorem Ipsum</h1>
              <p className="caption-light-2 mt-1 ">
                Lorem ipsum dolor sit amet consectetur. Egestas facilisis dictum
                eget laoreet ac eget sagittis cras cursus.{' '}
              </p>
              <button className="border-0 bg-transparent caption-semibold-1 text-black w-fit px-0 cursor-pointer">
                Button
                <Image
                  src="/assets/dropdown2.svg"
                  alt="Picture of the author"
                  width={16}
                  height={16}
                  className="ml-1 align-middle mb-1"
                />
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Components;
