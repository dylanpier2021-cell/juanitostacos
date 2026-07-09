import { fullAddress } from '@/siteConfig'
import { mapEmbedSrc, mapViewHref } from '@/lib/links'

/**
 * Embedded Google Map centered on the stand. Uses the keyless embed URL, so no
 * API key is required. Lazy-loaded to protect Core Web Vitals.
 */
export function MapEmbed({ className = '' }: { className?: string }) {
  return (
    <div className={className}>
      <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl ring-1 ring-black/10 sm:aspect-[16/9]">
        <iframe
          title={`Map showing Juanito's Tacos at ${fullAddress}`}
          src={mapEmbedSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full w-full border-0"
        />
      </div>
      <a
        href={mapViewHref}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-block text-sm font-semibold text-taco hover:underline"
      >
        View larger map
      </a>
    </div>
  )
}
