'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { siteConfig } from '@/siteConfig'
import { telHref } from '@/lib/links'
import { Logo } from '@/components/Logo'
import { PhoneIcon } from '@/components/icons'

const navLinks = [
  { href: '/menu', label: 'Menu' },
  { href: '/locations', label: 'Locations' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-charcoal/95 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-charcoal/85">
      <div className="container-x flex h-20 items-center justify-between gap-4">
        <Logo variant="onDark" />

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  className={`rounded-full px-4 py-2 text-base font-semibold transition-colors ${
                    isActive(link.href) ? 'bg-white/10 text-masa' : 'text-cream/90 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href={telHref} className="btn-primary hidden sm:inline-flex" aria-label={`Call ${siteConfig.phone}`}>
            <PhoneIcon className="h-5 w-5" />
            <span className="hidden xl:inline">{siteConfig.phone}</span>
            <span className="xl:hidden">Call</span>
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-full text-cream hover:bg-white/10 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav panel */}
      {open && (
        <nav id="mobile-nav" aria-label="Primary mobile" className="border-t border-white/10 bg-charcoal lg:hidden">
          <ul className="container-x flex flex-col py-3">
            <li>
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-lg font-semibold text-cream/90 hover:bg-white/10 hover:text-white"
              >
                Home
              </Link>
            </li>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  className={`block rounded-lg px-3 py-3 text-lg font-semibold text-cream/90 hover:bg-white/10 hover:text-white ${
                    isActive(link.href) ? 'text-masa' : ''
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="px-3 pt-3">
              <a href={telHref} className="btn-primary w-full" onClick={() => setOpen(false)}>
                <PhoneIcon className="h-5 w-5" />
                Call {siteConfig.phone}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
