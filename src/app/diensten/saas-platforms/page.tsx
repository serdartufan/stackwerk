import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollAnimation from "@/components/ScrollAnimation";

export const metadata: Metadata = {
  title: "SaaS Platforms | Stackwerk",
  description:
    "Stackwerk bouwt schaalbare SaaS platforms met multi-tenant architectuur, auth, dashboards en Stripe betalingen. Van MVP tot enterprise.",
};

const features = [
  {
    num: "01",
    title: "Multi-tenant architectuur",
    desc: "Meerdere klanten, één platform. Veilig gescheiden data, schaalbaar vanaf dag één.",
  },
  {
    num: "02",
    title: "Authenticatie en autorisatie",
    desc: "Veilige inlog, rollen en rechten. Van simpele gebruikersaccounts tot complexe teamstructuren.",
  },
  {
    num: "03",
    title: "Dashboards en analytics",
    desc: "Jouw klanten willen inzicht. Wij bouwen dashboards die data inzichtelijk maken en waarde toevoegen.",
  },
  {
    num: "04",
    title: "Stripe betalingen",
    desc: "Abonnementen, eenmalige betalingen, facturen. Wij integreren Stripe zodat je direct kunt monetiseren.",
  },
  {
    num: "05",
    title: "API koppelingen",
    desc: "Van Zapier tot maatwerk API integraties. Wij zorgen dat jouw platform aansluit op de tools van jouw klanten.",
  },
  {
    num: "06",
    title: "Van MVP naar schaal",
    desc: "We bouwen met architectuur die meegroeit. Begin klein, schaal op zonder alles opnieuw te bouwen.",
  },
];

const voorWie = [
  "Je een SaaS idee hebt en een betrouwbare partner zoekt om het te bouwen.",
  "Je een bestaand platform hebt dat technisch vastloopt en opnieuw opgebouwd moet worden.",
  "Je snel een MVP wil lanceren zonder concessies te doen aan kwaliteit en schaalbaarheid.",
];

const techStack = [
  {
    naam: "Next.js",
    desc: "Moderne frontend met uitstekende performance en developer experience.",
  },
  {
    naam: "Supabase",
    desc: "Schaalbare database, authenticatie en realtime functionaliteit in één platform.",
  },
  {
    naam: "Stripe",
    desc: "De standaard voor online betalingen. Abonnementen, facturatie en meer.",
  },
];

export default function SaasPlatformsDienst() {
  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="overflow-hidden" style={{ backgroundColor: "#111111" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 py-32 lg:grid-cols-2 lg:py-40">
            <div>
              <p
                className="font-sans mb-6 text-xs uppercase tracking-[0.28em]"
                style={{ color: "#E8620A" }}
              >
                DIENST 02
              </p>
              <h1
                className="font-serif font-bold leading-[1.06] mb-8"
                style={{ fontSize: "clamp(3rem, 7vw, 6rem)", color: "#F0EDE8" }}
              >
                SaaS platforms die{" "}
                <span className="italic" style={{ color: "#E8620A" }}>
                  schalen.
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
                Van eerste idee tot werkend product. Wij bouwen multi-tenant
                platforms die klaar zijn voor groei, zonder dat je alles opnieuw
                hoeft te bouwen als je groter wordt.
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
                src="/images/diensten-saas.webp"
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
              style={{ color: "#E8620A" }}
            >
              WAT JE KRIJGT
            </p>
            <h2
              className="font-serif font-bold mb-16"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#111111" }}
            >
              Alles wat een SaaS platform{" "}
              <span className="italic" style={{ color: "#E8620A" }}>
                nodig heeft.
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
                    style={{ color: "#E8620A" }}
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
              style={{ color: "#E8620A" }}
            >
              VOOR WIE
            </p>
            <h2
              className="font-serif font-bold mb-16"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#F0EDE8" }}
            >
              Geschikt als{" "}
              <span className="italic" style={{ color: "#E8620A" }}>
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
                      backgroundColor: "#E8620A",
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
              style={{ color: "#E8620A" }}
            >
              HOE WE BOUWEN
            </p>
            <h2
              className="font-serif font-bold mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#111111" }}
            >
              Onze{" "}
              <span className="italic" style={{ color: "#E8620A" }}>
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
              Klaar om je SaaS{" "}
              <span className="italic" style={{ color: "#E8620A" }}>
                te bouwen?
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
            <Link
              href="/#contact"
              className="press inline-flex items-center rounded-full px-8 py-4 font-sans text-base font-medium text-white hover:opacity-85"
              style={{ backgroundColor: "#E8620A" }}
            >
              Start een project
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
}
