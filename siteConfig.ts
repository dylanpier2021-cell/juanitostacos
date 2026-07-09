/**
 * siteConfig.ts
 * -----------------------------------------------------------------------------
 * SINGLE SOURCE OF TRUTH for Juanito's Tacos.
 *
 * Every phone number, address, menu item, price, town name and social link on
 * the whole website is read from this file. Edit here and it updates everywhere,
 * so the Name / Address / Phone (NAP) can never drift out of sync (which matters
 * a lot for local SEO and Google Business Profile matching).
 *
 * Anything marked `PLACEHOLDER` should be confirmed with the client before launch.
 * See README.md for the full launch checklist.
 */

export type MenuItem = {
  name: string
  description: string
  /** Display price, for example "$12". Leave as-is or edit freely. */
  price: string
  /** Set true if the item, price or description still needs client confirmation. */
  placeholder?: boolean
}

export type MenuCategory = {
  /** URL slug: /menu/<slug> */
  slug: string
  /** Human name shown in nav and headings. */
  name: string
  /** Short one-line hook for cards and heros. */
  tagline: string
  /** The primary keyword this page targets. */
  keyword: string
  seoTitle: string
  seoDescription: string
  items: MenuItem[]
}

export type ServiceAreaTown = {
  /** URL slug: /locations/<slug> */
  slug: string
  name: string
  /** true for the town the stand physically sits in. */
  homeBase?: boolean
}

export type SocialLink = {
  label: string
  href: string
  /** true means the handle/URL is not yet confirmed. */
  placeholder?: boolean
}

