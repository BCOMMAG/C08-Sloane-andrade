import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sloaneandrade-adv.vercel.app';
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/links`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}