import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { AppProviders } from "@/components/providers/AppProviders";
import { AppShell } from "@/components/layout/AppShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationJsonLd, websiteJsonLd, localBusinessJsonLd, professionalServiceJsonLd } from "@/lib/seo";
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
    default: "VoIP Development Company, Custom VoIP Software Solutions | Dialiqo",
    template: "%s | Dialiqo",
  },
  description:
    "Dialiqo is a leading VoIP Development Company delivering custom VoIP software solutions using FreeSWITCH, Asterisk, Kamailio & OpenSIPS. Trusted for scalable VoIP systems, carrier-grade solutions, and enterprise communication platforms worldwide.",
  keywords: [
    "VoIP Development Company",
    "Custom VoIP Software Solutions",
    "FreeSWITCH",
    "Asterisk",
    "Kamailio",
    "OpenSIPS",
    "VoIP Systems",
    "Enterprise Communication",
    "Voice AI",
    "SIP Trunking",
  ],
  authors: [{ name: "Dialiqo Technologies LLP" }],
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Dialiqo",
    title: "VoIP Development Company, Custom VoIP Software Solutions | Dialiqo",
    description:
      "Dialiqo is a leading VoIP Development Company delivering custom VoIP software solutions using FreeSWITCH, Asterisk, Kamailio & OpenSIPS. Trusted for scalable VoIP systems, carrier-grade solutions, and enterprise communication platforms worldwide.",
    images: [{ url: `${SITE_URL}/header-logo.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VoIP Development Company, Custom VoIP Software Solutions | Dialiqo",
    description:
      "Dialiqo is a leading VoIP Development Company delivering custom VoIP software solutions using FreeSWITCH, Asterisk, Kamailio & OpenSIPS.",
    images: [`${SITE_URL}/header-logo.png`],
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
      lang="en-US"
      suppressHydrationWarning
      className={`dark scroll-smooth ${plusJakarta.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-slate-950 text-slate-100 font-sans antialiased selection:bg-blue-500 selection:text-white">
        <JsonLd data={[organizationJsonLd, localBusinessJsonLd, professionalServiceJsonLd, websiteJsonLd]} />
        <AppProviders>
          <AppShell>{children}</AppShell>
        </AppProviders>
      </body>
    </html>
  );
}
