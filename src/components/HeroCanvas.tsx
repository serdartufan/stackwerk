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

function randomShape(W: number, docH: number, randomY = false): Shape {
  return {
    x: W * 0.42 + Math.random() * W * 0.58,
    y: randomY ? Math.random() * docH : -40 - Math.random() * 200,
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

    // W: viewport breedte
    // docH: document-hoogte van het canvas-gebied (0 t/m bovenkant diensten)
    // heroH: document-hoogte van de hero sectie (opacity grens)
    let W = 0;
    let docH = 0;
    let heroH = 0;
    let shapes: Shape[] = [];

    function getDienstenEl(): HTMLElement | null {
      return document.querySelector("[data-canvas-stop]");
    }

    // Herbereken document-afmetingen (alleen bij resize — niet bij scroll)
    function measureDoc() {
      const dienstenEl = getDienstenEl();
      const heroEl = document.getElementById("hero-sectie");
      W = window.innerWidth;
      docH = dienstenEl
        ? dienstenEl.getBoundingClientRect().top + window.scrollY
        : window.innerHeight * 2;
      heroH = heroEl ? heroEl.offsetHeight : window.innerHeight;
    }

    // Update canvas-dimensies in viewport-ruimte (bij scroll én resize)
    function updateCanvasSize() {
      const dienstenEl = getDienstenEl();
      // Viewport-Y van bovenkant diensten (negatief als gescrolld voorbij)
      const viewportBottom = dienstenEl
        ? Math.max(0, dienstenEl.getBoundingClientRect().top)
        : window.innerHeight;
      el.width = W;
      el.height = viewportBottom;
      el.style.width = `${W}px`;
      el.style.height = `${viewportBottom}px`;
    }

    function init() {
      shapes = Array.from({ length: 16 }, () => randomShape(W, docH, true));
    }

    function frame() {
      const scrollY = window.scrollY;
      const canvasH = el.height;

      ctx.clearRect(0, 0, W, canvasH);

      // Spawn
      if (shapes.length < 24 && Math.random() < 0.025) {
        shapes.push(randomShape(W, docH, false));
      }

      for (let i = shapes.length - 1; i >= 0; i--) {
        const s = shapes[i];

        s.x += s.vx;
        s.y += s.vy;
        s.rot += s.vrot;

        // Reset zodra shape voorbij de document-grens valt
        if (s.y > docH + 60) {
          shapes[i] = randomShape(W, docH, false);
          continue;
        }

        // Converteer document-Y naar viewport-Y voor tekenen
        const viewY = s.y - scrollY;

        // Skip als buiten het zichtbare canvas-venster
        if (viewY < -40 || viewY > canvasH + 40) continue;

        // Opacity: gereduceerd in het witte statement-blok
        const inWhiteSection = s.y > heroH;
        const drawOpacity = inWhiteSection
          ? 0.15 + (s.opacity - 0.4) * 0.4
          : s.opacity;

        ctx.save();
        ctx.translate(s.x, viewY); // viewport-coördinaten
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

    measureDoc();
    updateCanvasSize();
    init();
    rafRef.current = requestAnimationFrame(frame);

    // Scroll: canvas hoogte bijwerken (viewport-Y van diensten verandert)
    const onScroll = () => { updateCanvasSize(); };

    // Resize: document-afmetingen + canvas hoogte herberekenen
    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        measureDoc();
        updateCanvasSize();
      }, 100);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScroll);
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
