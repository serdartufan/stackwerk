import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ScrollAnimation from "@/components/ScrollAnimation";
import { cases } from "@/data/cases";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = cases.find((c) => c.slug === slug);
  if (!c) return {};
  return {
    title: `${c.title} | Stackwerk`,
    description: c.desc,
  };
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = cases.find((c) => c.slug === slug);
  if (!c) notFound();

  const isExternal = c.showcaseImg.startsWith("http");

  return (
    <main>
      {/* ── Hero — zwart ────────────────────────────────────────────────────── */}
      <section
        className="px-6 py-32 lg:px-8 lg:py-40"
        style={{ backgroundColor: "#111111" }}
      >
        <div className="mx-auto max-w-7xl">
          <ScrollAnimation>
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span
                className="font-sans rounded-full px-3 py-1 text-xs"
                style={{
                  backgroundColor: "rgba(232,93,38,0.12)",
                  color: "#E8620A",
                }}
              >
                {c.label}
              </span>
              <span
                className="font-sans text-xs uppercase tracking-[0.2em]"
                style={{ color: "rgba(240,237,232,0.3)" }}
              >
                {c.jaar}
              </span>
            </div>
            <h1
              className="font-serif font-bold leading-[1.04] mb-8"
              style={{
                fontSize: "clamp(3.5rem, 9vw, 8rem)",
                color: "#F0EDE8",
              }}
            >
              {c.title}
            </h1>
            <p
              className="font-sans leading-relaxed mb-10"
              style={{
                maxWidth: "580px",
                color: "rgba(240,237,232,0.6)",
                fontSize: "17px",
              }}
            >
              {c.projectIntro}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              {c.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-sans rounded-full px-4 py-1.5 text-xs"
                  style={{
                    backgroundColor: "rgba(240,237,232,0.06)",
                    color: "rgba(240,237,232,0.5)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* ── Showcase — volledige breedte ────────────────────────────────────── */}
      <div
        className="overflow-hidden"
        style={{ backgroundColor: "#111111" }}
      >
        <div className="mx-auto max-w-7xl px-6 pb-0 lg:px-8">
          <div
            className="overflow-hidden rounded-t-2xl"
            style={{ height: "clamp(220px, 40vw, 520px)" }}
          >
            <Image
              src={c.showcaseImg}
              alt={`${c.title} project`}
              width={1280}
              height={520}
              className="h-full w-full object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>

      {/* ── Wat is gebouwd — wit ────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#FFFFFF" }}>
        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-8 lg:py-40">
          <div className="grid gap-16 lg:grid-cols-2">
            <ScrollAnimation>
              <p
                className="font-sans mb-4 text-xs uppercase tracking-[0.28em]"
                style={{ color: "#E8620A" }}
              >
                HET PROJECT
              </p>
              <h2
                className="font-serif font-bold mb-6"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  color: "#111111",
                }}
              >
                Wat we{" "}
                <span className="italic" style={{ color: "#E8620A" }}>
                  gebouwd hebben.
                </span>
              </h2>
              <p
                className="font-sans leading-relaxed"
                style={{
                  fontSize: "16px",
                  color: "rgba(17,17,17,0.65)",
                  lineHeight: "1.8",
                }}
              >
                {c.projectIntro}
              </p>
            </ScrollAnimation>

            <ScrollAnimation>
              <p
                className="font-sans mb-6 text-xs uppercase tracking-[0.28em]"
                style={{ color: "rgba(17,17,17,0.35)" }}
              >
                OPGELEVERD
              </p>
              <ul className="flex flex-col gap-3">
                {c.geleverd.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 font-sans text-sm leading-relaxed"
                    style={{ color: "rgba(17,17,17,0.7)" }}
                  >
                    <span
                      className="mt-1 shrink-0 font-serif font-bold"
                      style={{ color: "#E8620A", fontSize: "0.9rem" }}
                    >
                      →
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* ── Aanpak — zwart ──────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#111111" }}>
        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-8 lg:py-40">
          <ScrollAnimation>
            <p
              className="font-sans mb-4 text-xs uppercase tracking-[0.28em]"
              style={{ color: "#E8620A" }}
            >
              DE AANPAK
            </p>
            <h2
              className="font-serif font-bold mb-16"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                color: "#F0EDE8",
              }}
            >
              Hoe we het{" "}
              <span className="italic" style={{ color: "#E8620A" }}>
                aangepakt hebben.
              </span>
            </h2>
          </ScrollAnimation>

          <div className="grid gap-0 md:grid-cols-2">
            {c.aanpak.map((stap, i) => (
              <ScrollAnimation key={stap.num} delay={i * 80}>
                <div
                  className="py-10 pr-12"
                  style={{ borderTop: "1px solid rgba(240,237,232,0.08)" }}
                >
                  <p
                    className="font-sans text-xs font-medium mb-5 uppercase tracking-[0.2em]"
                    style={{ color: "#E8620A" }}
                  >
                    {stap.num}
                  </p>
                  <h3
                    className="font-serif font-bold mb-4"
                    style={{
                      fontSize: "1.35rem",
                      color: "#F0EDE8",
                      lineHeight: 1.2,
                    }}
                  >
                    {stap.title}
                  </h3>
                  <p
                    className="font-sans text-sm leading-relaxed"
                    style={{
                      color: "rgba(240,237,232,0.55)",
                      maxWidth: "340px",
                    }}
                  >
                    {stap.desc}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ── Resultaten — wit ────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#FFFFFF" }}>
        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-8 lg:py-40">
          <ScrollAnimation>
            <p
              className="font-sans mb-4 text-xs uppercase tracking-[0.28em]"
              style={{ color: "#E8620A" }}
            >
              DE RESULTATEN
            </p>
            <h2
              className="font-serif font-bold mb-16"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                color: "#111111",
              }}
            >
              Wat het{" "}
              <span className="italic" style={{ color: "#E8620A" }}>
                opleverde.
              </span>
            </h2>
          </ScrollAnimation>

          <div className="grid gap-0 grid-cols-2 md:grid-cols-4 mb-16">
            {c.resultaten.map((r, i) => (
              <ScrollAnimation key={r.label} delay={i * 80}>
                <div
                  className="py-8 pr-8"
                  style={{ borderTop: "1px solid rgba(17,17,17,0.1)" }}
                >
                  <p
                    className="font-serif font-bold mb-2"
                    style={{
                      fontSize: "clamp(2rem, 4vw, 3rem)",
                      color: "#111111",
                      lineHeight: 1,
                    }}
                  >
                    {r.number}
                  </p>
                  <p
                    className="font-sans text-sm"
                    style={{ color: "rgba(17,17,17,0.45)" }}
                  >
                    {r.label}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation>
            <p
              className="font-sans leading-relaxed"
              style={{
                maxWidth: "640px",
                fontSize: "17px",
                color: "rgba(17,17,17,0.65)",
                lineHeight: "1.8",
              }}
            >
              {c.resultatenTekst}
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* ── CTA — zwart ─────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#111111" }}>
        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-8 lg:py-40">
          <ScrollAnimation>
            <div className="grid gap-16 lg:grid-cols-2 lg:items-end">
              <div>
                <p
                  className="font-sans mb-4 text-xs uppercase tracking-[0.28em]"
                  style={{ color: "#E8620A" }}
                >
                  VOLGENDE STAP
                </p>
                <h2
                  className="font-serif font-bold"
                  style={{
                    fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                    color: "#F0EDE8",
                    lineHeight: 1.06,
                  }}
                >
                  Zulke resultaten
                  <br />
                  <span className="italic" style={{ color: "#E8620A" }}>
                    voor jouw project?
                  </span>
                </h2>
              </div>
              <div className="flex flex-col gap-5">
                <p
                  className="font-sans leading-relaxed"
                  style={{
                    fontSize: "16px",
                    color: "rgba(240,237,232,0.55)",
                    maxWidth: "420px",
                  }}
                >
                  Vertel ons over je idee. We kijken eerlijk of we de juiste match zijn en nemen binnen 24 uur contact op.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="/#contact"
                    className="press inline-flex items-center rounded-full px-8 py-4 font-sans text-sm font-medium text-white hover:opacity-85"
                    style={{ backgroundColor: "#E8620A" }}
                  >
                    Plan een kennismaking
                  </a>
                  <Link
                    href="/#werk"
                    className="press inline-flex items-center rounded-full px-8 py-4 font-sans text-sm font-medium hover:opacity-75"
                    style={{
                      border: "1px solid rgba(240,237,232,0.2)",
                      color: "#F0EDE8",
                    }}
                  >
                    Meer cases
                  </Link>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
}
