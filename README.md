# Bajirao Villa — Karjat

A premium, fully responsive static marketing website for **Bajirao Villa**, a private
furnished 4BHK villa in Karjat, Maharashtra, managed by **A-S Farm & Resort**.

The site showcases the property, gallery, amenities, packages and event options, and
routes every booking enquiry to **WhatsApp or a phone call**. There is no backend,
database or booking engine — by design.

---

## Quick start

```bash
# from D:\Projects\Resort Website
npm install
npm run dev
```

The dev server runs at **http://localhost:5173**.

```bash
npm run build     # type-check + production build into dist/
npm run preview   # preview the production build
npm run pdfs      # regenerate the placeholder PDF brochures
```

Requires Node.js 18+ (developed on Node 24).

---

## Tech stack

- **React 18 + TypeScript** (strict)
- **Vite 5**
- **Tailwind CSS 3** with a custom forest / beige / gold theme
- **React Router 6** (client-side routing)
- **Lucide React** icons
- **Cormorant Garamond + Inter** via Google Fonts
- No UI framework, no state library, no analytics

---

## Project structure

```
D:\Projects\Resort Website\
├─ public/
│  ├─ images/            # all photography (currently placeholders)
│  ├─ videos/            # property videos (see videos/README.md)
│  ├─ documents/         # downloadable PDF brochures
│  ├─ favicon.svg
│  ├─ robots.txt
│  ├─ sitemap.xml
│  └─ _redirects         # Netlify SPA fallback
├─ scripts/
│  ├─ fetch-placeholder-images.mjs   # re-downloads the stock placeholders
│  └─ generate-placeholder-pdfs.mjs  # builds the placeholder PDFs
├─ src/
│  ├─ components/        # Navbar, Footer, Gallery, forms, cards, lightbox…
│  ├─ pages/             # Home, About, Gallery, Amenities, Packages, Events,
│  │                     # Location, Contact, Brochures, 404
│  ├─ data/              # ALL business content lives here
│  │  ├─ villa.ts        # contact details, FAQs, navigation, map links
│  │  ├─ images.ts       # central image path registry
│  │  ├─ amenities.ts
│  │  ├─ packages.ts
│  │  ├─ events.ts
│  │  ├─ gallery.ts
│  │  └─ documents.ts
│  ├─ App.tsx
│  ├─ main.tsx
│  └─ index.css
├─ index.html            # base SEO tags + LodgingBusiness structured data
├─ tailwind.config.js
├─ vite.config.ts
├─ vercel.json
└─ README.md
```

---

## Editing content

All business content is separated from the UI. You can change copy, contact details,
packages and gallery entries without touching components.

| What you want to change | File |
| --- | --- |
| Phone, WhatsApp, location, FAQs, navigation | `src/data/villa.ts` |
| Amenities | `src/data/amenities.ts` |
| Packages and inclusions | `src/data/packages.ts` |
| Event types | `src/data/events.ts` |
| Gallery photos, categories, videos | `src/data/gallery.ts` |
| Brochure titles and links | `src/data/documents.ts` |
| Image file paths | `src/data/images.ts` |

### Contact numbers

Both phone and WhatsApp use the verified number: **+91 86240 03155**
(`phoneHref` is `tel:+918624003155`, and `whatsappNumber` is `918624003155`).
If the owner confirms a different number, update all four values in
`src/data/villa.ts` (`phoneDisplay`, `phoneHref`, `whatsappDisplay`,
`whatsappNumber`).

---

## Replacing the placeholder photography

> ⚠️ **The images currently on the site are generic stock photographs, not photos of
> Bajirao Villa.** They are used under the Unsplash License and are clearly labelled as
> placeholders in the gallery, event cards, hero badge and footer. Replace them before
> publishing.

1. Prepare real photographs, ideally:
   - Hero / exterior: **2000 × 1200 px** or larger, landscape
   - Gallery images: **1400–1600 px** wide
   - Compress to JPEG/WebP under ~300 KB each
2. Name them exactly like the existing files in `public/images/` (listed in
   `src/data/images.ts`) and overwrite them.
3. Or use new file names and update the paths in `src/data/images.ts`.
4. Update the alt text in `src/data/gallery.ts` and the "placeholder" disclaimers once
   real photos are in place:
   - `galleryPlaceholderNotice` in `src/data/villa.ts`
   - the hero badge in `src/components/Hero.tsx`
   - the footer note in `src/components/Footer.tsx`
   - event card badges in `src/components/EventCard.tsx`
   - gallery lightbox caption in `src/components/Gallery.tsx`

To restore the stock placeholders:

```bash
node scripts/fetch-placeholder-images.mjs
```

### Adding property videos

See `public/videos/README.md`. Add MP4 files and set `videoSrc` on the two entries in
`src/data/gallery.ts`. Until then the gallery shows an honest "coming soon" panel.

