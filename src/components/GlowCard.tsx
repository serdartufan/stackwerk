"use client";

import { useState } from "react";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function GlowCard({ children, className, style }: GlowCardProps) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMouse({ x, y });
    setTilt({
      x: ((y / rect.height) - 0.5) * 8,
      y: ((x / rect.width) - 0.5) * -8,
    });
  }

  function onMouseLeave() {
    setActive(false);
    setTilt({ x: 0, y: 0 });
  }

  return (
    <div
      className={className}
      style={{ position: "relative", ...style }}
    >
      {/* Externe glow — achter de card, in het witte gebied */}
      <div
        style={{
          position: "absolute",
          inset: -2,
          zIndex: -1,
          borderRadius: "inherit",
          pointerEvents: "none",
          background: `radial-gradient(800px circle at ${mouse.x}px ${mouse.y}px, rgba(232,98,10,0.5), transparent 50%)`,
          opacity: active ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />
      {/* Card met tilt */}
      <div
        style={{
          height: "100%",
          transform: active
            ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
            : "perspective(1000px) rotateX(0deg) rotateY(0deg)",
          transition: active ? "transform 0.15s ease" : "transform 0.5s ease",
          willChange: "transform",
        }}
        onMouseMove={onMouseMove}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={onMouseLeave}
      >
        {children}
      </div>
    </div>
  );
}
