import { createClient } from 'contentful';

export async function fetchContentfulEntries(
  contentType,
  propsKey,
  catchKey,
  index = 0,
) {
  try {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });

    const res = await client.getEntries({ content_type: contentType });

    const specificEntry = res.items[index];

    if (!specificEntry) {
      console.error(`No entry found at index ${index} for ${contentType}`);
      return {
        [catchKey]: `No entry found at index ${index} for ${contentType}`,
      };
    }

    return {
      [propsKey]: specificEntry.fields,
    };
  } catch (error) {
    console.error(
      `Error fetching Contentful entries for ${contentType}:`,
      error,
    );
    return {
      [catchKey]: `Error fetching Contentful entries for ${contentType}`,
    };
  }
}
