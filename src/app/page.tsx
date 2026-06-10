import Image from "next/image";
import Link from "next/link";
import ScrollAnimation from "@/components/ScrollAnimation";
import ContactForm from "@/components/ContactForm";
import CountUp from "@/components/CountUp";
import HeroCanvas from "@/components/HeroCanvas";
import { cases } from "@/data/cases";

// ─── Icons ───────────────────────────────────────────────────────────────────

function WebsiteIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}

function SaasIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.5 19H9a7 7 0 116.71-9h1.79a4.5 4.5 0 110 9z" />
    </svg>
  );
}

function MaatwerkIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 18l6-6-6-6M8 6L2 12l6 6" />
    </svg>
  );
}

// ─── Data ────────────────────────────────────────────────────────────────────

const diensten = [
  {
    title: "Websites",
    href: "/diensten/websites",
    desc: "Conversiegerichte websites die snel laden, goed ranken en bezoekers omzetten in klanten. Van landingspagina tot volledige bedrijfssite.",
    Icon: WebsiteIcon,
  },
  {
    title: "SaaS Platforms",
    href: "/diensten/saas-platforms",
    desc: "Van MVP tot schaalbaar platform. Wij bouwen multi-tenant applicaties met auth, dashboards, betalingen en alles wat erbij hoort.",
    Icon: SaasIcon,
  },
  {
    title: "Maatwerk Software",
    href: "/diensten/maatwerk-software",
    desc: "Heeft jouw bedrijf iets nodig dat nergens kant-en-klaar bestaat? Wij bouwen het. Van interne tools tot complexe integraties.",
    Icon: MaatwerkIcon,
  },
];

const steps = [
  {
    num: "01",
    title: "Kennismaking",
    desc: "30 minuten om doel, scope en budget te begrijpen. Geen sales-pitch, wel concrete vragen of we de juiste partij voor het project zijn. Bij geen match verwijzen we door.",
  },
  {
    num: "02",
    title: "Voorstel",
    desc: "Binnen 5 werkdagen ontvang je een PDF-voorstel met aanpak, planning, fasen, mijlpalen en prijs. Vaste prijs of uurtarief, jouw keuze. Voorstel ook te lezen voor niet-techneuten.",
  },
  {
    num: "03",
    title: "Design sprints",
    desc: "Wekelijkse reviews, snelle feedback-loops. Werk zichtbaar vanaf week 1 op een staging-omgeving. Geen weken stilte tussen kick-off en eerste oplevering.",
  },
  {
    num: "04",
    title: "Build & QA",
    desc: "Productie-engineering met test-coverage, code-review en CI/CD-pipeline. Wij hosten op eigen Hetzner-infrastructuur met Cloudflare voor edge en security. Lighthouse-CI op elke deploy.",
  },
  {
    num: "05",
    title: "Launch",
    desc: "Deploy naar productie inclusief SEO/AEO setup, schema-implementatie, sitemap.xml, robots.txt en llms.txt. Eerste klant tevreden vanaf dag één.",
  },
  {
    num: "06",
    title: "Onderhoud",
    desc: "Doorlopende ondersteuning vanaf 495 euro per maand inclusief monitoring, security-updates, dependency-upgrades en eerste-lijns support. Sentry en uptime-monitoring werken 24/7.",
  },
  {
    num: "07",
    title: "Iteratie",
    desc: "Growth-experimenten, nieuwe features per sprint, A/B-testing van conversie-flows. We blijven betrokken zolang het waarde toevoegt. Gemiddelde klantrelatie is meer dan drie jaar.",
  },
];

const stats = [
  { value: 10,   suffix: "+",  label: "Projecten opgeleverd" },
  { value: 100,  suffix: "%",  label: "Op tijd opgeleverd" },
  { value: 2019, from: 2015, suffix: "", label: "Actief sinds" },
];

