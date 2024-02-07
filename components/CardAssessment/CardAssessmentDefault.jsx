import React from 'react';
import Image from 'next/image';

const CardAssessmentDefault = ({
  title,
  paragraph,
  paragraph_2,
  icon_url,
  isActive,
  onClick,
}) => {
  const hasParagraphs = paragraph || paragraph_2;

  return (
    <>
      <div
        onClick={onClick}
        className={` cursor-pointer flex w-full max-w-[580px] items-start ${
          !hasParagraphs && 'items-center'
        } p-3 ${isActive ? 'shadow-[0_4px_10px_0px_rgba(0,0,0,0.15)]' : ''}`}
      >
        {icon_url && (
          <div className="flex flex-shrink-0 items-center">
            <Image
              src={icon_url}
              alt="Picture of the author"
              width={40}
              height={40}
              className="mb-1 ml-1 align-middle"
            />
          </div>
        )}
        <div className="flex flex-col pl-3">
          {title && <h1 className="body-1 m-0 text-start">{title}</h1>}
          {hasParagraphs && (
            <>
              {paragraph && <p className="caption-light-2 mt-1">{paragraph}</p>}
              {paragraph_2 && (
                <p className="caption-light-2 mt-1">{paragraph_2}</p>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CardAssessmentDefault;
