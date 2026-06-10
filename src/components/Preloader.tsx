"use client";

import { useState, useEffect } from "react";

export default function Preloader() {
  const [phase, setPhase] = useState<"hidden" | "enter" | "exit">("hidden");

  useEffect(() => {
    if (sessionStorage.getItem("preloader-shown")) return;
    sessionStorage.setItem("preloader-shown", "1");

    document.body.style.overflow = "hidden";
    setPhase("enter");

    const exitTimer = setTimeout(() => setPhase("exit"), 1400);

    return () => {
      clearTimeout(exitTimer);
      document.body.style.overflow = "";
    };
  }, []);

  function handleTransitionEnd(e: React.TransitionEvent<HTMLDivElement>) {
    if (e.propertyName === "transform" && phase === "exit") {
      document.body.style.overflow = "";
      setPhase("hidden");
    }
  }

  if (phase === "hidden") return null;

  return (
    <div
      onTransitionEnd={handleTransitionEnd}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "#0a0a0a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transform: phase === "exit" ? "translateY(-100%)" : "translateY(0)",
        transition: phase === "exit" ? "transform 0.7s ease-in-out" : "none",
      }}
    >
      <span
        className="font-serif italic"
        style={{
          fontSize: "clamp(3rem, 8vw, 7rem)",
          color: "#F0EDE8",
          opacity: phase === "exit" ? 0 : 1,
          transition: phase === "exit" ? "opacity 0.3s ease" : "none",
          animation: phase === "enter" ? "preloader-scale 0.6s ease-out forwards" : "none",
        }}
      >
        Stackwerk
      </span>
    </div>
  );
}
