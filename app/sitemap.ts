import type { MetadataRoute } from 'next'
import { siteConfig } from '@/siteConfig'
import { posts } from '@/lib/posts'
import { locationSlugs } from '@/lib/locations'

/**
 * Auto-generated sitemap covering every indexable page. Next serves this at
 * /sitemap.xml. New menu categories, towns and blog posts are picked up
 * automatically from the data files.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url
  const now = new Date()

  const staticPaths: { path: string; priority: number }[] = [
    { path: '/', priority: 1 },
    { path: '/menu', priority: 0.9 },
    { path: '/locations', priority: 0.8 },
    { path: '/about', priority: 0.7 },
    { path: '/gallery', priority: 0.6 },
    { path: '/reviews', priority: 0.6 },
    { path: '/blog', priority: 0.7 },
    { path: '/contact', priority: 0.7 },
    { path: '/faq', priority: 0.6 },
    { path: '/privacy', priority: 0.2 },
    { path: '/terms', priority: 0.2 },
  ]

  const entries: MetadataRoute.Sitemap = staticPaths.map((p) => ({
    url: `${base}${p.path === '/' ? '' : p.path}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: p.priority,
  }))

  for (const cat of siteConfig.menu) {
    entries.push({
      url: `${base}/menu/${cat.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    })
  }

  for (const slug of locationSlugs) {
    entries.push({
      url: `${base}/locations/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  }

  for (const post of posts) {
    entries.push({
      url: `${base}/blog/${post.slug}`,
      lastModified: new Date(`${post.dateModified ?? post.datePublished}T12:00:00Z`),
      changeFrequency: 'yearly',
      priority: 0.6,
    })
  }

  return entries
}