### Replacing the PDF brochures

Replace the files in `public/documents/` with the owner's final PDFs, keeping the same
file names (or update `src/data/documents.ts`). The current PDFs are generated
placeholders and contain **no invented prices or rules**.

---

## Features

- Sticky premium navigation with a transparent state on the home hero
- Mobile hamburger menu with body-scroll lock and Escape support
- Hero with Ken Burns image and quick-highlight strip
- Filterable photo & video gallery with:
  - lightbox, keyboard arrows, Escape to close
  - mobile swipe navigation
  - focus restoration and body-scroll lock
  - lazy-loaded images
- 15 confirmed amenity cards
- 7 packages with "Contact for pricing" (no invented rates)
- 8 event types with enquiry CTAs
- Contact form that validates input and opens WhatsApp with a **pre-filled message**
  (it does not pretend to submit to a server)
- Floating WhatsApp button on every page + mobile call button
- Google Maps embed (search-based, no invented coordinates)
- Downloadable PDF brochures
- FAQ accordion (12 verified answers)
- 404 page
- Per-page SEO titles, descriptions, canonical and Open Graph/Twitter tags
- `LodgingBusiness` JSON-LD using verified information only
- `robots.txt` and `sitemap.xml`
- Responsive layouts, reduced-motion support, visible focus styles, skip link

### Deliberately not included

- **No testimonials/reviews** — none were supplied, and fake reviews are not acceptable.
  Add a genuine reviews section only when real guest feedback is available.
- **No Instagram feed** — no account was supplied. Social links stay hidden until URLs
  are added in `src/data/villa.ts`.
- **No prices** — every package says "Contact for pricing".
- **No promised event services** — decoration, catering and DJ are explicitly not
  confirmed anywhere on the site.
- **No invented address, coordinates or travel times.**

---

## Before publishing — owner checklist

1. Confirm the phone vs WhatsApp numbers (see above).
2. Supply actual package rates, inclusions and validity.
3. Supply the exact address and Google Maps pin; update `mapEmbedSrc`, `mapSearchUrl`
   and `directionsUrl` in `src/data/villa.ts`.
   - A Google Maps search for "Bajirao Villa Bhivpuri, Karjat" resolves to a listing
     with the address "Kalyan Highway, Karjat, Koshane, Maharashtra 410201" and a
     Google rating. That address and rating are **not** published on the site because
     they were not supplied by the owner — confirm them before adding.
4. Supply real property photographs and videos; remove all placeholder disclaimers.
5. Supply final PDFs, house rules, check-in/check-out times, cancellation policy,
   pet policy, cook menu/charges and barbecue charges.
6. Add Instagram/Facebook URLs (optional).
7. Add genuine guest reviews (optional, only if real).
8. Replace the placeholder domain `https://www.bajiraovilla.com` in:
   - `index.html` (canonical, Open Graph, JSON-LD)
   - `public/robots.txt`
   - `public/sitemap.xml`
   - `src/data/villa.ts` (`siteUrl`)
9. Test every WhatsApp link and the phone link on a real phone.
10. Confirm the property name and management credit wording.

---

## Deployment

The site is a single-page app with client-side routes. The host must rewrite unknown
paths to `index.html`.

### Netlify

- Build command: `npm run build`
- Publish directory: `dist`
- `public/_redirects` already contains the SPA fallback.

### Vercel

- Import the repository; Vercel detects Vite.
- `vercel.json` already contains the SPA rewrite.

### Any static host (Apache/Nginx/S3 + CDN)

Configure a fallback to `/index.html` for non-file routes, or the deep links
(`/about`, `/gallery`, …) will 404 on refresh.

### GitHub Pages

Requires an SPA workaround (e.g. a `404.html` copy of `index.html`) or switching to a
hash router. Vercel/Netlify are simpler for this project.

---

## SEO notes

- Each page sets its own `<title>`, meta description, canonical URL and Open Graph tags
  via `src/components/Seo.tsx`.
- Structured data lives in `index.html` and intentionally excludes ratings, reviews,
  prices, star ratings and precise coordinates.
- Update the sitemap and canonical domain before launch.
- Submit `sitemap.xml` to Google Search Console after deployment.

---

## Accessibility & performance

- Semantic landmarks, skip link, labelled form fields, `aria-invalid` and error messages.
- Lightbox uses `role="dialog"`, `aria-modal`, keyboard controls and restores focus.
- `prefers-reduced-motion` disables animations.
- Images are local, compressed and lazy-loaded below the fold.
- Fonts are loaded from Google Fonts with preconnect; the site still works if fonts fail
  to load (system fallbacks).

---

## Placeholder asset credits

Placeholder photography is sourced from [Unsplash](https://unsplash.com) under the
Unsplash License. These images are **not** photographs of Bajirao Villa. The PDF
brochures are generated by `scripts/generate-placeholder-pdfs.mjs`.
