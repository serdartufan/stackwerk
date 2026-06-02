"use client";

import { useState, type FormEvent, type CSSProperties } from "react";

function fieldStyle(extra: CSSProperties = {}): CSSProperties {
  return {
    backgroundColor: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(240,237,232,0.08)",
    color: "#F0EDE8",
    borderRadius: "10px",
    padding: "14px 16px",
    width: "100%",
    fontSize: "14px",
    outline: "none",
    fontFamily: "inherit",
    ...extra,
  };
}

const labelStyle: CSSProperties = {
  fontSize: "13px",
  color: "rgba(240,237,232,0.65)",
  display: "block",
  marginBottom: "6px",
};

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="flex min-h-80 items-center justify-center text-center"
        style={{
          backgroundColor: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(240,237,232,0.08)",
          borderRadius: "14px",
          padding: "48px",
        }}
      >
        <p
          className="font-sans"
          style={{ color: "#F0EDE8", fontSize: "17px", lineHeight: "1.7" }}
        >
          Bedankt voor je bericht. We nemen binnen 24 uur contact op.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Rij 1: Naam + E-mail */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="font-sans" style={labelStyle}>
            Naam
          </label>
          <input
            type="text"
            required
            placeholder="Je naam"
            className="contact-input"
            style={fieldStyle()}
          />
        </div>
        <div>
          <label className="font-sans" style={labelStyle}>
            E-mail
          </label>
          <input
            type="email"
            required
            placeholder="je@email.nl"
            className="contact-input"
            style={fieldStyle()}
          />
        </div>
      </div>

      {/* Rij 2: Telefoon + Project type */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="font-sans" style={labelStyle}>
            Telefoon{" "}
            <span style={{ color: "rgba(240,237,232,0.35)" }}>
              (optioneel)
            </span>
          </label>
          <input
            type="tel"
            placeholder="+31 6 00000000"
            className="contact-input"
            style={fieldStyle()}
          />
        </div>
        <div>
          <label className="font-sans" style={labelStyle}>
            Project type
          </label>
          <select
            defaultValue=""
            className="contact-input"
            style={fieldStyle({ cursor: "pointer" })}
          >
            <option value="" disabled>
              Selecteer een type
            </option>
            <option value="website">Website</option>
            <option value="saas">SaaS Platform</option>
            <option value="maatwerk">Maatwerk Software</option>
            <option value="anders">Anders</option>
          </select>
        </div>
      </div>

      {/* Rij 3: Bericht */}
      <div>
        <label className="font-sans" style={labelStyle}>
          Bericht
        </label>
        <textarea
          required
          rows={5}
          placeholder="Vertel ons over je idee..."
          className="contact-input"
          style={fieldStyle({ resize: "vertical" })}
        />
      </div>

      {/* Verstuur knop */}
      <button
        type="submit"
        className="font-sans font-medium text-white transition-opacity hover:opacity-85"
        style={{
          backgroundColor: "#E85D26",
          borderRadius: "10px",
          padding: "14px",
          width: "100%",
          fontSize: "15px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Verstuur bericht
      </button>
    </form>
  );
}
