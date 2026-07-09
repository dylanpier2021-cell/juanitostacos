import { ReactNode } from 'react'

/**
 * Simple, fast inner-page hero. Renders the single <h1> for the page, so the
 * page body should only use h2 and lower. No large image, which keeps LCP quick.
 */
export function PageHero({
  kicker,
  title,
  intro,
  children,
}: {
  kicker?: string
  title: string
  intro?: string
  children?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden bg-charcoal text-cream">
      {/* Decorative warm glow, purely cosmetic. */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-taco/30 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-masa/20 blur-3xl" />
      <div className="container-x relative py-14 sm:py-20">
        {kicker && <span className="text-sm font-bold uppercase tracking-widest text-masa">{kicker}</span>}
        <h1 className="mt-2 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cream/80">{intro}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  )
}
