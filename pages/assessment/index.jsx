import { Layout } from '@/components';

export default function Assessments({ contentfulEntries }) {
  return (
    <>
      <Layout pageTitle="Assessment" showNavbarRecruiter={true}>
        <section className="bg-[#F9F9F9] bg-blur bg-right bg-no-repeat px-4 py-6 pt-0 md:px-[40px] md:py-[40px] lg:px-0 lg:py-0"></section>
      </Layout>
    </>
  );
}
