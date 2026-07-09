import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { siteConfig } from '@/siteConfig'
import { pageMeta } from '@/lib/seo'
import { getPost } from '@/lib/posts'
import { PageHero } from '@/components/PageHero'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { MenuItemCard } from '@/components/MenuItemCard'
import { Img } from '@/components/Img'
import { CTAButtons } from '@/components/CTAButtons'
import { FinalCTA } from '@/components/FinalCTA'

type Params = { category: string }

// Extra, unique long-form copy per category (keeps each page distinct for SEO).
const categoryCopy: Record<
  string,
  { image: string; imageAlt: string; body: string[]; related: string[] }
> = {
  tacos: {
    image: '/images/asada-tacos-avocado-urbana.jpg',
    imageAlt: 'Asada street tacos topped with sliced avocado and fresh salsa at Juanito’s Tacos in Urbana',
    body: [
      'Tacos are the heart of everything we do. We keep them the authentic street way: a warm corn tortilla, your choice of meat cooked to order, and a simple finish that lets the flavor shine. Whether you are a longtime taco lover or trying real street tacos for the first time, we will set you up right.',
      'Order our 4 Tacos plate when you want it classic, with fresh cilantro and onion. Go with the 3 Super Tacos when you are hungry and want them loaded with lettuce, tomato, cheese, onion and sour cream. Craving something lighter and bright? The 3 Fish Tacos come with pico de gallo and our creamy chipotle mayo.',
      'Not sure which meat to pick? Mix and match across your tacos so you can taste a few. Al pastor and asada are crowd favorites, and the lengua is a local move for anyone who knows.',
    ],
    related: ['taco-vs-super-taco', 'order-tacos-like-a-local'],
  },
  'burritos-tortas': {
    image: '/images/loaded-burrito.jpg',
    imageAlt: 'A hearty loaded burrito with grilled meat, beans, rice and guacamole at Juanito’s Tacos in Champaign-Urbana',
    body: [
      'When you want a full meal in your hands, our burritos and tortas deliver. The Classic Burrito wraps your choice of meat with beans, rice, lettuce, tomato, onion, cheese and sour cream in a warm flour tortilla. It is hearty, satisfying and easy to take with you.',
      'Our tortas bring the flavor in Mexican sandwich form, pressed until warm with your choice of meat and fresh fixings. And if you want to know what makes the Pepe Burrito special, just ask at the stand.',
      'Burritos and tortas travel well, which makes them perfect for taking back to work, campus or home. Call ahead and yours will be ready to grab and go.',
    ],
    related: ['evening-eats-champaign-urbana', 'order-tacos-like-a-local'],
  },
  'quesadillas-nachos': {
    image: '/images/loaded-nachos-avocado.jpg',
    imageAlt: 'Loaded nachos with meat, melted cheese, avocado and pico de gallo at Juanito’s Tacos',
    body: [
      'Cheese lovers, this one is for you. Our quesadilla is a grilled flour tortilla folded over your choice of meat and plenty of melted cheese, simple and always satisfying. It is a favorite with kids and grown-ups alike.',
      'Feeding a group or watching the game? Our nachos pile crisp tortilla chips with meat, melted cheese, beans, jalapenos, sour cream and pico de gallo. They are made to share, though we will not judge if you keep them all to yourself.',
      'Both are easy to make vegetarian: just ask us to build them with beans and cheese instead of meat, and we will take care of you.',
    ],
    related: ['vegetarian-gluten-free-tacos', 'evening-eats-champaign-urbana'],
  },
}

export function generateStaticParams(): Params[] {
  return siteConfig.menu.map((c) => ({ category: c.slug }))
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const cat = siteConfig.menu.find((c) => c.slug === params.category)
  if (!cat) return {}
  return pageMeta({
    title: cat.seoTitle,
    description: cat.seoDescription,
    path: `/menu/${cat.slug}`,
  })
}

export default function MenuCategoryPage({ params }: { params: Params }) {
  const cat = siteConfig.menu.find((c) => c.slug === params.category)
  if (!cat) notFound()
  const copy = categoryCopy[cat.slug]
  const others = siteConfig.menu.filter((c) => c.slug !== cat.slug)

  return (
    <>
      <PageHero kicker={cat.tagline} title={cat.name} intro={cat.seoDescription} />
      <Breadcrumbs
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Menu', path: '/menu' },
          { name: cat.name, path: `/menu/${cat.slug}` },
        ]}
      />

      <article className="section">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-card">
            <Img
              src={copy.image}
              alt={copy.imageAlt}
              width={1200}
              height={900}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-4 text-lg leading-relaxed text-charcoal/80">
            {copy.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="pt-2">
              <CTAButtons showMenu={false} />
            </div>
          </div>
        </div>

        {/* Items in this category */}
        <div className="container-x mt-14">
          <h2 className="text-2xl font-bold sm:text-3xl">On the menu</h2>
          <div className="mt-2 rule-masa" />
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cat.items.map((item) => (
              <MenuItemCard key={item.name} item={item} />
            ))}
          </ul>
        </div>

        {/* Internal links: other categories + related reading */}
        <div className="container-x mt-14 grid gap-8 md:grid-cols-2">
          <div className="card p-6">
            <h2 className="text-xl font-bold">More from our kitchen</h2>
            <ul className="mt-4 space-y-2">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={`/menu/${o.slug}`} className="font-semibold text-taco hover:underline">
                    {o.name}
                  </Link>
                  <span className="text-charcoal/60"> — {o.tagline}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-6">
            <h2 className="text-xl font-bold">Good reads</h2>
            <ul className="mt-4 space-y-2">
              {copy.related.map((slug) => {
                const post = getPost(slug)
                if (!post) return null
                return (
                  <li key={slug}>
                    <Link href={`/blog/${slug}`} className="font-semibold text-taco hover:underline">
                      {post.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </article>

      <FinalCTA />
    </>
  )
}