export const siteConfig = {
  // ---------------------------------------------------------------------------
  // Business identity (NAP). Keep IDENTICAL to the Google Business Profile.
  // ---------------------------------------------------------------------------
  name: "Juanito's Tacos",
  legalName: "Juanito's Tacos",
  shortName: 'Juanitos Tacos',
  tagline: 'Authentic Mexican street tacos in Urbana and Champaign',
  description:
    "Juanito's Tacos serves authentic Mexican street food from a friendly walk-up stand in Urbana, Illinois. Tacos, super tacos, fish tacos, quesadillas, burritos, tortas and nachos made fresh every day.",

  // Final domain: confirm before launch. Used for canonical URLs and sitemap.
  url: 'https://juanitostacos.com', // PLACEHOLDER: confirm final domain

  // Contact / NAP
  phone: '(217) 621-1394',
  phoneRaw: '+12176211394', // used for tel: links, do not add spaces
  email: 'juanitopachanga@yahoo.com',

  address: {
    street: '1002 N Cunningham Ave',
    city: 'Urbana',
    state: 'IL',
    stateLong: 'Illinois',
    zip: '61802',
    country: 'US',
  },

  // Geo coordinates for map + LocalBusiness schema.
  // PLACEHOLDER: verify exact lat/long from the Google Business Profile pin.
  geo: {
    latitude: 40.1355,
    longitude: -88.1899,
  },

  // Hours: open every day. Times use "to" (never an em dash) per brand copy rules.
  hours: {
    display: '9:00 AM to 8:30 PM',
    daysDisplay: 'Open 7 days a week',
    opens: '09:00', // 24h format for schema
    closes: '20:30', // 24h format for schema
  },

  priceRange: '$$',

  cuisine: ['Mexican', 'Tacos', 'Street Food', 'Burritos'],

  // ---------------------------------------------------------------------------
  // Service area. The FIRST town (homeBase) is where the stand physically sits.
  // ---------------------------------------------------------------------------
  serviceArea: [
    { slug: 'urbana', name: 'Urbana', homeBase: true },
    { slug: 'champaign', name: 'Champaign' },
    { slug: 'savoy', name: 'Savoy' },
    { slug: 'mahomet', name: 'Mahomet' },
    { slug: 'rantoul', name: 'Rantoul' },
    { slug: 'st-joseph', name: 'St. Joseph' },
    { slug: 'tolono', name: 'Tolono' },
  ] as ServiceAreaTown[],

  // ---------------------------------------------------------------------------
  // Meats. PLACEHOLDER: confirm the full list and spellings with the client.
  // ---------------------------------------------------------------------------
  meats: [
    { name: 'Al Pastor', note: 'marinated pork' },
    { name: 'Asada', note: 'grilled steak' },
    { name: 'Pollo', note: 'seasoned chicken' },
    { name: 'Carnitas', note: 'slow-cooked pork' },
    { name: 'Lengua', note: 'beef tongue' },
    { name: 'Chorizo', note: 'Mexican sausage', placeholder: true },
    { name: 'Barbacoa', note: 'shredded beef', placeholder: true },
  ],

  // ---------------------------------------------------------------------------
  // Menu. Grouped into three SEO category pages. Prices are placeholders you
  // can edit. Items flagged `placeholder` still need client confirmation.
  // ---------------------------------------------------------------------------
  menu: [
    {
      slug: 'tacos',
      name: 'Tacos',
      tagline: 'Street tacos, super tacos and fish tacos made to order',
      keyword: 'tacos in Urbana',
      seoTitle: "Tacos in Urbana & Champaign | Juanito's Tacos",
      seoDescription:
        'Authentic street tacos, super tacos and fish tacos in Urbana and Champaign, IL. Choice of al pastor, asada, pollo, carnitas and more. Fresh every day at Juanito’s Tacos.',
      items: [
        {
          name: '4 Tacos',
          description: 'Four street tacos, your choice of meat, topped with fresh cilantro and onions on warm corn tortillas.',
          price: '$12',
        },
        {
          name: '3 Super Tacos',
          description: 'Three loaded tacos with your choice of meat, lettuce, tomato, cheese, onion and sour cream.',
          price: '$12',
        },
        {
          name: '3 Fish Tacos',
          description: 'Three fish tacos with pico de gallo, crisp lettuce and our creamy chipotle mayo.',
          price: '$12',
        },
      ],
    },
    {
      slug: 'burritos-tortas',
      name: 'Burritos & Tortas',
      tagline: 'Hand-rolled burritos and pressed Mexican tortas',
      keyword: 'burritos in Champaign',
      seoTitle: "Burritos & Tortas in Champaign-Urbana | Juanito's Tacos",
      seoDescription:
        'Big hand-rolled burritos and toasted Mexican tortas in Champaign and Urbana, IL. Choice of meat, beans, rice and fresh toppings at Juanito’s Tacos.',
      items: [
        {
          name: 'Classic Burrito',
          description: 'Your choice of meat wrapped with beans, rice, lettuce, tomato, onion, cheese and sour cream in a warm flour tortilla.',
          price: '$11',
        },
        {
          name: 'Pepe Burrito',
          description: 'Our house special burrito. PLACEHOLDER: confirm exact fillings and what makes the Pepe different.',
          price: '$12',
          placeholder: true,
        },
        {
          name: 'Torta',
          description: 'Pressed Mexican sandwich on soft telera bread with your choice of meat, beans, avocado, lettuce, tomato and mayo. PLACEHOLDER: confirm bread and toppings.',
          price: '$11',
          placeholder: true,
        },
      ],
    },
    {
      slug: 'quesadillas-nachos',
      name: 'Quesadillas & Nachos',
      tagline: 'Melty quesadillas and loaded nachos',
      keyword: 'quesadillas near me',
      seoTitle: "Quesadillas & Nachos in Urbana-Champaign | Juanito's Tacos",
      seoDescription:
        'Cheesy quesadillas and loaded nachos in Urbana and Champaign, IL. Choice of meat and melted cheese, made fresh at Juanito’s Tacos street stand.',
      items: [
        {
          name: 'Quesadilla',
          description: 'A grilled flour tortilla folded over your choice of meat and plenty of melted cheese.',
          price: '$13',
        },
        {
          name: 'Nachos',
          description: 'Crisp tortilla chips piled with your choice of meat, melted cheese, beans, jalapenos, sour cream and pico de gallo. PLACEHOLDER: confirm toppings and price.',
          price: '$10',
          placeholder: true,
        },
      ],
    },
  ] as MenuCategory[],

  // ---------------------------------------------------------------------------
  // Social links. Facebook is confirmed. Instagram and TikTok are PLACEHOLDERS:
  // paste the real handles/URLs and remove `placeholder: true` to show them.
  // ---------------------------------------------------------------------------
  social: {
    facebook: { label: 'Facebook', href: 'https://facebook.com/juanitostacos1' },
    instagram: {
      label: 'Instagram',
      href: 'https://instagram.com/PLACEHOLDER_HANDLE',
      placeholder: true,
    },
    tiktok: {
      label: 'TikTok',
      href: 'https://tiktok.com/@PLACEHOLDER_HANDLE',
      placeholder: true,
    },
  } as Record<string, SocialLink>,

  // ---------------------------------------------------------------------------
  // Google Business Profile. PLACEHOLDER: paste the "share" link once confirmed.
  // ---------------------------------------------------------------------------
  googleBusinessProfileUrl: '', // PLACEHOLDER

  // ---------------------------------------------------------------------------
  // Optional contact form endpoint. Leave empty to use a mailto: fallback that
  // opens the visitor's email app. To collect submissions server-free, paste a
  // Formspree (or similar) endpoint here, for example:
  //   'https://formspree.io/f/xxxxxxxx'
  // ---------------------------------------------------------------------------
  contactFormEndpoint: '', // PLACEHOLDER (optional)

  // ---------------------------------------------------------------------------
  // Online ordering. Left OFF per client request. To turn on, paste links and
  // set `enabled: true`; an "Order Online" button set can then be re-enabled.
  // ---------------------------------------------------------------------------
  ordering: {
    enabled: false,
    doorDash: '',
    uberEats: '',
    grubhub: '',
  },

  // Agency credit shown subtly in the footer. Edit or remove as you like.
  builtBy: {
    label: 'Pierson Digital Marketing',
    href: '',
  },
} as const

// Convenience getters used across the site.
export const fullAddress = `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`
export const cityRegion = `${siteConfig.address.city}, ${siteConfig.address.state}`

export type SiteConfig = typeof siteConfig
