export type GalleryImage = {
  src: string
  /** Descriptive, keyword-aware alt text. Update when you swap in real photos. */
  alt: string
  /** Short caption shown under the image. */
  caption: string
}

/**
 * lib/gallery.ts
 * -----------------------------------------------------------------------------
 * Gallery images. All are branded PLACEHOLDERS with descriptive filenames and
 * alt text. To go live: drop real photos into /public/images using the same (or
 * better) descriptive filenames, then update the src, alt and caption here.
 * Keep alt text specific and keyword-aware, for example
 * "Al pastor street tacos with cilantro and onion at Juanito's Tacos in Urbana".
 */
export const galleryImages: GalleryImage[] = [
  {
    src: '/images/street-tacos-al-pastor.svg',
    alt: 'Al pastor street tacos with cilantro and onion on corn tortillas at Juanito’s Tacos in Urbana',
    caption: 'Al pastor street tacos',
  },
  {
    src: '/images/super-tacos-loaded.svg',
    alt: 'Loaded super tacos with lettuce, tomato, cheese and sour cream at Juanito’s Tacos',
    caption: 'Loaded super tacos',
  },
  {
    src: '/images/fish-tacos-chipotle-mayo.svg',
    alt: 'Fish tacos with pico de gallo, lettuce and chipotle mayo at Juanito’s Tacos',
    caption: 'Fish tacos with chipotle mayo',
  },
  {
    src: '/images/classic-burrito.svg',
    alt: 'Classic burrito with meat, beans, rice and fresh toppings at Juanito’s Tacos in Champaign-Urbana',
    caption: 'Classic burrito',
  },
  {
    src: '/images/quesadilla-melted-cheese.svg',
    alt: 'Grilled quesadilla with melted cheese and choice of meat at Juanito’s Tacos',
    caption: 'Cheesy quesadilla',
  },
  {
    src: '/images/loaded-nachos.svg',
    alt: 'Loaded nachos with cheese, meat, jalapenos and pico de gallo at Juanito’s Tacos',
    caption: 'Loaded nachos',
  },
  {
    src: '/images/juanitos-food-truck-urbana.svg',
    alt: 'The Juanito’s Tacos walk-up street stand on N Cunningham Ave in Urbana, Illinois',
    caption: 'Our stand in Urbana',
  },
  {
    src: '/images/family-making-tacos.svg',
    alt: 'The Juanito’s Tacos family preparing fresh Mexican street food at the stand',
    caption: 'Made fresh by the family',
  },
]
