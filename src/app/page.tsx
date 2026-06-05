import Image from "next/image";
import Link from "next/link";
import ScrollAnimation from "@/components/ScrollAnimation";
import ContactForm from "@/components/ContactForm";

// ─── Data ────────────────────────────────────────────────────────────────────

const diensten = [
  {
    num: "01",
    title: "Websites",
    href: "/diensten/websites",
    desc: "Conversiegerichte websites die snel laden, goed ranken en bezoekers omzetten in klanten. Van landingspagina tot volledige bedrijfssite.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    num: "02",
    title: "SaaS Platforms",
    href: "/diensten/saas-platforms",
    desc: "Van MVP tot schaalbaar platform. Wij bouwen multi-tenant applicaties met auth, dashboards, betalingen en alles wat erbij hoort.",
    tags: ["Next.js", "Supabase", "Stripe"],
  },
  {
    num: "03",
    title: "Maatwerk Software",
    href: "/diensten/maatwerk-software",
    desc: "Heeft jouw bedrijf iets nodig dat nergens kant-en-klaar bestaat? Wij bouwen het. Van interne tools tot complexe integraties.",
    tags: ["API's", "Automatisering", "Integraties"],
  },
];

const cases = [
  {
    num: "01",
    label: "Marketing Bureau",
    title: "FunnelVision",
    desc: "Volledige agency website met SEO, AEO, schema markup en kennisbank. Van nul naar live in twee weken.",
    tags: ["Next.js", "SEO", "AEO"],
    result: "Live in 2 weken",
    img: "/cases/funnelvision.png",
  },
  {
    num: "02",
    label: "AI SaaS",
    title: "Just Harry",
    desc: "AI lead kwalificatie tool voor dienstverleners. Multi-tenant platform met auth, dashboards, Stripe betalingen en Claude AI integratie.",
    tags: ["Next.js", "Supabase", "Claude AI"],
    result: "Van idee naar product in 30 dagen",
    img: "/cases/justharry.png",
  },
  {
    num: "03",
    label: "Website",
    title: "My Miracle",
    desc: "Website voor een LPG Endermologie behandelcentrum. Snel, mobielvriendelijk en geoptimaliseerd voor lokale SEO.",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    result: "Conversie +40%",
    img: "/cases/mymiracle.png",
  },
];

const waarom = [
  {
    num: "01",
    title: "AI als werktool",
    desc: "Wij gebruiken AI intern om sneller te bouwen en beter te testen. Dat betekent minder uren, betere code en snellere oplevering voor jou.",
  },
  {
    num: "02",
    title: "Eén aanspreekpunt",
    desc: "Je werkt direct met de mensen die jouw product bouwen. Geen tussenpersonen, geen vertraagde feedback, geen uitleg die twee keer gedaan moet worden.",
  },
  {
    num: "03",
    title: "Schaalbaar vanaf dag 1",
    desc: "Wij bouwen met architectuur die meegroeit. Van MVP naar enterprise zonder alles opnieuw te hoeven bouwen.",
  },
  {
    num: "04",
    title: "Resultaat boven proces",
    desc: "Wij leveren op tijd. Concrete deadlines, vaste prijs, geen verrassingen achteraf.",
  },
];

const steps = [
  {
    num: "01",
    title: "Kennismaking",
    desc: "Vrijblijvend gesprek over je idee, doelen en budget. We kijken eerlijk of we de juiste match zijn.",
  },
  {
    num: "02",
    title: "Voorstel",
    desc: "Een concreet projectvoorstel met scope, planning en vaste prijs. Wat je ziet is wat je betaalt.",
  },
  {
    num: "03",
    title: "Bouw",
    desc: "We bouwen in sprints. Je ziet tussentijds de voortgang en geeft feedback waar nodig.",
  },
  {
    num: "04",
    title: "Revisies",
    desc: "We verwerken je feedback en schaven bij tot het precies klopt zoals jij het voor je ziet.",
  },
  {
    num: "05",
    title: "Oplevering",
    desc: "Het project wordt overgedragen. Code, toegangen en documentatie, alles netjes geregeld.",
  },
];

