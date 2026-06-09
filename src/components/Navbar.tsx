"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Diensten", href: "/#diensten" },
  { label: "Werk", href: "/#werk" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full bg-white"
      style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="font-serif text-xl tracking-tight"
            style={{ color: "#0a0a0a" }}
          >
            Stackwerk
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="font-sans text-sm transition-colors hover:text-[#0a0a0a]"
                style={{ color: "rgba(0,0,0,0.5)" }}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/#contact"
              className="hidden md:inline-flex items-center px-5 py-2 rounded-full font-sans text-sm font-medium text-white transition-opacity hover:opacity-85"
              style={{ backgroundColor: "#0a0a0a" }}
            >
              Start een project
            </Link>

            <button
              className="md:hidden p-2"
              style={{ color: "#0a0a0a" }}
              onClick={() => setOpen(!open)}
              aria-label={open ? "Menu sluiten" : "Menu openen"}
              aria-expanded={open}
            >
              <div className="w-6 space-y-1.5">
                <span
                  className="block h-0.5 w-full bg-current transition-transform duration-300"
                  style={{ transform: open ? "translateY(8px) rotate(45deg)" : undefined }}
                />
                <span
                  className="block h-0.5 w-full bg-current transition-opacity duration-300"
                  style={{ opacity: open ? 0 : 1 }}
                />
                <span
                  className="block h-0.5 w-full bg-current transition-transform duration-300"
                  style={{ transform: open ? "translateY(-8px) rotate(-45deg)" : undefined }}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div
          className="md:hidden px-6 pb-6 pt-4 space-y-5 bg-white"
          style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}
        >
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="block font-sans text-base"
              style={{ color: "#0a0a0a" }}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="inline-flex items-center px-5 py-2.5 rounded-full font-sans text-sm font-medium text-white"
            style={{ backgroundColor: "#0a0a0a" }}
            onClick={() => setOpen(false)}
          >
            Start een project
          </Link>
        </div>
      )}
    </header>
  );
}
