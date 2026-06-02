# Stackwerk — CLAUDE.md

## Project
- Naam: Stackwerk
- Domein: stackwerk.nl
- Stack: Next.js, TypeScript, Tailwind CSS
- Hosting: Vercel
- Repo: github.com/serdartufan/stackwerk

## Positionering
Stackwerk is een Nederlands development bureau gespecialiseerd in websites, SaaS platforms en maatwerk software. Doelgroep: MKB en startups.

## Huidige staat
- Volledig uitgebouwde site met homepage, over ons en drie dienstenpaginas
- Live op: stackwerk-eight.vercel.app
- Custom domein stackwerk.nl nog te koppelen

## Copy regels
- Geen em dashes
- Geen hyphens als verbindingsteken
- Informeel Nederlands (je/jij)
- Geen AI-jargon
- Warme maar professionele toon

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
- Live op: stackwerk-eight.vercel.app
- Custom domein stackwerk.nl nog te koppelen

### Design systeem
- Achtergrond primair: #111111
- Achtergrond secundair: #1A1A1A
- Accent: #E85D26
- Tekst primair: #F0EDE8
- Wit blok: #FFFFFF
- Sectie ritme: zwart, wit, oranje, zwart, wit, zwart

### To do
- [ ] Custom domein stackwerk.nl koppelen in Vercel
- [ ] Echte foto's toevoegen aan over ons pagina
- [ ] Contactformulier backend koppelen (nu client-side only)
- [ ] SEO verder uitwerken: sitemap, schema markup, meta tags per pagina
- [ ] Kennisbank of blog toevoegen
- [ ] FunnelVision toevoegen als portfolio case met eigen pagina
