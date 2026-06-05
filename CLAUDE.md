# Stackwerk — CLAUDE.md

## Project
- Naam: Stackwerk
- Domein: stackwerk.nl
- Stack: Next.js, TypeScript, Tailwind CSS
- Hosting: Hetzner VPS (CX22) — IP 46.225.5.91 — /var/www/stackwerk — poort 3001
- Repo: github.com/serdartufan/stackwerk

## Positionering
Stackwerk is een Nederlands development bureau gespecialiseerd in websites, SaaS platforms en maatwerk software. Doelgroep: MKB en startups.

## Huidige staat
- Volledig uitgebouwde site met homepage, over ons en drie dienstenpaginas
- Live op: stackwerk.nl (Hetzner VPS, poort 3001, Nginx + Cloudflare Flexible SSL)

## Copy regels
- Geen em dashes
- Geen hyphens als verbindingsteken
- Informeel Nederlands (je/jij)
- Geen AI-jargon
- Warme maar professionele toon

## Deploy workflow
git push naar main → GitHub Action → SSH naar Hetzner VPS (46.225.5.91) → git pull + npm install + npm run build + pm2 restart

## Sessie 02-06-2026

### Wat er gebouwd is

**Homepage**
- Hero: zwart met "Wij bouwen" wit en "jouw visie." italic oranje, grote brutale typografie
- Stats balk: wit
- Diensten sectie: oranje achtergrond, witte cards met zwarte tekst en oranje nummers
- Werkwijze sectie: wit, horizontale timeline met 5 stappen
- Cases sectie: zwart, genummerde lijstrijen met oranje cijfers
- Waarom Stackwerk: wit, 2x2 grid met oranje nummers
- Contact sectie: zwart, twee kolommen met formulier links en contactgegevens rechts
- Footer: zwart

**Paginas**
- /over-ons: volledig uitgeschreven met verhaal, team (Serdar, Dogukan, Partners) en waarom sectie
- /diensten/websites: volledig uitgeschreven
- /diensten/saas-platforms: volledig uitgeschreven
- /diensten/maatwerk-software: volledig uitgeschreven

**Technisch**
- Navbar globaal via layout.tsx
- Navbar links werken op alle paginas via volledige paden (/#diensten etc.)
- Diensten cards op homepage gekoppeld aan dienstenpaginas
- ScrollAnimation component via IntersectionObserver
- Fonts: Fraunces (serif) en DM Sans (sans) consistent door de hele site
- Live op: stackwerk.nl (Hetzner VPS, poort 3001)

### Design systeem
- Achtergrond primair: #111111
- Achtergrond secundair: #1A1A1A
- Accent: #E85D26
- Tekst primair: #F0EDE8
- Wit blok: #FFFFFF
- Sectie ritme: zwart, wit, oranje, zwart, wit, zwart

## Sessie 05-06-2026 — Design & copy audit

### Opgelost
- ✅ "process" → "proces" (spelfout)
- ✅ "ACTIEF SINDS 2024" → "ACTIEF SINDS 2019" (datumconflict met over-ons)
- ✅ "Next.js" als stat vervangen door "2019 — Actief sinds"
- ✅ "geen X, geen X" patroon gefixed in werkwijze stap 1 en 2
- ✅ Waarom-sectie: van generieke #F5F5F5 cards naar typografische list layout (border-top, geen achtergrond)
- ✅ Cases-sectie: screenshot-thumbnails toegevoegd (desktop), tags gefixed (Vercel verwijderd), result-stat verplaatst naast tags
- ✅ CTA-variatie: cases → "Plan een kennismaking", contact-sectie → "Plan een kennismaking"
- ✅ Over-ons hero: "Wij bouwen al jaren met een reden." → "Van marketeers naar developers."
- ✅ "20+ jaar gecombineerde ervaring" → concrete stats: 2019, 10+, 3 SaaS producten
- ✅ Teamrollen gedifferentieerd: Serdar = Lead Developer & Strateeg, Dogukan = Full-Stack Developer
- ✅ Teambeschrijvingen persoonlijk herschreven
- ✅ Teamfoto's toegevoegd op over-ons (Serdar.jpeg, Dogukan.jpeg)
- ✅ Over-ons waarom-sectie zelfde list layout als homepage

### To do
- [ ] Contactformulier backend koppelen (nu client-side only)
- [ ] SEO: sitemap, schema markup, meta tags per pagina
- [ ] Kennisbank of blog toevoegen
- [ ] FunnelVision toevoegen als portfolio case met eigen pagina
