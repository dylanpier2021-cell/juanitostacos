import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/siteConfig'
import { pageMeta } from '@/lib/seo'
import { menuSchema } from '@/lib/structured-data'
import { PageHero } from '@/components/PageHero'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { MenuItemCard } from '@/components/MenuItemCard'
import { SectionHeading } from '@/components/SectionHeading'
import { JsonLd } from '@/components/JsonLd'
import { FinalCTA } from '@/components/FinalCTA'

export const metadata: Metadata = pageMeta({
  title: "Menu | Juanito's Tacos in Urbana & Champaign",
  description:
    'The full Juanito’s Tacos menu: street tacos, super tacos, fish tacos, burritos, tortas, quesadillas and nachos. Choose your meat, made fresh daily in Urbana, IL.',
  path: '/menu',
})

export default function MenuPage() {
  return (
    <>
      <PageHero
        kicker="Made fresh daily"
        title="Our Menu"
        intro="Real Mexican street food, cooked to order. Pick your meat, then keep it classic or load it up. Prices shown are current placeholders you can confirm with us at the stand."
      />
      <Breadcrumbs crumbs={[{ name: 'Home', path: '/' }, { name: 'Menu', path: '/menu' }]} />

      <div className="section">
        <div className="container-x space-y-16">
          {siteConfig.menu.map((cat) => (
            <section key={cat.slug} aria-labelledby={`cat-${cat.slug}`}>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <SectionHeading eyebrow={cat.tagline} title={cat.name} as="h2" className="mb-0" />
                <Link href={`/menu/${cat.slug}`} className="font-semibold text-taco hover:underline">
                  More about {cat.name.toLowerCase()} &rarr;
                </Link>
              </div>
              <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {cat.items.map((item) => (
                  <MenuItemCard key={item.name} item={item} />
                ))}
              </ul>
            </section>
          ))}

          {/* Meats */}
          <section aria-labelledby="meats" className="card p-8">
            <h2 id="meats" className="text-2xl font-bold">
              Choose your meat
            </h2>
            <p className="mt-2 text-charcoal/75">
              Every taco, burrito, torta, quesadilla and nacho starts with your choice of meat.
            </p>
            <ul className="mt-6 flex flex-wrap gap-3">
              {siteConfig.meats.map((m) => (
                <li
                  key={m.name}
                  className="rounded-full border border-black/10 bg-cream px-4 py-2 text-sm font-semibold text-charcoal"
                >
                  {m.name}
                  <span className="ml-1 font-normal text-charcoal/55">({m.note})</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-lime">
              Placeholder list — confirm the full meat selection and spellings
            </p>
          </section>
        </div>
      </div>

      <FinalCTA
        title="See something you like?"
        text="Give us a call to order ahead, or come build your plate at the stand. We are open every day."
        showMenu={false}
      />

      <JsonLd data={menuSchema()} />
    </>
  )
}
