import * as contentful from 'contentful';
const { createClient } = contentful;



export async function fetchContentfulEntries(contentType) {
  try {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });
    
    console.log('Space ID:', process.env.CONTENTFUL_SPACE_ID);
console.log('Access Token:', process.env.CONTENTFUL_ACCESS_TOKEN);

    const res = await client.getEntries({ content_type: contentType });

    return {
      items: res.items,
    };
  } catch (error) {
    console.error('Error fetching Contentful entries:', error);
    return {
      items: [],
    };
  }
}