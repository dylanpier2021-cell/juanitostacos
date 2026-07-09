import type { Metadata } from 'next'
import Link from 'next/link'
import { pageMeta } from '@/lib/seo'
import { posts } from '@/lib/posts'
import { formatDate } from '@/lib/format'
import { PageHero } from '@/components/PageHero'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { FinalCTA } from '@/components/FinalCTA'

export const metadata: Metadata = pageMeta({
  title: "Blog | Juanito's Tacos, Champaign-Urbana",
  description:
    'Tips, guides and local flavor from Juanito’s Tacos in Urbana. Learn how to order like a local, what to eat, and the best of Mexican street food in Champaign-Urbana.',
  path: '/blog',
})

// Newest first, without relying on the runtime clock.
const sortedPosts = [...posts].sort((a, b) => (a.datePublished < b.datePublished ? 1 : -1))

export default function BlogPage() {
  return (
    <>
      <PageHero
        kicker="From the stand"
        title="The Juanito's Tacos blog"
        intro="Helpful, honest answers to the questions we hear most, plus a little love for Mexican street food and our Champaign-Urbana neighbors."
      />
      <Breadcrumbs crumbs={[{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }]} />

      <section className="section">
        <div className="container-x">
          <ul className="grid gap-8 md:grid-cols-2">
            {sortedPosts.map((post) => (
              <li key={post.slug} className="card flex flex-col p-7">
                <div className="flex items-center gap-3 text-sm text-charcoal/55">
                  <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time>
                  <span aria-hidden="true">·</span>
                  <span>{post.readingTime}</span>
                </div>
                <h2 className="mt-3 text-2xl font-bold leading-snug">
                  <Link href={`/blog/${post.slug}`} className="hover:text-taco">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 flex-1 text-charcoal/75">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="mt-5 font-semibold text-taco hover:underline">
                  Read more &rarr;
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
