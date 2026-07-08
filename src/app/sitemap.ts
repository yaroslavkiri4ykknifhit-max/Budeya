import { MetadataRoute } from 'next'
import { LANGUAGES } from '@/lib/i18n'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://recruitingworkinbelarus.com'
  const paths = ['', '/privacy', '/terms']

  return LANGUAGES.flatMap((lang) => paths.map((path) => ({
    url: `${baseUrl}/${lang}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: path === '' ? (lang === 'en' ? 1 : 0.8) : 0.4,
  })))
}
