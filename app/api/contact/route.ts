// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

export const runtime = "nodejs";

const schema = z.object({
  name: z.string().min(1).max(200).transform(s => s.trim()),
  email: z.string().email().transform(s => s.trim()),
  message: z.string().min(1).max(10000).transform(s => s.trim()),
});

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export async function POST(req: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ ok: false, error: "RESEND_API_KEY missing" }, { status: 500 });
    }
    if (!process.env.CONTACT_TO_EMAIL) {
      return NextResponse.json({ ok: false, error: "CONTACT_TO_EMAIL missing" }, { status: 500 });
    }

    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ ok: false, errors: parsed.error.flatten() }, { status: 400 });
    }

    const { name, email, message } = parsed.data;
    const resend = new Resend(process.env.RESEND_API_KEY);
    const from = process.env.RESEND_FROM || "Portfolio <onboarding@resend.dev>";
    const to = process.env.CONTACT_TO_EMAIL.split(",").map(s => s.trim());

    const html = `
      <div style="font:14px/1.6 -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Arial,sans-serif;color:#e5e7eb">
        <p><strong>From:</strong> ${esc(name)} &lt;${esc(email)}&gt;</p>
        <pre style="white-space:pre-wrap;margin-top:12px;background:#0b0f1a;padding:12px;border-radius:8px">${esc(
          message
        )}</pre>
      </div>
    `;
    const text = `From: ${name} <${email}>\n\n${message}`;

    const { data, error } = await resend.emails.send({
      from,
      to,
      replyTo: `${name} <${email}>`,
      subject: `New message from ${name}`,
      html,
      text,
    });

    if (error) {
      console.error("RESEND_ERROR", error);
      return NextResponse.json({ ok: false, error }, { status: 500 });
    }

    return NextResponse.json({ ok: true, id: data?.id });
  } catch (err) {
    console.error("CONTACT_ROUTE_ERROR", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
