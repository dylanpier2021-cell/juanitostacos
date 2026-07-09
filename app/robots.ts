import type { MetadataRoute } from 'next'
import { siteConfig } from '@/siteConfig'

/**
 * Auto-generated robots.txt (served at /robots.txt). Everything is allowed to be
 * crawled and indexed, and the sitemap is pointed to explicitly.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  }
}
