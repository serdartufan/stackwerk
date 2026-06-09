# Stackwerk — CLAUDE.md

## Project
- Naam: Stackwerk
- Domein: stackwerk.nl
- Stack: Next.js 16, TypeScript, Tailwind CSS v4
- Hosting: Hetzner VPS (CX22) — IP 46.225.5.91 — /var/www/stackwerk — poort 3000
- Repo: github.com/serdartufan/stackwerk

## Positionering
Stackwerk is een Nederlands development bureau gespecialiseerd in websites, SaaS platforms en maatwerk software. Doelgroep: MKB en startups.

## Huidige staat (09-06-2026)

**Paginas live:**
- `/` — Homepage (Apple-stijl: hero, statement+stats, diensten 2x2, cases 2fr/1fr, CTA-oranje, contact)
- `/over-ons` — Verhaal, team (Serdar + Dogukan), waarom-sectie
- `/diensten/websites` — Volledig uitgeschreven dienstenpagina
- `/diensten/saas-platforms` — Volledig uitgeschreven dienstenpagina
- `/diensten/maatwerk-software` — Volledig uitgeschreven dienstenpagina
- `/werk/[slug]` — Dynamische casepaginas op basis van `src/data/cases.json`

**Design systeem:**
- Achtergrond primair: `#0a0a0a`
- Accent: `#E8620A`
- Tekst primair: `#ffffff` / `#F0EDE8`
- Wit blok: `#ffffff`
- Sectie ritme homepage: zwart → wit → zwart → wit → oranje → zwart
- Fonts: Fraunces (serif) + DM Sans (sans)
- Navbar: wit achtergrond, zwarte CTA-pill, donkere links

**Componenten:**
- `Navbar.tsx` — Wit achtergrond, logo en CTA in `#0a0a0a`, links via volledige paden (`/#diensten` etc.)
- `ContactForm.tsx` — Gecontroleerd formulier met loading/error feedback, fetch naar `/api/contact`
- `ScrollAnimation.tsx` — IntersectionObserver, variant prop: `up` / `left` / `right` / `scale` / `heading` / `fade`
- `CountUp.tsx` — Animated number counter, telt op bij scroll via IntersectionObserver + rAF

**Afbeeldingen:**
- `public/images/` — Statische WebP afbeeldingen gegenereerd via Grok:
  `hero-main.webp`, `over-ons-team.webp`, `diensten-websites.webp`, `diensten-saas.webp`, `diensten-maatwerk.webp`, `funnelvision-showcase.webp`
- `public/cases/` — Case thumbnails: `funnelvision.png`, `justharry.png`, `mymiracle.png`
- `public/images/generated/` — Gegenereerde assets via `generate-assets.ts`:
  - `hero-bg.jpg` — abstracte donkere achtergrond (hero-sectie)
  - `case-justharry.jpg` — AI SaaS sfeerbeeld
  - `case-mymiracle.jpg` — beauty/wellness sfeerbeeld
  - `case-capsuleautomaat.jpg` — B2B e-commerce sfeerbeeld (toekomstige case)

**Image generatie script:**
- Bestand: `generate-assets.ts` (root)
- Uitvoeren: `export $(grep -v '^#' .env.local | xargs) && npx tsx generate-assets.ts`
- Primair: Gemini (vereist betaald account) — Fallback: Grok `grok-imagine-image-quality`
- Keys staan in `.env.local` als `GEMINI_API_KEY` en `GROK_API_KEY`

**Backend:**
- `src/app/api/contact/route.ts` — POST endpoint, verstuurt email via Brevo SMTP
  - Sender: `Stackwerk <info@stackwerk.nl>`
  - Ontvanger: `serdar@funnelvisionagency.com`
  - Reply-to: ingesteld op het e-mailadres van de invuller
  - Rate limiting: max 5 verzoeken per IP per 15 minuten (in-memory Map)

**Data:**
- `src/data/cases.json` — Casesdata (gebruikt door `/werk/[slug]` en homepage cases-grid)
- `src/data/cases.ts` — TypeScript types voor cases

## Copy regels
- Geen em dashes
- Geen hyphens als verbindingsteken
- Informeel Nederlands (je/jij)
- Geen AI-jargon
- Warme maar professionele toon

## Deploy workflow
git push naar main → GitHub Action → SSH naar Hetzner VPS → `git pull` + `npm install` + `npm run build` + `pm2 restart`

PM2 wordt gestart met `--cwd /var/www/stackwerk` zodat de working directory altijd klopt.
GitHub Action gebruikt `nvm use --lts` zodat `npm` en `pm2` in PATH staan.

