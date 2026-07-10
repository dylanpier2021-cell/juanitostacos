import { reviews } from '@/lib/reviews'
import { StarIcon } from '@/components/icons'
import { SectionHeading } from '@/components/SectionHeading'

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-masa" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} className={`h-5 w-5 ${i < rating ? 'text-masa' : 'text-charcoal/15'}`} />
      ))}
    </div>
  )
}

/**
 * Reviews / testimonials section. The data ships as clearly-labeled
 * PLACEHOLDERS. When placeholders are present a visible banner says so, so no
 * one mistakes them for real reviews. Star-rating structured data stays off
 * until real reviews are added (see lib/reviews.ts).
 */
export function Reviews({ withHeading = true }: { withHeading?: boolean }) {
  const hasPlaceholders = reviews.items.some((r) => r.placeholder)
  return (
    <section className="section bg-white" aria-labelledby="reviews-heading">
      <div className="container-x">
        {withHeading && (
          <SectionHeading
            eyebrow="Kind words"
            title="What people say"
            align="center"
            intro="Here is what our neighbors across Champaign-Urbana say about Juanito's Tacos. Come see for yourself."
          />
        )}
        <h2 id="reviews-heading" className="sr-only">
          Customer reviews
        </h2>

        {hasPlaceholders && (
          <p className="mx-auto mt-8 max-w-2xl rounded-xl border-2 border-dashed border-lime/60 bg-lime/5 px-4 py-3 text-center text-sm font-semibold text-lime">
            Placeholder reviews shown. Replace with genuine customer reviews before launch. See README.
          </p>
        )}

        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.items.map((r, i) => (
            <li key={i} className="card flex flex-col p-6">
              <Stars rating={r.rating} />
              <blockquote className="mt-4 flex-1 text-charcoal/80">
                <p>{r.body}</p>
              </blockquote>
              <footer className="mt-4 text-sm font-semibold text-charcoal">
                {r.author}
                {r.source && <span className="ml-1 font-normal text-charcoal/50">· {r.source}</span>}
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
