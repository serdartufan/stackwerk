"use client";

import { useState, useEffect, useRef } from "react";

export default function Preloader() {
  const [visible, setVisible] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (sessionStorage.getItem("preloader-shown")) return;
    sessionStorage.setItem("preloader-shown", "1");

    document.body.style.overflow = "hidden";
    document.body.setAttribute("data-preloader", "");
    setVisible(true);

    const flyTimer = setTimeout(() => {
      const textEl = textRef.current;
      const overlayEl = overlayRef.current;
      const logoEl = document.getElementById("nav-logo");
      if (!textEl || !overlayEl || !logoEl) return;

      // FIRST: huidige positie van de grote gecentreerde tekst
      const first = textEl.getBoundingClientRect();

      // LAST: positie van het navbar-logo
      const last = logoEl.getBoundingClientRect();

      // Zet tekst op position: fixed op exact de huidige visuele positie
      // (verwijder centering-transform en CSS-animatie)
      textEl.style.animation = "none";
      textEl.style.position = "fixed";
      textEl.style.top = `${first.top}px`;
      textEl.style.left = `${first.left}px`;
      textEl.style.transform = "none";
      textEl.style.transformOrigin = "top left";

      // INVERT: bereken delta van FIRST naar LAST
      const deltaX = last.left - first.left;
      const deltaY = last.top - first.top;
      const scaleX = last.width / first.width;
      const scaleY = last.height / first.height;

      // Force reflow zodat browser de begintoestand inpaint
      textEl.getBoundingClientRect();

      // PLAY: animeer naar LAST
      textEl.style.transition = "transform 1.1s cubic-bezier(0.76, 0, 0.24, 1)";
      textEl.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(${scaleX}, ${scaleY})`;

      // Overlay fades uit (start na 0.5s, duurt 0.7s)
      overlayEl.style.transition = "opacity 0.7s ease 0.5s";
      overlayEl.style.opacity = "0";

      // Navbar-logo zichtbaar als tekst aankomt
      const revealTimer = setTimeout(() => {
        document.body.removeAttribute("data-preloader");
      }, 1050);

      // Component uit DOM
      const doneTimer = setTimeout(() => {
        document.body.style.overflow = "";
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
      document.body.removeAttribute("data-preloader");
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Zwarte overlay — fadeout onafhankelijk van tekst */}
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
      {/* Vliegende tekst — los van overlay zodat hij zichtbaar blijft tijdens fade */}
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
