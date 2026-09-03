import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://yingwen-tan.tanyingwenhaha.chatgpt.site/sitemap.xml',
  };
}
