import {
  buildMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { HealthcareIndustryPage } from "@/components/industries/HealthcareIndustryPage";
import {
  HEALTHCARE_FAQS,
  HEALTHCARE_PAGE_SEO,
} from "@/lib/healthcareIndustryPageData";

const PATH = "/voip-solutions-for-healthcare";

export async function generateMetadata() {
  return buildMetadata({
    title: HEALTHCARE_PAGE_SEO.title,
    description: HEALTHCARE_PAGE_SEO.description,
    path: PATH,
    absoluteTitle: true,
  });
}

export default function HealthcareIndustryRoutePage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Industries", path: "/industries" },
      { name: "Healthcare", path: PATH },
    ]),
    serviceJsonLd({
      name: "VoIP Solutions for Healthcare",
      description: HEALTHCARE_PAGE_SEO.description,
      path: PATH,
    }),
    faqJsonLd([...HEALTHCARE_FAQS]),
  ].filter(Boolean);

  return (
    <>
      <JsonLd data={jsonLd} />
      <HealthcareIndustryPage />
    </>
  );
}
