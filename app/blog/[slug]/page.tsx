import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { pageMeta } from '@/lib/seo'
import { getPost, postSlugs } from '@/lib/posts'
import { formatDate } from '@/lib/format'
import { articleSchema } from '@/lib/structured-data'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import { FinalCTA } from '@/components/FinalCTA'

type Params = { slug: string }

export function generateStaticParams(): Params[] {
  return postSlugs.map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const post = getPost(params.slug)
  if (!post) return {}
  return pageMeta({
    title: post.seoTitle,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: 'article',
  })
}

export default function BlogPostPage({ params }: { params: Params }) {
  const post = getPost(params.slug)
  if (!post) notFound()

  const related = post.related
    .map((slug) => getPost(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))

  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />

      <article className="section">
        <div className="container-x">
          <header className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3 text-sm text-charcoal/55">
              <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time>
              <span aria-hidden="true">·</span>
              <span>{post.readingTime}</span>
            </div>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">{post.title}</h1>
            <p className="mt-5 text-lg text-charcoal/70">{post.excerpt}</p>
          </header>

          <div
            className="prose prose-taco mx-auto mt-12 max-w-prose prose-headings:font-display prose-a:font-semibold"
            // Content is authored by us in lib/posts.ts, not user input.
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {related.length > 0 && (
            <aside className="mx-auto mt-16 max-w-3xl border-t border-black/10 pt-8">
              <h2 className="text-xl font-bold">Read next</h2>
              <ul className="mt-4 space-y-2">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/blog/${r.slug}`} className="font-semibold text-taco hover:underline">
                      {r.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-6">
                <Link href="/blog" className="font-semibold text-charcoal hover:text-taco">
                  &larr; Back to all posts
                </Link>
              </p>
            </aside>
          )}
        </div>
      </article>

      <FinalCTA />

      <JsonLd
        data={articleSchema({
          title: post.title,
          description: post.description,
          path: `/blog/${post.slug}`,
          datePublished: post.datePublished,
          dateModified: post.dateModified,
        })}
      />
    </>
  )
}
