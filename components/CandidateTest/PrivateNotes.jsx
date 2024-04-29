import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

export default function PrivateNotes({}) {
  return (
    <>
      <div className="grid h-fit max-w-[866px] grid-cols-1 gap-x-[24px] rounded-[20px] bg-white p-[42px]">
        <div className="space-y-[24px]">
          <h2 className="heading-2 border-b-[1px] border-black pb-[12px]">
            You have now finished the first test
          </h2>
          <p className="caption-regular-2">
            Help us improve this test by providing anonymous feedback. Your
            answer will only be available to TestFounder, not your (prospective)
            employer.
          </p>
          <p className="caption-regular-2">
            In your opinion, did the test accurately measure your skills in{' '}
            <span className="caption-bold-2">Time management?</span>
          </p>
          <div className="grid w-full grid-cols-3 space-x-[32px]">
            <div className="flex items-center space-x-3 border-[1px] border-[#CBCBCB] p-3">
              <input type="radio" id="yes" name="time_management" value="yes" />
              <label htmlFor="yes">Yes</label>
            </div>
            <div className="flex items-center space-x-3 border-[1px] border-[#CBCBCB] p-3">
              <input
                type="radio"
                id="somewhat"
                name="time_management"
                value="somewhat"
              />
              <label htmlFor="somewhat">Somewhat</label>
            </div>
            <div className="flex items-center space-x-3 border-[1px] border-[#CBCBCB] p-3">
              <input type="radio" id="no" name="time_management" value="no" />
              <label htmlFor="no">No</label>
            </div>
          </div>
          <textarea
            id="w3review"
            name="w3review"
            className="h-[148px] w-full border-[1px] border-[#CBCBCB] p-3"
            placeholder="Add your private notes here (auto-saved)..."
          ></textarea>
          <div className="flex justify-end gap-x-4">
            <button className="caption-semibold-1 flex items-center rounded-[40px] border-[1px] border-primary-500 bg-transparent px-[20px] py-[8px] text-primary-500 hover:border-primary-600 hover:text-primary-600">
              Submit and pause
            </button>
            <button className="caption-semibold-1 flex items-center rounded-[40px] bg-primary-500 px-[20px] py-[8px] text-white hover:bg-primary-600">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
