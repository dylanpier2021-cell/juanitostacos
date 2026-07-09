import type { Metadata } from 'next'
import { siteConfig } from '@/siteConfig'
import { pageMeta } from '@/lib/seo'
import { PageHero } from '@/components/PageHero'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = pageMeta({
  title: "Terms of Use | Juanito's Tacos",
  description:
    'The terms for using the Juanito’s Tacos website, including menu and pricing accuracy and limits of liability.',
  path: '/terms',
})

const effectiveDate = 'July 8, 2026' // Update when these terms change.

export default function TermsPage() {
  return (
    <>
      <PageHero kicker="Legal" title="Terms of Use" />
      <Breadcrumbs crumbs={[{ name: 'Home', path: '/' }, { name: 'Terms of Use', path: '/terms' }]} />

      <section className="section">
        <div className="prose prose-taco container-x max-w-prose">
          <p>
            <strong>Effective date:</strong> {effectiveDate}
          </p>
          <p>
            This is a general, plain-language template. Please have it reviewed before you rely on it. By using this
            website you agree to these terms.
          </p>

          <h2>About this website</h2>
          <p>
            This website is provided by {siteConfig.name} for general information about our food, hours and location. We
            work to keep it accurate, but we cannot promise it is always complete or error free.
          </p>

          <h2>Menu, prices and hours</h2>
          <p>
            Menu items, prices and hours shown here may change without notice and some are placeholders while the site is
            being finalized. The prices and availability at the stand are the ones that apply. Hours can also change with
            the weather, so please call {siteConfig.phone} if you want to confirm before visiting.
          </p>

          <h2>Intellectual property</h2>
          <p>
            The content on this site, including text and branding, belongs to {siteConfig.name} or is used with
            permission. Please do not copy or reuse it without our permission.
          </p>

          <h2>Links to other sites</h2>
          <p>
            Our site may link to other websites, such as social media or a map provider. We are not responsible for the
            content or practices of those sites.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            To the fullest extent allowed by law, {siteConfig.name} is not liable for any damages arising from your use
            of this website. The site is provided on an as-is basis.
          </p>

          <h2>Allergies and dietary needs</h2>
          <p>
            We prepare food in a small stand where ingredients share space, so we cannot guarantee any item is free of a
            given allergen. If you have an allergy or dietary need, please tell us in person so we can help.
          </p>

          <h2>Changes to these terms</h2>
          <p>We may update these terms from time to time. The effective date above shows when they last changed.</p>

          <h2>Contact us</h2>
          <p>
            Questions about these terms? Email {siteConfig.email} or call {siteConfig.phone}.
          </p>
        </div>
      </section>
    </>
  )
}