## Openstaande taken
- [ ] SEO: sitemap, schema markup, meta tags per pagina
- [ ] Kennisbank of blog toevoegen

## Sessieafsluiting (automatisch, altijd)

Aan het einde van elke sessie voer je **zonder dat Serdar het hoeft te vragen** de volgende stappen uit:

1. **Update CLAUDE.md**: pas "Huidige staat" en "Openstaande taken" aan en voeg een sessie-entry toe.
2. **Commit en push**: `git add . && git commit -m "<bondige Nederlandse beschrijving>" && git push`

Dit is een harde instructie die altijd geldt, ook als de sessie kort was of er weinig gewijzigd is.

---

## Sessiehistorie

### Sessie 02-06-2026 — Initiële bouw
- Homepage volledig gebouwd (hero, stats, diensten, werkwijze, cases, waarom, contact, footer)
- Paginas: /over-ons, /diensten/websites, /diensten/saas-platforms, /diensten/maatwerk-software
- Navbar globaal via layout.tsx, ScrollAnimation via IntersectionObserver
- Live gezet op Hetzner VPS

### Sessie 05-06-2026 — Design & copy audit
- Spellingsfix "process" → "proces", datumfix "2024" → "2019"
- Waarom-sectie: generieke cards → typografische list layout
- Cases-sectie: thumbnails toegevoegd, tags gefixed, result-stat verplaatst
- Over-ons: hero herschreven, concrete stats, teamrollen gedifferentieerd, teamfotos toegevoegd
- CTA teksten geuniformeerd naar "Plan een kennismaking"

### Sessie 06-06-2026 — Technische fixes en micro-animaties
- Async params fix in `werk/[slug]/page.tsx` voor Next.js 15+
- Cases data verplaatst naar `src/data/cases.json`
- Calendly-vermelding verwijderd uit My Miracle case
- Micro-animaties: tech ticker, werkwijze dot-pulse, case-rij hover border
- Nginx poort gecorrigeerd naar 3000, PM2 `--cwd` flag toegevoegd
- GitHub Action gefixed: `nvm use --lts` toegevoegd zodat npm en pm2 in PATH staan

### Sessie 08-06-2026 — Contactformulier backend
- `src/app/api/contact/route.ts`: POST endpoint via Brevo SMTP
- `src/components/ContactForm.tsx`: gecontroleerde state, loading/error feedback, fetch naar API route
- Sender stackwerk.nl, ontvanger serdar@funnelvisionagency.com, reply-to op invuller

### Sessie 09-06-2026 — Rate limiting contactformulier
- Rate limiting toegevoegd aan `/api/contact`: max 5 verzoeken per IP per 15 minuten via in-memory Map
- CLAUDE.md volledig herschreven en gestructureerd

### Sessie 09-06-2026 — Animaties, anti-AI-tell fix en nieuwe afbeeldingen
- Hero entrance: regelontvouwing via clip-path CSS keyframes, fix voor Fraunces italic j-overhang
- `CountUp.tsx`: nieuw component, telt stats op bij scroll (ease-out cubic via rAF)
- `ScrollAnimation.tsx`: `variant` prop toegevoegd (`up` / `left` / `right` / `scale` / `heading` / `fade`)
- Werkwijze lijn tekent zichzelf bij scroll, CTA knoppen fill-from-left hover, tech ticker pauzeert
- Diensten: van 3 gelijke kaartjes naar asymmetrische 3/5-2/5 grid (anti-AI-tell)
- 6 WebP afbeeldingen gegenereerd via Grok, Unsplash URLs vervangen

### Sessie 09-06-2026 — Apple-stijl layout rebuild + visuals
- Navbar: wit achtergrond, zwarte pill CTA
- Hero: full-bleed bg met overlay, gradient
- Statement sectie: grote typografische zin met grijs/zwart contrast
- Stats: 3 kolommen met oranje CountUp-nummers en dunne scheidingslijnen
- Diensten: zwart 2x2 grid met SVG-icons + oranje links
- Cases: wit asymmetrisch 2fr/1fr grid — featured kaart + twee kleine kaarten
- CTA: volledig oranje sectie, witte pill-knop
- Footer: minimaal single-row
- Accentkleur bijgewerkt naar `#E8620A`
- 4 assets gegenereerd via Grok (`grok-imagine-image-quality`): hero-bg.jpg + 3 case-images
- API keys (`GEMINI_API_KEY`, `GROK_API_KEY`) toegevoegd aan `.env.local`
- `generate-assets.ts` geschreven en bijgewerkt met correcte modelnamen