const stats = [
  { number: "10+", label: "Projecten opgeleverd" },
  { number: "3", label: "Actieve SaaS producten" },
  { number: "100%", label: "Op tijd opgeleverd" },
  { number: "2019", label: "Actief sinds" },
];

const navLinks = [
  { label: "Diensten", href: "#diensten" },
  { label: "Werk", href: "#werk" },
  { label: "Over ons", href: "#over-ons" },
  { label: "Contact", href: "#contact" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <main>
        {/* ── Hero — zwart ─────────────────────────────────────────────────── */}
        <section
          className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 lg:px-8"
          style={{ backgroundColor: "#111111" }}
        >
          {/* Tekst — zelfde layout als voor de foto */}
          <div className="relative z-10 mx-auto w-full max-w-7xl pt-6 pb-10 lg:pt-8 lg:pb-12">
            <h1
              className="font-serif font-bold leading-[1.02] mb-10"
              style={{ fontSize: "clamp(4.5rem, 11vw, 10rem)" }}
            >
              <span className="block" style={{ color: "#F0EDE8" }}>
                Wij bouwen
              </span>
              <span className="block italic" style={{ color: "#E85D26" }}>
                jouw visie.
              </span>
            </h1>

            <p
              className="font-sans mb-10 leading-relaxed"
              style={{
                maxWidth: "460px",
                color: "rgba(240,237,232,0.55)",
                fontSize: "16px",
              }}
            >
              Stackwerk is een onafhankelijk development bureau in Groningen.
              Wij bouwen websites, SaaS platforms en maatwerk software voor
              ondernemers die hun idee serieus nemen.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center rounded-full px-8 py-4 font-sans text-sm font-medium text-white transition-opacity hover:opacity-85"
                style={{ backgroundColor: "#E85D26" }}
              >
                Start een project
              </a>
              <a
                href="#werk"
                className="inline-flex items-center rounded-full px-8 py-4 font-sans text-sm font-medium transition-opacity hover:opacity-75"
                style={{
                  border: "1px solid rgba(240,237,232,0.2)",
                  color: "#F0EDE8",
                }}
              >
                Bekijk ons werk
              </a>
            </div>
          </div>

          {/* Afbeelding — absoluut rechts, desktop only. z-[1] zodat tekst (z-10) altijd bovenop ligt */}
          <div className="absolute right-0 top-0 hidden h-full w-[42%] lg:block" style={{ zIndex: 1 }}>
            <div
              className="absolute inset-0"
              style={{
                zIndex: 2,
                background: "linear-gradient(to right, #111111 0%, rgba(17,17,17,0) 40%)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{ zIndex: 1, backgroundColor: "rgba(17,17,17,0.3)" }}
            />
            <Image
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1400&q=85&auto=format&fit=crop"
              alt=""
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          <div className="absolute bottom-8 right-6 z-10 lg:right-8">
            <p
              className="font-sans text-xs uppercase tracking-[0.18em]"
              style={{ color: "rgba(240,237,232,0.28)" }}
            >
              ACTIEF SINDS 2019 · GRONINGEN
            </p>
          </div>
        </section>

        {/* ── Stats — puur wit ─────────────────────────────────────────────── */}
        <section style={{ backgroundColor: "#FFFFFF" }}>
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat, i) => (
                <ScrollAnimation key={stat.number} delay={i * 90}>
                  <div className="text-center">
                    <p
                      className="font-serif font-bold text-4xl mb-2"
                      style={{ color: "#111111" }}
                    >
                      {stat.number}
                    </p>
                    <p
                      className="font-sans text-sm"
                      style={{ color: "rgba(17,17,17,0.5)" }}
                    >
                      {stat.label}
                    </p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* ── Diensten — oranje ────────────────────────────────────────────── */}
        <section id="diensten" style={{ backgroundColor: "#E85D26" }}>
          <div className="mx-auto max-w-7xl px-6 py-32 lg:px-8 lg:py-40">
            <ScrollAnimation>
              <p
                className="font-sans mb-4 text-xs uppercase tracking-[0.28em]"
                style={{ color: "rgba(0,0,0,0.45)" }}
              >
                WAT WE BOUWEN
              </p>
              <h2
                className="font-serif font-bold mb-16"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  color: "#FFFFFF",
                }}
              >
                Van idee naar{" "}
                <span className="italic" style={{ color: "#111111" }}>
                  werkend product.
                </span>
              </h2>
            </ScrollAnimation>

            <div className="grid gap-6 md:grid-cols-3">
              {diensten.map((d, i) => (
                <ScrollAnimation key={d.num} delay={i * 110}>
                  <Link href={d.href} className="block h-full">
                  <div
                    className="dienst-card flex h-full flex-col rounded-2xl p-10 cursor-pointer"
                    style={{
                      backgroundColor: "#FFFFFF",
                      border: "1px solid rgba(17,17,17,0.08)",
                    }}
                  >
                    <p
                      className="font-serif font-bold mb-6 leading-none select-none"
                      style={{
                        fontSize: "3rem",
                        color: "#E85D26",
                      }}
                    >
                      {d.num}
                    </p>
                    <h3
                      className="font-serif font-bold text-3xl mb-4"
                      style={{ color: "#111111" }}
                    >
                      {d.title}
                    </h3>
                    <p
                      className="font-sans flex-1 text-sm leading-relaxed mb-8"
                      style={{ color: "rgba(17,17,17,0.6)" }}
                    >
                      {d.desc}
                    </p>
                    <div className="mt-auto flex items-end justify-between">
                      <div className="flex flex-wrap gap-2">
                        {d.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-sans rounded-full px-3 py-1 text-xs"
                            style={{
                              backgroundColor: "rgba(17,17,17,0.06)",
                              color: "rgba(17,17,17,0.5)",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span
                        className="font-sans ml-4 shrink-0 text-xl"
                        style={{ color: "#E85D26" }}
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </div>
                  </div>
                  </Link>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* ── Werkwijze — wit ──────────────────────────────────────────────── */}
        <section style={{ backgroundColor: "#FFFFFF" }}>
          <div className="mx-auto max-w-7xl px-6 py-32 lg:px-8 lg:py-40">
            <ScrollAnimation>
              <p
                className="font-sans mb-4 text-xs uppercase tracking-[0.28em]"
                style={{ color: "#E85D26" }}
              >
                HOE WE WERKEN
              </p>
              <h2
                className="font-serif font-bold mb-16 lg:mb-24"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  color: "#111111",
                }}
              >
                Onze{" "}
                <span className="italic" style={{ color: "#E85D26" }}>
                  werkwijze.
                </span>
              </h2>

              {/* Desktop: horizontale timeline */}
              <div className="relative hidden md:block">
                {/* Horizontale verbindingslijn — gecentreerd op de cirkels */}
                <div
                  className="absolute left-0 right-0"
                  style={{
                    top: "167px",
                    height: "1px",
                    backgroundColor: "rgba(17,17,17,0.12)",
                  }}
                />

                <div className="grid grid-cols-5">
                  {steps.map((step, i) => {
                    const isOdd = i % 2 === 0;
                    return (
                      <div key={step.title} className="flex flex-col items-center px-3">
                        {/* Boven de lijn — fixed height zodat cirkels uitlijnen */}
                        <div
                          className="flex w-full flex-col items-center justify-end text-center"
                          style={{ height: "160px", paddingBottom: "12px" }}
                        >
                          {isOdd ? (
                            <>
                              <p
                                className="font-sans uppercase mb-2"
                                style={{
                                  fontSize: "11px",
                                  letterSpacing: "0.2em",
                                  color: "rgba(17,17,17,0.35)",
                                }}
                              >
                                {step.num}
                              </p>
                              <p
                                className="font-serif font-bold"
                                style={{ fontSize: "1.1rem", color: "#111111" }}
                              >
                                {step.title}
                              </p>
                            </>
                          ) : (
                            <p
                              className="font-sans text-center"
                              style={{
                                fontSize: "13px",
                                color: "rgba(17,17,17,0.6)",
                                maxWidth: "160px",
                                lineHeight: "1.6",
                              }}
                            >
                              {step.desc}
                            </p>
                          )}
                        </div>

                        {/* Cirkel op de lijn */}
                        <div
                          className="shrink-0 rounded-full"
                          style={{
                            width: "14px",
                            height: "14px",
                            backgroundColor: "#E85D26",
                            border: "3px solid white",
                            boxShadow: "0 0 0 1px #E85D26",
                          }}
                        />

                        {/* Onder de lijn */}
                        <div
                          className="flex w-full flex-col items-center text-center"
                          style={{ paddingTop: "12px" }}
                        >
                          {isOdd ? (
                            <p
                              className="font-sans"
                              style={{
                                fontSize: "13px",
                                color: "rgba(17,17,17,0.6)",
                                maxWidth: "160px",
                                lineHeight: "1.6",
                              }}
                            >
                              {step.desc}
                            </p>
                          ) : (
                            <>
                              <p
                                className="font-sans uppercase mb-2"
                                style={{
                                  fontSize: "11px",
                                  letterSpacing: "0.2em",
                                  color: "rgba(17,17,17,0.35)",
                                }}
                              >
                                {step.num}
                              </p>
                              <p
                                className="font-serif font-bold"
                                style={{ fontSize: "1.1rem", color: "#111111" }}
                              >
                                {step.title}
                              </p>
                            </>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Mobiel: verticale timeline */}
              <div className="md:hidden">
                {steps.map((step, i) => (
                  <div key={step.title} className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <div
                        className="shrink-0 rounded-full"
                        style={{
                          width: "14px",
                          height: "14px",
                          backgroundColor: "#E85D26",
                          border: "3px solid white",
                          boxShadow: "0 0 0 1px #E85D26",
                        }}
                      />
                      {i < steps.length - 1 && (
                        <div
                          className="mt-1 w-px flex-1"
                          style={{
                            backgroundColor: "rgba(17,17,17,0.12)",
                            minHeight: "60px",
                          }}
                        />
                      )}
                    </div>
                    <div className="pb-10">
                      <p
                        className="font-sans uppercase mb-1"
                        style={{
                          fontSize: "11px",
                          letterSpacing: "0.2em",
                          color: "rgba(17,17,17,0.35)",
                        }}
                      >
                        {step.num}
                      </p>
                      <p
                        className="font-serif font-bold mb-2"
                        style={{ fontSize: "1.1rem", color: "#111111" }}
                      >
                        {step.title}
                      </p>
                      <p
                        className="font-sans"
                        style={{
                          fontSize: "13px",
                          color: "rgba(17,17,17,0.6)",
                          lineHeight: "1.6",
                        }}
                      >
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* ── Werk — zwart ─────────────────────────────────────────────────── */}
        <section id="werk" style={{ backgroundColor: "#111111" }}>
          <div className="mx-auto max-w-7xl px-6 py-32 lg:px-8 lg:py-40">
            <ScrollAnimation>
              <p
                className="font-sans mb-4 text-xs uppercase tracking-[0.28em]"
                style={{ color: "#E85D26" }}
              >
                ONS WERK
              </p>
              <h2
                className="font-serif font-bold mb-16"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  color: "#F0EDE8",
                }}
              >
                Projecten waar we{" "}
                <span className="italic" style={{ color: "#E85D26" }}>
                  trots
                </span>{" "}
                op zijn.
              </h2>
            </ScrollAnimation>

            <div>
              {cases.map((c, i) => (
                <ScrollAnimation key={c.num} delay={i * 80}>
                  <div
                    className="case-row relative py-12 md:py-16"
                    style={{
                      borderBottom: "1px solid rgba(240,237,232,0.08)",
                    }}
                  >
                    {/* Groot achtergrondnummer */}
                    <span
                      className="absolute left-0 top-1/2 -translate-y-1/2 font-serif font-bold leading-none select-none pointer-events-none"
                      aria-hidden="true"
                      style={{
                        fontSize: "clamp(4rem, 8vw, 7rem)",
                        color: "#E85D26",
                        opacity: 0.15,
                      }}
                    >
                      {c.num}
                    </span>

                    {/* Content — verschoven voorbij het nummer */}
                    <div
                      className="relative flex flex-col gap-6 md:flex-row md:items-center"
                      style={{
                        paddingLeft: "clamp(4.5rem, 9.5vw, 8rem)",
                      }}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="mb-3">
                          <span
                            className="font-sans rounded-full px-3 py-1 text-xs"
                            style={{
                              backgroundColor: "rgba(232,93,38,0.12)",
                              color: "#E85D26",
                            }}
                          >
                            {c.label}
                          </span>
                        </div>
                        <h3
                          className="case-title font-serif font-bold mb-3"
                          style={{
                            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                          }}
                        >
                          {c.title}
                        </h3>
                        <p
                          className="font-sans text-sm leading-relaxed mb-5"
                          style={{
                            maxWidth: "480px",
                            color: "rgba(240,237,232,0.58)",
                          }}
                        >
                          {c.desc}
                        </p>
                        <div className="flex flex-wrap items-center gap-3">
                          <div className="flex flex-wrap gap-2">
                            {c.tags.map((tag) => (
                              <span
                                key={tag}
                                className="font-sans rounded-full px-3 py-1 text-xs"
                                style={{
                                  backgroundColor: "rgba(240,237,232,0.06)",
                                  color: "rgba(240,237,232,0.45)",
                                }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <p
                            className="font-sans text-sm font-medium"
                            style={{ color: "#E85D26" }}
                          >
                            {c.result}
                          </p>
                        </div>
                      </div>

                      {/* Thumbnail — desktop only */}
                      <div
                        className="hidden lg:block shrink-0 overflow-hidden rounded-xl"
                        style={{
                          width: "200px",
                          height: "130px",
                          border: "1px solid rgba(240,237,232,0.08)",
                        }}
                      >
                        <Image
                          src={c.img}
                          alt={c.title}
                          width={200}
                          height={130}
                          className="h-full w-full object-cover object-top"
                        />
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>

            <ScrollAnimation>
              <div className="mt-16">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 font-sans text-sm font-medium transition-opacity hover:opacity-70"
                  style={{ color: "#F0EDE8" }}
                >
                  Zulke resultaten voor jouw project?
                  <span style={{ color: "#E85D26" }}>Plan een kennismaking →</span>
                </a>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* ── Waarom Stackwerk — wit ────────────────────────────────────────── */}
        <section id="over-ons" style={{ backgroundColor: "#FFFFFF" }}>
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
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                  color: "#111111",
                }}
              >
                Wij bouwen wat{" "}
                <span className="italic" style={{ color: "#E85D26" }}>
                  anderen niet kunnen.
                </span>
              </h2>
            </ScrollAnimation>

            <div className="grid gap-0 md:grid-cols-2">
              {waarom.map((w, i) => (
                <ScrollAnimation key={w.title} delay={i * 90}>
                  <div
                    className="py-10 pr-12"
                    style={{
                      borderTop: "1px solid rgba(17,17,17,0.1)",
                    }}
                  >
                    <p
                      className="font-sans text-xs font-medium mb-5 uppercase tracking-[0.2em]"
                      style={{ color: "#E85D26" }}
                    >
                      {w.num}
                    </p>
                    <h3
                      className="font-serif font-bold mb-4"
                      style={{ fontSize: "1.4rem", color: "#111111", lineHeight: 1.2 }}
                    >
                      {w.title}
                    </h3>
                    <p
                      className="font-sans text-sm leading-relaxed"
                      style={{ color: "rgba(17,17,17,0.58)", maxWidth: "340px" }}
                    >
                      {w.desc}
                    </p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact — zwart ──────────────────────────────────────────────── */}
        <section id="contact" style={{ backgroundColor: "#111111" }}>
          <div className="mx-auto max-w-7xl px-6 py-32 lg:px-8 lg:py-40">
            <ScrollAnimation>
              <p
                className="font-sans mb-4 text-xs uppercase tracking-[0.28em]"
                style={{ color: "#E85D26" }}
              >
                CONTACT
              </p>
              <h2
                className="font-serif font-bold mb-12"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  color: "#F0EDE8",
                }}
              >
                Plan een{" "}
                <span className="italic" style={{ color: "#E85D26" }}>
                  kennismaking.
                </span>
              </h2>

              <div className="grid gap-10 lg:grid-cols-3">
                {/* Linker kolom: formulier */}
                <div className="lg:col-span-2">
                  <ContactForm />
                </div>

                {/* Rechter kolom: contactgegevens */}
                <div className="flex flex-col gap-5">
                  {/* Card 1: Contactgegevens */}
                  <div
                    style={{
                      backgroundColor: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(240,237,232,0.08)",
                      borderRadius: "14px",
                      padding: "24px",
                    }}
                  >
                    <p
                      className="font-serif font-bold mb-5"
                      style={{ fontSize: "1.1rem", color: "#FFFFFF" }}
                    >
                      Contactgegevens
                    </p>
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-3">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <rect x="2" y="3.5" width="12" height="9" rx="1.5" stroke="#E85D26" strokeWidth="1.25"/>
                          <polyline points="2,5.5 8,9.5 14,5.5" stroke="#E85D26" strokeWidth="1.25" strokeLinejoin="round"/>
                        </svg>
                        <span
                          className="font-sans"
                          style={{ fontSize: "14px", color: "rgba(240,237,232,0.65)" }}
                        >
                          serdar@stackwerk.nl
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <path d="M5.5 2h2l1 2.5-1.5 1.5a7 7 0 003 3l1.5-1.5L14 8.5v2a1 1 0 01-1 1C6.7 11.5 2.5 7.3 2.5 3a1 1 0 011-1z" stroke="#E85D26" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span
                          className="font-sans"
                          style={{ fontSize: "14px", color: "rgba(240,237,232,0.65)" }}
                        >
                          +31 6 00000000
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <path d="M8 1.5A3.5 3.5 0 004.5 5c0 3.5 3.5 8.5 3.5 8.5S11.5 8.5 11.5 5A3.5 3.5 0 008 1.5z" stroke="#E85D26" strokeWidth="1.25"/>
                          <circle cx="8" cy="5" r="1.25" stroke="#E85D26" strokeWidth="1.25"/>
                        </svg>
                        <span
                          className="font-sans"
                          style={{ fontSize: "14px", color: "rgba(240,237,232,0.65)" }}
                        >
                          Groningen, Nederland
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Bedrijfsgegevens */}
                  <div
                    style={{
                      backgroundColor: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(240,237,232,0.08)",
                      borderRadius: "14px",
                      padding: "24px",
                    }}
                  >
                    <p
                      className="font-serif font-bold mb-5"
                      style={{ fontSize: "1.1rem", color: "#FFFFFF" }}
                    >
                      Bedrijfsgegevens
                    </p>
                    <div className="flex flex-col gap-2">
                      {[
                        "Stackwerk",
                        "Groningen, Nederland",
                        "KVK: 73815462",
                        "serdar@stackwerk.nl",
                      ].map((item) => (
                        <p
                          key={item}
                          className="font-sans"
                          style={{ fontSize: "14px", color: "rgba(240,237,232,0.55)" }}
                        >
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </main>

      {/* ── Footer — donker, geen wijzigingen ────────────────────────────────── */}
      <footer
        style={{
          backgroundColor: "#111111",
          borderTop: "1px solid rgba(240,237,232,0.08)",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 md:grid-cols-3 mb-12">
            <div>
              <p
                className="font-serif text-xl mb-2"
                style={{ color: "#F0EDE8" }}
              >
                Stackwerk
              </p>
              <p
                className="font-sans text-sm"
                style={{ color: "rgba(240,237,232,0.38)" }}
              >
                KVK: 73815462 · Groningen
              </p>
            </div>

            <nav className="flex flex-col gap-3">
              {navLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="font-sans text-sm transition-colors hover:text-[#F0EDE8]"
                  style={{ color: "rgba(240,237,232,0.38)" }}
                >
                  {label}
                </a>
              ))}
            </nav>

            <div>
              <a
                href="mailto:serdar@stackwerk.nl"
                className="font-sans text-sm transition-colors hover:text-[#F0EDE8]"
                style={{ color: "rgba(240,237,232,0.38)" }}
              >
                serdar@stackwerk.nl
              </a>
            </div>
          </div>

          <div
            className="pt-8"
            style={{ borderTop: "1px solid rgba(240,237,232,0.08)" }}
          >
            <p
              className="font-sans text-xs text-center"
              style={{ color: "rgba(240,237,232,0.28)" }}
            >
              © 2026 Stackwerk. Alle rechten voorbehouden.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
