import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy policy — Stackwerk",
  description: "De privacy policy van Stackwerk. Wij verwerken persoonsgegevens conform de AVG.",
};

const BEDRIJF = {
  naam: "Stackwerk",
  kvk: "73815462",
  adres: "Maluslaan 48, 9741 LM Groningen",
  email: "info@stackwerk.nl",
  telefoon: "+31 6 12 98 55 64",
};

const sections = [
  {
    title: "1. Wie zijn wij",
    content: [
      "Stackwerk is een zelfstandig development bureau gevestigd te Groningen. Wij bouwen websites, SaaS platforms en maatwerk software voor ondernemers en bedrijven.",
      `Stackwerk is verantwoordelijk voor de verwerking van persoonsgegevens zoals omschreven in deze privacy policy. Contactgegevens: ${BEDRIJF.adres}, ${BEDRIJF.email}, ${BEDRIJF.telefoon}.`,
    ],
  },
  {
    title: "2. Welke gegevens verzamelen wij",
    content: [
      "Via het contactformulier op onze website verwerken wij de volgende gegevens: naam, e-mailadres, telefoonnummer, projecttype en de inhoud van je bericht.",
      "Wanneer je ons een e-mail stuurt, verwerken wij je e-mailadres en de inhoud van de e-mail.",
      "Bij het sluiten van een overeenkomst verwerken wij tevens bedrijfsnaam, factuuradres en KVK-nummer.",
      "Wij verzamelen geen bijzondere categorieën persoonsgegevens.",
    ],
  },
  {
    title: "3. Waarvoor gebruiken wij jouw gegevens",
    content: [
      "Wij gebruiken jouw gegevens uitsluitend voor de volgende doeleinden: het beantwoorden van jouw contactverzoek of offerte-aanvraag, het uitvoeren van de overeenkomst, het sturen van facturen en het voldoen aan wettelijke verplichtingen.",
      "Wij gebruiken jouw gegevens niet voor profilering, geautomatiseerde besluitvorming of directe marketingdoeleinden zonder jouw voorafgaande toestemming.",
    ],
  },
  {
    title: "4. Grondslagen voor verwerking",
    content: [
      "Wij verwerken jouw persoonsgegevens op basis van de volgende wettelijke grondslagen:",
      "Toestemming (art. 6 lid 1 sub a AVG): wanneer jij contact met ons opneemt via het formulier ga je akkoord met de verwerking voor dat specifieke doel.",
      "Uitvoering van de overeenkomst (art. 6 lid 1 sub b AVG): wanneer wij een opdracht uitvoeren is verwerking noodzakelijk voor de nakoming van de overeenkomst.",
      "Wettelijke verplichting (art. 6 lid 1 sub c AVG): voor factuuradministratie zijn wij wettelijk verplicht gegevens te bewaren.",
    ],
  },
  {
    title: "5. Hoe lang bewaren wij jouw gegevens",
    content: [
      "Contactgegevens uit het formulier bewaren wij maximaal 12 maanden na het laatste contact, tenzij de overeenkomst aanleiding geeft tot een langere bewaartermijn.",
      "Factuur- en contractgegevens bewaren wij 7 jaar conform de wettelijke bewaarplicht voor de Belastingdienst.",
      "Na afloop van de bewaartermijn worden gegevens veilig verwijderd of geanonimiseerd.",
    ],
  },
  {
    title: "6. Delen wij gegevens met derden",
    content: [
      "Wij verstrekken jouw persoonsgegevens alleen aan derden als dat noodzakelijk is voor de uitvoering van onze dienstverlening of als wij daartoe wettelijk verplicht zijn.",
      "E-mailverzending: wij maken gebruik van Brevo (Sendinblue SAS, gevestigd in Frankrijk) voor het verzenden van e-mails via ons contactformulier. Brevo verwerkt e-mailadressen en berichtinhoud als verwerker op grond van een verwerkersovereenkomst. Brevo is gecertificeerd onder het EU-US Data Privacy Framework.",
      "Hosting: onze website draait op servers van Hetzner Online GmbH, gevestigd in Duitsland. Hetzner verwerkt als verwerker de gegevens die via onze website worden verstuurd. De servers staan in de EU (Duitsland/Finland).",
      "Wij verkopen jouw gegevens niet aan derden en verstrekken ze niet aan partijen voor commerciële doeleinden.",
    ],
  },
  {
    title: "7. Cookies",
    content: [
      "Onze website maakt geen gebruik van tracking- of analytische cookies van derden.",
      "Wij kunnen functionele cookies plaatsen die strikt noodzakelijk zijn voor het functioneren van de website, zoals sessie-cookies. Deze vallen onder de uitzondering van de cookiewet en vereisen geen toestemming.",
      "Wij gebruiken geen cookies voor reclamedoeleinden of het volgen van jouw surfgedrag op andere websites.",
    ],
  },
  {
    title: "8. Jouw rechten",
    content: [
      "Op grond van de AVG heb je de volgende rechten ten aanzien van jouw persoonsgegevens:",
      "Recht op inzage: je kunt opvragen welke gegevens wij van jou verwerken.",
      "Recht op rectificatie: je kunt onjuiste gegevens laten corrigeren.",
      "Recht op verwijdering: je kunt verzoeken om verwijdering van jouw gegevens, voor zover geen wettelijke bewaarverplichting van toepassing is.",
      "Recht op beperking: je kunt de verwerking van jouw gegevens laten beperken.",
      "Recht op overdraagbaarheid: je kunt jouw gegevens in een gestructureerd, gangbaar en machineleesbaar formaat opvragen.",
      "Recht van bezwaar: je kunt bezwaar maken tegen de verwerking van jouw gegevens.",
      `Om een van deze rechten uit te oefenen, stuur je een verzoek naar ${BEDRIJF.email}. Wij reageren binnen 30 dagen. Je hebt ook het recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens via autoriteitpersoonsgegevens.nl.`,
    ],
  },
  {
    title: "9. Beveiliging",
    content: [
      "Stackwerk neemt passende technische en organisatorische maatregelen om jouw persoonsgegevens te beschermen tegen verlies, ongeautoriseerde toegang, openbaarmaking of vernietiging.",
      "De verbinding met onze website is beveiligd via HTTPS/TLS. Ons contactformulier maakt gebruik van rate limiting om misbruik te voorkomen.",
      "Toegang tot persoonsgegevens is beperkt tot personen voor wie toegang noodzakelijk is.",
    ],
  },
  {
    title: "10. Wijzigingen in dit beleid",
    content: [
      "Stackwerk behoudt zich het recht voor deze privacy policy te wijzigen. Wijzigingen worden op deze pagina gepubliceerd met vermelding van de versiedatum.",
      "Wij adviseren je deze pagina periodiek te raadplegen om op de hoogte te blijven van eventuele wijzigingen.",
    ],
  },
  {
    title: "11. Contact",
    content: [
      `Heb je vragen over deze privacy policy of over de verwerking van jouw persoonsgegevens? Neem dan contact op:`,
      `Stackwerk, ${BEDRIJF.adres}`,
      `E-mail: ${BEDRIJF.email}`,
      `Telefoon: ${BEDRIJF.telefoon}`,
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <main style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
      <div className="mx-auto max-w-3xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="mb-16">
          <p
            className="font-sans mb-4 text-xs uppercase tracking-[0.28em]"
            style={{ color: "#E8620A" }}
          >
            JURIDISCH
          </p>
          <h1
            className="font-serif font-bold mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#111111" }}
          >
            Privacy policy
          </h1>
          <p className="font-sans" style={{ color: "rgba(17,17,17,0.55)", fontSize: "14px" }}>
            Versie 1.0 · juni 2026 · AVG-conform
          </p>
          <div className="mt-8 p-5 rounded-xl" style={{ backgroundColor: "#f5f4f2", fontSize: "14px" }}>
            <p className="font-sans font-medium mb-1" style={{ color: "#111111" }}>
              {BEDRIJF.naam}
            </p>
            <p className="font-sans" style={{ color: "rgba(17,17,17,0.6)" }}>{BEDRIJF.adres}</p>
            <p className="font-sans" style={{ color: "rgba(17,17,17,0.6)" }}>KVK: {BEDRIJF.kvk}</p>
            <p className="font-sans" style={{ color: "rgba(17,17,17,0.6)" }}>{BEDRIJF.email}</p>
            <p className="font-sans" style={{ color: "rgba(17,17,17,0.6)" }}>{BEDRIJF.telefoon}</p>
          </div>
        </div>

        <div className="flex flex-col gap-12">
          {sections.map((section) => (
            <div key={section.title}>
              <h2
                className="font-serif font-bold mb-5"
                style={{ fontSize: "1.25rem", color: "#111111" }}
              >
                {section.title}
              </h2>
              <div className="flex flex-col gap-3">
                {section.content.map((paragraph, i) => (
                  <p
                    key={i}
                    className="font-sans leading-relaxed"
                    style={{ color: "rgba(17,17,17,0.7)", fontSize: "15px" }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-16 pt-8"
          style={{ borderTop: "1px solid rgba(17,17,17,0.1)" }}
        >
          <Link
            href="/"
            className="font-sans text-sm"
            style={{ color: "#E8620A" }}
          >
            ← Terug naar de homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
