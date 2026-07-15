@AGENTS.md

# Project: "Seen and Paid" — landing page for Inesa Dita

Single-page marketing site for **Inesa Dita — Business Coach**, promoting her coaching
program **"Seen and Paid"**. Modeled on https://thevisiblemethod.com/home (premium 1:1
coaching-program landing page). All copy in **English**. The whole site is one page:
`app/(frontend)/page.tsx`, composed from section components.

## Brand

- Display name: **Inesa Dita — Business Coach** (this exact name persists on the site)
- No logo yet — use an **"ID" initials text mark** or a plain wordmark
- Aesthetic: premium and minimal — "wine and gold" palette (client-requested burgundy, July 2026): deep burgundy ink, warm paper, serif/sans mix (Fraunces + Geist), generous whitespace
- **Yellow is the main accent color** (client requirement — instead of the reference site's red). Tokens: `gold` (bright, dark sections) and `ochre` (deep, light sections) in `app/(frontend)/globals.css`; `highlight-marker`/`highlight-underline` utilities for emphasized phrases (max one per section)
- Client photos: curated shots from https://thirdviewfilms.pixieset.com/inesadita/ live in `public/images/` and are mapped to page slots in `lib/images.ts`; render via `components/inesa-image.tsx` (`warm`/`duotone` treatments). Full harvest (62 originals) can be re-downloaded from the gallery CDN if new crops are needed
- Background context: Inesa is also a Pacific NW realtor ("PNW Realtor | Inesa Dita Willis")

## Page blueprint (adapted from the reference site)

Sections in order — trim or merge to fit Inesa's actual offer:

1. Minimal nav with persistent "Book your call" CTA
2. Hero — bold headline, scarcity line (e.g. "Applications open · limited spots"), social proof
3. Problem section (the pain of being skilled but invisible/underpaid)
4. Audience archetypes — 2–3 personas, each with pain point + CTA
5. Method/framework — the program curriculum, ideally acronym-named
6. "What's included" — deliverables list
7. Proof — metrics/results, testimonials (message-screenshot style)
8. Weekly breakdown table
9. About Inesa — personal story and credentials
10. "Is this you?" — qualification / disqualification
11. FAQ (~6 items)
12. 3-step application flow (apply → call → onboard)
13. Footer — contact, legal links, results disclaimer

## Copy tone

Confident yet empathetic; specific numbers and deliverables; exclusivity/scarcity
("application only", "limited spots"); transformation language centered on the program
name — from unseen and underpaid to **seen and paid**.

## Tech conventions

- Copy is **hardcoded in React components** — no Payload collections/globals for page content
- Payload CMS is used only for Media uploads and admin for now (`collections/Media.ts`, `collections/Users.ts`)
- Section components live under `components/` following shadcn conventions; use `cn()` from `lib/utils.ts`
- Styling: Tailwind v4, CSS-first config — design tokens in `app/(frontend)/globals.css`
- Package manager: pnpm; dev/build run with Turbopack

## Open items (blocked on client)

- Real program details: length, price, weekly structure, deliverables — until provided,
  write placeholder copy adapted from the reference structure

Booking is live: Calendly embed in `components/sections/book-call.tsx`
(https://calendly.com/inesa-inesadita/intro-call); contact email Inesa@inesadita.com
(`CONTACT_EMAIL` in `lib/site-config.ts`). All "Book your call" CTAs scroll to `#book`.
