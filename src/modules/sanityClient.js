import { createClient } from '@sanity/client';

export const sanity = createClient({
  projectId: '1d9ojoh4',      // 👈 from sanity.json or manage.sanity.io
  dataset: 'production',
  apiVersion: '2023-06-01',
  useCdn: true,                      // faster, cached
});