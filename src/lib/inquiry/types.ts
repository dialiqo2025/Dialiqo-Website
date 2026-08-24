export type InquiryPayload = {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  notes?: string;
  company?: string;
  service?: string;
  estimatedBudget?: string;
  callVolume?: string;
  date?: string;
  time?: string;
  pageUrl?: string;
  source?: string;
  /** Honeypot field — bots fill this; humans leave it empty */
  website?: string;
};

export type NormalizedInquiry = {
  name: string;
  email: string;
  phone?: string;
  message: string;
  company?: string;
  service?: string;
  estimatedBudget?: string;
  callVolume?: string;
  date?: string;
  time?: string;
  pageUrl?: string;
  source?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function asString(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

export function parseInquiryBody(
  body: unknown
): { ok: true; data: NormalizedInquiry } | { ok: false; error: string } {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request body." };
  }

  const raw = body as Record<string, unknown>;

  const name = asString(raw.name);
  const email = asString(raw.email);

  if (!name) {
    return { ok: false, error: "Name is required." };
  }

  if (!email) {
    return { ok: false, error: "Email is required." };
  }

  if (!EMAIL_RE.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  let message = asString(raw.notes) ?? asString(raw.message);

  if (!message) {
    const service = asString(raw.service);
    message = service
      ? `Consultation request for ${service}`
      : undefined;
  }

  if (!message) {
    return { ok: false, error: "Message is required." };
  }

  const phone = asString(raw.phone);
  const company =
    asString(raw.company) === "Website Inquiry" ? undefined : asString(raw.company);

  return {
    ok: true,
    data: {
      name,
      email,
      phone,
      message,
      company,
      service: asString(raw.service),
      estimatedBudget: asString(raw.estimatedBudget),
      callVolume: asString(raw.callVolume),
      date: asString(raw.date),
      time: asString(raw.time),
      pageUrl: asString(raw.pageUrl),
      source: asString(raw.source),
    },
  };
}

export function isHoneypotTriggered(body: unknown): boolean {
  if (!body || typeof body !== "object") return false;
  const website = asString((body as Record<string, unknown>).website);
  return Boolean(website);
}

export function createInquiryReference(): string {
  return `DLQ-${Math.floor(100000 + Math.random() * 900000)}`;
}
