import Link from 'next/link'
import { siteConfig } from '@/siteConfig'
import { telHref, directionsHref } from '@/lib/links'
import { PhoneIcon, PinIcon } from '@/components/icons'

type Variant = 'onLight' | 'onDark'

/**
 * The primary call-to-action set used across the site: Call, Get Directions,
 * and See the Menu. Keeps CTAs consistent everywhere per the brief.
 */
export function CTAButtons({
  variant = 'onLight',
  showMenu = true,
  className = '',
}: {
  variant?: Variant
  showMenu?: boolean
  className?: string
}) {
  const menuClass = variant === 'onDark' ? 'btn-ghost' : 'btn-outline'
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a href={telHref} className="btn-primary" aria-label={`Call Juanito's Tacos at ${siteConfig.phone}`}>
        <PhoneIcon className="h-5 w-5" />
        Call {siteConfig.phone}
      </a>
      <a
        href={directionsHref}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary"
        aria-label="Get driving directions to Juanito's Tacos"
      >
        <PinIcon className="h-5 w-5" />
        Get Directions
      </a>
      {showMenu && (
        <Link href="/menu" className={menuClass}>
          See the Menu
        </Link>
      )}
    </div>
  )
}
