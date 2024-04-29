import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

export default function FeedbackSubmitted() {
  return (
    <>
      <div className="grid h-fit max-w-[644px] grid-cols-1 gap-x-[24px] rounded-[20px] bg-white p-[42px] shadow-[0_4px_10px_0px_rgba(0,0,0,0.15)]">
        <div className="space-y-[16px]">
          <h2 className="heading-2">Your Feedback has been submitted</h2>
          <div className="border-b-[1px] border-t-[1px] border-b-[#CBCBCB] border-t-primary-500 py-6">
            <p className="caption-regular-2">
              We recommend you to finish your assessment in one go
            </p>
            <p className="caption-regular-2">
              If necessary, you can come back to this point in the assessment by
              using the link in the email you have received
            </p>
          </div>
          <div className="flex justify-end">
            <button className="caption-semibold-1 flex items-center rounded-[40px] bg-primary-500 px-[20px] py-[8px] text-white hover:bg-primary-600">
              Start next test
              <MdOutlineKeyboardArrowRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
