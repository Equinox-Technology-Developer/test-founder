import React from 'react';
import Image from 'next/image';

const CardAssessmentDefault = ({ title, content, icon_url }) => {
  return (
    <>
      <div className="flex w-fit max-w-[580px] items-start p-3 active:border-0 active:border-l-2 active:border-solid active:border-primary-500 active:shadow-[0_4px_10px_0px_rgba(0,0,0,0.15)]">
        <div className="flex flex-shrink-0 items-center">
          <Image
            src={icon_url}
            alt="Picture of the author"
            width={40}
            height={40}
            className="mb-1 ml-1 align-middle"
          />
        </div>
        <div className="flex flex-col pl-3">
          <h1 className="body-1 m-0">{title}</h1>
          {content.map((paragraph, index) => (
            <p className="caption-light-2 mt-1" key={index}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardAssessmentDefault;
