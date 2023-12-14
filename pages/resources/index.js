import { Layout } from '@/components'
import React from 'react'
import { fetchContentfulEntries } from '@/helper/contenfulHelper'

import styles from './Resources.module.scss'

const Resources = ({contentfulEntries}) => {
  console.log(contentfulEntries)
  return (
    <Layout pageTitle="Resources">

    </Layout>
  )
}

export async function getStaticProps() {
  const contentType = 'landingPage'; // Modify content type here
  const { items } = await fetchContentfulEntries(contentType);

  const entries = items.find(entry => entry.fields.internalName === 'Homepage');

  // Check if the entry is found
  if (entries) {
    console.log("Found the homepage entry:", entries);
  } else {
    console.log("Homepage entry not found.");
  }

  return {
    props: {
      contentfulEntries: entries ? entries.fields : {}, // Modify key-value of props
    },
  };
}

export default Resources