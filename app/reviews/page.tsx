import type { Metadata } from 'next'
import { siteConfig } from '@/siteConfig'
import { pageMeta } from '@/lib/seo'
import { PageHero } from '@/components/PageHero'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Reviews } from '@/components/Reviews'
import { FinalCTA } from '@/components/FinalCTA'

export const metadata: Metadata = pageMeta({
  title: "Reviews | Juanito's Tacos, Champaign-Urbana",
  description:
    'See what neighbors say about Juanito’s Tacos in Urbana, IL, and leave a review of your own. Authentic Mexican street food made fresh every day.',
  path: '/reviews',
})

export default function ReviewsPage() {
  const fb = siteConfig.social.facebook
  const gbp = siteConfig.googleBusinessProfileUrl

  return (
    <>
      <PageHero
        kicker="Kind words"
        title="Reviews"
        intro="We are grateful for every guest. Read a few kind words, then tell us how we did. Your review helps other neighbors find us."
      />
      <Breadcrumbs crumbs={[{ name: 'Home', path: '/' }, { name: 'Reviews', path: '/reviews' }]} />

      <Reviews withHeading={false} />

      <section className="section">
        <div className="container-x text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">Loved your visit? Leave us a review</h2>
          <p className="mx-auto mt-3 max-w-xl text-charcoal/75">
            A quick review means the world to a small family business, and it helps your neighbors discover us.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href={fb.href} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Review us on Facebook
            </a>
            {gbp ? (
              <a href={gbp} target="_blank" rel="noopener noreferrer" className="btn-outline">
                Review us on Google
              </a>
            ) : (
              <span className="btn-outline cursor-not-allowed opacity-60" title="Add Google Business Profile link in siteConfig.ts">
                Google review link coming soon
              </span>
            )}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
