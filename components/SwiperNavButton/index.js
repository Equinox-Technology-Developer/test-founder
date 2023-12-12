import { React } from 'react';
import { useSwiper } from 'swiper/react';

export default function SwiperNavButton() {
  const swiper = useSwiper();

  return (
    <>
      <div className="absolute right-0 bottom-9 z-50">
        <button
          onClick={() => swiper.slideNext()}
          className="bg-white border-none w-6 h-6 rounded-full shadow-[0_4px_10px_0px_rgba(0,0,0,0.15)] flex items-center justify-center cursor-pointer z-50"
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
              stroke-width="1.3125"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="absolute left-2 bottom-9 z-50 ">
        <button
          onClick={() => swiper.slidePrev()}
          className="bg-white border-none w-6 h-6 rounded-full shadow-[0_4px_10px_0px_rgba(0,0,0,0.15)] flex items-center justify-center cursor-pointer z-50"
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
              stroke-width="1.3125"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
