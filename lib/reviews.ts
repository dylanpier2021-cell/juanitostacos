/**
 * lib/reviews.ts
 * -----------------------------------------------------------------------------
 * Customer reviews.
 *
 * IMPORTANT: the reviews below are clearly-labeled PLACEHOLDERS. Never publish
 * them as if they were real. Replace them with genuine customer reviews (for
 * example copied from the Google Business Profile or Facebook), then set
 * `publishSchema: true` so the star-rating structured data goes live.
 *
 * Rating structured data is only emitted when `publishSchema` is true, so with
 * placeholders in place nothing fake ever reaches Google.
 */

export type Review = {
  author: string
  rating: number // 1 to 5
  body: string
  /** Optional short context, for example "Google review". */
  source?: string
  placeholder?: boolean
}

export const reviews = {
  /** Flip to true ONLY after real reviews replace the placeholders below. */
  publishSchema: false,

  items: [
    {
      author: 'PLACEHOLDER — swap for a real customer name',
      rating: 5,
      body: 'Sample testimonial text. Replace this with a real review before launch. Do not publish placeholder reviews.',
      source: 'Placeholder',
      placeholder: true,
    },
    {
      author: 'PLACEHOLDER — swap for a real customer name',
      rating: 5,
      body: 'Sample testimonial text. Replace this with a real review before launch. Do not publish placeholder reviews.',
      source: 'Placeholder',
      placeholder: true,
    },
    {
      author: 'PLACEHOLDER — swap for a real customer name',
      rating: 5,
      body: 'Sample testimonial text. Replace this with a real review before launch. Do not publish placeholder reviews.',
      source: 'Placeholder',
      placeholder: true,
    },
  ] as Review[],
}
