import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: 'g6bh4o1y',
    dataset: 'production',
    apiVersion: '2023-04-19',
    useCdn: false,
    // token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
