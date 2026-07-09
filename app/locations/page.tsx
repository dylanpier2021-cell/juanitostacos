import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/siteConfig'
import { pageMeta } from '@/lib/seo'
import { locations } from '@/lib/locations'
import { PageHero } from '@/components/PageHero'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { InfoCard } from '@/components/InfoCard'
import { MapEmbed } from '@/components/MapEmbed'
import { FinalCTA } from '@/components/FinalCTA'

export const metadata: Metadata = pageMeta({
  title: "Locations We Serve | Juanito's Tacos, Champaign-Urbana",
  description:
    'Juanito’s Tacos serves Urbana, Champaign, Savoy, Mahomet, Rantoul, St. Joseph and Tolono, IL. Find local details and directions for your town.',
  path: '/locations',
})

export default function LocationsPage() {
  return (
    <>
      <PageHero
        kicker="Serving Champaign-Urbana"
        title="Areas we serve"
        intro="We are based in Urbana and welcome guests from all across the region. Find your town below for local details, landmarks and directions to the stand."
      />
      <Breadcrumbs crumbs={[{ name: 'Home', path: '/' }, { name: 'Locations', path: '/locations' }]} />

      <section className="section">
        <div className="container-x">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.serviceArea.map((town) => {
              const loc = locations[town.slug]
              return (
                <li key={town.slug} className="card group flex flex-col p-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold group-hover:text-taco">{town.name}</h2>
                    {town.homeBase && (
                      <span className="rounded-full bg-taco/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-taco">
                        Home base
                      </span>
                    )}
                  </div>
                  <p className="mt-3 flex-1 text-charcoal/75">{loc?.distance}</p>
                  <Link href={`/locations/${town.slug}`} className="mt-4 font-semibold text-taco hover:underline">
                    {town.name} details &rarr;
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <InfoCard />
            <MapEmbed />
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
