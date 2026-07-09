import type { Metadata } from 'next'
import { siteConfig } from '@/siteConfig'

/** Build an absolute URL from a site-relative path. */
export function absoluteUrl(path: string): string {
  if (!path || path === '/') return siteConfig.url
  const clean = path.startsWith('/') ? path : `/${path}`
  return `${siteConfig.url}${clean}`
}

type PageMetaInput = {
  /** Full, unique <title> for this page. Keep it under ~60 characters. */
  title: string
  /** Unique meta description. Keep it roughly 150 to 160 characters. */
  description: string
  /** Site-relative path, for example "/menu/tacos". Used for the canonical URL. */
  path: string
  /** Open Graph type. Use "article" for blog posts. */
  type?: 'website' | 'article'
}

/**
 * Produces a complete, SEO-correct Metadata object: unique title + description,
 * a self-referencing canonical URL, and Open Graph + Twitter tags. Every page
 * uses this so nothing is left off by accident.
 *
 * The share image is supplied automatically by app/opengraph-image.tsx (Next
 * adds it to every page's OG and Twitter tags), so it is not set here.
 */
export function pageMeta({ title, description, path, type = 'website' }: PageMetaInput): Metadata {
  const url = absoluteUrl(path)

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: 'en_US',
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}
