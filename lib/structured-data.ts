import { siteConfig, fullAddress } from '@/siteConfig'
import { absoluteUrl } from '@/lib/seo'
import { reviews } from '@/lib/reviews'
import type { FaqItem } from '@/lib/faqs'

const ORG_ID = `${siteConfig.url}/#restaurant`

function socialSameAs(): string[] {
  return Object.values(siteConfig.social)
    .filter((s) => !s.placeholder)
    .map((s) => s.href)
}

function postalAddress() {
  return {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.zip,
    addressCountry: siteConfig.address.country,
  }
}

/**
 * The site-wide LocalBusiness / Restaurant node. Rendered once in the root
 * layout so every page carries consistent NAP, hours, geo and areaServed.
 *
 * AggregateRating is only included when reviews.publishSchema is true. We never
 * emit rating markup for placeholder reviews, because fake review data violates
 * Google's guidelines and can get a site penalized.
 */
export function restaurantSchema() {
  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': ['Restaurant', 'FoodEstablishment'],
    '@id': ORG_ID,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phoneRaw,
    email: siteConfig.email,
    image: absoluteUrl('/images/juanitos-food-truck-urbana.svg'),
    priceRange: siteConfig.priceRange,
    servesCuisine: ['Mexican', 'Tacos', 'Street Food'],
    address: postalAddress(),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    hasMap: `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}`,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: siteConfig.hours.opens,
        closes: siteConfig.hours.closes,
      },
    ],
    areaServed: siteConfig.serviceArea.map((t) => ({
      '@type': 'City',
      name: `${t.name}, ${siteConfig.address.state}`,
    })),
    hasMenu: absoluteUrl('/menu'),
    acceptsReservations: false,
  }

  const sameAs = socialSameAs()
  if (sameAs.length) data.sameAs = sameAs

  if (reviews.publishSchema && reviews.items.length) {
    const ratings = reviews.items.map((r) => r.rating)
    const avg = ratings.reduce((a, b) => a + b, 0) / ratings.length
    data.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: avg.toFixed(1),
      reviewCount: reviews.items.length,
      bestRating: 5,
      worstRating: 1,
    }
    data.review = reviews.items.map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.author },
      reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5 },
      reviewBody: r.body,
    }))
  }

  return data
}

/** BreadcrumbList. Pass ordered crumbs, each with a name and a site-relative path. */
export function breadcrumbSchema(crumbs: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  }
}

/** FAQPage for the FAQ page. */
export function faqSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }
}

/** BlogPosting / Article for a blog post. */
export function articleSchema(input: {
  title: string
  description: string
  path: string
  datePublished: string
  dateModified?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: input.title,
    description: input.description,
    mainEntityOfPage: { '@type': 'WebPage', '@id': absoluteUrl(input.path) },
    url: absoluteUrl(input.path),
    image: absoluteUrl('/images/juanitos-food-truck-urbana.svg'),
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    author: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
      logo: { '@type': 'ImageObject', url: absoluteUrl('/icon.svg') },
    },
  }
}

/** Menu with sections + items, referenced from the restaurant node. */
export function menuSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    name: `${siteConfig.name} Menu`,
    url: absoluteUrl('/menu'),
    hasMenuSection: siteConfig.menu.map((cat) => ({
      '@type': 'MenuSection',
      name: cat.name,
      hasMenuItem: cat.items.map((item) => ({
        '@type': 'MenuItem',
        name: item.name,
        description: item.description,
        offers: { '@type': 'Offer', price: item.price.replace(/[^0-9.]/g, ''), priceCurrency: 'USD' },
      })),
    })),
  }
}
