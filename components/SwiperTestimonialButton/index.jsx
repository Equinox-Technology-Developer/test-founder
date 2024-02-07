import { React } from 'react';
import { useSwiper } from 'swiper/react';

export default function SwiperTestimonialButton() {
  const swiper = useSwiper();

  const slidePrev = () => {
    if (swiper.isBeginning) {
      swiper.slideTo(swiper.slides.length - 1);
    } else {
      swiper.slidePrev();
    }
  };

  const slideNext = () => {
    if (swiper.isEnd) {
      swiper.slideTo(0);
    } else {
      swiper.slideNext();
    }
  };

  return (
    <>
      <div className="hidden md:block">
        <div className="absolute bottom-1/2 right-5 z-50 -translate-x-1/2 translate-y-1/2 transform ">
          <button
            onClick={slideNext}
            className="z-50 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border-none bg-white shadow-[0_4px_10px_0px_rgba(0,0,0,0.15)] hover:bg-grayscale-100"
          >
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.999756 1L6.99448 5.86795L0.959417 10.6858"
                stroke="black"
                strokeWidth="1.3125"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="absolute bottom-1/2 left-7 z-50 -translate-x-1/2 translate-y-1/2 transform">
          <button
            onClick={slidePrev}
            className="z-50 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border-none bg-white shadow-[0_4px_10px_0px_rgba(0,0,0,0.15)] hover:bg-grayscale-100"
          >
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.00021 1L1.00549 5.86795L7.04055 10.6858"
                stroke="black"
                strokeWidth="1.3125"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