const navLinks = [
  { label: "Diensten", href: "#diensten" },
  { label: "Werk",     href: "#werk" },
  { label: "Over ons", href: "#over-ons" },
  { label: "Contact",  href: "#contact" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <main>

        {/* ── Hero — zwart ─────────────────────────────────────────────────── */}
        <section
          className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 lg:px-8"
          style={{ backgroundColor: "#0a0a0a" }}
        >
          {/* Achtergrondafbeelding */}
          <div className="absolute inset-0 z-0" style={{ pointerEvents: "none" }}>
            <Image
              src="/images/generated/hero-bg.jpg"
              alt=""
              fill
              className="object-cover object-center"
              style={{ opacity: 0.25 }}
              priority
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, #0a0a0a 45%, rgba(10,10,10,0.3) 100%), linear-gradient(to top, #0a0a0a 15%, transparent 60%)",
              }}
            />
          </div>

          {/* Canvas animatie: wireframe sphere + particle field */}
          <HeroCanvas />

          {/* Content */}
          <div className="relative z-10 mx-auto w-full max-w-7xl pt-6 pb-10 lg:pt-8 lg:pb-12">
            <h1
              className="font-serif font-bold leading-[1.02] mb-10"
              style={{ fontSize: "clamp(4.5rem, 11vw, 10rem)" }}
            >
              <span className="hero-line">
                <span className="hero-line-inner hero-delay-1" style={{ color: "#ffffff" }}>
                  Wij bouwen
                </span>
              </span>
              <span className="hero-line italic">
                <span className="hero-line-inner hero-delay-2" style={{ color: "#E8620A" }}>
                  jouw visie.
                </span>
              </span>
            </h1>

            <p
              className="hero-sub font-sans mb-10 leading-relaxed"
              style={{ maxWidth: "460px", color: "rgba(255,255,255,0.5)", fontSize: "16px" }}
            >
              Stackwerk is een onafhankelijk development bureau in Groningen.
              Wij bouwen websites, SaaS platforms en maatwerk software voor
              ondernemers die hun idee serieus nemen.
            </p>

            <div className="hero-ctas flex flex-wrap gap-4">
              <a
                href="#contact"
                className="btn-fill inline-flex items-center rounded-full px-8 py-4 font-sans text-sm font-medium text-white"
                style={{ backgroundColor: "#E8620A" }}
              >
                Start een project
              </a>
              <a
                href="#werk"
                className="inline-flex items-center rounded-full px-8 py-4 font-sans text-sm font-medium transition-opacity hover:opacity-75"
                style={{ border: "1px solid rgba(255,255,255,0.2)", color: "#ffffff" }}
              >
                Bekijk ons werk
              </a>
            </div>
          </div>

          <div className="hero-badge absolute bottom-8 right-6 z-10 lg:right-8" style={{ pointerEvents: "none" }}>
            <p
              className="font-sans text-xs uppercase tracking-[0.18em]"
              style={{ color: "rgba(255,255,255,0.22)" }}
            >
              ACTIEF SINDS 2019 · GRONINGEN
            </p>
          </div>
        </section>

        {/* ── Statement + Stats — wit ───────────────────────────────────────── */}
        <section style={{ backgroundColor: "#ffffff" }}>
          {/* Statement */}
          <div className="mx-auto max-w-7xl px-6 pt-24 pb-16 lg:px-8 lg:pt-32 lg:pb-20">
            <ScrollAnimation variant="heading">
              <p
                className="font-serif font-bold"
                style={{
                  fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)",
                  lineHeight: 1.08,
                  maxWidth: "880px",
                  color: "#0a0a0a",
                }}
              >
                <span style={{ color: "rgba(0,0,0,0.22)" }}>Wij bouwen wat </span>
                anderen niet kunnen.
              </p>
            </ScrollAnimation>
          </div>

          {/* Stats — 3 kolommen met dunne scheidingslijnen */}
          <div
            className="mx-auto max-w-7xl px-6 pb-24 lg:px-8 lg:pb-32"
          >
            <div
              className="grid grid-cols-3"
              style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }}
            >
              {stats.map((stat, i) => (
                <ScrollAnimation key={stat.label} delay={i * 80} variant="scale">
                  <div
                    className="py-12 px-4 sm:px-8 text-center"
                    style={{
                      borderRight: i < stats.length - 1 ? "1px solid rgba(0,0,0,0.1)" : undefined,
                    }}
                  >
                    <p
                      className="font-serif font-bold mb-2"
                      style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#E8620A", lineHeight: 1 }}
                    >
                      <CountUp value={stat.value} from={stat.from} suffix={stat.suffix} />
                    </p>
                    <p className="font-sans text-sm" style={{ color: "rgba(0,0,0,0.5)" }}>
                      {stat.label}
                    </p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* ── Diensten — zwart, 2×2 grid ───────────────────────────────────── */}
        <section id="diensten" style={{ backgroundColor: "#0a0a0a" }}>
          <div className="mx-auto max-w-7xl px-6 py-32 lg:px-8 lg:py-40">
            <ScrollAnimation variant="heading">
              <p
                className="font-sans mb-4 text-xs uppercase tracking-[0.28em]"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                WAT WE BOUWEN
              </p>
              <h2
                className="font-serif font-bold mb-16"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#ffffff" }}
              >
                Van idee naar{" "}
                <span className="italic" style={{ color: "#E8620A" }}>
                  werkend product.
                </span>
              </h2>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {diensten.map((d, i) => (
                <ScrollAnimation key={d.title} delay={i * 90}>
                  <Link href={d.href} className="block h-full">
                    <div
                      className="dienst-card-v2 flex h-full flex-col gap-6 p-10"
                      style={{ borderLeft: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      <div style={{ color: "#E8620A" }}>
                        <d.Icon />
                      </div>
                      <h3
                        className="font-serif font-bold text-2xl"
                        style={{ color: "#ffffff" }}
                      >
                        {d.title}
                      </h3>
                      <p
                        className="font-sans text-sm leading-relaxed flex-1"
                        style={{ color: "rgba(255,255,255,0.5)" }}
                      >
                        {d.desc}
                      </p>
                      <span
                        className="font-sans text-sm font-medium"
                        style={{ color: "#E8620A" }}
                      >
                        Meer lezen →
                      </span>
                    </div>
                  </Link>
                </ScrollAnimation>
              ))}

              {/* 4e cel — CTA */}
              <ScrollAnimation delay={3 * 90}>
                <div
                  className="dienst-card-v2 flex h-full flex-col justify-center gap-6 p-10"
                  style={{ borderLeft: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <p
                    className="font-sans text-xs uppercase tracking-[0.22em]"
                    style={{ color: "rgba(255,255,255,0.25)" }}
                  >
                    OP MAAT
                  </p>
                  <p
                    className="font-serif font-bold"
                    style={{ fontSize: "1.5rem", color: "#ffffff", lineHeight: 1.2 }}
                  >
                    Iets specifieks nodig dat hier niet bij staat?
                  </p>
                  <a
                    href="#contact"
                    className="font-sans text-sm font-medium"
                    style={{ color: "#E8620A" }}
                  >
                    Plan een gesprek →
                  </a>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* ── Werkwijze — zwart ────────────────────────────────────────────── */}
        <section style={{ backgroundColor: "#0a0a0a" }}>
          <div className="mx-auto max-w-7xl px-6 py-32 lg:px-8 lg:py-40">
            <ScrollAnimation>
              <p
                className="font-sans mb-4 text-xs uppercase tracking-[0.28em]"
                style={{ color: "#E8620A" }}
              >
                HOE WE WERKEN
              </p>
              <h2
                className="font-serif font-bold mb-16 lg:mb-24"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  color: "#F0EDE8",
                }}
              >
                Onze{" "}
                <span className="italic" style={{ color: "#E8620A" }}>
                  werkwijze.
                </span>
              </h2>

              {/* Desktop: horizontale timeline */}
              <div className="relative hidden md:block">
                <div
                  className="absolute left-0 right-0 overflow-hidden"
                  style={{ top: "167px", height: "1px" }}
                >
                  <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(240,237,232,0.1)" }} />
                  <div className="werkwijze-line-fill" />
                </div>

                <div className="grid grid-cols-7">
                  {steps.map((step, i) => {
                    const isOdd = i % 2 === 0;
                    return (
                      <div key={step.title} className="flex flex-col items-center px-3">
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
                                  color: "rgba(240,237,232,0.35)",
                                }}
                              >
                                {step.num}
                              </p>
                              <p
                                className="font-serif font-bold"
                                style={{ fontSize: "1.1rem", color: "#F0EDE8" }}
                              >
                                {step.title}
                              </p>
                            </>
                          ) : (
                            <p
                              className="font-sans text-center"
                              style={{
                                fontSize: "13px",
                                color: "rgba(240,237,232,0.6)",
                                maxWidth: "160px",
                                lineHeight: "1.6",
                              }}
                            >
                              {step.desc}
                            </p>
                          )}
                        </div>

                        <div
                          className={`timeline-dot dot-step-${i} shrink-0 rounded-full`}
                          style={{
                            width: "14px",
                            height: "14px",
                            backgroundColor: "#E8620A",
                            border: "3px solid #0a0a0a",
                          }}
                        />

                        <div
                          className="flex w-full flex-col items-center text-center"
                          style={{ paddingTop: "12px" }}
                        >
                          {isOdd ? (
                            <p
                              className="font-sans"
                              style={{
                                fontSize: "13px",
                                color: "rgba(240,237,232,0.6)",
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
                                  color: "rgba(240,237,232,0.35)",
                                }}
                              >
                                {step.num}
                              </p>
                              <p
                                className="font-serif font-bold"
                                style={{ fontSize: "1.1rem", color: "#F0EDE8" }}
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
                        className={`timeline-dot dot-step-${i} shrink-0 rounded-full`}
                        style={{
                          width: "14px",
                          height: "14px",
                          backgroundColor: "#E8620A",
                          border: "3px solid #0a0a0a",
                        }}
                      />
                      {i < steps.length - 1 && (
                        <div
                          className="mt-1 w-px flex-1"
                          style={{
                            backgroundColor: "rgba(240,237,232,0.1)",
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
                          color: "rgba(240,237,232,0.35)",
                        }}
                      >
                        {step.num}
                      </p>
                      <p
                        className="font-serif font-bold mb-2"
                        style={{ fontSize: "1.1rem", color: "#F0EDE8" }}
                      >
                        {step.title}
                      </p>
                      <p
                        className="font-sans"
                        style={{
                          fontSize: "13px",
                          color: "rgba(240,237,232,0.6)",
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

        {/* ── Cases — wit, asymmetrisch grid 2fr/1fr ───────────────────────── */}
        <section id="werk" style={{ backgroundColor: "#ffffff" }}>
          <div className="mx-auto max-w-7xl px-6 py-32 lg:px-8 lg:py-40">
            <ScrollAnimation variant="heading">
              <p
                className="font-sans mb-4 text-xs uppercase tracking-[0.28em]"
                style={{ color: "#E8620A" }}
              >
                ONS WERK
              </p>
              <h2
                className="font-serif font-bold mb-16"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#0a0a0a" }}
              >
                Projecten waar we{" "}
                <span className="italic" style={{ color: "#E8620A" }}>
                  trots
                </span>{" "}
                op zijn.
              </h2>
            </ScrollAnimation>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-[2fr_1fr]">
              {/* Featured — eerste case, 2fr */}
              {cases[0] && (
                <ScrollAnimation>
                  <Link href={`/werk/${cases[0].slug}`} className="case-featured-card block group">
                    <div
                      className="relative overflow-hidden rounded-2xl"
                      style={{ height: "clamp(320px, 45vw, 540px)", backgroundColor: "#f0f0f0" }}
                    >
                      <Image
                        src={cases[0].showcaseImg || cases[0].img}
                        alt={cases[0].title}
                        fill
                        className="case-featured-img object-cover object-top"
                      />
                      <div
                        className="absolute inset-0 flex flex-col justify-end p-8"
                        style={{
                          background:
                            "linear-gradient(to top, rgba(10,10,10,0.88) 0%, rgba(10,10,10,0.2) 55%, transparent 100%)",
                        }}
                      >
                        <span
                          className="font-sans rounded-full px-3 py-1 text-xs mb-4 self-start"
                          style={{ backgroundColor: "rgba(232,98,10,0.2)", color: "#E8620A" }}
                        >
                          {cases[0].label}
                        </span>
                        <h3
                          className="font-serif font-bold mb-2 text-white"
                          style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}
                        >
                          {cases[0].title}
                        </h3>
                        <p
                          className="font-sans text-sm"
                          style={{ color: "#E8620A" }}
                        >
                          {cases[0].result}
                        </p>
                      </div>
                    </div>
                  </Link>
                </ScrollAnimation>
              )}

              {/* Kleinere cases — 1fr, gestapeld */}
              <div className="flex flex-col gap-4">
                {cases.slice(1).map((c, i) => (
                  <ScrollAnimation key={c.slug} delay={(i + 1) * 100}>
                    <Link href={`/werk/${c.slug}`} className="case-small-card block group flex-1">
                      <div
                        className="relative overflow-hidden rounded-2xl"
                        style={{ height: "clamp(180px, 20vw, 260px)", backgroundColor: "#f0f0f0" }}
                      >
                        <Image
                          src={c.img}
                          alt={c.title}
                          fill
                          className="case-small-img object-cover object-top"
                        />
                        <div
                          className="absolute inset-0 flex flex-col justify-end p-6"
                          style={{
                            background:
                              "linear-gradient(to top, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.1) 60%, transparent 100%)",
                          }}
                        >
                          <span
                            className="font-sans rounded-full px-2.5 py-0.5 text-xs mb-2 self-start"
                            style={{ backgroundColor: "rgba(232,98,10,0.2)", color: "#E8620A" }}
                          >
                            {c.label}
                          </span>
                          <h3
                            className="font-serif font-bold text-white mb-1"
                            style={{ fontSize: "1.25rem" }}
                          >
                            {c.title}
                          </h3>
                          <p className="font-sans text-xs" style={{ color: "#E8620A" }}>
                            {c.result}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </ScrollAnimation>
                ))}
              </div>
            </div>

            <ScrollAnimation variant="fade">
              <div className="mt-12">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 font-sans text-sm font-medium transition-opacity hover:opacity-70"
                  style={{ color: "#0a0a0a" }}
                >
                  Zulke resultaten voor jouw project?
                  <span style={{ color: "#E8620A" }}>Plan een kennismaking →</span>
                </a>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* ── CTA — volledig oranje ─────────────────────────────────────────── */}
        <section style={{ backgroundColor: "#E8620A" }}>
          <div className="mx-auto max-w-7xl px-6 py-32 lg:px-8 lg:py-40 text-center">
            <ScrollAnimation>
              <p
                className="font-sans text-xs uppercase tracking-[0.28em] mb-8"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                START VANDAAG
              </p>
              <h2
                className="font-serif font-bold mb-6"
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                  color: "#ffffff",
                  lineHeight: 1.05,
                }}
              >
                Klaar om te starten?
              </h2>
              <p
                className="font-sans mb-12 mx-auto leading-relaxed"
                style={{
                  color: "rgba(255,255,255,0.72)",
                  maxWidth: "440px",
                  fontSize: "16px",
                }}
              >
                Plan een vrijblijvende kennismaking. Wij kijken eerlijk of we
                de juiste match zijn.
              </p>
              <a
                href="#contact"
                className="cta-pill inline-flex items-center rounded-full px-8 py-4 font-sans text-sm font-medium"
                style={{ backgroundColor: "#ffffff", color: "#0a0a0a" }}
              >
                Plan een kennismaking
              </a>
            </ScrollAnimation>
          </div>
        </section>

        {/* ── Contact — zwart ──────────────────────────────────────────────── */}
        <section id="contact" style={{ backgroundColor: "#0a0a0a" }}>
          <div className="mx-auto max-w-7xl px-6 py-32 lg:px-8 lg:py-40">
            <ScrollAnimation>
              <p
                className="font-sans mb-4 text-xs uppercase tracking-[0.28em]"
                style={{ color: "#E8620A" }}
              >
                CONTACT
              </p>
              <h2
                className="font-serif font-bold mb-12"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#ffffff" }}
              >
                Plan een{" "}
                <span className="italic" style={{ color: "#E8620A" }}>
                  kennismaking.
                </span>
              </h2>

              <div className="grid gap-10 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <ContactForm />
                </div>

                <div className="flex flex-col gap-5">
                  <div
                    style={{
                      backgroundColor: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "14px",
                      padding: "24px",
                    }}
                  >
                    <p
                      className="font-serif font-bold mb-5"
                      style={{ fontSize: "1.1rem", color: "#ffffff" }}
                    >
                      Contactgegevens
                    </p>
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-3">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <rect x="2" y="3.5" width="12" height="9" rx="1.5" stroke="#E8620A" strokeWidth="1.25"/>
                          <polyline points="2,5.5 8,9.5 14,5.5" stroke="#E8620A" strokeWidth="1.25" strokeLinejoin="round"/>
                        </svg>
                        <span className="font-sans" style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)" }}>
                          info@stackwerk.nl
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <path d="M5.5 2h2l1 2.5-1.5 1.5a7 7 0 003 3l1.5-1.5L14 8.5v2a1 1 0 01-1 1C6.7 11.5 2.5 7.3 2.5 3a1 1 0 011-1z" stroke="#E8620A" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="font-sans" style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)" }}>
                          +31 6 12 98 55 64
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <path d="M8 1.5A3.5 3.5 0 004.5 5c0 3.5 3.5 8.5 3.5 8.5S11.5 8.5 11.5 5A3.5 3.5 0 008 1.5z" stroke="#E8620A" strokeWidth="1.25"/>
                          <circle cx="8" cy="5" r="1.25" stroke="#E8620A" strokeWidth="1.25"/>
                        </svg>
                        <span className="font-sans" style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)" }}>
                          Groningen, Nederland
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      backgroundColor: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "14px",
                      padding: "24px",
                    }}
                  >
                    <p
                      className="font-serif font-bold mb-5"
                      style={{ fontSize: "1.1rem", color: "#ffffff" }}
                    >
                      Bedrijfsgegevens
                    </p>
                    <div className="flex flex-col gap-2">
                      {["Stackwerk", "Groningen, Nederland", "KVK: 73815462", "info@stackwerk.nl"].map(
                        (item) => (
                          <p
                            key={item}
                            className="font-sans"
                            style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)" }}
                          >
                            {item}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </main>

      {/* ── Footer — zwart, minimaal ──────────────────────────────────────────── */}
      <footer
        style={{
          backgroundColor: "#0a0a0a",
          borderTop: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <p className="font-serif text-lg" style={{ color: "rgba(255,255,255,0.9)" }}>
              Stackwerk
            </p>

            <nav className="flex flex-wrap gap-6">
              {navLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="font-sans text-sm transition-colors hover:text-white"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  {label}
                </a>
              ))}
            </nav>

            <p className="font-sans text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
              © 2026 Stackwerk
            </p>
          </div>
          <div
            className="mt-6 flex flex-wrap gap-5"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "24px" }}
          >
            <a
              href="/algemene-voorwaarden"
              className="font-sans text-xs transition-colors hover:text-white"
              style={{ color: "rgba(255,255,255,0.25)" }}
            >
              Algemene voorwaarden
            </a>
            <a
              href="/privacy-policy"
              className="font-sans text-xs transition-colors hover:text-white"
              style={{ color: "rgba(255,255,255,0.25)" }}
            >
              Privacy policy
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
