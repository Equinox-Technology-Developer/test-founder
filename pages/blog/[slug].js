import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaTwitter, FaFacebookSquare, FaLinkedin   } from "react-icons/fa";

import { fetchContentfulEntries } from '@/helper/accessContentful';
import { Layout } from '@/components';

import styles from './Blog.module.scss'

export default function Post(post) {
  const router = useRouter();
  const articleItem = post.post.fields
  console.log(articleItem);
  return (
    <Layout pageTitle={articleItem.title} key={router.query.slug}>
      {/* Top Menu - Category */}
      <section className="w-full bg-[#f5f6f6]">
        <div className="container mx-auto mt-28 p-4">
          <div className="flex w-full items-center justify-center gap-20">
            <p className='cursor-pointer'>All</p>
            <p className='cursor-pointer'>Hiring & Recruiting</p>
            <p className='cursor-pointer'>Human Resources</p>
            <p className='cursor-pointer'>Science</p>
            <p className='cursor-pointer'>Skills-based Hiring</p>
            <p className='cursor-pointer'>Talent Assesment</p>
            <p className='cursor-pointer'>Test Founder</p>
          </div>
        </div>
      </section>

      {/* Article - Blog articleItem */}
      <section key={articleItem}>
        <div className="container mx-auto p-5 md:p-12">
          <div className="mx-auto gap-6 flex items-center justify-between w-full md:max-w-screen-xl">
            {/* Content */}
            <div className={`w-full flex-col md:min-w-min ${styles.blogPost}`}>
              <h1 className='heading-3 md:heading-1 '>{articleItem.title}</h1>
              <Image src={`https:${articleItem.featuredImage.fields.file.url}`}
              width={articleItem.featuredImage.fields.file.details.image.width}
              height={articleItem.featuredImage.fields.file.details.image.height}
              alt={`Featured Image for ${articleItem.title}`}
              className='img py-5' />

              <p className='caption-regular-3 my-2'>{articleItem.excerpt}</p>

              <div className='flex flex-col md:flex-row justify-between items-center'>
                <div className='flex justify-between items-center gap-2'>
                  <Image
                  src={`https:${articleItem.author.fields.image.fields.file.url}`}
                  width={articleItem.author.fields.image.fields.file.details.image.width}
                  height={articleItem.author.fields.image.fields.file.details.image.height} />
                  <p>{articleItem.author.fields.name}</p>
                  <date className="caption-regular-4 ml-4">
                      {new Date(
                        articleItem.author.fields.image.sys.createdAt,
                      ).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </date>
                </div>
                <div className='flex  justify-center items-center gap-2'>
                  <FaLinkedin />
                  <FaFacebookSquare />
                  <FaTwitter />
                </div>
              </div>
              
              <div>
                <p className='my-10'>{articleItem.bodyContent.content[0].content[0].value}</p>
              </div>

            </div>

            {/* Right Banner */}
            <div className='md:block hidden'>
              <h2 className='heading-2'>Lastest Post</h2>
              
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const { items } = await fetchContentfulEntries('blogPost');

  const paths = items.map((post) => ({
    params: { slug: post.fields.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;

  try {
    const { items } = await fetchContentfulEntries('blogPost');

    const post = items.find((post) => post.fields.slug === slug);

    if (!post) {
      return {
        redirect: {
          destination: '/blog',
          permanent: false,
        },
      };
    }

    return {
      props: {
        post,
      },
    };
  } catch (error) {
    console.error('Error fetching Contentful entries:', error);

    return {
      props: {
        post: null,
      },
    };
  }
};
