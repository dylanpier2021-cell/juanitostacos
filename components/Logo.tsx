import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/siteConfig'

/**
 * Brand logo: the real Juanito's Tacos badge mark plus the wordmark. The badge
 * PNG has a transparent background so it sits cleanly on the dark header/footer.
 */
export function Logo({ variant = 'onLight' }: { variant?: 'onLight' | 'onDark' }) {
  const wordColor = variant === 'onDark' ? 'text-white' : 'text-charcoal'
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2.5"
      aria-label={`${siteConfig.name} home`}
    >
      <Image
        src="/images/logo-badge.png"
        alt=""
        width={320}
        height={317}
        priority
        className="h-11 w-11 flex-none object-contain transition-transform group-hover:-rotate-6"
      />
      <span className={`font-display text-xl font-extrabold leading-none tracking-tight ${wordColor}`}>
        Juanito&apos;s <span className="text-taco">Tacos</span>
      </span>
    </Link>
  )
}
