/**
 * lib/reviews.ts
 * -----------------------------------------------------------------------------
 * Real customer reviews (from Google). These are genuine, verbatim reviews used
 * as testimonials. To add more, copy real reviews only. Never invent one.
 *
 * Structured data:
 *  - When `publishSchema` is true, each real review below is emitted as Review
 *    structured data.
 *  - AggregateRating (the overall star rich result) is ONLY emitted when
 *    `aggregate` is filled with the REAL numbers from the Google Business
 *    Profile. It is left null so we never publish a misleading overall score.
 *    To turn it on: set aggregate to your true rating + review count, e.g.
 *      aggregate: { ratingValue: 4.5, reviewCount: 120 }
 */

export type Review = {
  author: string
  rating: number // 1 to 5
  body: string
  /** Short context, for example "Google review". */
  source?: string
  placeholder?: boolean
}

export const reviews = {
  /** Real reviews below, so schema emission is on. */
  publishSchema: true,

  /** PLACEHOLDER: fill with the real overall rating + count from Google to
   *  enable the aggregate star rich result. Leave null to skip it. */
  aggregate: null as { ratingValue: number; reviewCount: number } | null,

  items: [
    {
      author: 'Scott Prause',
      rating: 5,
      body: 'Was unexpectedly given the biggest burrito of my life and it was delicious. Came with everything on it and I was a big fan of the packets of salsa that came with. Super friendly chef, I will be seeking them out in the future.',
      source: 'Google review',
    },
    {
      author: 'Rudi Atkins',
      rating: 5,
      body: 'Juanito’s came by our job site after the tornado in Charleston. He fed our crew and the entire community at no charge. They are wonderful people and very thoughtful.',
      source: 'Google review',
    },
    {
      author: 'Anthony Becerril',
      rating: 5,
      body: '10/10 food truck! Customer service was excellent, kind and really fast. I would recommend. Since they opened it has been my favorite taco truck in Champaign, Illinois!',
      source: 'Google review',
    },
    {
      author: 'Beth Walker',
      rating: 5,
      body: 'Loved everything we ordered. Fish tacos, burritos and more. No wait, great service.',
      source: 'Google review',
    },
    {
      author: 'David Zhang',
      rating: 5,
      body: 'Nicest guys ever, great service and the birria tacos were greasy, salty and perfect. Best food truck for a quick lunch.',
      source: 'Google review',
    },
    {
      author: 'Garrett Skelton',
      rating: 5,
      body: 'The food is 🤌. Whether it is tacos or the breakfast burrito, you are in for a good meal.',
      source: 'Google review',
    },
  ] as Review[],
}
