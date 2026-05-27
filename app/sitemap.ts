import { MetadataRoute } from 'next'
import { MOCK_JOURNAL } from '@/lib/mock-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ay-nur.de' // hypothetical base URL

  const journals = MOCK_JOURNAL.map((journal) => ({
    url: `${baseUrl}/journal/${journal.id}`,
    lastModified: new Date(journal.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/journal`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...journals,
  ]
}
