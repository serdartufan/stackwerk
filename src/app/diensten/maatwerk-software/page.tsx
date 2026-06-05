import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollAnimation from "@/components/ScrollAnimation";

export const metadata: Metadata = {
  title: "Maatwerk Software | Stackwerk",
  description:
    "Stackwerk bouwt maatwerk software voor bedrijven die iets nodig hebben dat nergens kant-en-klaar bestaat. Van interne tools tot complexe integraties.",
};

const features = [
  {
    num: "01",
    title: "Probleemanalyse eerst",
    desc: "We beginnen altijd met begrijpen wat het echte probleem is. Pas dan schrijven we een regel code.",
  },
  {
    num: "02",
    title: "Interne tools en dashboards",
    desc: "Van urenregistratie tot voorraadsystemen. Wij bouwen tools die jouw team efficiënter maken.",
  },
  {
    num: "03",
    title: "Systeem integraties",
    desc: "Jouw CRM, ERP, boekhoudsoftware of iets anders. Wij zorgen dat systemen met elkaar praten.",
  },
  {
    num: "04",
    title: "Automatisering van processen",
    desc: "Repetitieve taken kosten tijd en geld. Wij automatiseren ze zodat jouw team zich kan focussen op wat belangrijk is.",
  },
  {
    num: "05",
    title: "Schaalbare architectuur",
    desc: "Maatwerk betekent niet rommelig. Wij bouwen gestructureerde, onderhoudsvriendelijke code die meegroeit.",
  },
  {
    num: "06",
    title: "Volledige overdracht",
    desc: "Na oplevering krijg je alle broncode, documentatie en toegangen. Geen lock-in.",
  },
];

const voorWie = [
  "Je een intern probleem hebt waarvoor geen goede standaardoplossing bestaat.",
  "Je systemen hebt die niet met elkaar communiceren en dat handmatig werk oplevert.",
  "Je processen wil automatiseren maar niet weet hoe je dat technisch moet aanpakken.",
];

const techStack = [
  {
    naam: "Next.js en Node.js",
    desc: "Voor webgebaseerde tools en applicaties die snel en betrouwbaar zijn.",
  },
  {
    naam: "API integraties",
    desc: "REST, GraphQL of webhooks. Wij koppelen systemen op de manier die het beste past.",
  },
  {
    naam: "Automatisering",
    desc: "Van eenvoudige scripts tot complexe workflows. Wij kiezen de juiste tool voor het probleem.",
  },
];

