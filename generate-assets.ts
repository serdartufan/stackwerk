/**
 * Visuele asset generator voor Stackwerk.
 * Gebruik: npx tsx generate-assets.ts
 *
 * Vereiste env vars (voeg toe aan .env):
 *   GEMINI_API_KEY   — primair (gemini-2.0-flash-exp-image-generation)
 *   GROK_API_KEY     — fallback (grok-2-image via x.ai)
 */

import fs from "fs";
import path from "path";

const OUTPUT_DIR = path.join(process.cwd(), "public", "images", "generated");

const ASSETS: Array<{ filename: string; prompt: string; width: number; height: number }> = [
  {
    filename: "hero-bg.jpg",
    prompt:
      "Abstract dark minimalist background, deep black with subtle geometric shapes and thin light lines, no text, no people, no faces. Inspired by Apple dark mode aesthetics. Very subtle and elegant. 1920x1080.",
    width: 1920,
    height: 1080,
  },
  {
    filename: "case-capsuleautomaat.jpg",
    prompt:
      "B2B e-commerce professional atmosphere, modern office environment with clean desk and laptop, soft natural light, no people, no text. Subtle warm tones, product-focused, clean and corporate. 800x600.",
    width: 800,
    height: 600,
  },
  {
    filename: "case-justharry.jpg",
    prompt:
      "AI SaaS technology abstract atmosphere, glowing interface elements on dark background, data visualization nodes and connections, clean tech aesthetic, no text, no people. Blue and white tones. 800x600.",
    width: 800,
    height: 600,
  },
  {
    filename: "case-mymiracle.jpg",
    prompt:
      "Beauty wellness spa atmosphere, soft warm light, clean white surfaces, subtle floral elements, luxury skincare products on marble surface, no people, no text. Warm beige and cream tones. 800x600.",
    width: 800,
    height: 600,
  },
];

async function generateWithGemini(
  prompt: string,
  apiKey: string
): Promise<Buffer | null> {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp-image-generation:generateContent?key=${apiKey}`;

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { responseModalities: ["IMAGE", "TEXT"] },
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("  Gemini fout:", err.slice(0, 200));
    return null;
  }

  const data = (await res.json()) as {
    candidates?: Array<{
      content?: { parts?: Array<{ inlineData?: { data: string } }> };
    }>;
  };

  const b64 = data.candidates?.[0]?.content?.parts?.find(
    (p) => p.inlineData
  )?.inlineData?.data;

  if (!b64) return null;
  return Buffer.from(b64, "base64");
}

async function generateWithGrok(
  prompt: string,
  apiKey: string
): Promise<Buffer | null> {
  const res = await fetch("https://api.x.ai/v1/images/generations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "grok-2-image",
      prompt,
      n: 1,
      response_format: "b64_json",
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("  Grok fout:", err.slice(0, 200));
    return null;
  }

  const data = (await res.json()) as {
    data?: Array<{ b64_json?: string; url?: string }>;
  };

  const item = data.data?.[0];
  if (!item) return null;

  if (item.b64_json) {
    return Buffer.from(item.b64_json, "base64");
  }

  if (item.url) {
    const imgRes = await fetch(item.url);
    if (!imgRes.ok) return null;
    return Buffer.from(await imgRes.arrayBuffer());
  }

  return null;
}

async function main() {
  const geminiKey = process.env.GEMINI_API_KEY;
  const grokKey = process.env.GROK_API_KEY;

  if (!geminiKey && !grokKey) {
    console.error(
      "Geen API keys gevonden. Voeg GEMINI_API_KEY of GROK_API_KEY toe aan .env"
    );
    process.exit(1);
  }

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  console.log(`Output map: ${OUTPUT_DIR}\n`);

  for (const asset of ASSETS) {
    const outPath = path.join(OUTPUT_DIR, asset.filename);

    if (fs.existsSync(outPath)) {
      console.log(`⏭  ${asset.filename} — bestaat al, sla over`);
      continue;
    }

    console.log(`Genereer ${asset.filename}...`);
    let buffer: Buffer | null = null;

    if (geminiKey) {
      console.log("  Probeer Gemini...");
      buffer = await generateWithGemini(asset.prompt, geminiKey);
    }

    if (!buffer && grokKey) {
      console.log("  Probeer Grok als fallback...");
      buffer = await generateWithGrok(asset.prompt, grokKey);
    }

    if (buffer) {
      fs.writeFileSync(outPath, buffer);
      console.log(`  Opgeslagen: ${outPath} (${(buffer.length / 1024).toFixed(0)} KB)`);
    } else {
      console.error(`  Mislukt: ${asset.filename} — kon niet genereren`);
    }
  }

  console.log("\nKlaar.");
}

main().catch(console.error);
