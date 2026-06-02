import type { Metadata } from "next";
import ScrollAnimation from "@/components/ScrollAnimation";

export const metadata: Metadata = {
  title: "Over ons | Stackwerk",
  description:
    "Stackwerk is actief sinds 2019. Begonnen als performance marketeers, gegroeid naar een full-service development bureau voor websites, SaaS platforms en maatwerk software.",
};

// ─── Data ────────────────────────────────────────────────────────────────────

const verhaalStats = [
  { number: "2019", label: "Jaar van oprichting" },
  { number: "20+", label: "Jaar gecombineerde ervaring" },
  { number: "10+", label: "Opgeleverde projecten" },
];

const team = [
  {
    naam: "Serdar",
    rol: "CRO Specialist en Developer",
    desc: "Serdar combineert jarenlange ervaring in performance marketing met een scherp oog voor conversie en techniek. Hij bewaakt de strategie en zorgt dat elk project aansluit op het doel van de klant.",
  },
  {
    naam: "Dogukan",
    rol: "CRO Specialist en Developer",
    desc: "Dogukan brengt dezelfde mix van marketing en techniek mee. Zijn analytische aanpak zorgt ervoor dat wat wij bouwen niet alleen goed werkt, maar ook meetbaar resultaat oplevert.",
  },
  {
    naam: "Vertrouwde partners",
    rol: "Extern netwerk",
    desc: "Voor complexere projecten werken we samen met een select netwerk van vertrouwde developers en specialisten. Alles blijft in eigen beheer, zodat we de kwaliteit kunnen blijven waarborgen.",
  },
];

