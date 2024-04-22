import { Layout } from '@/components';
import { FiPlusCircle } from 'react-icons/fi';
import Image from 'next/image';

export default function MyAssessments({}) {
  return (
    <>
      <main className="h-screen max-h-screen overflow-hidden bg-[#F9F9F9]">
        <Layout
          pageTitle="Assessment"
          showNavbarRecruiter={true}
          showFooter={false}
          showTopNavbar={false}
        >
          <main className="h-fit max-h-screen overflow-hidden bg-[#F9F9F9]">
            <section className="h-full px-4 py-6 pt-0 md:px-[40px] md:py-[40px] lg:px-0 lg:py-0">
              <div className="container mx-auto mt-[32px] flex h-screen flex-col items-center justify-center">
                <div className="flex w-full justify-between">
                  <h1 className="caption-semibold-1">My Assessment</h1>
                  <button className="caption-semibold-1 rounded-[40px] bg-primary-500 px-[20px] py-2 text-white hover:bg-primary-600">
                    <FiPlusCircle className="mr-[6px] inline-block" />
                    Create new assessment
                  </button>
                </div>
                <div className="mt-[32px] flex w-full justify-between">
                  <input
                    type="text"
                    placeholder="Search any assessment"
                    className="mt-4 w-[425px] rounded-[5px] border border-gray-300 px-4 py-2"
                  />
                  <select className="text-neutral-100px-4 max-h-[48px] rounded-[5px] border border-gray-300 px-4 py-2">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="in-progress">In Progress</option>
                    <option value="not-started">Not Started</option>
                  </select>
                </div>
                <div className="mt-[64px] flex h-screen flex-col items-center justify-start space-y-[64px]">
                  <Image
                    src="/assets/dont-have-any-assessment.png"
                    alt="search"
                    width={429}
                    height={331}
                  />
                  <div className="h-fit w-fit">
                    <p className="caption-regular-1 text-center">
                      You don’t have any assessment yet.
                    </p>
                    <p className="caption-regular-1 text-center">
                      <a href="/create-assessment">Create an assessment</a> and
                      invite candidates to take it.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <div className="flex h-screen flex-col items-center justify-start">
              <Image
                src="/assets/dont-have-any-assessment.png"
                alt="search"
                width={429}
                height={331}
              />
              <p className="caption-regular-1 max-h-[56px] max-w-[457px] text-center">
                You don’t have any assessment yet.
                <br /> <a>Create an assessment</a> and invite candidates to take
                it.
              </p>
            </div>
          </main>
        </Layout>
      </main>
    </>
  );
}
