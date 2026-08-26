import type { NormalizedInquiry } from "@/lib/inquiry/types";
import { getMailTransporter } from "./transporter";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function optionalRow(label: string, value?: string): string {
  if (!value) return "";
  return `<tr><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;color:#64748b;width:160px;">${label}</td><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;color:#0f172a;">${escapeHtml(value)}</td></tr>`;
}

function buildPlainText(inquiry: NormalizedInquiry, reference: string): string {
  const lines = [
    `New website inquiry — ${reference}`,
    "",
    `Name: ${inquiry.name}`,
    `Email: ${inquiry.email}`,
  ];

  if (inquiry.phone) lines.push(`Phone: ${inquiry.phone}`);
  if (inquiry.company) lines.push(`Company: ${inquiry.company}`);
  if (inquiry.service) lines.push(`Service: ${inquiry.service}`);
  if (inquiry.pageUrl) lines.push(`Page: ${inquiry.pageUrl}`);
  if (inquiry.source) lines.push(`Source: ${inquiry.source}`);
  if (inquiry.estimatedBudget) lines.push(`Budget: ${inquiry.estimatedBudget}`);
  if (inquiry.callVolume) lines.push(`Call volume: ${inquiry.callVolume}`);
  if (inquiry.date) lines.push(`Preferred date: ${inquiry.date}`);
  if (inquiry.time) lines.push(`Preferred time: ${inquiry.time}`);

  lines.push("", "Message:", inquiry.message);
  lines.push("", `Submitted: ${new Date().toISOString()}`);

  return lines.join("\n");
}

function buildHtml(inquiry: NormalizedInquiry, reference: string): string {
  const rows = [
    optionalRow("Name", inquiry.name),
    optionalRow("Email", inquiry.email),
    optionalRow("Phone", inquiry.phone),
    optionalRow("Company", inquiry.company),
    optionalRow("Service", inquiry.service),
    optionalRow("Page URL", inquiry.pageUrl),
    optionalRow("Source", inquiry.source),
    optionalRow("Budget", inquiry.estimatedBudget),
    optionalRow("Call volume", inquiry.callVolume),
    optionalRow("Preferred date", inquiry.date),
    optionalRow("Preferred time", inquiry.time),
  ].join("");

  return `<!DOCTYPE html>
<html>
  <body style="font-family:Arial,sans-serif;background:#f8fafc;padding:24px;">
    <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
      <div style="padding:20px 24px;background:#0f172a;color:#ffffff;">
        <h1 style="margin:0;font-size:20px;">New website inquiry</h1>
        <p style="margin:8px 0 0;font-size:14px;color:#cbd5e1;">Reference: ${escapeHtml(reference)}</p>
      </div>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">${rows}</table>
      <div style="padding:20px 24px;border-top:1px solid #e2e8f0;">
        <p style="margin:0 0 8px;font-size:12px;font-weight:bold;color:#64748b;text-transform:uppercase;">Message</p>
        <p style="margin:0;white-space:pre-wrap;color:#0f172a;line-height:1.6;">${escapeHtml(inquiry.message)}</p>
      </div>
    </div>
  </body>
</html>`;
}

export async function sendInquiryEmail(
  inquiry: NormalizedInquiry,
  reference: string
): Promise<void> {
  const to = process.env.INQUIRY_TO_EMAIL ?? "dhruvin.patel@dialiqo.com";
  const fromEmail =
    process.env.INQUIRY_FROM_EMAIL ?? process.env.SMTP_USER ?? to;
  const fromName = process.env.INQUIRY_FROM_NAME ?? "Dialiqo Website";

  const transporter = getMailTransporter();

  await transporter.sendMail({
    from: `"${fromName}" <${fromEmail}>`,
    to,
    replyTo: inquiry.email,
    subject: `[Dialiqo] New inquiry from ${inquiry.name} (${reference})`,
    text: buildPlainText(inquiry, reference),
    html: buildHtml(inquiry, reference),
  });
}
