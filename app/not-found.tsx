import Link from 'next/link'
import { CTAButtons } from '@/components/CTAButtons'

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-x flex min-h-[50vh] flex-col items-center justify-center text-center">
        <p className="text-6xl" aria-hidden="true">
          🌮
        </p>
        <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">This page went missing</h1>
        <p className="mt-4 max-w-md text-lg text-charcoal/70">
          The page you are looking for is not on the menu. Let us get you back to the good stuff.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">
            Back to home
          </Link>
          <Link href="/menu" className="btn-outline">
            See the menu
          </Link>
        </div>
        <div className="mt-8">
          <CTAButtons showMenu={false} />
        </div>
      </div>
    </section>
  )
}
