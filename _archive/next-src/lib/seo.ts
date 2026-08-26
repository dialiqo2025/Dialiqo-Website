import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/routes";

type BuildMetaInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
  type?: "website" | "article";
  /** When true, ignore layout title template (use for home). */
  absoluteTitle?: boolean;
};

export function buildMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  noIndex = false,
  type = "website",
  absoluteTitle = false,
}: BuildMetaInput): Metadata {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: "Dialiqo",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Dialiqo Technologies LLP",
  url: SITE_URL,
  logo: `${SITE_URL}/header-logo.png`,
  description:
    "Dialiqo is a leading VoIP Development Company delivering custom VoIP software solutions using FreeSWITCH, Asterisk, Kamailio & OpenSIPS.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9974542501",
    contactType: "customer service",
    email: "info@dialiqo.com",
    availableLanguage: ["English"],
  },
  sameAs: [
    "https://www.linkedin.com/company/dialiqo-technologies/",
    "https://wa.me/919974542501",
  ],
};

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Dialiqo Technologies LLP - VoIP Software Development Company",
  url: SITE_URL,
  logo: `${SITE_URL}/header-logo.png`,
  image: `${SITE_URL}/header-logo.png`,
  description:
    "Custom VoIP software solutions using FreeSWITCH, Asterisk, Kamailio & OpenSIPS for businesses worldwide.",
  telephone: "+91-9974542501",
  email: "info@dialiqo.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "E509 Ganesh Glory 11",
    addressLocality: "Ahmedabad",
    addressCountry: "IN",
  },
  priceRange: "$$",
};

export const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Dialiqo Technologies LLP - Contact Center Solutions, Cloud Communications",
  url: SITE_URL,
  description:
    "Enterprise VoIP development, contact center solutions, and cloud communication platforms.",
  telephone: "+91-9974542501",
  address: {
    "@type": "PostalAddress",
    streetAddress: "E509 Ganesh Glory 11",
    addressLocality: "Ahmedabad",
    addressCountry: "IN",
  },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Dialiqo",
  url: SITE_URL,
};

export function breadcrumbJsonLd(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function serviceJsonLd(input: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    provider: {
      "@type": "Organization",
      name: "Dialiqo Ultimate Solutions Inc.",
      url: SITE_URL,
    },
    url: `${SITE_URL}${input.path}`,
  };
}

export function articleJsonLd(input: {
  title: string;
  description: string;
  path: string;
  image?: string;
  datePublished?: string;
  author?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    image: input.image || DEFAULT_OG_IMAGE,
    datePublished: input.datePublished,
    author: {
      "@type": "Person",
      name: input.author || "Dialiqo",
    },
    publisher: {
      "@type": "Organization",
      name: "Dialiqo Ultimate Solutions Inc.",
      url: SITE_URL,
    },
    mainEntityOfPage: `${SITE_URL}${input.path}`,
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  if (!faqs.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function jobPostingJsonLd(job: {
  title: string;
  description: string;
  location: string;
  type: string;
  department: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    hiringOrganization: {
      "@type": "Organization",
      name: "Dialiqo Ultimate Solutions Inc.",
      sameAs: SITE_URL,
    },
    jobLocation: {
      "@type": "Place",
      address: job.location,
    },
    employmentType: job.type.toUpperCase().replace("-", "_"),
    industry: job.department,
  };
}
