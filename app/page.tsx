import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/siteConfig'
import { pageMeta } from '@/lib/seo'
import { faqs } from '@/lib/faqs'
import { telHref } from '@/lib/links'
import { Img } from '@/components/Img'
import { CTAButtons } from '@/components/CTAButtons'
import { SectionHeading } from '@/components/SectionHeading'
import { Reviews } from '@/components/Reviews'
import { FinalCTA } from '@/components/FinalCTA'
import { InfoCard } from '@/components/InfoCard'
import { MapEmbed } from '@/components/MapEmbed'
import { FaqList } from '@/components/FaqList'
import { PhoneIcon } from '@/components/icons'

export const metadata: Metadata = pageMeta({
  title: "Juanito's Tacos | Mexican Street Tacos in Urbana & Champaign",
  description:
    'Authentic Mexican street tacos, burritos and quesadillas made fresh every day in Urbana, IL. Serving Champaign-Urbana and nearby towns. Open 7 days, 9 AM to 8:30 PM.',
  path: '/',
})

const trustPoints = [
  { emoji: '🌮', title: 'Real street food', text: 'Tacos the authentic way, on warm corn tortillas with fresh cilantro and onion.' },
  { emoji: '🔥', title: 'Made to order', text: 'Everything is cooked fresh when you order it. No heat lamps, no shortcuts.' },
  { emoji: '📅', title: 'Open every day', text: `We are here ${siteConfig.hours.display.toLowerCase()}, seven days a week.` },
  { emoji: '👨‍👩‍👧', title: 'Family owned', text: 'A family kitchen that treats every guest like a neighbor.' },
]

const howToOrder = [
  { step: '1', title: 'Call or walk up', text: `Call ${siteConfig.phone} to order ahead, or just come see us at the stand.` },
  { step: '2', title: 'Pick your meat', text: 'Choose al pastor, asada, pollo, carnitas and more, then go street style or super.' },
  { step: '3', title: 'Grab it hot', text: 'We cook it fresh and hand it over hot. That is the whole idea.' },
]

export default function HomePage() {
  const featured = siteConfig.menu

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-charcoal text-cream">
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-taco/40 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-masa/20 blur-3xl" />
        <div className="container-x relative grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-masa/15 px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-masa">
              Urbana &amp; Champaign, IL
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
              Authentic Mexican street tacos, made fresh every day
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/80">
              Welcome to {siteConfig.name}. We are your friendly walk-up stand in Urbana serving real tacos,
              super tacos, fish tacos, burritos, quesadillas and more. Cooked to order, priced for everybody,
              open seven days a week.
            </p>
            <div className="mt-8">
              <CTAButtons variant="onDark" />
            </div>
            <p className="mt-5 text-sm text-cream/60">
              Open {siteConfig.hours.daysDisplay.toLowerCase()}, {siteConfig.hours.display}
            </p>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10 sm:aspect-[3/2] lg:aspect-[4/5]">
              <Img
                src="/images/asada-tacos-avocado-urbana.jpg"
                alt="Asada street tacos topped with sliced avocado and fresh salsa from Juanito's Tacos in Urbana, Illinois"
                width={1200}
                height={1500}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu highlights */}
      <section className="section" aria-labelledby="menu-highlights">
        <div className="container-x">
          <SectionHeading
            eyebrow="The good stuff"
            title="Menu highlights"
            intro="Three ways to eat well with us. Tap any category to see everything, or come build your perfect plate at the stand."
          />
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {featured.map((cat, i) => {
              const img = [
                '/images/al-pastor-street-tacos-urbana.jpg',
                '/images/loaded-burrito.jpg',
                '/images/loaded-nachos-asada-juanitos.jpg',
              ][i]
              const imgAlt = [
                "Al pastor street tacos with cilantro and onion at Juanito's Tacos",
                "A hearty loaded burrito with grilled meat, beans, rice and guacamole at Juanito's Tacos",
                "Loaded nachos with melted cheese, meat and pico de gallo at Juanito's Tacos",
              ][i]
              return (
                <li key={cat.slug} className="card group overflow-hidden">
                  <Link href={`/menu/${cat.slug}`} className="block">
                    <div className="aspect-[4/3] overflow-hidden">
                      <Img
                        src={img}
                        alt={imgAlt}
                        width={1200}
                        height={900}
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold group-hover:text-taco">{cat.name}</h3>
                      <p className="mt-2 text-charcoal/75">{cat.tagline}</p>
                      <span className="mt-4 inline-block font-semibold text-taco">See the {cat.name.toLowerCase()} &rarr;</span>
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
          <div className="mt-8">
            <Link href="/menu" className="btn-primary">
              See the full menu
            </Link>
          </div>
        </div>
      </section>

      {/* Trust band */}
      <section className="section bg-white" aria-labelledby="why-us">
        <div className="container-x">
          <h2 id="why-us" className="text-center text-3xl font-extrabold sm:text-4xl">
            Why folks keep coming back
          </h2>
          <div className="mx-auto mt-4 rule-masa" />
          <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((p) => (
              <li key={p.title} className="text-center">
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-cream text-3xl" aria-hidden="true">
                  {p.emoji}
                </span>
                <h3 className="mt-4 text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-charcoal/75">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How to order + find us */}
      <section className="section" aria-labelledby="how-to-order">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Easy as can be" title="How to order" as="h2" />
            <ol className="mt-8 space-y-6">
              {howToOrder.map((s) => (
                <li key={s.step} className="flex gap-4">
                  <span className="grid h-11 w-11 flex-none place-items-center rounded-full bg-taco font-display text-lg font-bold text-white">
                    {s.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold">{s.title}</h3>
                    <p className="mt-1 text-charcoal/75">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <a href={telHref} className="btn-primary mt-8" aria-label={`Call Juanito's Tacos at ${siteConfig.phone}`}>
              <PhoneIcon className="h-5 w-5" />
              Call to order: {siteConfig.phone}
            </a>
          </div>

          <div className="space-y-6">
            <InfoCard />
            <MapEmbed />
          </div>
        </div>
      </section>

      {/* Locations teaser */}
      <section className="section bg-white" aria-labelledby="areas">
        <div className="container-x">
          <SectionHeading
            eyebrow="Neighbors welcome"
            title="Serving Champaign-Urbana and beyond"
            intro="We are based in Urbana and love feeding folks from all around. Find the page for your town for local details and directions."
          />
          <ul className="mt-8 flex flex-wrap gap-3">
            {siteConfig.serviceArea.map((town) => (
              <li key={town.slug}>
                <Link
                  href={`/locations/${town.slug}`}
                  className="inline-flex items-center rounded-full border-2 border-black/10 bg-cream px-5 py-2.5 font-semibold text-charcoal transition-colors hover:border-taco hover:text-taco"
                >
                  {town.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Reviews */}
      <Reviews />

      {/* FAQ teaser */}
      <section className="section" aria-labelledby="faq-teaser">
        <div className="container-x">
          <SectionHeading eyebrow="Good to know" title="Questions we hear a lot" align="center" />
          <div className="mt-8">
            <FaqList items={faqs.slice(0, 5)} />
          </div>
          <div className="mt-8 text-center">
            <Link href="/faq" className="btn-outline">
              See all FAQs
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
