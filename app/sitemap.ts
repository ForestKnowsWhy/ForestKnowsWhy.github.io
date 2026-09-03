import type { MetadataRoute } from 'next';

const siteUrl = 'https://forestknowswhy.github.io';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${siteUrl}/research/`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/cv/`,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
  ];
}
