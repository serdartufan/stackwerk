# Stackwerk — CLAUDE.md

## Project
- Naam: Stackwerk
- Domein: stackwerk.nl
- Stack: Next.js, TypeScript, Tailwind CSS
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

**Design systeem (bijgewerkt):**
- Accentkleur: `#E8620A` (was #E85D26 — iets warmer oranje)
- Navbar: wit achtergrond, zwarte CTA-pill, donkere links
- Sectievolgorde homepage: zwart → wit → zwart → wit → oranje → zwart

**Componenten:**
- `Navbar.tsx` — Wit achtergrond, logo en CTA in `#0a0a0a`, links via volledige paden (`/#diensten` etc.)
- `ContactForm.tsx` — Gecontroleerd formulier met loading/error feedback, fetch naar `/api/contact`
- `ScrollAnimation.tsx` — IntersectionObserver, variant prop: `up` / `left` / `right` / `scale` / `heading` / `fade`
- `CountUp.tsx` — Animated number counter, telt op bij scroll via IntersectionObserver + rAF

**Afbeeldingen:**
- Alle 6 afbeeldingen zijn gegenereerd via Grok en opgeslagen als WebP in `public/images/`
- `hero-main.webp`, `over-ons-team.webp`, `diensten-websites.webp`, `diensten-saas.webp`, `diensten-maatwerk.webp`, `funnelvision-showcase.webp`
- Case thumbnails: `public/cases/funnelvision.png`, `justharry.png`, `mymiracle.png`
- `public/images/generated/` — klaar voor gegenereerde assets via `generate-assets.ts`
  - Vereist: `GEMINI_API_KEY` of `GROK_API_KEY` in `.env`
  - Script: `npx tsx generate-assets.ts` (4 assets: hero-bg.jpg + 3 case-images)

**Backend:**
- `src/app/api/contact/route.ts` — POST endpoint, verstuurt email via Brevo SMTP
  - Sender: `Stackwerk <info@stackwerk.nl>`
  - Ontvanger: `serdar@funnelvisionagency.com`
  - Reply-to: ingesteld op het e-mailadres van de invuller
  - Rate limiting: max 5 verzoeken per IP per 15 minuten (in-memory Map)

**Data:**
- `src/data/cases.json` — Casesdata (gebruikt door `/werk/[slug]`)
- `src/data/cases.ts` — TypeScript types voor cases

## Design systeem
- Achtergrond primair: `#111111`
- Achtergrond secundair: `#1A1A1A`
- Accent: `#E85D26`
- Tekst primair: `#F0EDE8`
- Wit blok: `#FFFFFF`
- Sectie ritme: zwart, wit, oranje, zwart, wit, zwart
- Fonts: Fraunces (serif) + DM Sans (sans)

## Copy regels
- Geen em dashes
- Geen hyphens als verbindingsteken
- Informeel Nederlands (je/jij)
- Geen AI-jargon
- Warme maar professionele toon

## Deploy workflow
git push naar main → GitHub Action → SSH naar Hetzner VPS (46.225.5.91) → `git pull` + `npm install` + `npm run build` + `pm2 restart`

PM2 wordt gestart met `--cwd /var/www/stackwerk` zodat de working directory altijd klopt.
GitHub Action gebruikt `nvm use --lts` zodat `npm` en `pm2` in PATH staan.

## Openstaande taken
- [ ] SEO: sitemap, schema markup, meta tags per pagina
- [ ] Visuals genereren: `GEMINI_API_KEY` of `GROK_API_KEY` toevoegen aan `.env` en `npx tsx generate-assets.ts` draaien
- [ ] Gegenereerde assets integreren in layout (hero-bg.jpg als hero-achtergrond, case-*.jpg in cases-grid)
- [ ] Kennisbank of blog toevoegen

## Sessieafsluiting (automatisch, altijd)

Aan het einde van elke sessie voer je **zonder dat Serdar het hoeft te vragen** de volgende stappen uit:

1. **Update CLAUDE.md**: voeg een sessie-entry toe (of pas "Huidige staat" en "Openstaande taken" aan) zodat de toestand van het project altijd up-to-date is.
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

### Sessie 09-06-2026 — Apple-stijl layout rebuild + generate-assets script

**Homepage volledig herbouwd:**
- Navbar: wit achtergrond, zwarte pill CTA (was donker)
- Hero: full-bleed achtergrondafbeelding met overlay, gradient naar links
- Statement sectie (nieuw): grote typografische zin met grijs/zwart contrast
- Stats: 3 kolommen (was 4) met oranje CountUp-nummers en dunne scheidingslijnen
- Diensten: zwart 2x2 grid met inline SVG-icons + oranje "Meer lezen →" links (was oranje sectie)
- Cases: wit asymmetrisch 2fr/1fr grid — featured kaart + twee kleine kaarten gestapeld (was lijst)
- CTA sectie (nieuw): volledig oranje, witte tekst, witte pill-knop naar #contact
- Footer: minimaal single-row, geen kolommen
- Accentkleur bijgewerkt naar #E8620A (was #E85D26)
- `generate-assets.ts`: script voor Gemini (primair) + Grok (fallback) image generation

**Nog te doen:**
- API keys toevoegen voor asset generatie (zie Openstaande taken)

### Sessie 09-06-2026 — Animaties, anti-AI-tell fix en nieuwe afbeeldingen

**Animatie-upgrade (pure CSS + kleine JS, geen GSAP):**
- Hero entrance: "Wij bouwen" + "jouw visie." ontvouwen per regel via clip-path reveal (CSS keyframes)
  - Fix: `padding-bottom + margin-bottom` op `.hero-line` voor descenders
  - Fix: `padding-inline + margin-inline` op `.hero-line` voor italic j-overhang (Fraunces)
- `CountUp.tsx`: nieuw component, telt stats op bij scroll (ease-out cubic via rAF)
- `ScrollAnimation.tsx`: `variant` prop toegevoegd (`up` / `left` / `right` / `scale` / `heading` / `fade`)
- Werkwijze lijn: tekent zichzelf van links naar rechts bij scroll (`scaleX` via CSS + `.scroll-anim.in`)
- CTA knoppen: fill-from-left hover animatie via `::before` pseudo-element
- Tech ticker: pauzeert bij hover
- Case achtergrondnummers: opaciteit stijgt bij hover (`.case-num`)
- Waarom-sectie: items komen afwisselend van links/rechts binnen

**Anti-AI-tell fix:**
- Diensten: van 3 identieke gelijke kaartjes naar asymmetrische 3/5-2/5 grid (featured + twee compact)

**Afbeeldingen vervangen:**
- 6 nieuwe WebP afbeeldingen gegenereerd via Grok (`grok-imagine-image-quality`)
- Geconverteerd via sharp: PNG → WebP, gezamenlijk van ~1.5MB naar ~447KB
- Alle Unsplash URLs vervangen door lokale `/images/` paden
