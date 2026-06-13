"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  value: number;
  from?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function CountUp({
  value,
  from = 0,
  duration = 1500,
  prefix = "",
  suffix = "",
  className,
  style,
}: Props) {
  const [current, setCurrent] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCurrent(value);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const range = value - from;

          const tick = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCurrent(Math.round(from + eased * range));
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, from, duration]);

  return (
    <span ref={ref} className={className} style={style}>
      {prefix}{current}{suffix}
    </span>
  );
}
