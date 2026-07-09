/**
 * Renders a JSON-LD structured-data block. Pass a plain object built by the
 * helpers in lib/structured-data.ts.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // Content is built by our own helpers from siteConfig, not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
