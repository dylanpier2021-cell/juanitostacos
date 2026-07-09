# Launch Checklist — confirm with Juanito's Tacos

Everything below is either a placeholder or an assumption in the current build. Confirm each item, then update the file listed. Search the codebase for `PLACEHOLDER` to jump straight to them.

## ⚠️ Found in the photo assets — please confirm

- [ ] **ADDRESS MISMATCH.** The brief says **1002 N Cunningham Ave**, but several of the business's own promo graphics and labels say **607 N Cunningham Ave, Urbana IL 61802**. The site currently uses 1002 (as given). Confirm the correct street number and update `siteConfig.ts` (`address.street`) + verify the map pin. NAP must match the Google Business Profile exactly.
- [ ] **Owner / team names.** The business card and photos show **Jose Rodriguez (Executive Chef)** and **Rocio Hernandez**. Confirm names/roles and whether to use them in the About page. (Not yet written into copy — still a placeholder.)
- [ ] **Second phone number.** Their card lists a second number **217-766-8245** in addition to 217-621-1394. Add it if you want it shown.
- [ ] **Menu prices differ from placeholders.** Their menu boards show real prices (they vary by board): e.g. Tacos 4 for ~$10-12, Super Tacos 3 for ~$8-12, Tortas ~$9-11, Torta Cubana ~$15-18, Burritos ~$9-10.50, Pepe Burrito ~$15-19.50, Quesadillas ~$9-9.50, Nachos ~$10-11.50, Corn/elote ~$3.50. Also: daily specials, a Breakfast Burrito ($6.99), and free horchata. Confirm the current prices and update `siteConfig.ts` (`menu`).

## Must confirm before launch

- [ ] **Owner's real name and family story** — write the real About page. Do not invent details. (Possible names above: Jose Rodriguez, Rocio Hernandez — confirm first.)
  - File: `app/about/page.tsx` (the green "Placeholder" note)
- [ ] **Real customer reviews** — replace the sample testimonials, then set `publishSchema: true` to enable star ratings.
  - File: `lib/reviews.ts`
- [x] **Real food and truck photos** — DONE. 16 real photos from your assets folder are optimized in `public/images/` and placed across the home, menu, about and gallery pages with descriptive alt text. Add or swap more anytime via `lib/gallery.ts`. (Originals kept in `assets/`, which is gitignored so it does not bloat the repo.)
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
- [x] **Final domain** — set to `https://juanitostacostruck.com` (the domain attached to the Vercel project). Change `siteConfig.ts` `url` if this is not the intended final domain.
  - [ ] **DNS**: point the domain at Vercel in Cloudflare — add `A juanitostacostruck.com -> 76.76.21.21` and `CNAME www -> cname.vercel-dns.com`. Until then the site will not resolve publicly.
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
