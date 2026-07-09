import type { Metadata } from 'next'
import { siteConfig } from '@/siteConfig'
import { pageMeta } from '@/lib/seo'
import { PageHero } from '@/components/PageHero'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy | Juanito's Tacos",
  description:
    'How Juanito’s Tacos handles the limited information you share with us through our website contact form, phone and email.',
  path: '/privacy',
})

const effectiveDate = 'July 8, 2026' // Update when this policy changes.

export default function PrivacyPage() {
  return (
    <>
      <PageHero kicker="Legal" title="Privacy Policy" />
      <Breadcrumbs crumbs={[{ name: 'Home', path: '/' }, { name: 'Privacy Policy', path: '/privacy' }]} />

      <section className="section">
        <div className="prose prose-taco container-x max-w-prose">
          <p>
            <strong>Effective date:</strong> {effectiveDate}
          </p>
          <p>
            This is a general, plain-language template. Please have it reviewed to make sure it fits how {siteConfig.name}{' '}
            actually collects and uses information before you rely on it.
          </p>

          <h2>Who we are</h2>
          <p>
            {siteConfig.name} operates a food stand at {siteConfig.address.street}, {siteConfig.address.city},{' '}
            {siteConfig.address.state} {siteConfig.address.zip}, and this website. You can reach us at{' '}
            {siteConfig.phone} or {siteConfig.email}.
          </p>

          <h2>Information we collect</h2>
          <p>
            We keep things simple. If you use our contact form or email us, we receive the details you choose to send,
            such as your name, email address, phone number and message. We use this only to respond to you.
          </p>
          <p>
            Like most websites, basic technical information (such as your browser type and pages viewed) may be collected
            automatically by our hosting provider and any analytics tools we add later. If we add analytics or
            advertising tools, we will update this policy to say so.
          </p>

          <h2>How we use your information</h2>
          <ul>
            <li>To reply to your questions and requests</li>
            <li>To provide catering quotes or take orders you ask us about</li>
            <li>To improve our website and service</li>
          </ul>
          <p>We do not sell your personal information.</p>

          <h2>Third-party services</h2>
          <p>
            Our website may load a Google Map so you can find us, and may use a form service to deliver your message.
            These providers have their own privacy practices. We encourage you to review them.
          </p>

          <h2>Your choices</h2>
          <p>
            You can contact us at {siteConfig.email} to ask what information we have about you or to request that we
            delete it. You can also simply choose not to submit the contact form.
          </p>

          <h2>Children</h2>
          <p>Our website is not directed to children under 13, and we do not knowingly collect their information.</p>

          <h2>Changes to this policy</h2>
          <p>
            We may update this policy from time to time. When we do, we will change the effective date above.
          </p>

          <h2>Contact us</h2>
          <p>
            Questions about this policy? Email {siteConfig.email} or call {siteConfig.phone}.
          </p>
        </div>
      </section>
    </>
  )
}
