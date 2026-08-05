import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const {
    name,
    email,
    company,
    service,
    estimatedBudget,
    callVolume,
    notes,
    date,
    time,
  } = body;

  if (!name || !email) {
    return NextResponse.json(
      { error: "Name and email are required fields." },
      { status: 400 }
    );
  }

  const bookingReference = `DLQ-${Math.floor(100000 + Math.random() * 900000)}`;

  return NextResponse.json({
    success: true,
    message:
      "Consultation booked successfully with a Dialiqo Enterprise Solutions Architect.",
    reference: bookingReference,
    details: {
      name,
      email,
      company: company || "Enterprise Partner",
      service: service || "Full-Stack Software Architecture",
      date: date || "Next Business Day",
      time: time || "10:00 AM EST",
      estimatedBudget,
      callVolume,
      notes,
    },
  });
}
