import { Layout } from '@/components';
import { FiPlusCircle } from 'react-icons/fi';
import Image from 'next/image';
import { IoMdSearch } from 'react-icons/io';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { RiArrowRightSLine } from 'react-icons/ri';

export default function MyCandidates({}) {
  const data = [
    {
      name: 'Prayogatama',
      email: 'prayogatama@equinox.com',
      assessment: 1,
      last_activity: 'Jan 16, 2024',
    },
    {
      name: 'Putra Emirreza Andara',
      email: 'putra@equinoxcell.com',
      assessment: 1,
      last_activity: 'Jan 16, 2024',
    },
    {
      name: 'Reynaldi',
      email: 'reynaldi@equinoxcell.com',
      assessment: 1,
      last_activity: 'Jan 16, 2024',
    },
  ];
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
              <div className="container mx-auto mt-[32px] flex h-screen flex-col items-center justify-start">
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
                {data.length > 0 ? (
                  <table className="mt-[32px] h-fit w-full rounded-[10px] bg-white">
                    <thead>
                      <tr className="h-[56px] border-b-[1px] border-gray-300 uppercase">
                        <th className="px-6 py-3 text-start">name</th>
                        <th className="text-start">email</th>
                        <th className="text-start">assessment</th>
                        <th className="text-start">last activity</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((item, index) => (
                        <>
                          <tr
                            key={index}
                            className="h-[56px] border-b-[1px] border-gray-300"
                          >
                            <td className="px-6 py-3">{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.assessment}</td>
                            <td>{item.last_activity}</td>
                          </tr>
                        </>
                      ))}
                      <tr className="text-end">
                        <td className="px-6 py-3" colspan="4">
                          <div className="flex justify-end space-x-[36px]">
                            <p className="caption-regular-3 text-neutral-100">
                              Item per page
                            </p>
                            <select className="caption-regular-3 text-neutral-100">
                              <option value="volvo">25</option>
                              <option value="saab">50</option>
                              <option value="mercedes">75</option>
                              <option value="audi">100</option>
                            </select>
                            <p className="caption-regular-3 text-neutral-100">
                              1 - 1 of 1
                            </p>
                            <div>
                              <RiArrowLeftSLine className="inline-block" />
                              <RiArrowRightSLine className="inline-block" />
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <div className="mt-[64px] flex h-screen flex-col items-center justify-start">
                    <Image
                      src="/assets/dont-have-any-assessment.png"
                      alt="search"
                      width={429}
                      height={331}
                    />
                    <p className="caption-regular-1 max-h-[56px] text-center">
                      You don’t have any assessment yet.
                      <br /> <a>Create an assessment</a> and invite candidates
                      to take it.
                    </p>
                  </div>
                )}
              </div>
            </section>
          </main>
        </Layout>
      </main>
    </>
  );
}
