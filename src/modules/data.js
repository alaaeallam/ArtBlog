// src/modules/data.js
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: '1d9ojoh4',
  dataset: 'rm',
  apiVersion: '2023-01-01',
  token:'skEUmKsIYhqVeyaSsHrma2DDAEwUatjCnOvKnrHQ69LywyQk0YPi4zLpTCYqUqBFWc9ca7hA5sFZFIHkR3Jdmur7bBVEzN4OhazzIJ7rMejIEzwJqrF3iDCPdj7cCW44ggcARvE14Z5r3pk2TOCzw9IZ5MKJL4ok1nWoMw6kftJ44QnPvi37',
  useCdn: true,
})

export const fetchProjects = async () => {
  const query = `*[_type == "project"]{
    title,
    "slug": slug.current,
    year,
    description,
    "image": image.asset->url
  }`;
  const result = await client.fetch(query);
  console.log("Fetched projects from Sanity:", result); // ✅ ADD THIS
  return result;
};