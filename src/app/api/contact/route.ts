import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);

  if (!body) {
    return NextResponse.json({ error: "Ongeldig verzoek." }, { status: 400 });
  }

  const { naam, email, bericht, telefoon, projectType } = body as {
    naam?: string;
    email?: string;
    bericht?: string;
    telefoon?: string;
    projectType?: string;
  };

  if (!naam || !email || !bericht) {
    return NextResponse.json(
      { error: "Naam, e-mail en bericht zijn verplicht." },
      { status: 400 }
    );
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    console.error("BREVO_API_KEY niet ingesteld");
    return NextResponse.json(
      { error: "Serverfout. Probeer het later opnieuw." },
      { status: 500 }
    );
  }

  const extraInfo = [
    telefoon ? `Telefoon: ${telefoon}` : null,
    projectType ? `Project type: ${projectType}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const htmlContent = `
    <p><strong>Naam:</strong> ${naam}</p>
    <p><strong>E-mail:</strong> <a href="mailto:${email}">${email}</a></p>
    ${telefoon ? `<p><strong>Telefoon:</strong> ${telefoon}</p>` : ""}
    ${projectType ? `<p><strong>Project type:</strong> ${projectType}</p>` : ""}
    <hr />
    <p><strong>Bericht:</strong></p>
    <p style="white-space:pre-line">${bericht}</p>
  `;

  const textContent = [
    `Naam: ${naam}`,
    `E-mail: ${email}`,
    extraInfo,
    "",
    `Bericht:\n${bericht}`,
  ]
    .filter((l) => l !== null)
    .join("\n");

  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sender: { name: "Stackwerk", email: "info@stackwerk.nl" },
      to: [{ email: "serdar@funnelvisionagency.com", name: "Serdar Tufan" }],
      replyTo: { email, name: naam },
      subject: `Nieuw contactbericht van ${naam}`,
      htmlContent,
      textContent,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error("Brevo fout:", res.status, detail);
    return NextResponse.json(
      { error: "Verzenden mislukt. Probeer het later opnieuw." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
