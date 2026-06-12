import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Algemene voorwaarden — Stackwerk",
  description: "De algemene voorwaarden van Stackwerk, gevestigd te Groningen.",
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
    title: "1. Definities",
    content: [
      "**Opdrachtnemer:** Stackwerk, gevestigd te Groningen, KVK-nummer 73815462.",
      "**Opdrachtgever:** de natuurlijke persoon of rechtspersoon die een overeenkomst aangaat met Stackwerk.",
      "**Overeenkomst:** de schriftelijke of digitale afspraak tussen Stackwerk en de opdrachtgever over te leveren diensten of producten.",
      "**Werk:** het geheel van door Stackwerk te ontwikkelen of te leveren software, websites, ontwerpen en aanverwante producten.",
      "**Meerwerk:** werkzaamheden die buiten de overeengekomen scope vallen en apart worden overeengekomen en gefactureerd.",
    ],
  },
  {
    title: "2. Toepasselijkheid",
    content: [
      "Deze algemene voorwaarden zijn van toepassing op alle offertes, overeenkomsten en leveringen van Stackwerk, tenzij schriftelijk anders overeengekomen.",
      "Afwijkingen van deze voorwaarden zijn alleen geldig indien uitdrukkelijk en schriftelijk overeengekomen.",
      "De toepasselijkheid van eventuele inkoop- of andere voorwaarden van de opdrachtgever wordt uitdrukkelijk van de hand gewezen.",
      "Stackwerk behoudt zich het recht voor deze voorwaarden te wijzigen. Gewijzigde voorwaarden gelden voor nieuwe overeenkomsten.",
    ],
  },
  {
    title: "3. Offertes en overeenkomsten",
    content: [
      "Alle offertes van Stackwerk zijn vrijblijvend en geldig gedurende 30 dagen na dagtekening, tenzij anders vermeld.",
      "Een overeenkomst komt tot stand op het moment dat de opdrachtgever de offerte schriftelijk of digitaal aanvaardt, dan wel wanneer Stackwerk een bevestiging stuurt van een mondeling gegeven opdracht.",
      "Kennelijke vergissingen of fouten in de offerte binden Stackwerk niet.",
      "Stackwerk is gerechtigd een opdracht zonder opgave van reden te weigeren.",
    ],
  },
  {
    title: "4. Uitvoering van de overeenkomst",
    content: [
      "Stackwerk voert de overeenkomst naar beste inzicht en vermogen uit overeenkomstig de eisen van goed vakmanschap.",
      "Stackwerk heeft het recht om werkzaamheden te laten uitvoeren door derden.",
      "De opdrachtgever is verplicht alle informatie en medewerking te verlenen die Stackwerk nodig acht voor een goede uitvoering van de overeenkomst.",
      "Indien door vertraging aan de kant van de opdrachtgever de overeenkomst niet of niet tijdig kan worden uitgevoerd, behoudt Stackwerk zich het recht voor de daarmee gepaard gaande kosten in rekening te brengen.",
      "Opgegeven termijnen zijn indicatief en gelden niet als fatale termijn, tenzij uitdrukkelijk schriftelijk overeengekomen.",
    ],
  },
  {
    title: "5. Wijzigingen en meerwerk",
    content: [
      "Wijzigingen in de overeenkomst of aanvullende werkzaamheden worden schriftelijk overeengekomen voordat ze worden uitgevoerd.",
      "Meerwerk wordt tegen het overeengekomen uurtarief, of bij gebreke daarvan tegen het op dat moment geldende standaard uurtarief van Stackwerk, in rekening gebracht.",
      "Stackwerk is niet verplicht meerwerk te accepteren; weigering geeft de opdrachtgever geen recht op ontbinding van de overeenkomst.",
    ],
  },
  {
    title: "6. Oplevering en acceptatie",
    content: [
      "Stackwerk levert het werk op via een staging-omgeving of productieomgeving zoals overeengekomen.",
      "De opdrachtgever dient het werk binnen 14 dagen na oplevering te testen en eventuele gebreken schriftelijk te melden.",
      "Indien de opdrachtgever het werk in gebruik neemt of geen gebreken meldt binnen de gestelde termijn, wordt het werk als geaccepteerd beschouwd.",
      "Kleine gebreken of tekortkomingen die de ingebruikname van het werk niet wezenlijk verhinderen, staan acceptatie niet in de weg. Stackwerk herstelt deze gebreken op kortst mogelijke termijn.",
    ],
  },
  {
    title: "7. Intellectueel eigendom",
    content: [
      "Na volledige betaling draagt Stackwerk de gebruiksrechten op het geleverde werk over aan de opdrachtgever, tenzij schriftelijk anders overeengekomen.",
      "Stackwerk behoudt te allen tijde het recht het werk te gebruiken voor promotionele doeleinden, waaronder in een portfolio, tenzij de opdrachtgever hier bezwaar tegen maakt.",
      "Alle door Stackwerk ontwikkelde generieke componenten, frameworks en herbruikbare code blijven eigendom van Stackwerk. De opdrachtgever krijgt een niet-exclusief gebruiksrecht.",
      "De opdrachtgever garandeert dat het gebruik van door hem aangeleverde materialen geen inbreuk maakt op rechten van derden en vrijwaart Stackwerk voor aanspraken dienaangaande.",
    ],
  },
  {
    title: "8. Betaling",
    content: [
      "Tenzij anders overeengekomen, factureert Stackwerk als volgt: 50% bij opdrachtverstrekking en 50% bij oplevering.",
      "Facturen dienen binnen 14 dagen na factuurdatum te worden voldaan.",
      "Bij overschrijding van de betalingstermijn is de opdrachtgever van rechtswege in verzuim en is een rente verschuldigd van 1,5% per maand over het openstaande bedrag.",
      "Alle door Stackwerk gemaakte kosten ter incasso van het verschuldigde bedrag zijn voor rekening van de opdrachtgever, met een minimum van 15% van het openstaande bedrag.",
      "Stackwerk is gerechtigd zijn werkzaamheden op te schorten bij niet of niet tijdige betaling.",
    ],
  },
  {
    title: "9. Aansprakelijkheid",
    content: [
      "Stackwerk is uitsluitend aansprakelijk voor directe schade die het rechtstreekse gevolg is van een toerekenbare tekortkoming van Stackwerk.",
      "De aansprakelijkheid van Stackwerk is in alle gevallen beperkt tot het bedrag dat voor de betreffende opdracht is gefactureerd en door de opdrachtgever is betaald, met een maximum van 5.000 euro.",
      "Stackwerk is niet aansprakelijk voor indirecte schade, gevolgschade, gederfde winst, gemiste besparingen, schade door bedrijfsstagnatie of verlies van data.",
      "De opdrachtgever vrijwaart Stackwerk voor aanspraken van derden die in verband met de uitvoering van de overeenkomst schade lijden.",
    ],
  },
  {
    title: "10. Overmacht",
    content: [
      "Stackwerk is niet gehouden tot nakoming van enige verplichting indien nakoming redelijkerwijs niet van Stackwerk kan worden gevergd als gevolg van overmacht.",
      "Onder overmacht wordt verstaan: elke van de wil van Stackwerk onafhankelijke omstandigheid die nakoming tijdelijk of blijvend verhindert, waaronder storingen bij hostingproviders, internetstoringen, ziekte of uitval van essentiële medewerkers.",
      "Bij overmacht van meer dan 60 dagen heeft zowel Stackwerk als de opdrachtgever het recht de overeenkomst te ontbinden, zonder dat daardoor enig recht op schadevergoeding ontstaat.",
    ],
  },
  {
    title: "11. Geheimhouding",
    content: [
      "Beide partijen zijn verplicht tot geheimhouding van alle vertrouwelijke informatie die zij in het kader van de overeenkomst van elkaar hebben verkregen.",
      "Informatie geldt als vertrouwelijk als dit door de andere partij is medegedeeld of als dit uit de aard van de informatie redelijkerwijs voortvloeit.",
      "Stackwerk zal vertrouwelijke gegevens van de opdrachtgever niet aan derden verstrekken zonder voorafgaande toestemming, tenzij Stackwerk hiertoe wettelijk verplicht is.",
    ],
  },
  {
    title: "12. Toepasselijk recht",
    content: [
      "Op alle overeenkomsten tussen Stackwerk en de opdrachtgever is uitsluitend Nederlands recht van toepassing.",
      "Geschillen die voortvloeien uit of verband houden met een overeenkomst worden bij uitsluiting voorgelegd aan de bevoegde rechter in het arrondissement Noord-Nederland.",
      "Partijen zullen eerst trachten een geschil in onderling overleg op te lossen voordat zij zich wenden tot de rechter.",
    ],
  },
];

export default function AlgemeneVoorwaarden() {
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
            Algemene voorwaarden
          </h1>
          <p className="font-sans" style={{ color: "rgba(17,17,17,0.55)", fontSize: "14px" }}>
            Versie 1.0 · juni 2026
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
                    {paragraph.replace(/\*\*(.*?)\*\*/g, "$1")}
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
