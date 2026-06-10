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

      const textRect = textEl.getBoundingClientRect();
      const logoRect = logoEl.getBoundingClientRect();

      const dx = (logoRect.left + logoRect.width / 2) - (textRect.left + textRect.width / 2);
      const dy = (logoRect.top + logoRect.height / 2) - (textRect.top + textRect.height / 2);
      const scale = logoRect.width / textRect.width;

      // Fly text to logo position
      textEl.style.transition = "transform 0.9s cubic-bezier(0.4, 0, 0.2, 1)";
      textEl.style.transform = `translate(${dx}px, ${dy}px) scale(${scale})`;

      // Fade overlay out (delayed 0.3s)
      overlayEl.style.transition = "opacity 0.5s ease 0.3s";
      overlayEl.style.opacity = "0";

      // Reveal navbar logo as text arrives
      const revealTimer = setTimeout(() => {
        document.body.removeAttribute("data-preloader");
      }, 750);

      // Remove component from DOM
      const doneTimer = setTimeout(() => {
        document.body.style.overflow = "";
        setVisible(false);
      }, 1100);

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
    <div
      ref={overlayRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "#0a0a0a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
      }}
    >
      <span
        ref={textRef}
        className="font-serif italic"
        style={{
          fontSize: "clamp(3rem, 8vw, 7rem)",
          color: "#F0EDE8",
          display: "inline-block",
          transformOrigin: "center center",
          whiteSpace: "nowrap",
          animation: "preloader-scale 0.6s ease-out forwards",
        }}
      >
        Stackwerk
      </span>
    </div>
  );
}
