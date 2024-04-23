import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

export default function GetStarted({}) {
  return (
    <>
      <div className="grid h-fit max-w-[589px] grid-cols-1 gap-x-[24px] rounded-[20px] bg-white p-[42px]">
        <div className="space-y-[24px]">
          <h2 className="heading-3 border-b-[1px] border-black pb-[12px]">
            Assessment Setup
          </h2>
          <p className="caption-regular-3">
            To make sure that everyone is fairly treated, we might need to
            adjust your assessment setup. You can help us do that by answering
            the following questions:
          </p>
          <p className="caption-regular-3">Are you fluent in English?</p>
          <div className="grid w-full grid-cols-2 space-x-[32px]">
            <div className="flex items-center space-x-3 border-[1px] border-[#CBCBCB] p-3">
              <input
                type="radio"
                id="yes_fluent"
                name="language"
                value="yes_fluent"
              />
              <label htmlFor="yes_fluent">Yes, I am Fluent</label>
            </div>
            <div className="flex items-center space-x-3 border-[1px] border-[#CBCBCB] p-3">
              <input
                type="radio"
                id="no_fluent"
                name="language"
                value="no_fluent"
              />
              <label htmlFor="no_fluent">No, I am not fluent</label>
            </div>
          </div>
          <p className="caption-regular-3">
            Person with disabilities or conditions that affect memory or
            concentration abilities, such ADHD, dyslexia or autism, may require
            assessment change(s) in order to proceed. Do You require additional
            support to complete our onlline assessment?
          </p>
          <p className="caption-regular-3">
            If you don’t consider your condition to be a hidrance when taking a
            test you can answer “No” to proceed to the assessment.
          </p>
          <div className="grid w-full grid-cols-2 space-x-[32px]">
            <div className="flex items-center space-x-3 border-[1px] border-[#CBCBCB] p-3">
              <input
                type="radio"
                id="yes_consider"
                name="consideration"
                value="yes_consider"
              />
              <label htmlFor="yes_consider">Yes, I do</label>
            </div>
            <div className="flex items-center space-x-3 border-[1px] border-[#CBCBCB] p-3">
              <input
                type="radio"
                id="no_consider"
                name="consideration"
                value="no_consider"
              />
              <label htmlFor="no_consider">No, I don’t</label>
            </div>
          </div>
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
