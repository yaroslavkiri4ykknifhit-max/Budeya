import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://recruitingworkinbelarus.com'
  const languages = ['en', 'bn', 'ur', 'si']

  return languages.map((lang) => ({
    url: `${baseUrl}/${lang}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: lang === 'en' ? 1 : 0.8,
  }))
}
