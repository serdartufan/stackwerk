"use client";

import { useEffect, useRef, ReactNode } from "react";

type Variant = "up" | "left" | "right" | "scale" | "heading" | "fade";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: Variant;
}

export default function ScrollAnimation({
  children,
  className = "",
  delay = 0,
  variant = "up",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const alreadyVisible = rect.top < window.innerHeight && rect.bottom > 0;
    if (alreadyVisible) return;

    el.classList.add("scroll-anim");
    if (variant !== "up") el.classList.add(`variant-${variant}`);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => el.classList.add("in"), delay);
          } else {
            el.classList.add("in");
          }
          observer.unobserve(el);
        }
      },
      { threshold: 0.08 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, variant]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
