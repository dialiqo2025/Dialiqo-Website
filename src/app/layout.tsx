import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { AppProviders } from "@/components/providers/AppProviders";
import { AppShell } from "@/components/layout/AppShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/routes";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dialiqo | Voice AI, SIP Telecom Infrastructure & Cloud Engineering",
    template: "%s | Dialiqo",
  },
  description:
    "Dialiqo Ultimate Solutions Inc. delivers sub-150ms Voice AI agents, high-concurrency FreeSWITCH & Kamailio SIP trunks, custom software engineering, and multi-cloud telemetry infrastructure.",
  keywords: [
    "Voice AI",
    "FreeSWITCH",
    "Kamailio",
    "SIP Trunking",
    "VoIP Infrastructure",
    "Cloud Engineering",
    "Artificial Intelligence",
    "Real-time Speech",
    "Telecom Software",
  ],
  authors: [{ name: "Dialiqo Ultimate Solutions Inc." }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Dialiqo",
    title: "Dialiqo | Voice AI, SIP Telecom Infrastructure & Cloud Engineering",
    description:
      "Enterprise sub-150ms Voice AI, Kamailio/FreeSWITCH SIP switching, and multi-cloud telephony platforms.",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dialiqo | Enterprise Voice AI & Telephony Engineering",
    description:
      "Global carrier-grade SIP proxy routing, AI voice agents, and high-concurrency cloud infrastructure.",
    images: [DEFAULT_OG_IMAGE],
  },
  icons: {
    icon: "/icon.svg",
  },
  other: {
    "theme-color": "#020617",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`scroll-smooth ${plusJakarta.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans antialiased selection:bg-blue-500 selection:text-white">
        <JsonLd data={[organizationJsonLd, websiteJsonLd]} />
        <AppProviders>
          <AppShell>{children}</AppShell>
        </AppProviders>
      </body>
    </html>
  );
}
