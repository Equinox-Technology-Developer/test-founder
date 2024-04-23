export default function GetStarted({}) {
  return (
    <>
      <div className="grid h-fit max-w-[981px] grid-cols-2 gap-x-[24px] rounded-[20px] bg-white p-[32px]">
        <div className="space-y-[24px]">
          <h2 className="caption-regular-1">
            Hello <span className="heading-3">Reynaldi,</span>
          </h2>
          <p className="caption-regular-3">
            Thank you for applying and welcome tour assessment.
          </p>
          <p className="caption-regular-3">
            Completingit will give you a chance to show off your skills and
            stand out from the crowd!
          </p>
          <p className="caption-regular-3">Good luck!</p>
        </div>
        <div className="space-y-[16px]">
          <h2 className="caption-semibold-1">A few things before you start:</h2>
          <ul className="list-inside list-disc space-y-[16px]">
            <li className="caption-regular-3">
              This assessment consists of <span className="font-bold">4</span>{' '}
              tests. It will take approximately 36 minutes to complate.
            </li>
            <li className="caption-regular-3">
              This assessment is timed. A timer is shown per test or per
              question.
            </li>
            <li className="caption-regular-3">
              Before each test there may be preview questions,
              <span className="font-bold">
                {' '}
                be aware the timer for test will have already started.
              </span>
            </li>
            <li className="caption-regular-3">
              Please allow the use of your camera/webcam and do not leave
              full-screen mode. Snapshots will be taken of you predically during
              the assessment. These measures are taken to ensure darness for
              everyone.
            </li>
            <li className="caption-regular-3">
              Turn on your speakers or headphones (to play audio).
            </li>
            <li className="caption-regular-3">
              You are free to use a calculator, pen and paper.
            </li>
            <li className="caption-regular-3">
              We recommend completing the assessment in one go.
            </li>
          </ul>
          <div className="flex justify-end">
            <button className="caption-semibold-1 flex items-center rounded-[40px] bg-primary-500 px-[20px] py-[8px] text-white hover:bg-primary-600">
              GetStarted
              <MdOutlineKeyboardArrowRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
