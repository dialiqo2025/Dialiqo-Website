import {
  buildMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { SaasIndustryPage } from "@/components/industries/SaasIndustryPage";
import { SAAS_FAQS, SAAS_PAGE_SEO } from "@/lib/saasIndustryPageData";

const PATH = "/voip-solutions-for-saas-companies";

export async function generateMetadata() {
  return buildMetadata({
    title: SAAS_PAGE_SEO.title,
    description: SAAS_PAGE_SEO.description,
    path: PATH,
    absoluteTitle: true,
  });
}

export default function SaasIndustryRoutePage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Industries", path: "/industries" },
      { name: "SaaS Companies", path: PATH },
    ]),
    serviceJsonLd({
      name: "VoIP Solutions for SaaS Companies",
      description: SAAS_PAGE_SEO.description,
      path: PATH,
    }),
    faqJsonLd([...SAAS_FAQS]),
  ].filter(Boolean);

  return (
    <>
      <JsonLd data={jsonLd} />
      <SaasIndustryPage />
    </>
  );
}
