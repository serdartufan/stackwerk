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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [naam, setNaam] = useState("");
  const [email, setEmail] = useState("");
  const [telefoon, setTelefoon] = useState("");
  const [projectType, setProjectType] = useState("");
  const [bericht, setBericht] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ naam, email, telefoon, projectType, bericht }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(
          (data as { error?: string }).error ||
            "Er ging iets mis. Probeer het later opnieuw."
        );
        return;
      }

      setSubmitted(true);
    } catch {
      setError("Er ging iets mis. Controleer je verbinding en probeer opnieuw.");
    } finally {
      setLoading(false);
    }
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
            value={naam}
            onChange={(e) => setNaam(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={telefoon}
            onChange={(e) => setTelefoon(e.target.value)}
          />
        </div>
        <div>
          <label className="font-sans" style={labelStyle}>
            Project type
          </label>
          <select
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
            className="contact-input"
            style={fieldStyle({ cursor: "pointer" })}
          >
            <option value="" disabled>
              Selecteer een type
            </option>
            <option value="Website">Website</option>
            <option value="SaaS Platform">SaaS Platform</option>
            <option value="Maatwerk Software">Maatwerk Software</option>
            <option value="Anders">Anders</option>
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
          value={bericht}
          onChange={(e) => setBericht(e.target.value)}
        />
      </div>

      {/* Foutmelding */}
      {error && (
        <p
          className="font-sans"
          style={{ color: "#E85D26", fontSize: "14px" }}
        >
          {error}
        </p>
      )}

      {/* Verstuur knop */}
      <button
        type="submit"
        disabled={loading}
        className="font-sans font-medium text-white transition-opacity hover:opacity-85 disabled:opacity-50"
        style={{
          backgroundColor: "#E85D26",
          borderRadius: "10px",
          padding: "14px",
          width: "100%",
          fontSize: "15px",
          border: "none",
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {loading ? "Bezig met verzenden..." : "Verstuur bericht"}
      </button>
    </form>
  );
}
