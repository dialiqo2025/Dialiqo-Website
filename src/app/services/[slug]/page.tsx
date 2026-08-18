import { notFound } from "next/navigation";
import { SERVICES_DATA } from "@/data/dialiqoData";
import {
  buildMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import { VOIP_PAGE_SEO } from "@/lib/voipPageData";
import { QA_PAGE_SEO } from "@/lib/qaPageData";
import { MOBILE_WEB_PAGE_SEO } from "@/lib/mobileWebPageData";
import { AIML_PAGE_SEO } from "@/lib/aiMlPageData";
import { DEVOPS_PAGE_SEO } from "@/lib/devopsPageData";
import { JsonLd } from "@/components/seo/JsonLd";
import { VoipServicePage } from "@/components/services/VoipServicePage";
import { QaServicePage } from "@/components/services/QaServicePage";
import { MobileWebServicePage } from "@/components/services/MobileWebServicePage";
import { AiMlServicePage } from "@/components/services/AiMlServicePage";
import { DevopsServicePage } from "@/components/services/DevopsServicePage";
import ServiceDetailClient from "./ServiceDetailClient";

const VOIP_SLUG = "voip-development";
const QA_SLUG = "qa-testing-services";
const QA_SLUGS = new Set([QA_SLUG, "qa-testing"]);
const MOBILE_WEB_SLUG = "mobile-web";
const AIML_SLUG = "ai-ml-development-services";
const DEVOPS_SLUG = "devops-consulting-services";
const DEVOPS_SLUGS = new Set([DEVOPS_SLUG, "devops"]);

function findService(slug: string) {
  if (QA_SLUGS.has(slug)) {
    return SERVICES_DATA.find((s) => s.slug === QA_SLUG);
  }
  if (slug === MOBILE_WEB_SLUG) {
    return SERVICES_DATA.find((s) => s.slug === "web-development");
  }
  if (slug === AIML_SLUG) {
    return SERVICES_DATA.find((s) => s.slug === "ai-development");
  }
  if (DEVOPS_SLUGS.has(slug)) {
    return SERVICES_DATA.find((s) => s.slug === "devops");
  }
  return SERVICES_DATA.find((s) => s.slug === slug);
}

export function generateStaticParams() {
  return [
    ...SERVICES_DATA.map((s) => ({ slug: s.slug })),
    { slug: "qa-testing" },
    { slug: MOBILE_WEB_SLUG },
    { slug: AIML_SLUG },
    { slug: DEVOPS_SLUG },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = findService(slug);
  if (!item) return {};

  if (slug === VOIP_SLUG) {
    return buildMetadata({
      title: VOIP_PAGE_SEO.title,
      description: VOIP_PAGE_SEO.description,
      path: `/services/${slug}`,
      absoluteTitle: true,
    });
  }

  if (QA_SLUGS.has(slug)) {
    return buildMetadata({
      title: QA_PAGE_SEO.title,
      description: QA_PAGE_SEO.description,
      path: `/services/${QA_SLUG}`,
      absoluteTitle: true,
    });
  }

  if (slug === MOBILE_WEB_SLUG) {
    return buildMetadata({
      title: MOBILE_WEB_PAGE_SEO.title,
      description: MOBILE_WEB_PAGE_SEO.description,
      path: `/services/${MOBILE_WEB_SLUG}`,
      absoluteTitle: true,
    });
  }

  if (slug === AIML_SLUG) {
    return buildMetadata({
      title: AIML_PAGE_SEO.title,
      description: AIML_PAGE_SEO.description,
      path: `/services/${AIML_SLUG}`,
      absoluteTitle: true,
    });
  }

  if (DEVOPS_SLUGS.has(slug)) {
    return buildMetadata({
      title: DEVOPS_PAGE_SEO.title,
      description: DEVOPS_PAGE_SEO.description,
      path: `/services/${DEVOPS_SLUG}`,
      absoluteTitle: true,
    });
  }

  return buildMetadata({
    title: item.title,
    description: item.shortDesc || item.heroDescription,
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = findService(slug);
  if (!item) notFound();

  if (slug === VOIP_SLUG) {
    const jsonLd = [
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "VoIP Development", path: `/services/${slug}` },
      ]),
      serviceJsonLd({
        name: "VoIP Development",
        description: VOIP_PAGE_SEO.description,
        path: `/services/${slug}`,
      }),
    ].filter(Boolean);

    return (
      <>
        <JsonLd data={jsonLd} />
        <VoipServicePage />
      </>
    );
  }

  if (QA_SLUGS.has(slug)) {
    const jsonLd = [
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "QA Testing Services", path: `/services/${QA_SLUG}` },
      ]),
      serviceJsonLd({
        name: "QA Testing Services",
        description: QA_PAGE_SEO.description,
        path: `/services/${QA_SLUG}`,
      }),
    ].filter(Boolean);

    return (
      <>
        <JsonLd data={jsonLd} />
        <QaServicePage />
      </>
    );
  }

  if (slug === MOBILE_WEB_SLUG) {
    const jsonLd = [
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Mobile & Web", path: `/services/${MOBILE_WEB_SLUG}` },
      ]),
      serviceJsonLd({
        name: "Mobile & Web Development",
        description: MOBILE_WEB_PAGE_SEO.description,
        path: `/services/${MOBILE_WEB_SLUG}`,
      }),
    ].filter(Boolean);

    return (
      <>
        <JsonLd data={jsonLd} />
        <MobileWebServicePage />
      </>
    );
  }

  if (slug === AIML_SLUG) {
    const jsonLd = [
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "AI-ML", path: `/services/${AIML_SLUG}` },
      ]),
      serviceJsonLd({
        name: "AI-ML Development",
        description: AIML_PAGE_SEO.description,
        path: `/services/${AIML_SLUG}`,
      }),
    ].filter(Boolean);

    return (
      <>
        <JsonLd data={jsonLd} />
        <AiMlServicePage />
      </>
    );
  }

  if (DEVOPS_SLUGS.has(slug)) {
    const jsonLd = [
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "DevOps", path: `/services/${DEVOPS_SLUG}` },
      ]),
      serviceJsonLd({
        name: "DevOps Consulting",
        description: DEVOPS_PAGE_SEO.description,
        path: `/services/${DEVOPS_SLUG}`,
      }),
    ].filter(Boolean);

    return (
      <>
        <JsonLd data={jsonLd} />
        <DevopsServicePage />
      </>
    );
  }

  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: item.title, path: `/services/${slug}` },
    ]),
    serviceJsonLd({
      name: item.title,
      description: item.shortDesc,
      path: `/services/${slug}`,
    }),
    faqJsonLd(item.faqs),
  ].filter(Boolean);

  return (
    <>
      <JsonLd data={jsonLd} />
      <ServiceDetailClient slug={slug} />
    </>
  );
}
