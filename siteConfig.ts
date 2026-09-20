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

  // Production domain (attached to the Vercel project). Used for canonical URLs,
  // sitemap and structured data. Change here if the final domain differs.
  url: 'https://juanitostacostruck.com',

  // Contact / NAP
  phone: '(217) 621-1394',
  phoneRaw: '+12176211394', // used for tel: links, do not add spaces
  // Second number printed on the business card and promo graphics.
  phoneAlt: '(217) 766-8245',
  phoneAltRaw: '+12177668245',
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

  // Matches the range shown on the Google Business Profile.
  priceRange: '$10-20',

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
  // Meats. Taken verbatim from the stand's own menu boards:
  //   "YOUR CHOICE OF MEAT: STEAK, CHORIZO, PASTOR, CHICKEN"
  // and the full board, which adds ham, hot dog, milaneza and eggs on the
  // breakfast items and the Torta Cubana. Every item can be made vegetarian.
  // ---------------------------------------------------------------------------
  meats: [
    { name: 'Steak', note: 'grilled asada' },
    { name: 'Pastor', note: 'marinated pork' },
    { name: 'Chorizo', note: 'Mexican sausage' },
    { name: 'Chicken', note: 'seasoned pollo' },
    { name: 'Milaneza', note: 'breaded steak, on the Torta Cubana' },
    { name: 'Ham', note: 'on the Cubana and breakfast tacos' },
  ],

  /** Printed on every menu board: "All menu items can be made vegetarian." */
  vegetarianNote: 'All menu items can be made vegetarian.',

  // ---------------------------------------------------------------------------
  // Menu. Grouped into three SEO category pages.
  //
  // Item names and descriptions come from Juanito's own printed menu.
  // PRICES come from the client-confirmed listing (4 Tacos, 3 Super Tacos,
  // 3 Breakfast Tacos, Burrito, Pepe Burrito, Torta, Torta Cubana, Corn).
  // Quesadillas, Nachos and the Breakfast Burrito are not on that listing, so
  // they keep the price printed on the truck's own menu board.
  // Items flagged `placeholder` have no confirmed price from either source.
  // ---------------------------------------------------------------------------
  menu: [
    {
      slug: 'tacos',
      name: 'Tacos',
      tagline: 'Street tacos, super tacos, fish tacos and breakfast tacos made to order',
      keyword: 'tacos in Urbana',
      seoTitle: "Tacos in Urbana & Champaign | Juanito's Tacos",
      seoDescription:
        'Authentic street tacos, super tacos, fish tacos and breakfast tacos in Urbana and Champaign, IL. Choice of steak, pastor, chorizo or chicken, made fresh at Juanito’s Tacos.',
      items: [
        {
          name: '4 Tacos',
          description: 'The street classic, four to an order. Your choice of meat with cilantro and onions on warm corn tortillas.',
          price: '$12.00',
        },
        {
          name: '3 Super Tacos',
          description: 'Three loaded tacos with lettuce, tomatoes, cilantro, onion, cheese and sour cream over your choice of meat.',
          price: '$12.00',
        },
        {
          name: '3 Breakfast Tacos',
          description: 'Three morning tacos with chorizo or ham, cheese and eggs.',
          price: '$9.00',
        },
        {
          name: '3 Fish Tacos',
          description: 'Three fish tacos with pico de gallo, lettuce and chipotle mayo.',
          price: '',
          placeholder: true,
        },
      ],
    },
    {
      slug: 'burritos-tortas',
      name: 'Burritos & Tortas',
      tagline: 'Hand-rolled burritos, pressed tortas and the famous Pepe Burrito',
      keyword: 'burritos in Champaign',
      seoTitle: "Burritos & Tortas in Champaign-Urbana | Juanito's Tacos",
      seoDescription:
        'Big hand-rolled burritos, the Pepe Burrito, breakfast burritos and Mexican tortas in Champaign and Urbana, IL. Choice of meat and fresh toppings at Juanito’s Tacos.',
      items: [
        {
          name: 'Burrito',
          description: 'Beans, cheese, rice, lettuce, tomatoes, onion and sour cream wrapped up with your choice of meat.',
          price: '$11.00',
        },
        {
          name: 'Pepe Burrito',
          description:
            'Hecho con amor, and big enough for two. Beans, cheese, rice, lettuce, tomatoes, onion and sour cream loaded with steak, pastor, chorizo and chicken all in one.',
          price: '$18.00',
        },
        {
          name: 'Breakfast Burrito',
          description: 'Beans, rice, pico de gallo, eggs, chorizo and cheese. Served every day.',
          price: '$6.99',
        },
        {
          name: 'Vegan Burrito',
          description: 'No meat needed. Rice, beans, onion, tomato, lettuce and avocado in a warm flour tortilla.',
          price: '',
          placeholder: true,
        },
        {
          name: 'Torta',
          description: 'Pressed Mexican sandwich with beans, cheese, lettuce, tomatoes, jalapeño, onion and mayo, plus your choice of meat.',
          price: '$10.00',
        },
        {
          name: 'Torta Cubana',
          description:
            'The big one. Beans, cheese, lettuce, tomatoes, jalapeño, onion and mayo stacked with milaneza, ham, hot dog, chorizo and eggs.',
          price: '$13.00',
        },
      ],
    },
    {
      slug: 'quesadillas-nachos',
      name: 'Quesadillas & Nachos',
      tagline: 'Melty quesadillas, loaded nachos and Mexican street corn',
      keyword: 'quesadillas near me',
      seoTitle: "Quesadillas, Nachos & Elote in Urbana-Champaign | Juanito's Tacos",
      seoDescription:
        'Cheesy quesadillas, loaded nachos and Mexican street corn in Urbana and Champaign, IL. Choice of meat and melted cheese, made fresh at Juanito’s Tacos.',
      items: [
        {
          name: 'Quesadillas',
          description: 'Melted cheese and your choice of meat, served with lettuce, tomatoes, onions and sour cream.',
          price: '$9.50',
        },
        {
          name: 'Nachos',
          description: 'Corn tortilla chips piled with beans, nacho cheese, lettuce, tomatoes, onions and jalapeños, plus your choice of meat.',
          price: '$11.50',
        },
        {
          name: 'Corn',
          description: 'Mexican street corn in a 12 oz cup with mayonnaise, cheese, chili powder and lime.',
          price: '$5.00',
        },
      ],
    },
  ] as MenuCategory[],

  // ---------------------------------------------------------------------------
  // Social links. Facebook and Instagram are confirmed (the handle
  // @JuanitosTacos is printed on the business card and promo graphics).
  // TikTok is still a PLACEHOLDER: paste the real URL and remove
  // `placeholder: true` to show it.
  // ---------------------------------------------------------------------------
  social: {
    facebook: { label: 'Facebook', href: 'https://facebook.com/juanitostacos1' },
    instagram: { label: 'Instagram', href: 'https://instagram.com/juanitostacos' },
    tiktok: {
      label: 'TikTok',
      href: 'https://tiktok.com/@PLACEHOLDER_HANDLE',
      placeholder: true,
    },
  } as Record<string, SocialLink>,

  // ---------------------------------------------------------------------------
  // Google Business Profile. Confirmed by the client; the NAP above matches it.
  // ---------------------------------------------------------------------------
  googleBusinessProfileUrl: 'https://share.google/znGjvkQdgSMRYtFCB',

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
