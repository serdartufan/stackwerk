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
    let H = 0;
    let shapes: Shape[] = [];

    function resize() {
      W = el.offsetWidth || window.innerWidth;
      H = el.offsetHeight || window.innerHeight;
      el.width = W;
      el.height = H;
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

      for (let i = shapes.length - 1; i >= 0; i--) {
        const s = shapes[i];

        // Update
        s.x += s.vx;
        s.y += s.vy;
        s.rot += s.vrot;

        // Reset als buiten beeld
        if (s.y > H + 60) {
          shapes[i] = randomShape(W, H, false);
          continue;
        }

        // Draw
        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate(s.rot);
        ctx.scale(s.scale, s.scale);
        ctx.globalAlpha = s.opacity;
        ctx.font = `bold ${s.fontSize}px monospace`;
        ctx.fillStyle = s.color;
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        ctx.fillText(s.symbol, 0, 0);
        ctx.restore();
      }

      rafRef.current = requestAnimationFrame(frame);
    }

    resize();
    init();
    rafRef.current = requestAnimationFrame(frame);

    const onResize = () => { resize(); };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
