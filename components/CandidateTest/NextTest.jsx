export default function NextTest() {
  return (
    <>
      <div className="grid h-fit max-w-[866px] grid-cols-1 gap-x-[24px] rounded-[20px] bg-white p-[42px] shadow-[0_4px_10px_0px_rgba(0,0,0,0.15)]">
        <div className="space-y-[16px]">
          <p>This is the next test:</p>
          <h2 className="heading-2">Time Management</h2>
          <label className="block w-fit bg-warning-500 px-4 py-[10px]">
            Practice Questions
          </label>
          <p className="caption-regular-2 border-b-[1px] border-t-[1px] border-primary-500 py-4">
            You will first see{' '}
            <span className="caption-bold-2">4 practice questions</span> for
            this test to get a sense of what to expect. After that, your actual
            tests will begin.
          </p>
          <p className="caption-regular-2">
            Practice questions will start in{' '}
            <span className="caption-bold-2">1 seconds</span>
          </p>
          <p
            className="
            caption-regular-2"
          >
            Please stay on this screen. The timer for your next test has{' '}
            <span className="caption-bold-2">started</span> and{' '}
            <span className="caption-bold-2">cannot be paused.</span> The timer
            continues even when you close the browser.
          </p>
          <div className="flex justify-end">
            <button className="caption-semibold-1 flex items-center rounded-[40px] bg-primary-500 px-[20px] py-[8px] text-white hover:bg-primary-600">
              Skip Timer
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
