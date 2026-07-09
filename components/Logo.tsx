import Link from 'next/link'
import { siteConfig } from '@/siteConfig'

/**
 * Text-based brand logo with a small taco mark. Text-based keeps it crisp at any
 * size and avoids shipping an image. Swap in a real logo file later if desired.
 */
export function Logo({ variant = 'onLight' }: { variant?: 'onLight' | 'onDark' }) {
  const wordColor = variant === 'onDark' ? 'text-white' : 'text-charcoal'
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2.5"
      aria-label={`${siteConfig.name} home`}
    >
      <span className="grid h-10 w-10 flex-none place-items-center rounded-full bg-taco text-white shadow-sm transition-transform group-hover:-rotate-6">
        {/* Simple taco glyph */}
        <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
          <path d="M2 18a10 10 0 0 1 20 0v.5a.5.5 0 0 1-.5.5H2.5a.5.5 0 0 1-.5-.5V18z" fill="#F2A900" />
          <path d="M2 18h20" stroke="#A00D24" strokeWidth="0" />
          <circle cx="8" cy="15.5" r="1.4" fill="#5A8F29" />
          <circle cx="12.5" cy="16.2" r="1.4" fill="#C8102E" />
          <circle cx="16" cy="15.3" r="1.3" fill="#5A8F29" />
        </svg>
      </span>
      <span className={`font-display text-xl font-extrabold leading-none tracking-tight ${wordColor}`}>
        Juanito&apos;s <span className="text-taco">Tacos</span>
      </span>
    </Link>
  )
}
