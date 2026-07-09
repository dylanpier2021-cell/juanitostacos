import { siteConfig, fullAddress } from '@/siteConfig'

/** tel: link for the business phone. */
export const telHref = `tel:${siteConfig.phoneRaw}`

/** mailto: link for the business email. */
export const mailtoHref = `mailto:${siteConfig.email}`

/** Google Maps "get directions" deep link to the stand. */
export const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`

/** Keyless Google Maps embed centered on the stand (no API key needed). */
export const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`

/** Plain Google Maps link (for the "view larger map" text link). */
export const mapViewHref = `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}`
