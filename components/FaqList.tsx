import type { FaqItem } from '@/lib/faqs'

/**
 * Accessible FAQ accordion built on native <details>/<summary>. No JavaScript,
 * which keeps it fast and keyboard-friendly out of the box.
 */
export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-black/10">
      {items.map((f, i) => (
        <details key={i} className="group py-2" name="faq">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-lg font-bold text-charcoal marker:content-none">
            <span>{f.question}</span>
            <span
              aria-hidden="true"
              className="grid h-8 w-8 flex-none place-items-center rounded-full bg-cream text-taco transition-transform duration-200 group-open:rotate-45"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </span>
          </summary>
          <div className="pb-4 pr-12 text-charcoal/75">
            <p>{f.answer}</p>
          </div>
        </details>
      ))}
    </div>
  )
}
