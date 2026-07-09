import Link from 'next/link'
import { siteConfig, fullAddress } from '@/siteConfig'
import { telHref, mailtoHref, directionsHref } from '@/lib/links'
import { Logo } from '@/components/Logo'
import { SocialLinks } from '@/components/SocialLinks'
import { PhoneIcon, PinIcon, ClockIcon, MailIcon } from '@/components/icons'

const year = 2026 // Update at each site refresh (no runtime date to keep pages static).

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream/80">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand + contact */}
        <div>
          <Logo variant="onDark" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
            Authentic Mexican street food made fresh every day in {siteConfig.address.city}, serving all of
            Champaign-Urbana and the towns nearby.
          </p>
          <SocialLinks className="mt-5" />
        </div>

        {/* Visit us */}
        <div>
          <h2 className="font-display text-lg font-bold text-white">Visit us</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3">
              <PinIcon className="mt-0.5 h-5 w-5 flex-none text-masa" />
              <a href={directionsHref} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {fullAddress}
              </a>
            </li>
            <li className="flex gap-3">
              <ClockIcon className="mt-0.5 h-5 w-5 flex-none text-masa" />
              <span>
                {siteConfig.hours.daysDisplay}
                <br />
                {siteConfig.hours.display}
              </span>
            </li>
            <li className="flex gap-3">
              <PhoneIcon className="mt-0.5 h-5 w-5 flex-none text-masa" />
              <a href={telHref} className="hover:text-white">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <MailIcon className="mt-0.5 h-5 w-5 flex-none text-masa" />
              <a href={mailtoHref} className="break-all hover:text-white">
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Menu links */}
        <div>
          <h2 className="font-display text-lg font-bold text-white">Our food</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/menu" className="hover:text-white">
                Full Menu
              </Link>
            </li>
            {siteConfig.menu.map((cat) => (
              <li key={cat.slug}>
                <Link href={`/menu/${cat.slug}`} className="hover:text-white">
                  {cat.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/blog" className="hover:text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-white">
                Gallery
              </Link>
            </li>
          </ul>
        </div>

        {/* Locations + pages */}
        <div>
          <h2 className="font-display text-lg font-bold text-white">Areas we serve</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {siteConfig.serviceArea.map((town) => (
              <li key={town.slug}>
                <Link href={`/locations/${town.slug}`} className="hover:text-white">
                  {town.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-6 text-xs text-cream/60 sm:flex-row">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-white">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white">
                Terms
              </Link>
            </li>
          </ul>
        </div>
        {siteConfig.builtBy.label && (
          <div className="container-x pb-6 text-center text-xs text-cream/40 sm:text-right">
            {siteConfig.builtBy.href ? (
              <a href={siteConfig.builtBy.href} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Website by {siteConfig.builtBy.label}
              </a>
            ) : (
              <span>Website by {siteConfig.builtBy.label}</span>
            )}
          </div>
        )}
      </div>
    </footer>
  )
}
