import { siteConfig } from '@/siteConfig'
import { FacebookIcon, InstagramIcon, TikTokIcon } from '@/components/icons'

const iconFor: Record<string, (props: { className?: string }) => JSX.Element> = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
}

/**
 * Footer social links. Facebook is live. Instagram and TikTok are placeholders
 * in siteConfig; they render with a clear "add handle" title until real handles
 * are pasted in and `placeholder` is removed.
 */
export function SocialLinks({ className = '' }: { className?: string }) {
  const entries = Object.entries(siteConfig.social)
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {entries.map(([key, link]) => {
        const Icon = iconFor[key]
        if (!Icon) return null
        const title = link.placeholder
          ? `${link.label} (add the real handle in siteConfig.ts)`
          : `Juanito's Tacos on ${link.label}`
        return (
          <li key={key}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              title={title}
              aria-label={title}
              className={`grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-masa hover:text-charcoal ${
                link.placeholder ? 'opacity-60' : ''
              }`}
            >
              <Icon className="h-5 w-5" />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
