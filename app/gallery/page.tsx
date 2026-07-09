import type { Metadata } from 'next'
import { pageMeta } from '@/lib/seo'
import { galleryImages } from '@/lib/gallery'
import { PageHero } from '@/components/PageHero'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Img } from '@/components/Img'
import { FinalCTA } from '@/components/FinalCTA'

export const metadata: Metadata = pageMeta({
  title: "Gallery | Juanito's Tacos, Urbana IL",
  description:
    'A look at the food and the stand at Juanito’s Tacos in Urbana, IL. Tacos, burritos, quesadillas, nachos and more, made fresh every day.',
  path: '/gallery',
})

export default function GalleryPage() {
  return (
    <>
      <PageHero
        kicker="Feast your eyes"
        title="Gallery"
        intro="A taste of what is waiting for you at the stand. These are placeholder images for now, ready to be swapped for real photos of our food and family."
      />
      <Breadcrumbs crumbs={[{ name: 'Home', path: '/' }, { name: 'Gallery', path: '/gallery' }]} />

      <section className="section">
        <div className="container-x">
          <p className="mb-8 rounded-xl border-2 border-dashed border-lime/60 bg-lime/5 px-4 py-3 text-center text-sm font-semibold text-lime">
            Placeholder images shown. Swap in real photos of the food and the stand before launch. See README.
          </p>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image) => (
              <li key={image.src} className="card overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <Img
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={900}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="p-4 text-center font-semibold text-charcoal">{image.caption}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
