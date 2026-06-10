"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  angle: number;
  baseSpeed: number;
  radius: number;
}

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -999, y: -999 });
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
    let t = 0;
    let particles: Particle[] = [];

    function resize() {
      W = el.offsetWidth || window.innerWidth;
      H = el.offsetHeight || window.innerHeight;
      el.width = W;
      el.height = H;
    }

    function initParticles() {
      particles = Array.from({ length: 90 }, () => {
        const angle = Math.random() * Math.PI * 2;
        const baseSpeed = 0.3 + Math.random() * 0.4;
        return {
          x: Math.random() * W,
          y: Math.random() * H,
          vx: Math.cos(angle) * baseSpeed * 0.3,
          vy: Math.sin(angle) * baseSpeed * 0.3,
          angle,
          baseSpeed,
          radius: 0.6 + Math.random() * 1.8,
        };
      });
    }

    function drawSphere() {
      const cx = W * 0.76;
      const cy = H * 0.5;
      const r = 90;
      const fov = 400;
      const SEG = 60;

      // Breedtegraden
      ctx.strokeStyle = "rgba(232,98,10,0.28)";
      ctx.lineWidth = 0.8;
      for (let i = 0; i < 10; i++) {
        const theta = -Math.PI / 2 + ((i + 1) * Math.PI) / 11;
        ctx.beginPath();
        for (let j = 0; j <= SEG; j++) {
          const phi = (j / SEG) * Math.PI * 2;
          const x3 = r * Math.cos(theta) * Math.cos(phi + t);
          const y3 = r * Math.sin(theta);
          const z3 = r * Math.cos(theta) * Math.sin(phi + t);
          const sc = fov / (fov + z3 + r);
          if (j === 0) ctx.moveTo(cx + x3 * sc, cy + y3 * sc);
          else ctx.lineTo(cx + x3 * sc, cy + y3 * sc);
        }
        ctx.stroke();
      }

      // Lengtegraden
      ctx.strokeStyle = "rgba(232,98,10,0.18)";
      for (let i = 0; i < 14; i++) {
        const phi = (i / 14) * Math.PI * 2;
        ctx.beginPath();
        for (let j = 0; j <= SEG; j++) {
          const theta = -Math.PI / 2 + (j / SEG) * Math.PI;
          const x3 = r * Math.cos(theta) * Math.cos(phi + t);
          const y3 = r * Math.sin(theta);
          const z3 = r * Math.cos(theta) * Math.sin(phi + t);
          const sc = fov / (fov + z3 + r);
          if (j === 0) ctx.moveTo(cx + x3 * sc, cy + y3 * sc);
          else ctx.lineTo(cx + x3 * sc, cy + y3 * sc);
        }
        ctx.stroke();
      }
    }

    function updateParticles() {
      const cx = W * 0.76;
      const cy = H * 0.5;
      const r = 90;
      const { x: mx, y: my } = mouseRef.current;

      for (const p of particles) {
        // 1. Constante drift
        const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (spd < p.baseSpeed * 0.6) {
          p.vx += Math.cos(p.angle) * 0.02;
          p.vy += Math.sin(p.angle) * 0.02;
        }

        // 2. Sphere interactie
        const sdx = p.x - cx;
        const sdy = p.y - cy;
        const sdist = Math.sqrt(sdx * sdx + sdy * sdy);
        if (sdist > 0) {
          const nx = sdx / sdist;
          const ny = sdy / sdist;
          if (sdist > 0.95 * r && sdist < 2.8 * r) {
            p.vx -= nx * 0.012;
            p.vy -= ny * 0.012;
          } else if (sdist < 0.95 * r) {
            p.vx += nx * 0.05;
            p.vy += ny * 0.05;
          }
        }

        // 3. Muis afstoting
        const mdx = p.x - mx;
        const mdy = p.y - my;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 100 && mdist > 0) {
          p.vx += (mdx / mdist) * 0.5;
          p.vy += (mdy / mdist) * 0.5;
        }

        // 4. Demping + snelheidslimiet
        p.vx *= 0.985;
        p.vy *= 0.985;
        const ns = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (ns > 2.5) {
          p.vx = (p.vx / ns) * 2.5;
          p.vy = (p.vy / ns) * 2.5;
        }

        // 5. Verplaats
        p.x += p.vx;
        p.y += p.vy;

        // 6. Wrap-around
        if (p.x < -10) p.x = W + 10;
        else if (p.x > W + 10) p.x = -10;
        if (p.y < -10) p.y = H + 10;
        else if (p.y > H + 10) p.y = -10;
      }
    }

    function drawConnections() {
      const cx = W * 0.76;
      const cy = H * 0.5;
      const r = 90;
      ctx.lineWidth = 0.5;

      // Particle–particle
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 72) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(232,98,10,${((1 - d / 72) * 0.22).toFixed(3)})`;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Particle–sphere
      for (const p of particles) {
        const dx = p.x - cx;
        const dy = p.y - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > 0.9 * r && dist < 1.5 * r) {
          const alpha = (1 - dist / (r * 1.5)) * 0.28;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(232,98,10,${alpha.toFixed(3)})`;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(cx + (dx / dist) * r, cy + (dy / dist) * r);
          ctx.stroke();
        }
      }
    }

    function drawParticles() {
      ctx.fillStyle = "rgba(232,98,10,0.7)";
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function frame() {
      ctx.clearRect(0, 0, W, H);
      t += 0.007;
      updateParticles();
      drawConnections();
      drawSphere();
      drawParticles();
      rafRef.current = requestAnimationFrame(frame);
    }

    // Events op de parent section — canvas zelf heeft pointer-events: none
    const parentOrNull = el.parentElement;
    const parent: HTMLElement = parentOrNull ?? el;

    function onMouseMove(e: MouseEvent) {
      const rect = el.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }

    function onMouseLeave() {
      mouseRef.current = { x: -999, y: -999 };
    }

    resize();
    initParticles();
    parent.addEventListener("mousemove", onMouseMove);
    parent.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("resize", resize);
    rafRef.current = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(rafRef.current);
      parent.removeEventListener("mousemove", onMouseMove);
      parent.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", resize);
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
