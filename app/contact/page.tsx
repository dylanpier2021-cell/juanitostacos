import type { Metadata } from 'next'
import { siteConfig } from '@/siteConfig'
import { pageMeta } from '@/lib/seo'
import { PageHero } from '@/components/PageHero'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { InfoCard } from '@/components/InfoCard'
import { MapEmbed } from '@/components/MapEmbed'
import { ContactForm } from '@/components/ContactForm'

export const metadata: Metadata = pageMeta({
  title: "Contact & Find Us | Juanito's Tacos, Urbana IL",
  description:
    'Get in touch with Juanito’s Tacos in Urbana, IL. Call, email or send a message. Find our address, hours and a map to the stand on N Cunningham Ave.',
  path: '/contact',
})

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="We would love to hear from you"
        title="Contact & find us"
        intro={`Questions, catering, or just want to say hello? Reach out any time, or come see us at ${siteConfig.address.street} in ${siteConfig.address.city}.`}
      />
      <Breadcrumbs crumbs={[{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }]} />

      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-2xl font-bold">Send us a message</h2>
            <p className="mt-2 text-charcoal/70">
              Fill this out and we will get back to you. For the fastest answer, give us a call.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <div className="space-y-6">
            <InfoCard />
            <MapEmbed />
          </div>
        </div>
      </section>
    </>
  )
}
