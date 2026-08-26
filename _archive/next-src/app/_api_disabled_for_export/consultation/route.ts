import { NextResponse } from "next/server";
import { sendInquiryEmail } from "@/lib/email/sendInquiryEmail";
import { isEmailConfigured } from "@/lib/email/transporter";
import {
  createInquiryReference,
  isHoneypotTriggered,
  parseInquiryBody,
} from "@/lib/inquiry/types";

export async function POST(req: Request) {
  let body: unknown;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (isHoneypotTriggered(body)) {
    return NextResponse.json({
      success: true,
      reference: createInquiryReference(),
    });
  }

  const parsed = parseInquiryBody(body);
  if (parsed.ok === false) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  const inquiry = parsed.data;

  const reference = createInquiryReference();

  if (!isEmailConfigured()) {
    console.error(
      "[consultation] SMTP is not configured — inquiry was not emailed.",
      { reference, email: inquiry.email }
    );
    return NextResponse.json(
      {
        error:
          "We could not send your message right now. Please email info@dialiqo.com directly.",
      },
      { status: 500 }
    );
  }

  try {
    await sendInquiryEmail(inquiry, reference);
  } catch (error) {
    console.error("[consultation] Failed to send inquiry email:", error);
    return NextResponse.json(
      {
        error:
          "We could not send your message right now. Please try again or email info@dialiqo.com.",
      },
      { status: 500 }
    );
  }

  return NextResponse.json({
    success: true,
    message: "Your inquiry was sent successfully.",
    reference,
  });
}
