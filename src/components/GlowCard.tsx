"use client";

import { useState } from "react";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function GlowCard({ children, className, style }: GlowCardProps) {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const [active, setActive] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMouse({ x, y });
    setTilt({
      x: (y - 0.5) * 8,
      y: (x - 0.5) * -8,
    });
  }

  function onMouseLeave() {
    setActive(false);
    setTilt({ x: 0, y: 0 });
  }

  const shadowX = (mouse.x - 0.5) * 40;
  const shadowY = (mouse.y - 0.5) * 40;

  return (
    <div
      className={className}
      style={{ position: "relative", ...style }}
    >
      <div
        style={{
          height: "100%",
          transform: active
            ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
            : "perspective(1000px) rotateX(0deg) rotateY(0deg)",
          boxShadow: active
            ? `${shadowX}px ${shadowY}px 40px rgba(232,98,10,0.4), ${shadowX * 0.5}px ${shadowY * 0.5}px 80px rgba(232,98,10,0.2)`
            : "none",
          transition: active
            ? "transform 0.15s ease, box-shadow 0.15s ease"
            : "transform 0.5s ease, box-shadow 0.5s ease",
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