const waaromPunten = [
  {
    num: "01",
    title: "Wij begrijpen je klant",
    desc: "We zijn begonnen als marketeers. Dat betekent dat we niet alleen bouwen wat je vraagt, maar nadenken over wie het gaat gebruiken en wat die persoon nodig heeft om te converteren.",
  },
  {
    num: "02",
    title: "Techniek én strategie",
    desc: "Wij verbinden de technische uitvoering aan het strategische doel. Een mooie website is nutteloos als hij niet converteert. Wij zorgen dat hij dat wel doet.",
  },
  {
    num: "03",
    title: "Kwaliteit boven kwantiteit",
    desc: "We nemen bewust een beperkt aantal projecten per jaar aan. Zo kunnen we elk project de aandacht geven die het verdient en resultaten leveren waar we trots op zijn.",
  },
  {
    num: "04",
    title: "Eén aanspreekpunt",
    desc: "Geen doorverwijzingen of account managers. Je werkt direct met de mensen die jouw project bouwen.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function OverOns() {
  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section
        className="px-6 py-32 lg:px-8 lg:py-40"
        style={{ backgroundColor: "#111111" }}
      >
        <div className="mx-auto max-w-7xl">
          <p
            className="font-sans mb-6 text-xs uppercase tracking-[0.28em]"
            style={{ color: "#E85D26" }}
          >
            OVER ONS
          </p>
          <h1
            className="font-serif font-bold leading-[1.06] mb-8"
            style={{ fontSize: "clamp(3rem, 7vw, 6rem)", color: "#F0EDE8" }}
          >
            Wij bouwen al jaren
            <br />
            <span className="italic" style={{ color: "#E85D26" }}>
              met een reden.
            </span>
          </h1>
          <p
            className="font-sans leading-relaxed"
            style={{
              maxWidth: "600px",
              color: "rgba(240,237,232,0.6)",
              fontSize: "17px",
            }}
          >
            Stackwerk begon niet als development bureau. We zijn gestart als
            performance marketeers en hebben van daaruit geleerd wat een website
            echt moet doen: converteren. Dat inzicht zit in alles wat we
            bouwen.
          </p>
        </div>
      </section>

      {/* ── Het verhaal — wit ────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#FFFFFF" }}>
        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-8 lg:py-40">
          <ScrollAnimation>
            <p
              className="font-sans mb-4 text-xs uppercase tracking-[0.28em]"
              style={{ color: "#E85D26" }}
            >
              ONS VERHAAL
            </p>
            <h2
              className="font-serif font-bold mb-16"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                color: "#111111",
              }}
            >
              Van advertenties naar{" "}
              <span className="italic" style={{ color: "#E85D26" }}>
                architectuur.
              </span>
            </h2>
          </ScrollAnimation>

          <div className="grid gap-16 lg:grid-cols-2">
            {/* Linker kolom: verhaal */}
            <ScrollAnimation>
              <div
                className="font-sans flex flex-col gap-6"
                style={{
                  color: "rgba(17,17,17,0.7)",
                  fontSize: "16px",
                  lineHeight: "1.8",
                }}
              >
                <p>
                  Stackwerk is actief sinds 2019. We begonnen als performance
                  marketeers en merkten al snel dat de meeste websites waar we
                  verkeer naartoe stuurden, dat verkeer niet konden vasthouden.
                  Geen duidelijke structuur, trage laadtijden, geen logische
                  gebruikersflow.
                </p>
                <p>
                  Dus begonnen we zelf landingspaginas te ontwerpen.
                  Conversiegerichte paginas die aansloten op de advertenties die
                  we draaiden. Het werkte. Klanten zagen betere resultaten en
                  vroegen ons om meer.
                </p>
                <p>
                  Zo groeide onze focus van marketing naar development. Stap
                  voor stap bouwden we onze technische kennis op, totdat we
                  complete websites, SaaS platforms en maatwerk software konden
                  leveren. Zonder de marketingkennis te verliezen die ons
                  onderscheidt.
                </p>
              </div>
            </ScrollAnimation>

            {/* Rechter kolom: stats */}
            <ScrollAnimation>
              <div className="flex flex-col">
                {verhaalStats.map((stat, i) => (
                  <div
                    key={stat.number}
                    className="py-8"
                    style={{
                      borderBottom:
                        i < verhaalStats.length - 1
                          ? "1px solid rgba(17,17,17,0.08)"
                          : "none",
                    }}
                  >
                    <p
                      className="font-serif font-bold mb-1"
                      style={{ fontSize: "3rem", color: "#111111", lineHeight: 1 }}
                    >
                      {stat.number}
                    </p>
                    <p
                      className="font-sans"
                      style={{ fontSize: "13px", color: "rgba(17,17,17,0.45)" }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* ── Het team — zwart ─────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#111111" }}>
        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-8 lg:py-40">
          <ScrollAnimation>
            <p
              className="font-sans mb-4 text-xs uppercase tracking-[0.28em]"
              style={{ color: "#E85D26" }}
            >
              HET TEAM
            </p>
            <h2
              className="font-serif font-bold mb-16"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                color: "#F0EDE8",
              }}
            >
              De mensen{" "}
              <span className="italic" style={{ color: "#E85D26" }}>
                achter
              </span>{" "}
              Stackwerk.
            </h2>
          </ScrollAnimation>

          <div className="grid gap-0 md:grid-cols-3">
            {team.map((lid, i) => (
              <ScrollAnimation key={lid.naam} delay={i * 100}>
                <div
                  className="py-8 md:px-8 md:first:pl-0 md:last:pr-0"
                  style={{
                    borderTop: "1px solid rgba(240,237,232,0.08)",
                  }}
                >
                  <p
                    className="font-sans uppercase mb-3"
                    style={{
                      fontSize: "13px",
                      letterSpacing: "0.1em",
                      color: "#E85D26",
                    }}
                  >
                    {lid.rol}
                  </p>
                  <p
                    className="font-serif font-bold mb-4"
                    style={{ fontSize: "1.5rem", color: "#FFFFFF" }}
                  >
                    {lid.naam}
                  </p>
                  <p
                    className="font-sans text-sm leading-relaxed"
                    style={{ color: "rgba(240,237,232,0.6)" }}
                  >
                    {lid.desc}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ── Waarom wij — wit ─────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#FFFFFF" }}>
        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-8 lg:py-40">
          <ScrollAnimation>
            <p
              className="font-sans mb-4 text-xs uppercase tracking-[0.28em]"
              style={{ color: "#E85D26" }}
            >
              WAAROM STACKWERK
            </p>
            <h2
              className="font-serif font-bold mb-16"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                color: "#111111",
              }}
            >
              Marketing in ons{" "}
              <span className="italic" style={{ color: "#E85D26" }}>
                DNA.
              </span>
            </h2>
          </ScrollAnimation>

          <div className="grid gap-6 md:grid-cols-2">
            {waaromPunten.map((punt, i) => (
              <ScrollAnimation key={punt.num} delay={i * 80}>
                <div
                  style={{
                    backgroundColor: "#F5F5F5",
                    border: "1px solid rgba(17,17,17,0.06)",
                    borderRadius: "16px",
                    padding: "32px",
                  }}
                >
                  <p
                    className="font-sans text-sm font-medium mb-3"
                    style={{ color: "#E85D26" }}
                  >
                    {punt.num}
                  </p>
                  <h3
                    className="font-serif font-bold text-xl mb-3"
                    style={{ color: "#111111" }}
                  >
                    {punt.title}
                  </h3>
                  <p
                    className="font-sans text-sm leading-relaxed"
                    style={{ color: "rgba(17,17,17,0.6)" }}
                  >
                    {punt.desc}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA — zwart ──────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#111111" }}>
        <div className="mx-auto max-w-7xl px-6 py-32 text-center lg:px-8 lg:py-40">
          <ScrollAnimation>
            <h2
              className="font-serif font-bold mb-6"
              style={{
                fontSize: "clamp(2rem, 5vw, 4rem)",
                color: "#F0EDE8",
              }}
            >
              Klaar om te{" "}
              <span className="italic" style={{ color: "#E85D26" }}>
                bouwen?
              </span>
            </h2>
            <p
              className="font-sans mx-auto mb-10"
              style={{
                maxWidth: "480px",
                color: "rgba(240,237,232,0.55)",
                fontSize: "17px",
                lineHeight: "1.7",
              }}
            >
              Vertel ons over je idee en we nemen binnen 24 uur contact op.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center rounded-full px-8 py-4 font-sans text-base font-medium text-white transition-opacity hover:opacity-85"
              style={{ backgroundColor: "#E85D26" }}
            >
              Start een project
            </a>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
}
