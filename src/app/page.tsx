import Navbar from "@/components/Navbar";
import ScrollAnimation from "@/components/ScrollAnimation";

// ─── Data ────────────────────────────────────────────────────────────────────

const diensten = [
  {
    num: "01",
    title: "Websites",
    desc: "Conversiegerichte websites die snel laden, goed ranken en bezoekers omzetten in klanten. Van landingspagina tot volledige bedrijfssite.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    num: "02",
    title: "SaaS Platforms",
    desc: "Van MVP tot schaalbaar platform. Wij bouwen multi-tenant applicaties met auth, dashboards, betalingen en alles wat erbij hoort.",
    tags: ["Next.js", "Supabase", "Stripe"],
  },
  {
    num: "03",
    title: "Maatwerk Software",
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
    result: "Live sinds 2026",
  },
  {
    num: "02",
    label: "AI SaaS",
    title: "Just Harry",
    desc: "AI lead kwalificatie tool voor dienstverleners. Multi-tenant platform met auth, dashboards, Stripe betalingen en Claude AI integratie.",
    tags: ["Next.js", "Supabase", "Claude AI"],
    result: "Van idee naar product in 30 dagen",
  },
  {
    num: "03",
    label: "Website",
    title: "My Miracle",
    desc: "Website voor een LPG Endermologie behandelcentrum. Snel, mobielvriendelijk en geoptimaliseerd voor lokale SEO.",
    tags: ["Next.js", "Tailwind", "Vercel"],
    result: "Conversie +40%",
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
    desc: "Geen account managers of doorverwijzingen. Je werkt direct met de mensen die jouw product bouwen.",
  },
  {
    num: "03",
    title: "Schaalbaar vanaf dag 1",
    desc: "Wij bouwen met architectuur die meegroeit. Van MVP naar enterprise zonder alles opnieuw te hoeven bouwen.",
  },
  {
    num: "04",
    title: "Resultaat boven process",
    desc: "Wij leveren op tijd. Geen eindeloze trajecten of vage timelines. Afspraak is afspraak.",
  },
];

