import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

import { FaTwitter, FaFacebookSquare, FaLinkedin } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';
import { Layout } from '@/components';
import { fetchContentfulEntries } from '@/lib/contentful/client';

import styles from './Blog.module.scss';

export default function Post({ post, latestPosts, relatedPosts }) {
  const router = useRouter();
  const articleItem = post.fields;

  console.log(articleItem);
  return (
    <Layout pageTitle={articleItem.title} key={router.query.slug}>
      {/* Top Menu - Category */}
      <section className="w-full bg-[#f5f6f6]">
        <div className="container mx-auto mt-28 p-4">
          <div className="flex w-full items-center justify-center gap-20">
            <p className="cursor-pointer">All</p>
            <p className="cursor-pointer">Hiring & Recruiting</p>
            <p className="cursor-pointer">Human Resources</p>
            <p className="cursor-pointer">Science</p>
            <p className="cursor-pointer">Skills-based Hiring</p>
            <p className="cursor-pointer">Talent Assesment</p>
            <p className="cursor-pointer">Test Founder</p>
          </div>
        </div>
      </section>

      {/* Article - Blog articleItem */}
      <section key={articleItem}>
        <div className="container mx-auto p-5 md:p-12">
          <div className="mx-auto flex w-full items-center justify-between md:max-w-screen-xl md:gap-6">
            {/* Left Content */}
            <div>
              {/* Main Content */}
              <div
                className={`w-full flex-col md:min-w-min ${styles.blogPost}`}
              >
                <h1 className="heading-3 md:heading-1 ">{articleItem.title}</h1>
                <Image
                  src={`https:${articleItem.featuredImage.fields.file.url}`}
                  width={
                    articleItem.featuredImage.fields.file.details.image.width
                  }
                  height={
                    articleItem.featuredImage.fields.file.details.image.height
                  }
                  alt={`Featured Image for ${articleItem.title}`}
                  className="img py-5"
                />

                <p className="caption-regular-3 my-2">{articleItem.excerpt}</p>

                <div className="flex flex-col items-center justify-between md:flex-row">
                  <div className="flex items-center justify-between gap-2">
                    <Image
                      src={`https:${articleItem.author.fields.image.fields.file.url}`}
                      width={
                        articleItem.author.fields.image.fields.file.details
                          .image.width
                      }
                      height={
                        articleItem.author.fields.image.fields.file.details
                          .image.height
                      }
                    />
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
                  <div className="flex  items-center justify-center gap-2">
                    <FaLinkedin />
                    <FaFacebookSquare />
                    <FaTwitter />
                  </div>
                </div>

                <div className="my-10">
                  {articleItem.bodyContent.content.map((item, index) => {
                    if (item.nodeType === 'paragraph') {
                      return (
                        <p key={index} className="caption-regular-2 mb-6">
                          {item.content[0].value}
                        </p>
                      );
                    } else if (item.nodeType === 'heading-1') {
                      return (
                        <h2 key={index} className="heading-1 mb-9">
                          {item.content[0].value}
                        </h2>
                      );
                    } else if (item.nodeType === 'heading-2') {
                      return (
                        <h2 key={index} className="heading-2 mb-9">
                          {item.content[0].value}
                        </h2>
                      );
                    } else if (item.nodeType === 'heading-3') {
                      return (
                        <h3 key={index} className="heading-3 mb-6">
                          {item.content[0].value}
                        </h3>
                      );
                    } else if (item.nodeType === 'unordered-list') {
                      return (
                        <ul key={index} className="mb-6 ml-6 list-disc">
                          {item.content.map((li, index) => (
                            <li key={index} className="caption-regular-2">
                              {li.content[0].content[0].value}
                              {li.content[0].content.map((subItem) => (
                                <span key={index} className="caption-regular-2">
                                  {' '}
                                  {subItem.value}
                                </span>
                              ))}
                            </li>
                          ))}
                        </ul>
                      );
                    } else if (item.nodeType === 'ordered-list') {
                      return (
                        <ol key={index} className="mb-6 ml-6 list-decimal">
                          {item.content.map((li, index) => (
                            <li key={index} className="caption-regular-2">
                              {li.content[0].value}
                              {li.content[0].content.map((subItem) => (
                                <span key={index} className="caption-regular-2">
                                  {' '}
                                  {subItem.value}
                                </span>
                              ))}
                            </li>
                          ))}
                        </ol>
                      );
                    }
                  })}
                </div>
              </div>

              {/* Related Post */}
              <div className={styles.relatedPost_container}>
                <h2 className="heading-2">Related Posts</h2>
                <div className={styles.relatedPost_wrapper}>
                  {/* Render related posts */}
                  {relatedPosts.map((post) => (
                    <Link href={`/blog/${post.fields.slug}`}>
                      <Image
                        src={`https:${post.fields.featuredImage.fields.file.url}`}
                        height={
                          post.fields.featuredImage.fields.file.details.image
                            .height
                        }
                        width={
                          post.fields.featuredImage.fields.file.details.image
                            .width
                        }
                        alt={post.fields.internalName}
                      />
                      <p>{post.fields.title}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="hidden w-full flex-col gap-10  self-start md:flex">
              <div className="relative flex w-full xl:w-fit ">
                <input
                  type="text"
                  className="w-full rounded-[10px] bg-white px-4 py-[10px] shadow-[0_4px_10px_0px_rgba(0,0,0,0.15)] placeholder:text-base placeholder:text-[#CBCBCB] xl:w-[365px] "
                  placeholder="Search anything here"
                />
                <Image
                  src="/assets/icon-search.svg"
                  alt="icon-search"
                  width={20}
                  height={20}
                  sizes="100vw"
                  className="absolute right-4 top-1/2 flex h-auto -translate-y-1/2"
                />
              </div>
              <div className={styles.cards}>
                <h2 className="heading-2">Latest Posts</h2>
                {/* Render latest posts */}
                <div className={styles.latestPosts_wrapper}>
                  {latestPosts.map((post) => (
                    <Link href={`/blog/${post.fields.slug}`}>
                      <div className={styles.latestPosts_item}>
                        <Image
                          src={`https:${post.fields.featuredImage.fields.file.url}`}
                          height={
                            post.fields.featuredImage.fields.file.details.image
                              .height
                          }
                          width={
                            post.fields.featuredImage.fields.file.details.image
                              .width
                          }
                          alt={post.fields.internalName}
                        />
                        <p>{post.fields.title}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              {/* Subscription */}
              {/* <div className={styles.cards}>
                <h3 className="heading-3">The best advice in pre-employment testing, in your inbox.</h3>
                <p>No spam. Unsubscribe at any time</p>
              </div> */}

              {/* Sticky Banner Registration */}
              {/* <div></div> */}
            </div>

            {/* Close Button */}
            {/* <CgClose /> */}
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

    // Logic to fetch latest posts
    const latestPosts = items.slice(0, 5); // Example: Get first 5 posts as latest

    // Logic to fetch related posts
    const relatedPosts = items
      .filter(
        (p) =>
          p.fields.category === post.fields.category && p.fields.slug !== slug,
      )
      .slice(0, 3);

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
        latestPosts,
        relatedPosts,
      },
    };
  } catch (error) {
    console.error('Error fetching Contentful entries:', error);

    return {
      props: {
        post: null,
        latestPosts: [],
        relatedPosts: [],
      },
    };
  }
};
