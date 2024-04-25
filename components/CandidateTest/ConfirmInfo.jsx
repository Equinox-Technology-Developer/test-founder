import { IoClose } from 'react-icons/io5';

export default function ConfirmInfo() {
  return (
    <>
      <div className="grid h-fit max-w-[674px] grid-cols-1 gap-x-[24px] rounded-[20px] bg-white p-[42px] shadow-[0_4px_10px_0px_rgba(0,0,0,0.15)]">
        <div className="space-y-[32px]">
          <div className="flex justify-between">
            <h2 className="heading-3 border-black">
              Are you sure about the information provide?
            </h2>
            <IoClose className="h-6 w-6 cursor-pointer" />
          </div>
          <p className="caption-regular-3">
            Your Selection Indicate that adjustments should be made to your
            assessment. By proceeding, you affirm that the information you
            provided is honest and truthful. Do You want to proceed?
          </p>
          <div className="flex justify-end gap-x-4">
            <button className="caption-semibold-1 flex items-center rounded-[40px] border-[1px] border-[#CBCBCB] bg-transparent px-[20px] py-[8px] text-[#CBCBCB] hover:border-shade-100 hover:text-shade-100">
              No, I don't
            </button>
            <button className="caption-semibold-1 flex items-center rounded-[40px] bg-primary-500 px-[20px] py-[8px] text-white hover:bg-primary-600">
              Yes, I Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
