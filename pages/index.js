import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import { Layout } from "../components";
import { createClient } from "contentful";
import { images } from "../constants";

import styles from "../styles/Home.module.scss";

export async function getStaticProps() {
  try {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    });

    const res = await client.getEntries({ content_type: 'homepage' });

    return {
      props: {
        homepages: res.items
      }
    };
  } catch (error) {
    console.error('Error fetching Contentful entries:', error);
    return {
      props: {
        homepages: []
      }
    };
  }
}

// import Image from 'next/image'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export default function Home({homepages}) {
  console.log(homepages)
  return (
    <>
      <Head>
        <meta name="description" content="Test Founder" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <meta property="og:title" content="Test Founder" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>

      <Layout pageTitle="Homepage">
        {/* Banner */}
        <section class="text-gray-700 body-font">
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Before they sold out
              </h1>
              <p class="mb-8 leading-relaxed">
                Copper mug try-hard pitchfork pour-over freegan heirloom neutra
                air plant cold-pressed tacos poke beard tote bag. Heirloom echo
                park mlkshk tote bag selvage hot chicken authentic tumeric
                truffaut hexagon try-hard chambray.
              </p>
              <div class="flex justify-center">
                <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Button
                </button>
                <button class="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
                  Button
                </button>
              </div>
            </div>
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                class="object-cover object-center rounded"
                alt="hero"
                src="https://dummyimage.com/720x600/edf2f7/a5afbd"
              />
            </div>
          </div>
        </section>
        {/* Testimonials */}
        <div class="container my-24 mx-auto md:px-6">
          <section class="mb-32 text-center">
            <h2 class="mb-12 pb-4 text-center text-3xl font-bold">Testimonials</h2>

            <div class="grid gap-6 md:grid-cols-3 xl:gap-x-12">
              <div class="mb-6 lg:mb-0">
                <div
                  class="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div class="flex">
                    <div
                      class="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                      data-te-ripple-init data-te-ripple-color="light">
                      <img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.jpg" class="w-full" />
                      <a href="#!">
                        <div
                          class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="p-6">
                    <h5 class="mb-2 text-lg font-bold">John Doe</h5>
                    <h6 class="mb-4 font-medium text-primary dark:text-primary-400">
                      Web Developer
                    </h6>
                    <ul class="mb-6 flex justify-center">
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                          <path fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                        </svg>
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                          <path fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                        </svg>
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                          <path fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                        </svg>
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                          <path fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                        </svg>
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                          <path fill="currentColor"
                            d="m480 757 157 95-42-178 138-120-182-16-71-168v387ZM233 976l65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                        </svg>
                      </li>
                    </ul>
                    <p>
                      Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                      placerat vulputate. Ut vulputate est non quam dignissim
                      elementum. Donec a ullamcorper diam.
                    </p>
                  </div>
                </div>
              </div>

              <div class="mb-6 lg:mb-0">
                <div
                  class="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div class="flex">
                    <div
                      class="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                      data-te-ripple-init data-te-ripple-color="light">
                      <img src="https://mdbcdn.b-cdn.net/img/new/avatars/6.jpg" class="w-full" />
                      <a href="#!">
                        <div
                          class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="p-6">
                    <h5 class="mb-2 text-lg font-bold">Halley Frank</h5>
                    <h6 class="mb-4 font-medium text-primary dark:text-primary-400">
                      Marketing Specialist
                    </h6>
                    <ul class="mb-6 flex justify-center">
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                          <path fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                        </svg>
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                          <path fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                        </svg>
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                          <path fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                        </svg>
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                          <path fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                        </svg>
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                          <path fill="currentColor"
                            d="m323 851 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178Zm-90 125 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-355Z" />
                        </svg>
                      </li>
                    </ul>
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus qui
                      blanditiis praesentium accusamus contestatur voluptatum
                      deleniti atque corrupti.
                    </p>
                  </div>
                </div>
              </div>

              <div class="mb-0">
                <div
                  class="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div class="flex">
                    <div
                      class="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                      data-te-ripple-init data-te-ripple-color="light">
                      <img src="https://mdbcdn.b-cdn.net/img/new/avatars/18.jpg" class="w-full" />
                      <a href="#!">
                        <div
                          class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="p-6">
                    <h5 class="mb-2 text-lg font-bold">Lisa Trey</h5>
                    <h6 class="mb-4 font-medium text-primary dark:text-primary-400">
                      Public Relations
                    </h6>
                    <ul class="mb-6 flex justify-center">
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                          <path fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                        </svg>
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                          <path fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                        </svg>
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                          <path fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                        </svg>
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                          <path fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                        </svg>
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                          <path fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                        </svg>
                      </li>
                    </ul>
                    <p>
                      Enim ad minima veniam, quis nostrum exercitationem ullam
                      corporis suscipit laboriosam, nisi ut aliquid commodi quis
                      nostrum minima.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