const stats = [
  { number: "10+", label: "Projecten opgeleverd" },
  { number: "3", label: "Actieve SaaS producten" },
  { number: "100%", label: "Op tijd opgeleverd" },
  { number: "Next.js", label: "Stack van keuze" },
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
      <Navbar />

      <main>
        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section
          className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 lg:px-8"
          style={{ backgroundColor: "#111111" }}
        >
          <div className="mx-auto w-full max-w-7xl py-24">
            <p
              className="font-sans mb-6 text-xs uppercase tracking-[0.28em]"
              style={{ color: "rgba(240,237,232,0.38)" }}
            >
              WEBSITES · SAAS PLATFORMS · MAATWERK SOFTWARE
            </p>

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
                className="inline-flex items-center rounded-full px-8 py-4 font-sans text-sm font-medium"
                style={{
                  border: "1px solid rgba(240,237,232,0.2)",
                  color: "#F0EDE8",
                }}
              >
                Bekijk ons werk
              </a>
            </div>
          </div>

          <div className="absolute bottom-8 right-6 lg:right-8">
            <p
              className="font-sans text-xs uppercase tracking-[0.18em]"
              style={{ color: "rgba(240,237,232,0.28)" }}
            >
              ACTIEF SINDS 2024 · GRONINGEN
            </p>
          </div>
        </section>

        {/* ── Stats ────────────────────────────────────────────────────────── */}
        <section style={{ backgroundColor: "#F5F2EB" }}>
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
                      style={{ color: "rgba(17,17,17,0.55)" }}
                    >
                      {stat.label}
                    </p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* ── Diensten ─────────────────────────────────────────────────────── */}
        <section id="diensten" style={{ backgroundColor: "#1A1A1A" }}>
          <div className="mx-auto max-w-7xl px-6 py-32 lg:px-8 lg:py-40">
            <ScrollAnimation>
              <p
                className="font-sans mb-4 text-xs uppercase tracking-[0.28em]"
                style={{ color: "#E85D26" }}
              >
                WAT WE BOUWEN
              </p>
              <h2
                className="font-serif font-bold mb-16"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  color: "#F0EDE8",
                }}
              >
                Van idee naar{" "}
                <span className="italic" style={{ color: "#E85D26" }}>
                  werkend product.
                </span>
              </h2>
            </ScrollAnimation>

            <div className="grid gap-6 md:grid-cols-3">
              {diensten.map((d, i) => (
                <ScrollAnimation key={d.num} delay={i * 110}>
                  <div
                    className="dienst-card flex h-full flex-col rounded-2xl p-10"
                    style={{
                      backgroundColor: "#111111",
                      border: "1px solid rgba(240,237,232,0.08)",
                    }}
                  >
                    <p
                      className="font-serif font-bold mb-6 leading-none select-none"
                      style={{
                        fontSize: "3rem",
                        opacity: 0.15,
                        color: "#F0EDE8",
                      }}
                    >
                      {d.num}
                    </p>
                    <h3
                      className="font-serif font-bold text-3xl mb-4"
                      style={{ color: "#F0EDE8" }}
                    >
                      {d.title}
                    </h3>
                    <p
                      className="font-sans flex-1 text-sm leading-relaxed mb-8"
                      style={{ color: "rgba(240,237,232,0.58)" }}
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
                              backgroundColor: "rgba(240,237,232,0.06)",
                              color: "rgba(240,237,232,0.45)",
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
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* ── Werk ─────────────────────────────────────────────────────────── */}
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
                        color: "#F0EDE8",
                        opacity: 0.08,
                      }}
                    >
                      {c.num}
                    </span>

                    {/* Content — verschoven voorbij het nummer */}
                    <div
                      className="relative flex flex-col gap-6 md:flex-row md:items-start"
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
                            maxWidth: "520px",
                            color: "rgba(240,237,232,0.58)",
                          }}
                        >
                          {c.desc}
                        </p>
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
                      </div>

                      <div className="shrink-0 md:pt-2 md:text-right">
                        <p
                          className="font-sans text-sm font-medium"
                          style={{ color: "#E85D26" }}
                        >
                          {c.result}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* ── Waarom Stackwerk ─────────────────────────────────────────────── */}
        <section id="over-ons" style={{ backgroundColor: "#1A1A1A" }}>
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
                  color: "#F0EDE8",
                }}
              >
                Wij bouwen wat{" "}
                <span className="italic" style={{ color: "#E85D26" }}>
                  anderen niet kunnen.
                </span>
              </h2>
            </ScrollAnimation>

            <div className="grid gap-6 md:grid-cols-2">
              {waarom.map((w, i) => (
                <ScrollAnimation key={w.title} delay={i * 90}>
                  <div
                    className="rounded-2xl p-8"
                    style={{
                      backgroundColor: "#111111",
                      border: "1px solid rgba(240,237,232,0.08)",
                    }}
                  >
                    <p
                      className="font-sans text-sm font-medium mb-2"
                      style={{ color: "#E85D26" }}
                    >
                      {w.num}
                    </p>
                    <h3
                      className="font-serif font-bold text-2xl mb-3"
                      style={{ color: "#F0EDE8" }}
                    >
                      {w.title}
                    </h3>
                    <p
                      className="font-sans text-sm leading-relaxed"
                      style={{ color: "rgba(240,237,232,0.58)" }}
                    >
                      {w.desc}
                    </p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section id="contact" style={{ backgroundColor: "#F5F2EB" }}>
          <div className="mx-auto max-w-7xl px-6 py-32 text-center lg:px-8 lg:py-40">
            <ScrollAnimation>
              <h2
                className="font-serif font-bold mb-6"
                style={{
                  fontSize: "clamp(2rem, 5vw, 4rem)",
                  color: "#111111",
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
                  color: "rgba(17,17,17,0.58)",
                  fontSize: "17px",
                  lineHeight: "1.7",
                }}
              >
                Vertel ons over je idee en we nemen binnen 24 uur contact op.
              </p>
              <a
                href="mailto:serdar@stackwerk.nl"
                className="inline-flex items-center rounded-full px-8 py-4 font-sans text-base font-medium text-white transition-opacity hover:opacity-85"
                style={{ backgroundColor: "#E85D26" }}
              >
                Start een project
              </a>
            </ScrollAnimation>
          </div>
        </section>
      </main>

      {/* ── Footer ───────────────────────────────────────────────────────────── */}
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
