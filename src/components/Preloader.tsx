"use client";

import { useState, useEffect, useRef } from "react";

export default function Preloader() {
  // true als default zodat SSR de overlay al rendert — geen flash bij eerste bezoek
  const [visible, setVisible] = useState(true);
  const overlayRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Reduced motion of terugkerende bezoeker: verberg overlay direct
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      sessionStorage.getItem("preloader-shown")
    ) {
      setVisible(false);
      document.body.style.backgroundColor = "";
      return;
    }

    sessionStorage.setItem("preloader-shown", "1");
    document.body.style.overflow = "hidden";
    document.body.setAttribute("data-preloader", "");

    const flyTimer = setTimeout(() => {
      const textEl = textRef.current;
      const overlayEl = overlayRef.current;
      const logoEl = document.getElementById("nav-logo");
      if (!textEl || !overlayEl || !logoEl) return;

      // FIRST: huidige positie van de grote gecentreerde tekst
      const first = textEl.getBoundingClientRect();
      // LAST: positie van het navbar-logo
      const last = logoEl.getBoundingClientRect();

      // Schakel CSS-animatie uit, zet op fixed positie op exacte huidige locatie
      textEl.style.animation = "none";
      textEl.style.position = "fixed";
      textEl.style.top = `${first.top}px`;
      textEl.style.left = `${first.left}px`;
      textEl.style.transform = "none";
      textEl.style.transformOrigin = "top left";

      const deltaX = last.left - first.left;
      const deltaY = last.top - first.top;
      const scaleX = last.width / first.width;
      const scaleY = last.height / first.height;

      // Force reflow zodat browser begintoestand inpaint
      textEl.getBoundingClientRect();

      // PLAY: animeer naar navbar-logo positie
      textEl.style.transition = "transform 1.1s cubic-bezier(0.76, 0, 0.24, 1)";
      textEl.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(${scaleX}, ${scaleY})`;

      // Overlay fades uit (delay 0.5s, duur 0.7s)
      overlayEl.style.transition = "opacity 0.7s ease 0.5s";
      overlayEl.style.opacity = "0";

      // Logo verschijnt + oranje kleur-sweep op het moment van landen
      const revealTimer = setTimeout(() => {
        document.body.removeAttribute("data-preloader");

        logoEl.style.backgroundImage = "linear-gradient(to right, #E8620A 0%, #E8620A 50%, #0a0a0a 50%)";
        logoEl.style.backgroundSize = "200% 100%";
        logoEl.style.backgroundPosition = "100% 0";
        (logoEl.style as any).webkitBackgroundClip = "text";
        logoEl.style.backgroundClip = "text";
        logoEl.style.color = "transparent";
        // Behoud opacity-transitie van CSS + voeg background-position toe
        logoEl.style.transition = "opacity 0.15s ease, background-position 0.6s ease-out";

        requestAnimationFrame(() => {
          logoEl.style.backgroundPosition = "0% 0";
        });

        // Reset gradient styles na sweep
        setTimeout(() => {
          logoEl.style.backgroundImage = "";
          logoEl.style.backgroundSize = "";
          logoEl.style.backgroundPosition = "";
          (logoEl.style as any).webkitBackgroundClip = "";
          logoEl.style.backgroundClip = "";
          logoEl.style.color = "#0a0a0a";
          logoEl.style.transition = "";
        }, 650);
      }, 1050);

      // Component uit DOM verwijderen
      const doneTimer = setTimeout(() => {
        document.body.style.overflow = "";
        document.body.style.backgroundColor = "";
        setVisible(false);
      }, 1300);

      return () => {
        clearTimeout(revealTimer);
        clearTimeout(doneTimer);
      };
    }, 1800);

    return () => {
      clearTimeout(flyTimer);
      document.body.style.overflow = "";
      document.body.style.backgroundColor = "";
      document.body.removeAttribute("data-preloader");
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Zwarte overlay — fades onafhankelijk van tekst */}
      <div
        ref={overlayRef}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9998,
          backgroundColor: "#0a0a0a",
          pointerEvents: "none",
        }}
      />
      {/* Vliegende tekst — apart element zodat hij zichtbaar blijft tijdens overlay fade */}
      <span
        ref={textRef}
        className="font-serif italic"
        style={{
          position: "fixed",
          top: "50vh",
          left: "50vw",
          zIndex: 9999,
          fontSize: "clamp(3rem, 8vw, 7rem)",
          color: "#F0EDE8",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          animation: "preloader-scale 0.6s ease-out forwards",
        }}
      >
        Stackwerk
      </span>
    </>
  );
}
