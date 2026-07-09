import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { siteConfig } from '@/siteConfig'
import { pageMeta } from '@/lib/seo'
import { locationSlugs, getLocation } from '@/lib/locations'
import { PageHero } from '@/components/PageHero'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { InfoCard } from '@/components/InfoCard'
import { MapEmbed } from '@/components/MapEmbed'
import { CTAButtons } from '@/components/CTAButtons'
import { PinIcon } from '@/components/icons'

type Params = { city: string }

export function generateStaticParams(): Params[] {
  return locationSlugs.map((slug) => ({ city: slug }))
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const loc = getLocation(params.city)
  if (!loc) return {}
  return pageMeta({
    title: loc.seoTitle,
    description: loc.seoDescription,
    path: `/locations/${loc.slug}`,
  })
}

export default function LocationPage({ params }: { params: Params }) {
  const loc = getLocation(params.city)
  if (!loc) notFound()
  const otherTowns = siteConfig.serviceArea.filter((t) => t.slug !== loc.slug)

  return (
    <>
      <PageHero kicker={loc.heroKicker} title={loc.heroHeading} intro={loc.intro}>
        <CTAButtons variant="onDark" />
      </PageHero>
      <Breadcrumbs
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Locations', path: '/locations' },
          { name: loc.name, path: `/locations/${loc.slug}` },
        ]}
      />

      <article className="section">
        <div className="container-x grid gap-12 lg:grid-cols-3">
          {/* Main copy */}
          <div className="lg:col-span-2">
            <p className="flex items-center gap-2 text-sm font-semibold text-taco">
              <PinIcon className="h-5 w-5" />
              {loc.distance}
            </p>

            <div className="mt-6 space-y-4 text-lg leading-relaxed text-charcoal/80">
              {loc.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Local landmarks */}
            <h2 className="mt-12 text-2xl font-bold sm:text-3xl">Around {loc.name}</h2>
            <div className="mt-2 rule-masa" />
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {loc.landmarks.map((lm) => (
                <li key={lm.name} className="card p-5">
                  <h3 className="font-bold text-charcoal">{lm.name}</h3>
                  <p className="mt-1 text-sm text-charcoal/70">{lm.blurb}</p>
                </li>
              ))}
            </ul>

            <p className="mt-8 rounded-2xl bg-masa/15 p-5 text-charcoal/85">
              <span className="font-bold">Local tip: </span>
              {loc.localTip}
            </p>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <InfoCard />
            <MapEmbed />
            <div className="card p-6">
              <h2 className="text-lg font-bold">Other towns we serve</h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {otherTowns.map((t) => (
                  <li key={t.slug}>
                    <Link
                      href={`/locations/${t.slug}`}
                      className="inline-block rounded-full border border-black/10 bg-cream px-3 py-1.5 text-sm font-semibold hover:border-taco hover:text-taco"
                    >
                      {t.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </article>

      {/* Local CTA */}
      <section className="section bg-taco text-white">
        <div className="container-x text-center">
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold sm:text-4xl">
            {loc.name}, come get your tacos
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Fresh, made-to-order Mexican street food is closer than you think. Call ahead or walk right up.
          </p>
          <div className="mt-8 flex justify-center">
            <CTAButtons variant="onDark" className="justify-center" />
          </div>
        </div>
      </section>
    </>
  )
}
