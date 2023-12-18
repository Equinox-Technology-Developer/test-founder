import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Layout } from '@/components';
import { images } from '@/constants';
import { fetchContentfulEntries } from '@/helper/contenfulHelper';

import styles from './Sciences.module.scss';

// const ProductScience = ({ contentfulEntries }) => {
  // const bodyTextValue =
  //   contentfulEntries.topBanner.fields.bodyText.content[0].content[0].value ||
  //   '';
  // const imageUrl = contentfulEntries.topBanner.fields.image.fields.file.url;
  // const fullImageUrl = `https://${imageUrl}`;
  // console.log(contentfulEntries);
  
const ProductScience = () => {
  return (
    <>
      <Layout pageTitle="Product Science">
        {/* Top Banner */}
        {/* <section className="bg-blur bg-right bg-no-repeat bg-[#F9F9F9]">
          <div className="container mx-auto">
            <div className="flex px-5 py-4 md:flex-row flex-col items-center">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center mt-24">
                <h1 className="heading-1 mb-6 mt-0">
                  {contentfulEntries.topBanner.fields.headline
                    .split(' ')
                    .map((word, index) => (
                      <span
                        key={index}
                        className={
                          word === 'TestFounder.' ? 'text-primary-500' : ''
                        }
                      >
                        {word}{' '}
                      </span>
                    ))}
                </h1>
                <p className="caption-regular-1 mt-0 mb-6">{bodyTextValue}</p>
                <div className="flex justify-center mb-6">
                  <button className="ml-4 text-primary-500 bg-white border-[1px] border-primary-500 py-2 px-5 hover:bg-grayscale-100 rounded-[40px] caption-regular-1">
                    <Link href={contentfulEntries.topBanner.fields.ctaUrl}>
                      {contentfulEntries.topBanner.fields.ctaText}
                    </Link>
                  </button>
                </div>
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative">
                <Image
                  src={fullImageUrl}
                  alt={contentfulEntries.topBanner.fields.image.fields.title}
                  width={512}
                  height={638}
                  sizes="100vw"
                  className="w-full h-auto z-50"
                />
              </div>
            </div>
          </div>
        </section> */}

        {/* Right - Left Content  */}
        {/* <section className="min-h-[700px] flex items-center bg-[#F9F9F9]">
          <div className="container mx-auto ">
            {contentfulEntries.topSection.map((content) => (
              <div
                key={content.fields.internalName}
                className={`flex px-5 py-4 ${
                  content.fields.containerLayout
                    ? 'md:flex-row'
                    : 'md:flex-row-reverse'
                } flex-col items-center gap-[21px]`}
              >
                <div className="w-1/2 md:w-1/2 md:text-left mb-16 md:mb-0 ">
                  <Image
                    src={`https:${content.fields.image.fields.file.url}`}
                    alt="Hero Image"
                    width={644}
                    height={469}
                    sizes="100vw"
                    className="z-50"
                  />
                </div>
                <div className="lg:w-1/2 md:w-1/2 w-5/6 relative flex flex-col md:items-start items-center space-y-6">
                  <h1
                    key={content.fields.headline}
                    className="heading-1 mt-0 mb-0"
                  >
                    {content.fields.headline}
                  </h1>
                  <p className={`caption-regular-1 ${styles.pre}`}>
                    {content.fields.bodyText.content[0].content[0].value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        {/*Banner Bottom */}
        {/* <div className="w-full bg-[#D0F3FC26] min-h-[366px] space-y-6 pb-[60px]">
          <div className="container mx-auto flex flex-col items-center justify-center text-center space-y-6">
            <h1 className="heading-1">
              {contentfulEntries.extraSection[0].fields.headline}
            </h1>
            <p className={`caption-regular-1 text-center ${styles.pre}`}>
              {
                contentfulEntries.extraSection[0].fields.bodyText.content[0]
                  .content[0].value
              }
            </p>
            <div className="flex flex-row gap-4">
              <button className="btn-line-medium">
                <Link href={contentfulEntries.extraSection[0].fields.ctaUrl}>
                  {contentfulEntries.extraSection[0].fields.ctaText}
                </Link>
              </button>
              <button className="btn-medium">
                <Link href={contentfulEntries.extraSection[0].fields.ctaUrl2}>
                  {contentfulEntries.extraSection[0].fields.ctaText2}
                </Link>
              </button>
            </div>
            <p><i>The contents of this page are intended for general information purposes only and do not constitute legal advice, nor do they substitute legal counsel.</i></p>
          </div>
        </div> */}

        {/* Top Banner */}
        <section className="bg-[#F9F9F9] bg-blur bg-right bg-no-repeat pt-0">
          <div className="container mx-auto pb-20">
            {/* <div className="pb-20 relative flex flex-col items-center sm:static lg:flex-row min-w-full justify-between"> */}
              {/* <div className="mb-16 mt-4 flex flex-col items-center text-center md:mb-0 md:w-full md:items-center md:px-[40px] md:py-[32px] md:text-left lg:mt-24 lg:flex-grow lg:items-start lg:pr-24 max-w-2xl"> */}
            <div className={` ${styles.banner_topContent}`}>
              <div className={styles.banner_topContentText}>
                <h1 className="sm:heading-1 heading-2 mb-6 mt-0 ">
                The science behind 
                  <span className="text-primary-500"> TestFounder</span>.
                </h1>
                <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-0 text-center lg:text-start">
                Our mission is to provide you and your candidates with an enjoyable, highly accurate, and science-backed talent assessment experience – without bias or stress. We achieve this by taking a deeply scientific, multi-layered approach that ensures our screening tests are always valid, reliable, and fair.
                </p>
                <div className="mb-6 flex justify-center">
                  <button className="btn-line-medium sm:btn-line-normal">
                    Get Started
                  </button>
                </div>
              </div>
              <div className={`relative flex w-full justify-center md:w-full lg:w-full lg:max-w-lg ${styles.banner_topContentImage}`}>
                <Image
                  src={images.top_banner_science}
                  alt="Hero Image"
                  width={617}
                  height={602}
                  sizes="100vw"
                  className={`z-10 flex h-auto w-[80%] md:w-[60%] lg:w-full `}
                />
              </div>
            </div>
          </div>
        </section>

         {/* Explanation */}
         <section className="z-50 flex h-fit items-center bg-[#F9F9F9] px-4 py-6 md:px-[40px] md:py-[40px] lg:px-0 lg:py-0">
          <div className="container mx-auto ">
            <div className="flex flex-col items-center gap-[50px] lg:flex-row">
              <div className="z-50 mb-1 sm:mb-16 md:mb-0 md:w-full md:text-left lg:flex-grow">
                <Image
                  src="/assets/explaination-banner.png"
                  alt="Hero Image"
                  width={636}
                  height={403}
                  sizes="100vw"
                />
              </div>
              <div className="relative z-50 flex w-full flex-col items-center space-y-6 md:w-full md:items-start lg:w-full">
                <h1 className="heading-2 sm:heading-1 mb-0 mt-0 text-center sm:text-start">
                  A barometer for job success.
                </h1>
                <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                  Use our library of 401 scientifically validated tests.
                </p>
                <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                  Test candidates for job-specific skills like coding or digital
                  marketing, as well as more general skills like critical
                  thinking.
                </p>
                <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                  Our unique personality and value tests allow you to get to
                  know your applicants as real people – not just pieces of
                  paper.
                </p>
                <button className="btn-line-medium sm:btn-line-normal">
                  See Tests
                </button>
              </div>
            </div>
          </div>
          <Image
            src="/assets/bg_blur_2.png"
            alt="Hero Image"
            width={730}
            height={565}
            sizes="100vw"
            className="absolute left-[12%] top-[149%] blur-xl sm:left-[10%] sm:top-auto"
          />
        </section>
        {/* Explanation 2 */}
        <section className="flex h-fit items-center bg-[#F9F9F9] px-4 py-6 md:px-[40px] md:py-[40px] lg:px-0 lg:py-0">
          <div className="container mx-auto">
            <div className="flex flex-col-reverse items-center gap-[41px] md:flex-col-reverse lg:flex-row">
              <div className="z-50 mb-1 flex flex-col items-center text-center sm:mb-16 md:mb-0 md:w-full md:items-start  md:pr-16 md:text-left lg:flex-grow lg:pr-24">
                <h1 className="heading-2 sm:heading-1 mb-6 mt-0">
                  Quality time for quality candidates.
                </h1>
                <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-0">
                  Boom. No more time wasted on screening resumes and
                  pre-qualifying interviews.
                </p>
                <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-0">
                  We automatically grade and rank your candidates. In the time
                  it takes to savor a cup of coffee, you can watch video
                  responses to custom questions.
                </p>
                <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-0">
                  Our screening process automation lets you focus on the best
                  people for the job.
                </p>
              </div>
              <div className="flex w-full justify-start md:w-full lg:w-1/2">
                <Image
                  src="/assets/anim-conf.png"
                  alt="Hero Image"
                  width={624}
                  height={449}
                  sizes="100vw"
                  className="z-50"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Explanation 3*/}
        <section className="flex h-fit items-center bg-[#F9F9F9] px-4 py-6 md:px-[40px] md:py-[40px] lg:px-0 lg:py-0">
          <div className="container mx-auto ">
            <div className="flex flex-col items-center gap-[50px] lg:flex-row">
              <div className="mb-16 w-full sm:w-full md:mb-0 md:text-left ">
                <Image
                  src="/assets/man-percent.png"
                  alt="Hero Image"
                  width={644}
                  height={469}
                  sizes="100vw"
                  className="z-50"
                />
              </div>
              <div className="relative flex w-full flex-col items-center space-y-6 md:w-full md:items-start lg:w-1/2">
                <h1 className="heading-2 sm:heading-1 mb-0 mt-0 text-center sm:text-start">
                  Say goodbye to unconscious bias.
                </h1>
                <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                  Diverse teams perform better.
                </p>
                <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                  With TestFounder, you give all applicants an equal, unbiased
                  opportunity to showcase themselves.
                </p>
                <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                  This ensures you get the best talent from all walks of life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Explanation 4 */}
        <section className="flex h-fit items-center bg-[#F9F9F9] px-4 py-6 md:px-[40px] md:py-[40px] lg:px-0 lg:py-0">
          <div className="container mx-auto">
            <div className="flex flex-col-reverse items-center gap-[41px] md:flex-col-reverse lg:flex-row">
              <div className="z-50 mb-16 flex flex-col items-center text-center md:mb-0 md:w-full md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
                <h1 className="heading-2 sm:heading-1 mb-6 mt-0">
                  Offer a positive candidate experience.
                </h1>
                <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-0">
                  Good candidates appreciate good screening tests.
                </p>
                <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-0">
                  Our professional, well-designed tests serve as an extension of
                  your brand and personality.
                </p>
                <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-0">
                  Your applicants get the motivation and engagement they need to
                  truly shine.
                </p>
              </div>
              <div className="flex w-full justify-center md:w-full lg:w-1/2">
                <Image
                  src="/assets/global-people.png"
                  alt="Hero Image"
                  width={628}
                  height={596}
                  sizes="100vw"
                  className="z-50"
                />
              </div>
            </div>
          </div>
          <Image
            src="/assets/bg_blur_3.png"
            alt="Hero Image"
            width={730}
            height={565}
            sizes="100vw"
            className="absolute right-[10%] top-[450%] z-0 blur-xl sm:top-auto"
          />
        </section>

        {/* Explanation 5 */}
        <section className="flex h-fit items-center bg-[#F9F9F9] px-4 py-6 sm:h-fit md:px-[40px] md:py-[40px] lg:px-0 lg:py-0">
          <div className="container mx-auto ">
            <div className="flex flex-col items-center gap-0 sm:gap-[21px] lg:flex-row">
              <div className="z-50 mb-1 w-full sm:mb-16 md:mb-0 md:w-full md:text-left">
                <Image
                  src="/assets/people-conection.png"
                  alt="Hero Image"
                  width={616}
                  height={344}
                  sizes="100vw"
                  className="z-50"
                />
              </div>
              <div className="relative z-50 flex w-full flex-col items-center space-y-6 md:w-full md:items-start lg:w-1/2">
                <h1 className="heading-2 sm:heading-1 mb-0 mt-0 text-center sm:text-start">
                  Champion a data-driven HR culture.
                </h1>
                <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                  We rank your applicants according to test scores certified by
                  our experts. This means your HR team can rely on good data to
                  make important decisions – and not just their gut feeling.
                </p>
                <p className="caption-regular-3 sm:caption-regular-1 text-center sm:text-start">
                  With TestGorilla, you’ll lead the shift to a more professional
                  and data-focused HR culture in your company.
                </p>
              </div>
            </div>
          </div>
          <Image
            src="/assets/bg_blur_4.png"
            alt="Hero Image"
            width={730}
            height={565}
            sizes="100vw"
            className="absolute left-[10%] top-[550%] blur-xl sm:top-auto"
          />
        </section>
      </Layout>
    </>
  );
};

// export async function getStaticProps() {
//   const contentType = 'landingPage'; // Modify content type here
//   const { items } = await fetchContentfulEntries(contentType);

//   const entries = items.find(
//     (entry) => entry.fields.internalName === 'Product Science',
//   );

//   // Check if the entry is found
//   if (entries) {
//     console.log('Found the homepage entry:', entries);
//   } else {
//     console.log('Homepage entry not found.');
//   }

//   return {
//     props: {
//       contentfulEntries: entries ? entries.fields : {}, // Modify key-value of props
//     },
//   };
// }

export default ProductScience;
