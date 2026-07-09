# Launch Checklist — confirm with Juanito's Tacos

Everything below is either a placeholder or an assumption in the current build. Confirm each item, then update the file listed. Search the codebase for `PLACEHOLDER` to jump straight to them.

## Must confirm before launch

- [ ] **Owner's real name and family story** — write the real About page. Do not invent details.
  - File: `app/about/page.tsx` (the green "Placeholder" note)
- [ ] **Real customer reviews** — replace the sample testimonials, then set `publishSchema: true` to enable star ratings.
  - File: `lib/reviews.ts`
- [ ] **Real food and truck photos** — swap the placeholder images (keep descriptive filenames + alt text).
  - Files: `public/images/`, `lib/gallery.ts`, and the home/about/menu pages
- [ ] **Hours** — confirm 9:00 AM to 8:30 PM, every day. Note any seasonal or weather closures.
  - File: `siteConfig.ts` (`hours`)
- [ ] **Exact service-area towns** — confirm Urbana, Champaign, Savoy, Mahomet, Rantoul, St. Joseph, Tolono.
  - File: `siteConfig.ts` (`serviceArea`) + copy in `lib/locations.ts`
- [ ] **Google Business Profile link** — paste it in, and verify the NAP matches this site **exactly**.
  - File: `siteConfig.ts` (`googleBusinessProfileUrl`)
- [ ] **Map pin accuracy** — verify the exact latitude/longitude from the Google Business Profile.
  - File: `siteConfig.ts` (`geo`)
- [ ] **Instagram / TikTok handles** — paste real URLs and remove `placeholder: true`.
  - File: `siteConfig.ts` (`social`)
- [ ] **Final domain** — set the real domain (used for canonical URLs, sitemap, structured data).
  - File: `siteConfig.ts` (`url`)
- [ ] **Online ordering (DoorDash / Uber Eats / Grubhub)** — currently OFF per request. Decide whether to add "Order Online" CTAs. If yes, paste links and set `ordering.enabled: true`.
  - File: `siteConfig.ts` (`ordering`)

## Menu details to confirm

- [ ] **Prices** — all prices are editable placeholders. Confirm each.
  - File: `siteConfig.ts` (`menu`)
- [ ] **Pepe Burrito** — confirm fillings and price (what makes it special?).
- [ ] **Tortas** — confirm bread and toppings.
- [ ] **Nachos** — confirm toppings and price.
- [ ] **Meats list** — confirm the full selection and spellings (al pastor, asada, pollo, carnitas, lengua, chorizo, barbacoa...).
  - File: `siteConfig.ts` (`meats`)
- [ ] **Payment methods** — cash, card, mobile pay? Update the FAQ answer.
  - File: `lib/faqs.ts`

## Nice to do after launch

- [ ] Add a Formspree (or similar) endpoint so the contact form emails you directly (`contactFormEndpoint` in `siteConfig.ts`). Otherwise it uses a `mailto:` fallback.
- [ ] Submit the sitemap in Google Search Console (`/sitemap.xml`).
- [ ] Add Google Analytics or another analytics tool if desired (and update the Privacy Policy).
- [ ] Have the Privacy Policy and Terms of Use reviewed for your specifics.
- [ ] Take fresh seasonal photos to keep the gallery lively.
