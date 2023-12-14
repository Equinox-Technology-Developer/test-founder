import { Layout } from '@/components';
import React from 'react';
import { fetchContentfulEntries } from '@/helper/contenfulHelper';

const About = ({ resources }) => {
  return <Layout pageTitle="About"></Layout>;
};

export async function getStaticProps() {
  const contentType = 'landingPage'; // Modify the content type here
  const propsKey = 'resources'; // Modify the props key here
  const catchKey = 'error'; // Modify the catch key here
  const indexToRead = 9; // Modify the index you want to read

  try {
    const dynamicData = await fetchContentfulEntries(
      contentType,
      propsKey,
      catchKey,
      indexToRead,
    );

    return {
      props: dynamicData,
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return {
      props: {
        [catchKey]: 'An unexpected error occurred.',
      },
    };
  }
}

export default About;
