"use client";

import { useMemo, useState } from "react";
import { Calendar, ExternalLink } from "lucide-react";

function normalizeAppointmentUrl(rawUrl: string): string {
  try {
    const url = new URL(rawUrl);
    if (
      url.hostname.includes("calendar.google.com") &&
      !url.searchParams.has("gv")
    ) {
      url.searchParams.set("gv", "true");
    }
    return url.toString();
  } catch {
    return rawUrl;
  }
}

export function GoogleAppointmentEmbed() {
  const [loaded, setLoaded] = useState(false);
  const appointmentUrl = process.env.NEXT_PUBLIC_GOOGLE_APPOINTMENT_URL?.trim();

  const embedUrl = useMemo(
    () => (appointmentUrl ? normalizeAppointmentUrl(appointmentUrl) : null),
    [appointmentUrl]
  );

  if (!embedUrl) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900/60 p-8 text-center">
        <Calendar
          className="w-10 h-10 mx-auto text-slate-500"
          aria-hidden="true"
        />
        <p className="mt-4 text-sm text-slate-400 max-w-md mx-auto">
          Google Calendar booking will appear here once{" "}
          <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded text-slate-300">
            NEXT_PUBLIC_GOOGLE_APPOINTMENT_URL
          </code>{" "}
          is configured.
        </p>
      </div>
    );
  }

  return (
    <div className="relative rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden shadow-lg shadow-slate-950/50">
      {!loaded ? (
        <div
          className="absolute inset-0 flex items-center justify-center bg-slate-950 z-10"
          aria-hidden="true"
        >
          <div className="h-8 w-8 rounded-full border-2 border-blue-500 border-t-transparent animate-spin" />
        </div>
      ) : null}
      <div className="bg-slate-950">
        <iframe
          src={embedUrl}
          title="Schedule a consultation with Dialiqo"
          className="google-appointment-embed w-full min-h-[640px] border-0"
          loading="lazy"
          onLoad={() => setLoaded(true)}
        />
      </div>
      <div className="px-4 py-3 border-t border-slate-800 bg-slate-900/80">
        <a
          href={embedUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:underline"
        >
          Open booking page in a new tab
          <ExternalLink className="w-4 h-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
