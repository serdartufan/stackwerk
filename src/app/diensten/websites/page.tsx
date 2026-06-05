import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollAnimation from "@/components/ScrollAnimation";

export const metadata: Metadata = {
  title: "Websites | Stackwerk",
  description:
    "Stackwerk bouwt conversiegerichte websites die snel laden, goed ranken en bezoekers omzetten in klanten. Van landingspagina tot volledige bedrijfssite.",
};

const features = [
  {
    num: "01",
    title: "Conversiegerichte opbouw",
    desc: "Elke pagina is opgebouwd rondom één doel. Bezoekers weten precies wat ze moeten doen en waarom.",
  },
  {
    num: "02",
    title: "Snel en technisch sterk",
    desc: "Onze websites scoren hoog op Core Web Vitals. Snel laden, geen technische schuld, klaar voor groei.",
  },
  {
    num: "03",
    title: "SEO vanaf de basis",
    desc: "Technische SEO zit ingebakken in hoe we bouwen. Geen aparte optimalisatieslag nodig achteraf.",
  },
  {
    num: "04",
    title: "Mobiel eerst",
    desc: "Meer dan de helft van je bezoekers komt via mobiel. Wij bouwen mobile-first, zodat de ervaring overal klopt.",
  },
  {
    num: "05",
    title: "Koppelingen en integraties",
    desc: "Van contactformulieren tot CRM koppelingen. Wij zorgen dat jouw website aansluit op de rest van je bedrijf.",
  },
  {
    num: "06",
    title: "Oplevering met overdracht",
    desc: "Na oplevering krijg je alle toegangen, de code en uitleg. Geen afhankelijkheid van ons als je iets wil aanpassen.",
  },
];

const voorWie = [
  "Een nieuwe website wil laten bouwen die er professioneel uitziet en ook echt werkt.",
  "Je huidige website bezoekers niet omzet in klanten en wil weten waarom.",
  "Wil opschalen maar je website houdt je tegen.",
];

const techStack = [
  {
    naam: "Next.js",
    desc: "Voor snelle, SEO-vriendelijke websites met een uitstekende gebruikerservaring.",
  },
  {
    naam: "TypeScript",
    desc: "Minder fouten, betere code. TypeScript zorgt voor robuuste en onderhoudbare websites.",
  },
  {
    naam: "Tailwind CSS",
    desc: "Strakke, consistente styling die snel aanpasbaar is en altijd goed oogt.",
  },
];

export default function WebsitesDienst() {
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
                DIENST 01
              </p>
              <h1
                className="font-serif font-bold leading-[1.06] mb-8"
                style={{ fontSize: "clamp(3rem, 7vw, 6rem)", color: "#F0EDE8" }}
              >
                Websites die{" "}
                <span className="italic" style={{ color: "#E85D26" }}>
                  converteren.
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
                Een mooie website is een begin. Maar een website die bezoekers
                omzet in klanten, dat is wat jouw bedrijf verder brengt. Wij bouwen
                websites die dat doen.
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
                src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&q=85&auto=format&fit=crop"
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
              Alles wat een goede{" "}
              <span className="italic" style={{ color: "#E85D26" }}>
                website nodig heeft.
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
              Klaar voor een website die{" "}
              <span className="italic" style={{ color: "#E85D26" }}>
                werkt?
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
              Vertel ons over je project en we nemen binnen 24 uur contact op.
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
