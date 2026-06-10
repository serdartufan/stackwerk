"use client";

import { useState, useRef } from "react";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function GlowCard({ children, className, style }: GlowCardProps) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const tiltX = ((y / rect.height) - 0.5) * 8;
    const tiltY = ((x / rect.width) - 0.5) * -8;
    setMouse({ x, y });
    setTilt({ x: tiltX, y: tiltY });
  }

  function onMouseEnter() {
    setActive(true);
  }

  function onMouseLeave() {
    setActive(false);
    setTilt({ x: 0, y: 0 });
  }

  return (
    <div
      ref={cardRef}
      className={className}
      style={{
        position: "relative",
        transform: active
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg)",
        transition: active ? "transform 0.15s ease" : "transform 0.5s ease",
        willChange: "transform",
        ...style,
      }}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Radiale glow die de muis volgt */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          pointerEvents: "none",
          borderRadius: "inherit",
          background: active
            ? `radial-gradient(600px circle at ${mouse.x}px ${mouse.y}px, rgba(232,98,10,0.15), transparent 70%)`
            : "none",
          opacity: active ? 1 : 0,
          transition: active ? "opacity 0.15s ease" : "opacity 0.3s ease",
        }}
      />
      {/* Rand glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          pointerEvents: "none",
          borderRadius: "inherit",
          boxShadow: active
            ? "inset 0 0 0 1px rgba(232,98,10,0.4), 0 0 24px rgba(232,98,10,0.12)"
            : "inset 0 0 0 1px rgba(232,98,10,0)",
          opacity: active ? 1 : 0,
          transition: active ? "opacity 0.15s ease" : "opacity 0.3s ease",
        }}
      />
      {children}
    </div>
  );
}
