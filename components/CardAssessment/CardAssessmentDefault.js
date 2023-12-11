import React from 'react';
import Image from 'next/image';

const CardAssessmentDefault = () => {
  return (
    <>
      <div className="flex items-start w-fit max-w-[508px] p-3 active:shadow-[0_4px_10px_0px_rgba(0,0,0,0.15)] active:border-black active:border-l-2 active:border-0 active:border-solid">
        <div className="flex items-center">
          <Image
            src="/assets/assessment.svg"
            alt="Picture of the author"
            width={40}
            height={40}
            className="ml-1 align-middle mb-1"
          />
        </div>
        <div className="flex flex-col pl-3">
          <h1 className="body-1 m-0">Lorem Ipsum</h1>
          <p className="caption-light-2 mt-1 ">
            Lorem ipsum dolor sit amet consectetur. Egestas facilisis dictum
            eget laoreet ac eget sagittis cras cursus.{' '}
          </p>
        </div>
      </div>
    </>
  );
};

export default CardAssessmentDefault;
