export type GalleryImage = {
  src: string
  /** Descriptive, keyword-aware alt text. */
  alt: string
  /** Short caption shown under the image. */
  caption: string
}

/**
 * lib/gallery.ts
 * -----------------------------------------------------------------------------
 * Real photos of Juanito's Tacos food, the truck and the kitchen. To add more,
 * drop optimized images into /public/images with descriptive filenames and add
 * an entry here with specific, keyword-aware alt text.
 */
export const galleryImages: GalleryImage[] = [
  {
    src: '/images/al-pastor-street-tacos-urbana.jpg',
    alt: 'Authentic Mexican street tacos with fresh salsa, cilantro and lime at Juanito’s Tacos in Urbana',
    caption: 'Authentic street tacos',
  },
  {
    src: '/images/fish-tacos-pico-de-gallo-chipotle.jpg',
    alt: 'Fish tacos with pico de gallo, lettuce and chipotle mayo at Juanito’s Tacos in Champaign-Urbana',
    caption: 'Fish tacos',
  },
  {
    src: '/images/loaded-burrito.jpg',
    alt: 'A hearty loaded burrito cut open to show grilled meat, beans, rice and guacamole at Juanito’s Tacos',
    caption: 'Loaded burrito',
  },
  {
    src: '/images/torta-cubana-juanitos-tacos.jpg',
    alt: 'Torta cubana piled high with meat and fresh toppings on telera bread at Juanito’s Tacos',
    caption: 'Torta cubana',
  },
  {
    src: '/images/loaded-nachos-asada-juanitos.jpg',
    alt: 'Loaded nachos with asada, melted cheese, pico de gallo and jalapenos at Juanito’s Tacos',
    caption: 'Loaded nachos',
  },
  {
    src: '/images/quesadillas-on-the-griddle.jpg',
    alt: 'Cheese quesadillas crisping on the flat-top griddle at the Juanito’s Tacos stand',
    caption: 'Quesadillas on the griddle',
  },
  {
    src: '/images/elote-mexican-street-corn.jpg',
    alt: 'Elote, Mexican street corn in a cup with mayo, cheese, chili powder and lime at Juanito’s Tacos',
    caption: 'Elote, Mexican street corn',
  },
  {
    src: '/images/al-pastor-cooking-on-griddle.jpg',
    alt: 'Marinated al pastor meat cooking on the griddle, made fresh to order at Juanito’s Tacos',
    caption: 'Made fresh on the griddle',
  },
  {
    src: '/images/asada-street-tacos-plate.jpg',
    alt: 'A plate of asada street tacos with green salsa and lime at Juanito’s Tacos in Urbana',
    caption: 'A plate of street tacos',
  },
  {
    src: '/images/street-tacos-salsa-lime.jpg',
    alt: 'Street tacos topped with fresh salsa and a wedge of lime at Juanito’s Tacos',
    caption: 'Fresh salsa and lime',
  },
  {
    src: '/images/juanitos-tacos-food-truck-urbana.jpg',
    alt: 'The bright green Juanito’s Tacos food truck serving Mexican street food in Urbana, Illinois',
    caption: 'Our food truck',
  },
  {
    src: '/images/juanitos-tacos-food-truck-side.jpg',
    alt: 'Side view of the green Juanito’s Tacos food truck parked and ready to serve in Champaign-Urbana',
    caption: 'Catch us around town',
  },
  {
    src: '/images/juanitos-tacos-chef-with-plate.jpg',
    alt: 'The chef at Juanito’s Tacos presenting a fresh plate of Mexican street food',
    caption: 'Made with care',
  },
]
