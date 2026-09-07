import type { MetadataRoute } from 'next'

const BASE_URL = 'https://marketing.olnoo.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]

  return [...staticRoutes]
}
