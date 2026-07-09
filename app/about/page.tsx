import type { Metadata } from 'next'
import { siteConfig } from '@/siteConfig'
import { pageMeta } from '@/lib/seo'
import { PageHero } from '@/components/PageHero'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Img } from '@/components/Img'
import { FinalCTA } from '@/components/FinalCTA'

export const metadata: Metadata = pageMeta({
  title: "About Us | Juanito's Tacos, Urbana IL",
  description:
    'Meet the family behind Juanito’s Tacos in Urbana, IL. Learn why we cook real Mexican street food, made fresh every day, and what makes our tacos different.',
  path: '/about',
})

// Clearly-labeled placeholder for the box explaining what still needs confirming.
function PlaceholderNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="rounded-xl border-2 border-dashed border-lime/60 bg-lime/5 px-4 py-3 text-sm font-semibold text-lime">
      {children}
    </p>
  )
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="Our story"
        title="A family taco stand, made with heart"
        intro="Juanito’s Tacos is a family kitchen serving the real Mexican street food we grew up loving, right here in Urbana."
      />
      <Breadcrumbs crumbs={[{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }]} />

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-card sm:aspect-square lg:aspect-[4/5]">
            <Img
              src="/images/juanitos-tacos-chef.jpg"
              alt="The chef at Juanito's Tacos, serving authentic Mexican street food in Urbana, Illinois"
              width={1080}
              height={1350}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-4 text-lg leading-relaxed text-charcoal/80">
            <h2 className="text-3xl font-bold text-charcoal">Why we do this</h2>
            <div className="rule-masa" />
            <p>
              Good food brings people together. That simple idea is why we fire up the grill every single day at{' '}
              {siteConfig.address.street} in {siteConfig.address.city}. We wanted to share the tacos, burritos and
              tortas we love with our neighbors across Champaign-Urbana, made the honest, traditional way.
            </p>
            <p>
              We are a family, and we run our stand like one. That means friendly faces, fair prices and food we are
              proud to hand you. When you order from us, you are not a number in a drive-through line. You are a guest
              at our table.
            </p>
            <PlaceholderNote>
              Placeholder: add the owner’s real name and the true family story here once confirmed. Do not invent
              details. See README for the client checklist.
            </PlaceholderNote>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <h2 className="text-center text-3xl font-extrabold sm:text-4xl">What makes our food different</h2>
          <div className="mx-auto mt-4 rule-masa" />
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div className="card p-7">
              <h3 className="text-xl font-bold text-taco">Made fresh, to order</h3>
              <p className="mt-3 text-charcoal/75">
                We cook when you order, not hours ahead. Your tacos reach you hot, with toppings chopped that day.
              </p>
            </div>
            <div className="card p-7">
              <h3 className="text-xl font-bold text-taco">Real street-food roots</h3>
              <p className="mt-3 text-charcoal/75">
                Warm corn tortillas, real marinated meats and simple, fresh finishes. This is how street tacos are
                meant to taste.
              </p>
            </div>
            <div className="card p-7">
              <h3 className="text-xl font-bold text-taco">A family that cares</h3>
              <p className="mt-3 text-charcoal/75">
                We treat every guest like a neighbor, because most of you are. Your first visit will not be your last.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="card grid gap-8 p-8 lg:grid-cols-2 lg:items-center">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <Img
                src="/images/juanitos-tacos-food-truck-urbana.jpg"
                alt="The bright green Juanito's Tacos food truck serving Mexican street food in Urbana, Illinois"
                width={1600}
                height={1200}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Come say hello</h2>
              <p className="mt-3 text-charcoal/75">
                You will find us at {siteConfig.address.street} in {siteConfig.address.city}, open{' '}
                {siteConfig.hours.daysDisplay.toLowerCase()}, {siteConfig.hours.display}. Whether it is your first
                taco or your fiftieth, we are glad you are here.
              </p>
              <p className="mt-4 text-charcoal/75">
                We are proud to be a small, family-run business. We have kept the placeholders on this page honest on
                purpose, because we would rather earn your trust than make things up.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
