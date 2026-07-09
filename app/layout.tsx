import type { Metadata } from 'next'
import { Fredoka, Nunito } from 'next/font/google'
import './globals.css'
import { siteConfig } from '@/siteConfig'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { JsonLd } from '@/components/JsonLd'
import { restaurantSchema } from '@/lib/structured-data'

const display = Fredoka({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

const body = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `${siteConfig.name} | ${siteConfig.tagline}`,
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    'tacos Urbana',
    'Mexican food Champaign',
    'street tacos Champaign-Urbana',
    'taco stand near me',
    'burritos Urbana IL',
    'authentic Mexican food Urbana',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: siteConfig.name,
    url: siteConfig.url,
  },
  twitter: {
    card: 'summary_large_image',
  },
  category: 'restaurant',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-screen bg-cream text-charcoal">
        <a href="#main" className="sr-only sr-only-focusable">
          Skip to content
        </a>
        {/* Site-wide LocalBusiness / Restaurant structured data */}
        <JsonLd data={restaurantSchema()} />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
