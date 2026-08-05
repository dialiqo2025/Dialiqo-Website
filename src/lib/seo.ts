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
  name: "Dialiqo Ultimate Solutions Inc.",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "Enterprise Voice AI Agents, SIP Infrastructure, and Cloud Engineering Solutions.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-415-890-3400",
    contactType: "customer service",
    email: "contact@dialiqo.com",
    availableLanguage: ["English"],
  },
  sameAs: [
    "https://github.com/dialiqo",
    "https://linkedin.com/company/dialiqo",
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Dialiqo",
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
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
