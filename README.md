# Juanito's Tacos Website

A fast, fully indexable, SEO-optimized marketing site for **Juanito's Tacos**, authentic Mexican street food in Urbana and Champaign, Illinois.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS**. Every page is statically generated for speed and SEO.

---

## Quick start

```bash
cd website
npm install
npm run dev        # local dev at http://localhost:3000
npm run build      # production build (static generation)
npm run start      # serve the production build locally
```

Requires Node 18.17+ (Node 20 recommended).

---

## The one file that controls almost everything: `siteConfig.ts`

Open [`siteConfig.ts`](./siteConfig.ts). It is the **single source of truth** for:

- Business name, phone, email, address (NAP)
- Hours
- The full menu (categories, items, descriptions, prices)
- Meats list
- Service-area towns
- Social links
- Domain, Google Business Profile link, optional contact-form endpoint

Change it here and it updates **everywhere** on the site, so your Name / Address / Phone can never drift out of sync. That consistency matters a lot for local SEO and for matching your Google Business Profile.

Anything that still needs client confirmation is marked with the word `PLACEHOLDER` in the code and shown with a green dashed note on the page. Search the project for `PLACEHOLDER` to find them all.

---

## Where content lives

| What you want to edit | File |
| --- | --- |
| Business info, menu, prices, towns, socials | [`siteConfig.ts`](./siteConfig.ts) |
| Location page copy (per town) | [`lib/locations.ts`](./lib/locations.ts) |
| Blog posts | [`lib/posts.ts`](./lib/posts.ts) |
| FAQ questions and answers | [`lib/faqs.ts`](./lib/faqs.ts) |
| Reviews / testimonials | [`lib/reviews.ts`](./lib/reviews.ts) |
| Gallery images (filenames, alt text, captions) | [`lib/gallery.ts`](./lib/gallery.ts) |
| Extra menu-category copy | [`app/menu/[category]/page.tsx`](./app/menu/%5Bcategory%5D/page.tsx) |
| Colors and fonts | [`tailwind.config.ts`](./tailwind.config.ts) + [`app/layout.tsx`](./app/layout.tsx) |
| Images | [`public/images/`](./public/images/) |

---

## Swapping the brand (colors, fonts, name)

1. **Colors:** edit the `taco`, `masa`, `charcoal`, `cream`, `lime` values in [`tailwind.config.ts`](./tailwind.config.ts).
2. **Fonts:** edit the `Fredoka` (display) and `Nunito` (body) imports in [`app/layout.tsx`](./app/layout.tsx). Any Google Font works with `next/font`.
3. **Name and info:** edit [`siteConfig.ts`](./siteConfig.ts).
4. **Logo:** the logo is text-based in [`components/Logo.tsx`](./components/Logo.tsx). Replace with an image if you have one.
5. **Favicon:** [`app/icon.svg`](./app/icon.svg).

Because the whole site reads from these few places, you can re-skin it for another business quickly.

---

## Photos

The site uses **real, optimized photos** of the food, the truck and the kitchen, in `public/images/` (descriptive filenames, alt text, EXIF-rotation-corrected, compressed for fast loads). The full-size originals live in `assets/` (gitignored, kept locally, not deployed).

To add or swap photos:

1. Drop your `.jpg`, `.png` or `.webp` files into [`public/images/`](./public/images/). Use descriptive, keyword-aware filenames, for example `al-pastor-street-tacos-urbana.jpg`.
2. Update the `src`, `alt` and `caption` in [`lib/gallery.ts`](./lib/gallery.ts), and the image `src`/`alt` used in the home, about and menu pages.
3. That is it. The `Img` component ([`components/Img.tsx`](./components/Img.tsx)) automatically optimizes and lazy-loads real photos with `next/image`. No other code change needed.

Keep alt text specific and descriptive (it helps SEO and accessibility), for example: `"Al pastor street tacos with cilantro and onion at Juanito's Tacos in Urbana"`.

---

## SEO features already built in

- Unique title tag, meta description and **canonical URL** on every page
- Open Graph + Twitter tags on every page, plus an auto-generated social share image ([`app/opengraph-image.tsx`](./app/opengraph-image.tsx))
- Auto-generated **`sitemap.xml`** ([`app/sitemap.ts`](./app/sitemap.ts)) and **`robots.txt`** ([`app/robots.ts`](./app/robots.ts))
- **JSON-LD structured data:**
  - `Restaurant` / `FoodEstablishment` LocalBusiness site-wide (NAP, hours, geo, areaServed, cuisine, menu URL, price range)
  - `Menu` with sections and items
  - `BreadcrumbList` on inner pages
  - `FAQPage` on the FAQ page
  - `BlogPosting` on blog posts
  - `Review` / `AggregateRating` on reviews (**off by default**, see below)
- One `<h1>` per page, semantic `nav` / `main` / `article` / `section` / `footer`, logical heading order
- Mobile-first, responsive, accessible (labeled forms, visible focus rings, alt text, color contrast)
- Location pages with **genuinely unique copy** per town and real local landmarks
- Strong internal linking (home to menu to locations to blog)

### A note on review structured data

Fake review markup violates Google's guidelines and can get a site penalized. So star-rating structured data stays **off** until you add real reviews. To turn it on:

1. Replace the placeholders in [`lib/reviews.ts`](./lib/reviews.ts) with genuine reviews (for example from your Google or Facebook page).
2. Set `publishSchema: true` in that file.

---

## Deploying (Vercel recommended)

1. Push this `website/` folder to a GitHub repo.
2. Import it into [Vercel](https://vercel.com). Framework preset: **Next.js**. No environment variables are required.
3. Add your custom domain in Vercel once confirmed.
4. After launch: submit `https://YOURDOMAIN/sitemap.xml` in Google Search Console.

**Before you deploy, set the real domain** in `siteConfig.ts` (`url`). Canonical URLs, the sitemap and structured data all use it.

---

## Contact form

The contact form works with no backend:

- **Default:** if `contactFormEndpoint` in `siteConfig.ts` is empty, submitting opens the visitor's email app with the message pre-filled (`mailto:`).
- **Better:** paste a free [Formspree](https://formspree.io) endpoint into `contactFormEndpoint` to collect submissions in your inbox with no server to run.

---

## Client confirmation checklist (`TODO.md`)

See [`TODO.md`](./TODO.md) for the full list of items to confirm with Juanito's Tacos before launch (real photos, reviews, owner name, hours, service area, GBP link, social handles, domain, and online ordering).
