import { React } from 'react';
import { useSwiper } from 'swiper/react';

export default function SwiperNavButton() {
  const swiper = useSwiper();

  return (
    <>
      <div className="absolute bottom-8 right-2 z-50 xl:bottom-5 2xl:bottom-7">
        <button
          onClick={() => swiper.slideNext()}
          className="z-50 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border-none bg-white shadow-[0_4px_10px_0px_rgba(0,0,0,0.15)]"
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
      <div className="absolute bottom-8 left-2 z-50 xl:bottom-5 2xl:bottom-7">
        <button
          onClick={() => swiper.slidePrev()}
          className="z-50 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border-none bg-white shadow-[0_4px_10px_0px_rgba(0,0,0,0.15)]"
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
    </>
  );
}
