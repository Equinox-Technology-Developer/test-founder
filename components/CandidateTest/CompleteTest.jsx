import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

export default function CompleteTest() {
  return (
    <>
      <div className="grid h-fit max-w-[644px] grid-cols-1 gap-x-[24px] rounded-[20px] bg-white p-[42px] shadow-[0_4px_10px_0px_rgba(0,0,0,0.15)]">
        <div className="space-y-[16px]">
          <h2 className="heading-2">
            Great job! you’ve completed your assessment
          </h2>
          <p className="caption-regular-2 border-b-[1px] border-t-[1px] border-b-[#CBCBCB] border-t-primary-500 py-4">
            Would you like to see your results now? We will automatically
            redirect you to create your TestFounder Profile and view your
            assessment outcome
          </p>
          <p className="caption-regular-2">
            Redirecting in <span className="caption-bold-2">6 seconds</span>
          </p>
          <div className="flex justify-end">
            <button className="caption-semibold-1 flex items-center rounded-[40px] bg-primary-500 px-[20px] py-[8px] text-white hover:bg-primary-600">
              Go there now
              <MdOutlineKeyboardArrowRight />
            </button>
          </div>
          <hr className="border-primary-500" />
        </div>
      </div>
    </>
  );
}
