import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

export default function ExtraTime() {
  return (
    <>
      <div className="grid h-fit max-w-[674px] grid-cols-1 gap-x-[24px] rounded-[20px] bg-white p-[42px] shadow-[0_4px_10px_0px_rgba(0,0,0,0.15)]">
        <div className="space-y-[24px]">
          <h2 className="heading-3 border-b-[1px] border-black pb-3">
            Extra time approved
          </h2>
          <p className="caption-regular-3 border-b-[1px] border-[#CBCBCB] pb-6">
            Based on the details you gave while setting up your assessment, you
            have been granted 50% extra time.
          </p>
          <div className="flex justify-end">
            <button className="caption-semibold-1 flex items-center rounded-[40px] bg-primary-500 px-[20px] py-[8px] text-white hover:bg-primary-600">
              Continue
              <MdOutlineKeyboardArrowRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