export default function MaatwerkSoftwareDienst() {
  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="overflow-hidden" style={{ backgroundColor: "#111111" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 py-32 lg:grid-cols-2 lg:py-40">
            <div>
              <p
                className="font-sans mb-6 text-xs uppercase tracking-[0.28em]"
                style={{ color: "#E85D26" }}
              >
                DIENST 03
              </p>
              <h1
                className="font-serif font-bold leading-[1.06] mb-8"
                style={{ fontSize: "clamp(3rem, 7vw, 6rem)", color: "#F0EDE8" }}
              >
                Software die past bij{" "}
                <span className="italic" style={{ color: "#E85D26" }}>
                  jouw bedrijf.
                </span>
              </h1>
              <p
                className="font-sans leading-relaxed"
                style={{
                  maxWidth: "480px",
                  color: "rgba(240,237,232,0.6)",
                  fontSize: "17px",
                }}
              >
                Soms bestaat er geen kant-en-klare oplossing voor wat jij nodig
                hebt. Wij bouwen het dan gewoon. Van interne tools tot complexe
                koppelingen tussen systemen.
              </p>
            </div>
            <div
              className="relative hidden overflow-hidden rounded-2xl lg:block"
              style={{ height: "420px" }}
            >
              <div
                className="absolute inset-0 z-10"
                style={{ backgroundColor: "rgba(17,17,17,0.3)" }}
              />
              <Image
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&q=85&auto=format&fit=crop"
                alt=""
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Wat je krijgt — wit ──────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#FFFFFF" }}>
        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-8 lg:py-40">
          <ScrollAnimation>
            <p
              className="font-sans mb-4 text-xs uppercase tracking-[0.28em]"
              style={{ color: "#E85D26" }}
            >
              WAT JE KRIJGT
            </p>
            <h2
              className="font-serif font-bold mb-16"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#111111" }}
            >
              Maatwerk dat{" "}
              <span className="italic" style={{ color: "#E85D26" }}>
                echt past.
              </span>
            </h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <ScrollAnimation key={f.num} delay={i * 70}>
                <div
                  style={{
                    backgroundColor: "#F5F5F5",
                    border: "1px solid rgba(17,17,17,0.06)",
                    borderRadius: "16px",
                    padding: "28px",
                  }}
                >
                  <p
                    className="font-sans text-sm font-medium mb-3"
                    style={{ color: "#E85D26" }}
                  >
                    {f.num}
                  </p>
                  <h3
                    className="font-serif font-bold text-lg mb-2"
                    style={{ color: "#111111" }}
                  >
                    {f.title}
                  </h3>
                  <p
                    className="font-sans text-sm leading-relaxed"
                    style={{ color: "rgba(17,17,17,0.6)" }}
                  >
                    {f.desc}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ── Voor wie — zwart ─────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#111111" }}>
        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-8 lg:py-40">
          <ScrollAnimation>
            <p
              className="font-sans mb-4 text-xs uppercase tracking-[0.28em]"
              style={{ color: "#E85D26" }}
            >
              VOOR WIE
            </p>
            <h2
              className="font-serif font-bold mb-16"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#F0EDE8" }}
            >
              Geschikt als{" "}
              <span className="italic" style={{ color: "#E85D26" }}>
                jij...
              </span>
            </h2>
          </ScrollAnimation>

          <div>
            {voorWie.map((tekst, i) => (
              <ScrollAnimation key={i} delay={i * 80}>
                <div
                  className="flex gap-6 py-8"
                  style={{
                    borderBottom:
                      i < voorWie.length - 1
                        ? "1px solid rgba(240,237,232,0.08)"
                        : "none",
                  }}
                >
                  <div
                    className="shrink-0"
                    style={{
                      width: "4px",
                      backgroundColor: "#E85D26",
                      borderRadius: "2px",
                    }}
                  />
                  <p
                    className="font-serif"
                    style={{
                      fontSize: "1.2rem",
                      color: "#FFFFFF",
                      lineHeight: 1.6,
                    }}
                  >
                    {tekst}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech stack — wit ─────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#FFFFFF" }}>
        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-8 lg:py-40">
          <ScrollAnimation>
            <p
              className="font-sans mb-4 text-xs uppercase tracking-[0.28em]"
              style={{ color: "#E85D26" }}
            >
              HOE WE BOUWEN
            </p>
            <h2
              className="font-serif font-bold mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#111111" }}
            >
              Onze{" "}
              <span className="italic" style={{ color: "#E85D26" }}>
                aanpak.
              </span>
            </h2>
            <p
              className="font-sans mb-16"
              style={{
                fontSize: "16px",
                color: "rgba(17,17,17,0.6)",
                maxWidth: "560px",
                lineHeight: "1.7",
              }}
            >
              Wij werken met een moderne, bewezen stack die snel, schaalbaar en
              onderhoudsvriendelijk is.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {techStack.map((tech, i) => (
              <ScrollAnimation key={tech.naam} delay={i * 90}>
                <div
                  style={{
                    backgroundColor: "#F5F5F5",
                    borderRadius: "12px",
                    padding: "24px",
                  }}
                >
                  <p
                    className="font-serif font-bold text-xl mb-2"
                    style={{ color: "#111111" }}
                  >
                    {tech.naam}
                  </p>
                  <p
                    className="font-sans text-sm leading-relaxed"
                    style={{ color: "rgba(17,17,17,0.6)" }}
                  >
                    {tech.desc}
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
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)", color: "#F0EDE8" }}
            >
              Een idee dat nergens{" "}
              <span className="italic" style={{ color: "#E85D26" }}>
                past?
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
              Vertel ons wat je nodig hebt en we denken met je mee. Geen
              verplichtingen.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center rounded-full px-8 py-4 font-sans text-base font-medium text-white transition-opacity hover:opacity-85"
              style={{ backgroundColor: "#E85D26" }}
            >
              Start een project
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
}
