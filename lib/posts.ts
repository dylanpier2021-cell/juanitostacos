export type BlogPost = {
  slug: string
  title: string
  seoTitle: string
  description: string
  /** ISO date, for example "2026-06-12". */
  datePublished: string
  dateModified?: string
  readingTime: string
  excerpt: string
  /** Slugs of related posts, shown in a "read next" block. */
  related: string[]
  /** Trusted, hand-authored HTML rendered inside a prose container. */
  content: string
}

/**
 * lib/posts.ts
 * -----------------------------------------------------------------------------
 * Blog posts. Content is original, human-sounding, and answers real questions
 * customers ask. Each post targets its own search intent and links internally
 * to the menu, locations and contact pages.
 *
 * To add a post: copy an entry, give it a new slug, and write the HTML content.
 * Do not use em dashes in copy.
 */
export const posts: BlogPost[] = [
  {
    slug: 'taco-vs-super-taco',
    title: 'What Is the Difference Between a Taco and a Super Taco?',
    seoTitle: "Taco vs Super Taco: What's the Difference? | Juanito's Tacos",
    description:
      'Wondering whether to order a regular street taco or a super taco at Juanito’s Tacos in Urbana? Here is exactly what makes them different and how to pick.',
    datePublished: '2026-06-18',
    readingTime: '4 min read',
    excerpt:
      'A street taco keeps it simple. A super taco piles it on. Here is the honest breakdown so you know exactly what you are getting before you order.',
    related: ['order-tacos-like-a-local', 'vegetarian-gluten-free-tacos'],
    content: `
<p>It is the most common question we hear at the stand: what actually makes a super taco "super"? If you are staring at our menu trying to decide, this is for you. The short answer is toppings. The longer answer is a little more fun.</p>

<h2>The classic street taco</h2>
<p>A street taco is Mexican street food in its purest form. At Juanito's Tacos, that means a warm corn tortilla, your choice of meat, and a simple finish of fresh chopped cilantro and onion. That is it. No lettuce, no sour cream, no pile of extras getting in the way.</p>
<p>The point of a street taco is to let the meat shine. When you order al pastor, asada or carnitas the classic way, you taste the marinade, the char and the seasoning without anything competing with it. A squeeze of lime and a little salsa, and you have the exact taco you would find from a good stand in Mexico. Our <a href="/menu/tacos">4 Tacos plate</a> is built on this idea, and it is what a lot of our regulars order every single time.</p>

<h2>The super taco</h2>
<p>A super taco takes that same great meat and loads it up. Ours comes with lettuce, tomato, cheese, onion and sour cream on top of your choice of meat. It is closer to a full little meal in taco form, and it eats heartier than the street version.</p>
<p>If you are hungry, new to Mexican street food, or you just love a fully dressed taco, the super taco is your friend. The cool, creamy toppings balance a rich meat like carnitas beautifully, and the extra cheese and sour cream make it feel like a treat. Our <a href="/menu/tacos">3 Super Tacos plate</a> is the go-to for anyone who wants more in every bite.</p>

<h2>Street taco vs super taco: a quick comparison</h2>
<ul>
<li><strong>Street taco:</strong> corn tortilla, meat, cilantro and onion. Clean, classic, meat-forward. You get four on our plate.</li>
<li><strong>Super taco:</strong> corn tortilla, meat, lettuce, tomato, cheese, onion and sour cream. Loaded, hearty, closer to a full meal. You get three on our plate.</li>
</ul>
<p>Notice that the plates are priced the same. You get four of the simple ones or three of the loaded ones, because the super tacos take more to build. Either way you are getting a satisfying plate for the money.</p>

<h2>So which one should you order?</h2>
<p>Here is how we would call it. Order street tacos when you want to taste the meat, when you like things simple, or when you want to try a few different meats across your four tacos. Order super tacos when you are really hungry, when you want something that feels like a complete meal, or when you love that mix of warm meat and cool, fresh toppings.</p>
<p>Still torn? Do both. Get a street taco of one meat and a super taco of another and run your own taste test. That is honestly the best way to find your favorite, and nobody at the stand will judge you for wanting it all.</p>

<h2>Come taste the difference</h2>
<p>You can read about tacos all day, but the real answer is in the first bite. We are open every day from ${'9:00 AM to 8:30 PM'} right here in Urbana, and we make everything to order. Take a look at the <a href="/menu">full menu</a>, then come see us and settle the street-taco-versus-super-taco question for yourself. If you have a question before you visit, <a href="/contact">reach out any time</a>.</p>
`,
  },

  {
    slug: 'evening-eats-champaign-urbana',
    title: 'Real Evening Eats in Champaign-Urbana: Where to Go When You Want the Good Stuff',
    seoTitle: 'Best Evening Eats in Champaign-Urbana | Juanito’s Tacos',
    description:
      'Looking for fresh, real food in Champaign-Urbana after a long day? Here is how to eat well in the evening, plus where to grab authentic tacos before 8:30 PM.',
    datePublished: '2026-06-25',
    readingTime: '5 min read',
    excerpt:
      'The best evening food in CU is fresh, fast and honest. Here is how to eat well after a long day, and where real street tacos fit in.',
    related: ['order-tacos-like-a-local', 'taco-vs-super-taco'],
    content: `
<p>Champaign-Urbana has a real food culture. Between the University of Illinois crowd, the families spread across town, and everyone in between, there is always someone looking for a good meal after a long day. If you want real food in the evening and you are tired of the same drive-through options, this guide is for you.</p>

<h2>What makes a great evening meal</h2>
<p>When the day has run long, most of us want three things: food that is fresh, food that is fast, and food that does not cost a fortune. Fancy is nice on a Friday, but on a regular weeknight the winner is usually the spot that makes real food quickly and sends you home happy. That is the lane we love to live in.</p>
<p>Fresh matters more than people think. A taco built to order, with meat cooked on the spot and toppings chopped that day, is a completely different experience from something that has been sitting under a heat lamp. You can taste the difference immediately, and once you do, it is hard to go back.</p>

<h2>Eat before the evening gets away from you</h2>
<p>Here is our honest note: we are not a two-in-the-morning spot. Juanito's Tacos is open every day from 9:00 AM to 8:30 PM. So if you want our food, the move is to catch us in the late afternoon or early evening, before we close for the night. Think of us as the answer to "I am starving after work" or "practice ran late and nobody wants to cook," not the 1 AM run.</p>
<p>That early-evening window is actually the sweet spot. You beat the exhaustion of cooking, you get a hot fresh meal, and you still have your night ahead of you. Call your order in on the way and it is ready when you arrive.</p>

<h2>How to eat well in CU on a weeknight</h2>
<ul>
<li><strong>Plan for fresh over fast-food fast.</strong> A few extra minutes for food made to order is worth it every time.</li>
<li><strong>Order for the whole house at once.</strong> A mix of tacos, a <a href="/menu/burritos-tortas">burrito</a> and some <a href="/menu/quesadillas-nachos">nachos</a> covers picky eaters and big appetites in one stop.</li>
<li><strong>Call ahead.</strong> Ringing your order in means you skip the wait and get home faster.</li>
<li><strong>Keep it walkable or a short drive.</strong> If you are near campus, downtown or the north side of Urbana, real street food is closer than you think.</li>
</ul>

<h2>Where street tacos fit in</h2>
<p>For an early dinner that feels like a treat but eats like a normal meal, it is hard to beat street food. Our <a href="/menu/tacos">tacos</a> come with your choice of al pastor, asada, pollo, carnitas and more, and you can go simple with cilantro and onion or loaded up as a super taco. Add a quesadilla for the kids and a burrito for yourself, and dinner is handled.</p>
<p>We are based in Urbana on North Cunningham Avenue and we happily feed folks from <a href="/locations/champaign">Champaign</a>, <a href="/locations/savoy">Savoy</a> and the surrounding towns. If your evening runs through our side of town, we are an easy stop.</p>

<h2>Make us your weeknight answer</h2>
<p>The best evening meal is the one that is fresh, quick and made by people who care. Take a look at our <a href="/menu">full menu</a>, then swing by before 8:30 and let us take dinner off your plate. Questions about catering a bigger evening? <a href="/contact">Get in touch</a> and we will help.</p>
`,
  },

  {
    slug: 'order-tacos-like-a-local',
    title: 'How to Order Tacos Like a Local',
    seoTitle: 'How to Order Tacos Like a Local | Juanito’s Tacos',
    description:
      'New to authentic Mexican street tacos? Learn how to order like a regular at Juanito’s Tacos in Urbana, from choosing your meat to corn vs flour.',
    datePublished: '2026-07-02',
    readingTime: '5 min read',
    excerpt:
      'Corn or flour? Which meat? How many? A friendly, no-pressure guide to ordering authentic street tacos like you have done it a hundred times.',
    related: ['taco-vs-super-taco', 'vegetarian-gluten-free-tacos'],
    content: `
<p>Walking up to an authentic taco stand for the first time can feel a little intimidating, especially if the menu is full of words you did not grow up with. Good news: ordering like a local is easy once you know a few basics. Here is everything you need to feel like a regular at Juanito's Tacos.</p>

<h2>Step one: pick your meat</h2>
<p>The meat is the heart of the taco, so this is the fun part. Here is a quick plain-language guide to the classics you will see on our board:</p>
<ul>
<li><strong>Al pastor:</strong> marinated pork with a little sweetness and spice. A crowd favorite and a great first taco.</li>
<li><strong>Asada:</strong> grilled steak, savory and satisfying. You cannot go wrong here.</li>
<li><strong>Pollo:</strong> seasoned chicken, lighter but still full of flavor.</li>
<li><strong>Carnitas:</strong> slow-cooked pork that is tender and rich.</li>
<li><strong>Lengua:</strong> beef tongue. If that surprises you, know that it is prized for a reason. It is soft, mild and delicious, and ordering it is a real local move.</li>
</ul>
<p>Not sure? Order a couple of different meats across your tacos and find your favorite. Mixing and matching is completely normal and encouraged.</p>

<h2>Step two: street taco or super taco</h2>
<p>This is the big fork in the road. A street taco is the meat with cilantro and onion, clean and classic. A super taco piles on lettuce, tomato, cheese, onion and sour cream. We wrote a whole guide on the <a href="/blog/taco-vs-super-taco">difference between a taco and a super taco</a> if you want the full breakdown. Locals often go street style to taste the meat, but there is no wrong answer.</p>

<h2>Step three: corn or flour</h2>
<p>For an authentic street taco, corn tortillas are the traditional choice, and they are what most regulars reach for. Corn brings a subtle flavor that flour does not, and it holds up beautifully to a juicy filling. Flour is softer and a bit more neutral, and it shines in a <a href="/menu/burritos-tortas">burrito</a>. If you want the real street experience, go corn. Corn tortillas are also the pick many gluten-conscious guests prefer, which we cover in our <a href="/blog/vegetarian-gluten-free-tacos">vegetarian and gluten-free guide</a>.</p>

<h2>Step four: know how many to order</h2>
<p>Portion sizes trip a lot of first-timers up. As a rough guide, most people are satisfied with three to four street tacos, or two to three super tacos since they are more filling. Our <a href="/menu/tacos">taco plates</a> are built around exactly those numbers, so you are set either way. Bigger appetite? Add a quesadilla or some nachos to round it out.</p>

<h2>A few small habits that mark a regular</h2>
<ul>
<li><strong>Hit it with lime.</strong> A squeeze of fresh lime wakes up almost any taco. Locals do it without thinking.</li>
<li><strong>Go easy on the salsa the first time.</strong> Taste before you drown it. You can always add more heat.</li>
<li><strong>Eat it the right way.</strong> Tilt your head, not the taco, and eat from one end to the other. It is a two-hand job and that is part of the fun.</li>
<li><strong>Call ahead when you can.</strong> Regulars phone in their order so it is hot and ready when they arrive.</li>
</ul>

<h2>You are ready. Come order.</h2>
<p>That is really all there is to it. Pick a meat, choose street or super, go corn, and grab a lime. Do that and you will order like you have been coming for years. We are on North Cunningham Avenue in Urbana, open every day from 9:00 AM to 8:30 PM. Browse the <a href="/menu">full menu</a>, find your closest <a href="/locations/urbana">location details</a>, and come put your new skills to work.</p>
`,
  },

  {
    slug: 'vegetarian-gluten-free-tacos',
    title: 'Vegetarian and Gluten-Free at the Taco Stand: What You Can Actually Eat',
    seoTitle: 'Vegetarian & Gluten-Free Tacos in Urbana | Juanito’s Tacos',
    description:
      'Eating vegetarian or avoiding gluten in Urbana-Champaign? Here is what you can order at Juanito’s Tacos, from bean burritos to corn-tortilla tacos.',
    datePublished: '2026-07-05',
    readingTime: '5 min read',
    excerpt:
      'Vegetarian? Avoiding gluten? You have real options at the stand. Here is a friendly, honest guide to eating well without the meat or the wheat.',
    related: ['order-tacos-like-a-local', 'taco-vs-super-taco'],
    content: `
<p>Not everyone in your group eats meat, and plenty of people are watching their gluten. The good news is that a Mexican street stand is one of the friendlier places to eat when you have those needs, because so much of the food is built around simple, fresh ingredients. Here is an honest guide to eating well at Juanito's Tacos when you are vegetarian or avoiding gluten.</p>

<h2>Eating vegetarian at the stand</h2>
<p>Mexican cooking has a deep love of beans, rice, cheese and fresh vegetables, so there is a lot to work with. Just let us know when you order and we can build meat-free versions of many of our favorites:</p>
<ul>
<li><strong>Bean and cheese burrito:</strong> our <a href="/menu/burritos-tortas">classic burrito</a> is easy to make vegetarian with beans, rice, lettuce, tomato, onion, cheese and sour cream instead of meat. It is hearty and filling all on its own.</li>
<li><strong>Cheese quesadilla:</strong> a warm flour tortilla folded over plenty of melted cheese. Simple, satisfying, and a hit with kids.</li>
<li><strong>Veggie nachos:</strong> chips loaded with cheese, beans, jalapenos, sour cream and pico. Ask us to leave the meat off.</li>
<li><strong>Bean and cheese tacos:</strong> the same fresh toppings you love, built without the meat.</li>
</ul>
<p>A quick heads up on beans: if you are strictly vegetarian or vegan, ask us how the beans are prepared, since some recipes use animal fat. We are always happy to answer so you can order with confidence.</p>

<h2>Eating gluten-free at the stand</h2>
<p>This is where corn tortillas are your best friend. Corn tortillas are made from corn rather than wheat, so many guests who avoid gluten choose them over flour tortillas. That makes a plate of <a href="/menu/tacos">street tacos on corn tortillas</a> a natural starting point.</p>
<p>Meats seasoned simply, fresh cilantro, onion, tomato, lettuce and cheese are all straightforward choices. Flour tortillas, on the other hand, contain wheat, so burritos, tortas and quesadillas made on flour are not gluten-free.</p>

<h2>An honest word about cross-contact</h2>
<p>We want to be straight with you, because your health matters more than a sale. We cook in a small, busy street stand where ingredients and surfaces share space. That means we cannot promise a fully allergen-free preparation. Corn tortillas are naturally corn-based, but if you have celiac disease or a serious wheat allergy, please tell us clearly when you order so we can help you choose as carefully as possible. If your needs are strict, we would rather help you find something safe than have you take a risk.</p>

<h2>Tips for ordering with dietary needs</h2>
<ul>
<li><strong>Speak up early.</strong> Tell us what you avoid before we start building. It is much easier at the start than at the end.</li>
<li><strong>Keep it simple.</strong> The fewer components, the easier it is to keep your order clean. Meat, corn tortilla and a couple of fresh toppings is a safe, delicious combo.</li>
<li><strong>Ask questions.</strong> We would rather you ask than guess. There are no silly questions when it comes to what you can eat.</li>
</ul>

<h2>Come eat with us, whatever your plate looks like</h2>
<p>Whether you are skipping the meat, skipping the wheat, or feeding a table where everyone eats a little differently, we can put together something fresh and satisfying for you. See the <a href="/menu">full menu</a> for ideas, then come see us in Urbana, open every day from 9:00 AM to 8:30 PM. Have a specific question before you visit? <a href="/contact">Reach out</a> and we will help you plan your order.</p>
`,
  },
]

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug)
}

export const postSlugs = posts.map((p) => p.slug)
