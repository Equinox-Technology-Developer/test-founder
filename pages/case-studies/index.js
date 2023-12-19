import React from 'react'
import Image from 'next/image'

import { Layout } from '@/components'
import { images } from '@/constants'
import { MdChevronRight } from 'react-icons/md';

import styles from './CaseStudies.module.scss'

const Resources = () => {
  return (
    <Layout pageTitle="Resources">

      {/* Bottom Banner */}
      <section className="bg-[#F9F9F9] bg-blur bg-right bg-no-repeat pt-0">
          <div className="container mx-auto"> 
          <div className={` ${styles.banner_blogContainer}`}>
            <div className={styles.banner_blogContentText}>
              <h1 className="sm:heading-1 heading-2">
                TestFounder case studies
              </h1>
              <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-0 text-center lg:text-start">
              Discover how we’re helping companies like yours save time and money through our pre-employment assessments.              </p>
            </div>
          </div>
          </div>
      </section>

      {/* Blog Section */}
      <div className={styles.blog_container}>
          <div className={`container mx-auto m-10`}>
            <div className={`${styles.blog_wrapper}`}>
                <div className={`${styles.blog_single}`}>
                    <Image src="/assets/image 39.png" alt="Case Studies Image 1" width={392} height={236}/>
                    <div className={styles.content}>
                        <h3>Dyninno Group improves recruitment productivity by 400% using TestFounder</h3>
                        <p>Dyninno is a group of companies,  providing products and services in the travel, finance, entertainment, and technology sectors in more than 50 countries. Founded in 2004, now the company has 25 offices with total headcount of 5,000 employees.   Since the start of 2022, Dyninno Group has rapidly expanded its business across multiple companies and divisions, and as a result, needed to recruit more than 2,000 employees in less than six months in 2023. However, Pavel Bahu, Global human resources director at Trevolution (travel division of Dyninno), faced the challenge of effectively screening the increased number of candidates without diminishing the efficiency of their current hiring process – especially as they continue to hire 100s of candidates each month in different locations.</p>
                        <div className={styles.readmore}>
                            <p>Read More <span><MdChevronRight/></span></p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>

      {/* Bottom Banner */}
      <section className="bg-[#F9F9F9] bg-blur bg-right bg-no-repeat pt-0">
          <div className="container mx-auto"> <div className={` ${styles.banner_topContent}`}>
            <div className={styles.banner_topContentText}>
              <h1 className="sm:heading-1 heading-2">
                 Hire the best candidates with TestFounder!
              </h1>
              <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-0 text-center lg:text-start">
                Create talent assessments in minutes to screen candidates, save time, and hire the best talent.              </p>
              <div className="mb-6 flex justify-center">
                <button className="btn-line-medium sm:btn-line-normal">
                Try for free!
                </button>
              </div>
            </div>
            <div className={`relative flex w-full justify-center md:w-full lg:w-full lg:max-w-lg ${styles.banner_topContentImage}`}>
              <Image
                src={images.HeroImageProduct}
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
    </Layout>
  )
}

export default Resources