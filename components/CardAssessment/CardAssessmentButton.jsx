import React from 'react';
import Image from 'next/image';

const CardAssessmentButton = () => {
  return (
    <>
      <div className="flex w-fit max-w-[508px] items-start rounded-[10px] p-3 active:bg-grayscale-100">
        <div className="flex items-center">
          <Image
            src="/assets/assessment.svg"
            alt="Picture of the author"
            width={40}
            height={40}
          />
        </div>
        <div className="flex flex-col pl-3">
          <h1 className="body-1 m-0">Lorem Ipsum</h1>
          <p className="caption-light-2 mt-1 ">
            Lorem ipsum dolor sit amet consectetur. Egestas facilisis dictum
            eget laoreet ac eget sagittis cras cursus.{' '}
          </p>
          <button className="caption-semibold-1 bg-url w-fit cursor-pointer border-0 bg-transparent px-0 text-black">
            Button
            <Image
              src="/assets/dropdown2.svg"
              alt="Picture of the author"
              width={16}
              height={16}
              className="mb-1 ml-1 align-middle"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default CardAssessmentButton;
