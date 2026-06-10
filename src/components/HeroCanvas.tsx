"use client";

import { useEffect, useRef } from "react";

const SYMBOLS = ["</>", "{ }", "=>", "[ ]", "_;", "()", "/*", "##", "://", "&&", "||", "!=="];
const COLORS = [
  "#E8620A",
  "rgba(232,98,10,0.6)",
  "rgba(255,255,255,0.7)",
  "rgba(255,255,255,0.35)",
];

interface Shape {
  x: number;
  y: number;
  vx: number;
  vy: number;
  vrot: number;
  rot: number;
  scale: number;
  opacity: number;
  fontSize: number;
  symbol: string;
  color: string;
}

function randomShape(W: number, H: number, randomY = false): Shape {
  return {
    x: W * 0.42 + Math.random() * W * 0.58,
    y: randomY ? Math.random() * H : -40 - Math.random() * 200,
    vx: (Math.random() - 0.5) * 0.5,
    vy: 1.2 + Math.random() * 1.8,
    vrot: (Math.random() - 0.5) * 0.05,
    rot: Math.random() * Math.PI * 2,
    scale: 0.6 + Math.random() * 0.8,
    opacity: 0.4 + Math.random() * 0.5,
    fontSize: 14 + Math.floor(Math.random() * 13),
    symbol: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
  };
}

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const elOrNull = canvasRef.current;
    if (!elOrNull) return;
    const el: HTMLCanvasElement = elOrNull;
    const ctxOrNull = el.getContext("2d");
    if (!ctxOrNull) return;
    const ctx: CanvasRenderingContext2D = ctxOrNull;

    let W = 0;
    let H = 0; // canvas height = top of diensten section
    let heroH = 0; // height of hero section (boundary for opacity)
    let shapes: Shape[] = [];

    function measure() {
      const dienstenEl = document.querySelector("[data-canvas-stop]");
      const heroEl = document.getElementById("hero-sectie");

      W = window.innerWidth;
      H = dienstenEl
        ? (dienstenEl as HTMLElement).getBoundingClientRect().top + window.scrollY
        : window.innerHeight * 2;
      heroH = heroEl ? heroEl.offsetHeight : window.innerHeight;

      el.width = W;
      el.height = H;
      el.style.width = `${W}px`;
      el.style.height = `${H}px`;
    }

    function init() {
      shapes = Array.from({ length: 16 }, () => randomShape(W, H, true));
    }

    function frame() {
      ctx.clearRect(0, 0, W, H);

      // Spawn
      if (shapes.length < 24 && Math.random() < 0.025) {
        shapes.push(randomShape(W, H, false));
      }

      const scrollY = window.scrollY;

      for (let i = shapes.length - 1; i >= 0; i--) {
        const s = shapes[i];

        s.x += s.vx;
        s.y += s.vy;
        s.rot += s.vrot;

        if (s.y > H + 60) {
          shapes[i] = randomShape(W, H, false);
          continue;
        }

        // Absolute y op het scherm = s.y - scrollY
        const screenY = s.y - scrollY;

        // Buiten zichtbaar venster: skip draw
        if (screenY > window.innerHeight + 60 || screenY < -60) continue;

        // Opacity: donker gedeelte (hero) = vol, wit gedeelte = gereduceerd
        const inWhiteSection = s.y > heroH;
        const drawOpacity = inWhiteSection
          ? 0.15 + (s.opacity - 0.4) * ((0.35 - 0.15) / 0.5)
          : s.opacity;

        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate(s.rot);
        ctx.scale(s.scale, s.scale);
        ctx.globalAlpha = Math.max(0, Math.min(1, drawOpacity));
        ctx.font = `bold ${s.fontSize}px monospace`;
        ctx.fillStyle = s.color;
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        ctx.fillText(s.symbol, 0, 0);
        ctx.restore();
      }

      rafRef.current = requestAnimationFrame(frame);
    }

    measure();
    init();
    rafRef.current = requestAnimationFrame(frame);

    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        measure();
        shapes = shapes.map((s) => ({ ...s }));
      }, 100);
    };

    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  );
}
