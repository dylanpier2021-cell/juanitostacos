import { siteConfig } from '@/siteConfig'

export type Landmark = { name: string; blurb: string }

export type LocationContent = {
  slug: string
  name: string
  homeBase?: boolean
  seoTitle: string
  seoDescription: string
  heroKicker: string
  heroHeading: string
  /** One-line description of where this town sits relative to the stand. */
  distance: string
  /** Opening paragraph, unique to this town. */
  intro: string
  /** Two or three more unique paragraphs of local copy. */
  body: string[]
  /** Real local landmarks used to keep every page genuinely different. */
  landmarks: Landmark[]
  /** A friendly, local, closing tip. */
  localTip: string
}

/**
 * lib/locations.ts
 * -----------------------------------------------------------------------------
 * Unique marketing copy for each service-area town. NO text is duplicated
 * between towns: each references its own real landmarks and its own angle.
 *
 * The list of towns lives in siteConfig.serviceArea (the single source of truth);
 * this file holds the long-form copy keyed by the same slugs. If you add a town
 * to siteConfig, add a matching entry here.
 */
export const locations: Record<string, LocationContent> = {
  urbana: {
    slug: 'urbana',
    name: 'Urbana',
    homeBase: true,
    seoTitle: "Tacos in Urbana, IL | Juanito's Tacos Street Stand",
    seoDescription:
      'Authentic Mexican street tacos in Urbana, IL. Juanito’s Tacos is your walk-up stand on N Cunningham Ave, near the University of Illinois. Open every day, 9 AM to 8:30 PM.',
    heroKicker: 'Our home base',
    heroHeading: 'Authentic Mexican street tacos in Urbana',
    distance: `Right here in Urbana at ${siteConfig.address.street}`,
    intro:
      'Urbana is home. Our stand sits on North Cunningham Avenue, and it is where every taco, burrito and torta we make starts its day. If you live, work or study in Urbana, you are never far from a fresh plate of street food that tastes like it should.',
    body: [
      'We are a short hop from the University of Illinois, so students and staff who need real food between classes have made us a regular stop. Grab four tacos with cilantro and onion after a long day on the Quad, or a loaded super taco when you want something that eats like a full meal.',
      'Locals heading to Crystal Lake Park, Meadowbrook Park or Busey Woods swing by to fuel up before a walk, and folks near Carle on the west side call ahead so their order is ready when they roll through. Wherever you are in town, we are the quick, honest lunch or dinner that beats another drive-through.',
      'Because we cook everything to order, your tacos are hot when they reach your hands. No heat lamps, no shortcuts, just the kind of Mexican street food a family stands behind.',
    ],
    landmarks: [
      { name: 'University of Illinois', blurb: 'A quick trip from campus and the Quad for students and staff.' },
      { name: 'Crystal Lake Park & Busey Woods', blurb: 'Fuel up before a walk on the north side of town.' },
      { name: 'Meadowbrook Park', blurb: 'Grab tacos to go before an evening stroll on the prairie paths.' },
      { name: 'Carle & Downtown Urbana', blurb: 'An easy lunch run for the west side and Lincoln Square area.' },
    ],
    localTip:
      'Pro tip for Urbana regulars: the corn tortillas are the move if you want the most authentic street-taco bite.',
  },

  champaign: {
    slug: 'champaign',
    name: 'Champaign',
    seoTitle: "Mexican Food in Champaign, IL | Juanito's Tacos",
    seoDescription:
      'Craving Mexican food in Champaign, IL? Juanito’s Tacos serves authentic tacos, burritos and quesadillas a short drive away in Urbana. Open daily, 9 AM to 8:30 PM.',
    heroKicker: 'A short drive east',
    heroHeading: 'Authentic Mexican food for Champaign',
    distance: 'A quick drive east of Champaign, just over the Urbana line on N Cunningham Ave',
    intro:
      'Champaign, we see you. From Campustown to the west side, plenty of our regulars start their day in Champaign and cross into Urbana when a real taco craving hits. The stand is close enough to make us your easy weeknight answer.',
    body: [
      'Students living near Green Street and Campustown know the late-afternoon hunger that hits between class and whatever comes next. Instead of settling for the same old options, make the short trip over and load up on super tacos, a fat classic burrito or a quesadilla stuffed with melted cheese.',
      'Working near Downtown Champaign, the Research Park or Market Place Mall? Call your order ahead and grab it on the way home so dinner is handled before you walk in the door. Game day at Memorial Stadium or the State Farm Center pairs perfectly with a tray of nachos and a few tacos for the crew.',
      'We keep prices friendly and portions honest, which is exactly what Champaign families and students are looking for when the budget is tight but the craving is real.',
    ],
    landmarks: [
      { name: 'Campustown & Green Street', blurb: 'A short trip over for students who want the real thing.' },
      { name: 'Market Place Mall', blurb: 'Grab dinner on your way home from the north-side shops.' },
      { name: 'Memorial Stadium & State Farm Center', blurb: 'Feed the whole crew before or after the game.' },
      { name: 'Downtown Champaign & Research Park', blurb: 'An easy lunch or after-work pickup.' },
    ],
    localTip:
      'Champaign tip: phone your order in before you leave the west side so it is ready the second you park.',
  },

  savoy: {
    slug: 'savoy',
    name: 'Savoy',
    seoTitle: "Tacos & Burritos for Savoy, IL | Juanito's Tacos",
    seoDescription:
      'Savoy, IL taco lovers: Juanito’s Tacos serves authentic Mexican street food a short trip north in Urbana. Fresh tacos, burritos and quesadillas, open every day.',
    heroKicker: 'Just north of you',
    heroHeading: 'Real Mexican street food for Savoy',
    distance: 'A straight shot north from Savoy up through Champaign into Urbana',
    intro:
      'Savoy sits just south of the action, and getting real Mexican street food should not mean a long haul. A quick run north brings you straight to our stand, where the tacos are made fresh and the burritos are built to fill you up.',
    body: [
      'If you are flying in or picking someone up at Willard Airport, our stand is an easy detour on the way back through town. Trade the airport snack for a plate of fish tacos with pico and chipotle mayo, or keep it classic with four street tacos and a cold drink.',
      'Families out along Prospect Avenue or catching a movie at the Savoy 16 can turn the trip into a proper meal. Order a couple of quesadillas for the kids and a burrito loaded with beans, rice and your choice of meat for yourself, and everybody leaves happy.',
      'We are the kind of local spot Savoy has been missing: friendly, fast and serious about flavor, without the chain-restaurant markup.',
    ],
    landmarks: [
      { name: 'Willard Airport', blurb: 'An easy detour on the drive back into town.' },
      { name: 'Prospect Avenue shops', blurb: 'Turn a shopping run into a real meal.' },
      { name: 'Savoy 16 Theater', blurb: 'Grab tacos before or after the movie.' },
    ],
    localTip:
      'Savoy tip: fish tacos travel great, so they are perfect for the short ride home.',
  },

  mahomet: {
    slug: 'mahomet',
    name: 'Mahomet',
    seoTitle: "Mexican Food Near Mahomet, IL | Juanito's Tacos",
    seoDescription:
      'Mahomet, IL: authentic tacos, burritos and tortas are a quick drive east at Juanito’s Tacos in Urbana. Made fresh daily, open 9 AM to 8:30 PM every day.',
    heroKicker: 'A quick drive east',
    heroHeading: 'Authentic tacos worth the drive from Mahomet',
    distance: 'A short trip east along I-74 from Mahomet into Urbana',
    intro:
      'Mahomet, good food is worth a short drive, and the hop east on I-74 lands you right at our stand. Whether you are heading into Champaign-Urbana for the day or making a dedicated taco run, we make it worth the trip.',
    body: [
      'Spending the afternoon at Lake of the Woods Forest Preserve or the Museum of the Grand Prairie? Pack up the family and grab dinner on the way back so nobody has to cook. A few super tacos, a burrito and some nachos feed a whole carload without a big bill.',
      'Mahomet-Seymour families who run into town for practice, shopping or errands can build us into the routine. Call ahead, swing by our stand on Cunningham, and drive home with a hot, fresh meal instead of another bag of fast food.',
      'It is real street food made by a family who cares, and that is the sort of thing worth pointing the car toward.',
    ],
    landmarks: [
      { name: 'Lake of the Woods Forest Preserve', blurb: 'Grab dinner on the way home from the trails.' },
      { name: 'Museum of the Grand Prairie', blurb: 'Cap off a family outing with real tacos.' },
      { name: 'Sangamon River & Barber Park', blurb: 'An easy meal after a day outdoors.' },
    ],
    localTip:
      'Mahomet tip: I-74 makes us a fast, straight run, so call ahead and your order is ready on arrival.',
  },

  rantoul: {
    slug: 'rantoul',
    name: 'Rantoul',
    seoTitle: "Tacos & Street Food for Rantoul, IL | Juanito's Tacos",
    seoDescription:
      'Rantoul, IL: authentic Mexican street tacos are a short drive south at Juanito’s Tacos in Urbana. Fresh tacos, burritos and quesadillas, open every day of the week.',
    heroKicker: 'A short drive south',
    heroHeading: 'Fresh Mexican street food for Rantoul',
    distance: 'A straight run south on US-45 from Rantoul into Urbana',
    intro:
      'Rantoul, the drive south to our stand is an easy one, and the payoff is a plate of Mexican street food made the way it should be. When the craving for real tacos hits, point the car down US-45 and come see us.',
    body: [
      'History buffs visiting the Octave Chanute Aerospace Museum or spending the day around the old Chanute grounds can make the trip a full outing by grabbing dinner in town on the way back. Four street tacos with cilantro and onion travel well and hit the spot after a day on your feet.',
      'Got a team heading home from the Rantoul Family Sports Complex? A tray of nachos and a pile of tacos is the kind of postgame meal that keeps everybody happy without breaking the budget. Call ahead so it is ready when you pull in.',
      'We are proud to be the local, family-run taco stand that folks from Rantoul are glad to drive for.',
    ],
    landmarks: [
      { name: 'Octave Chanute Aerospace Museum', blurb: 'Cap off a museum day with fresh tacos.' },
      { name: 'Rantoul Family Sports Complex', blurb: 'The perfect postgame meal for the whole team.' },
      { name: 'Historic Chanute grounds', blurb: 'An easy dinner stop on the way home.' },
    ],
    localTip:
      'Rantoul tip: US-45 runs you straight to us, so it is a simple, no-highway drive.',
  },

  'st-joseph': {
    slug: 'st-joseph',
    name: 'St. Joseph',
    seoTitle: "Tacos Near St. Joseph, IL | Juanito's Tacos in Urbana",
    seoDescription:
      'St. Joseph, IL: authentic Mexican street tacos are a short drive west at Juanito’s Tacos in Urbana. Tacos, burritos and quesadillas made fresh every day.',
    heroKicker: 'A short drive west',
    heroHeading: 'Authentic street tacos for St. Joseph',
    distance: 'A quick trip west along US-150 from St. Joseph into Urbana',
    intro:
      'St. Joseph, you are practically neighbors. The short drive west on US-150 brings you right to our stand, where the tacos are fresh, the burritos are hearty and the welcome is always warm.',
    body: [
      'The Kickapoo Rail Trail links St. Joseph straight into Urbana, so if you have ever ridden or walked the path, you know how close we really are. Reward the miles with a plate of super tacos loaded with cheese, lettuce and sour cream, or cool off with fish tacos and a cold drink.',
      'St. Joseph-Ogden families running into town for school events, groceries or a night out can make dinner easy by stopping at our stand on the way. Order a couple of burritos and some nachos and skip the cooking altogether.',
      'Small-town folks appreciate an honest, family-run kitchen, and that is exactly what we are. Come see why St. Joseph keeps making the trip.',
    ],
    landmarks: [
      { name: 'Kickapoo Rail Trail', blurb: 'Refuel after a ride or walk into Urbana.' },
      { name: 'St. Joseph-Ogden schools', blurb: 'An easy dinner on the way home from events.' },
      { name: 'US-150 Main Street', blurb: 'A straight, simple drive to the stand.' },
    ],
    localTip:
      'St. Joseph tip: the Rail Trail makes a great excuse to work up an appetite before you visit.',
  },

  tolono: {
    slug: 'tolono',
    name: 'Tolono',
    seoTitle: "Mexican Street Food for Tolono, IL | Juanito's Tacos",
    seoDescription:
      'Tolono, IL: authentic tacos, burritos and quesadillas are a short drive north at Juanito’s Tacos in Urbana. Fresh Mexican street food, open every day of the week.',
    heroKicker: 'A short drive north',
    heroHeading: 'Real Mexican street food for Tolono',
    distance: 'A quick trip north up US-45 from Tolono through Champaign into Urbana',
    intro:
      'Tolono, the run north to our stand is quick and worth it. When you want Mexican street food made fresh by a family who cares, US-45 takes you straight to us.',
    body: [
      'Whether you are heading into Champaign-Urbana for shopping, work or a game, our stand is an easy add to the trip. Grab four tacos with cilantro and onion, a loaded burrito, or a quesadilla oozing with cheese, and turn an ordinary errand into a treat.',
      'When Tolono Fun Days or a busy weekend has the whole family on the go, skip the cooking and let us handle dinner. A mix of tacos, nachos and burritos feeds everyone, and it is the kind of meal kids and grown-ups agree on.',
      'We are the friendly, no-fuss taco stand Tolono can count on, close enough to be a regular stop and good enough to be worth the drive.',
    ],
    landmarks: [
      { name: 'Downtown Tolono & US-45', blurb: 'A simple, straight shot north to the stand.' },
      { name: 'Tolono Fun Days', blurb: 'Let us cover dinner during the town’s busy weekends.' },
      { name: 'Unity schools', blurb: 'An easy meal on the way home from school events.' },
    ],
    localTip:
      'Tolono tip: mix and match a family order so everyone gets their favorite in one stop.',
  },
}

export function getLocation(slug: string): LocationContent | undefined {
  return locations[slug]
}

export const locationSlugs = siteConfig.serviceArea.map((t) => t.slug)
