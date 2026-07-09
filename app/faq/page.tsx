import type { Metadata } from 'next'
import { pageMeta } from '@/lib/seo'
import { faqs } from '@/lib/faqs'
import { faqSchema } from '@/lib/structured-data'
import { PageHero } from '@/components/PageHero'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { FaqList } from '@/components/FaqList'
import { JsonLd } from '@/components/JsonLd'
import { FinalCTA } from '@/components/FinalCTA'

export const metadata: Metadata = pageMeta({
  title: "FAQ | Juanito's Tacos, Urbana & Champaign",
  description:
    'Answers to common questions about Juanito’s Tacos: hours, location, meats, vegetarian and gluten-free options, catering and payment. Serving Champaign-Urbana.',
  path: '/faq',
})

export default function FaqPage() {
  return (
    <>
      <PageHero
        kicker="Good to know"
        title="Frequently asked questions"
        intro="Everything you might want to know before you visit. Still have a question? Give us a call and we will help."
      />
      <Breadcrumbs crumbs={[{ name: 'Home', path: '/' }, { name: 'FAQ', path: '/faq' }]} />

      <section className="section">
        <div className="container-x">
          <FaqList items={faqs} />
        </div>
      </section>

      <FinalCTA />

      {/* FAQPage structured data lives only on this page to avoid duplicate markup. */}
      <JsonLd data={faqSchema(faqs)} />
    </>
  )
}
