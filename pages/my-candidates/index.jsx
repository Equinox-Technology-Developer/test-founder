import { Layout } from '@/components';
import { FiPlusCircle } from 'react-icons/fi';
import Image from 'next/image';
import { IoMdSearch } from 'react-icons/io';

export default function MyCandidates({}) {
  return (
    <>
      <main className="h-screen max-h-screen overflow-hidden bg-[#F9F9F9]">
        <Layout
          pageTitle="MyCandidates"
          showNavbarRecruiter={true}
          showFooter={false}
          showTopNavbar={false}
        >
          <main className="h-fit max-h-screen overflow-hidden bg-[#F9F9F9]">
            <section className="h-full px-4 py-6 pt-0 md:px-[40px] md:py-[40px] lg:px-0 lg:py-0">
              <div className="container mx-auto mt-[32px] flex h-screen flex-col items-center justify-center">
                <div className="flex w-full justify-between">
                  <h1 className="caption-semibold-1">My Candidates</h1>
                  <button className="caption-semibold-1 rounded-[40px] bg-primary-500 px-[20px] py-2 text-white hover:bg-primary-600">
                    <FiPlusCircle className="mr-[6px] inline-block" />
                    Create new assessment
                  </button>
                </div>
                <div className="mt-[32px] grid w-full grid-cols-4 gap-x-[24px]">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search any candidate by name"
                      className="w-full rounded-[5px] border border-gray-300 px-4 py-2"
                    />
                    <IoMdSearch className="absolute right-4 top-1/2 flex h-5  w-5 -translate-y-1/2 text-neutral-100" />
                  </div>
                  <select className="rounded-[5px] border border-gray-300 px-4 py-2 text-neutral-100">
                    <option value="assessment">Assessment</option>
                  </select>
                  <select className="rounded-[5px] border border-gray-300 px-4 py-2  text-neutral-100">
                    <option value="test">Test</option>
                  </select>
                  <select className="rounded-[5px] border border-gray-300 px-4 py-2  text-neutral-100">
                    <option value="job-role">Job Role</option>
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
                      You don’t have any candidates yet.
                    </p>
                    <p className="caption-regular-1 text-center">
                      <a href="/create-assessment">Create an assessment</a> and
                      ind invite candidates to take it.
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
