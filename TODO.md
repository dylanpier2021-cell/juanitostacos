# Launch Checklist — Juanito's Tacos

Search the codebase for `PLACEHOLDER` to jump straight to what is left.

---

## ✅ Confirmed and live

- [x] **Address** — 1002 N Cunningham Ave, Urbana, IL 61802, confirmed against the
      Google Business Profile. (Several of their own older promo graphics say 607 N
      Cunningham; those are out of date. If any are still in circulation, worth a
      reprint.)
- [x] **Google Business Profile** — `https://share.google/znGjvkQdgSMRYtFCB`
- [x] **Overall Google rating** — 4.0 from 22 reviews, now live as an
      AggregateRating rich result. → `lib/reviews.ts`
- [x] **Price range** — `$10-20`, matching the Google listing.
- [x] **Payment** — cash and Apple Pay, now answered in the FAQ.
- [x] **About page** — real copy. Jose Rodriguez (executive chef), Rocio Hernandez
      and the crew; a tight team, big on having fun and doing the job right, with
      the whole family involved and a real passion for cooking. No invented details.
- [x] **Menu** — item names and descriptions transcribed from their own printed
      menu; prices from the confirmed listing.
- [x] **Meats** — steak, chorizo, pastor, chicken (plus milaneza, ham, hot dog and
      eggs on the Cubana and breakfast items). The old copy had invented carnitas,
      lengua and barbacoa; removed from the menu, FAQ, home page and blog posts.
- [x] **"All menu items can be made vegetarian"** — on the menu page, About page
      and FAQ.
- [x] **Second phone** 217-766-8245 (`phoneAlt`), used in the catering answer.
- [x] **Instagram** `instagram.com/juanitostacos`
- [x] Real reviews, real photos, final domain.

### Where each price came from

| Item | Price | Source |
|---|---|---|
| 4 Tacos | $12.00 | confirmed listing |
| 3 Super Tacos | $12.00 | confirmed listing |
| 3 Breakfast Tacos | $9.00 | confirmed listing |
| Burrito | $11.00 | confirmed listing |
| Pepe Burrito | $18.00 | confirmed listing |
| Torta | $10.00 | confirmed listing |
| Torta Cubana | $13.00 | confirmed listing |
| Corn | $5.00 | confirmed listing |
| Quesadillas | $9.50 | truck's menu board — **not on the listing** |
| Nachos | $11.50 | truck's menu board — **not on the listing** |
| Breakfast Burrito | $6.99 | truck's specials board — **not on the listing** |
| 3 Fish Tacos | — | no price anywhere; shows "Ask at the stand" |
| Vegan Burrito | — | no price anywhere; shows "Ask at the stand" |

---

## ⚠️ Still need from you

### 1. Five prices
Three are running on the truck's board price rather than the confirmed listing
(**Quesadillas $9.50, Nachos $11.50, Breakfast Burrito $6.99**) and two have no
price at all (**3 Fish Tacos, Vegan Burrito**). Send those five and the menu is
finished. → `siteConfig.ts` (`menu`)

### 2. Map pin (latitude / longitude)
Still an approximation: `40.1355, -88.1899`. Open the pin in Google Maps,
right-click it and copy the coordinates. → `siteConfig.ts` (`geo`)

### 3. Hours
Confirm 9:00 AM – 8:30 PM, 7 days. Any seasonal or weather closures?
→ `siteConfig.ts` (`hours`)

### 4. Online ordering
Still OFF per your request, but Juanito's is listed on **DoorDash** (as "Old
School Bus LLC Juanito's Tacos") and **Grubhub**. Send the exact store links if
you want "Order Online" buttons. → `siteConfig.ts` (`ordering`)

### 5. TikTok
Still a placeholder. Send the URL or tell me to drop it. → `siteConfig.ts` (`social.tiktok`)

### 6. Which logo is current?
`assets/` has two: the green lime-wedge logo used all over the site, and a newer
orange/flame circular badge. Is there a rebrand in progress?

### 7. Service-area towns
Confirm: Urbana, Champaign, Savoy, Mahomet, Rantoul, St. Joseph, Tolono.
→ `siteConfig.ts` (`serviceArea`) + `lib/locations.ts`

---

## Content I found and am holding, pending your OK

Their **daily specials board** is not on the site yet. It reads:

- MON — Burrito Chicken $9.00
- TUE — 5 Tacos Asada $10.00
- WED — Nachos Beef $8.00
- THUR — Torta Milanesa $8.00
- (day obscured by glare) — Quesadilla C. $5.00
- **FREE HORCHATA EVERY DAY**

Confirm these are current (and tell me the missing day) and I will build a
specials section on the menu and home pages. "Free horchata every day" deserves a
banner on its own.

**"Catering is available"** is on their own graphic and is mentioned in the FAQ and
About page, but there is no dedicated catering section yet. Worth building if
catering is a real revenue line.

---

## Photos

- [ ] **3 homepage highlight photos are licensed STOCK (Pexels), not yours.**
      Swap them for your own when you have good ones (bright, tight close-up, clean
      warm background). Files: `public/images/al-pastor-street-tacos-urbana.jpg`,
      `loaded-burrito.jpg`, `loaded-nachos-asada-juanitos.jpg`.

## Nice to do after launch

- [ ] **DNS**: point the domain at Vercel in Cloudflare — `A juanitostacostruck.com
      -> 76.76.21.21` and `CNAME www -> cname.vercel-dns.com`.
- [ ] Add a Formspree endpoint so the contact form emails you directly
      (`contactFormEndpoint` in `siteConfig.ts`). Until then it uses a `mailto:` fallback.
- [ ] Submit the sitemap in Google Search Console (`/sitemap.xml`).
- [ ] Add analytics if desired (and update the Privacy Policy).
- [ ] Have the Privacy Policy and Terms of Use reviewed for your specifics.
- [ ] Take fresh seasonal photos to keep the gallery lively.
