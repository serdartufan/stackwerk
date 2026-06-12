"use client";

import { useState, useEffect } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>/{}[]!=";

interface ScrambleTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}

export default function ScrambleText({ text, className, style, delay = 0 }: ScrambleTextProps) {
  const [displayed, setDisplayed] = useState(text);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timeouts: ReturnType<typeof setTimeout>[] = [];

    const startTimeout = setTimeout(() => {
      for (let i = 0; i < text.length; i++) {
        const char = text[i];
        // Skip spaces — reveal immediately
        if (char === " ") continue;

        const revealAt = i * 45;
        // 5 scramble frames before reveal
        for (let f = 0; f < 5; f++) {
          const t = setTimeout(() => {
            setDisplayed((prev) => {
              const arr = prev.split("");
              arr[i] = CHARS[Math.floor(Math.random() * CHARS.length)];
              return arr.join("");
            });
          }, revealAt + f * 40);
          timeouts.push(t);
        }
        // Reveal real character
        const revealTimeout = setTimeout(() => {
          setDisplayed((prev) => {
            const arr = prev.split("");
            arr[i] = char;
            return arr.join("");
          });
        }, revealAt + 5 * 40);
        timeouts.push(revealTimeout);
      }
    }, delay);

    timeouts.push(startTimeout);

    return () => timeouts.forEach(clearTimeout);
  }, [text, delay]);

  return (
    <span className={className} style={style}>
      {displayed}
    </span>
  );
}
