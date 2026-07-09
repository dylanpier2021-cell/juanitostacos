import { ImageResponse } from 'next/og'
import { siteConfig, fullAddress } from '@/siteConfig'

// Site-wide Open Graph / social share image, generated at build time.
// Applies to every page unless a page defines its own opengraph-image.
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #C8102E 0%, #F2A900 100%)',
          padding: '72px',
          fontFamily: 'sans-serif',
          color: '#FFF8F0',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              width: 84,
              height: 84,
              borderRadius: 24,
              background: '#FFF8F0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 52,
            }}
          >
            🌮
          </div>
          <div style={{ fontSize: 40, fontWeight: 800 }}>{siteConfig.name}</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 74, fontWeight: 800, lineHeight: 1.05, maxWidth: 900 }}>
            Authentic Mexican street tacos
          </div>
          <div style={{ fontSize: 44, fontWeight: 700, marginTop: 8, color: '#1A1A1A' }}>
            Urbana &amp; Champaign, Illinois
          </div>
        </div>

        <div style={{ display: 'flex', fontSize: 30, fontWeight: 600 }}>
          {`${fullAddress}  ·  Open every day`}
        </div>
      </div>
    ),
    { ...size },
  )
}
