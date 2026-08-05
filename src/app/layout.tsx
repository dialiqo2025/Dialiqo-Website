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
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='8' fill='%23020617'/><path d='M8 16C8 11.5817 11.5817 8 16 8C20.4183 8 24 11.5817 24 16C24 20.4183 20.4183 24 16 24' stroke='%2338BDF8' stroke-width='3' stroke-linecap='round'/><circle cx='16' cy='16' r='3' fill='%232563EB'/></svg>",
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
