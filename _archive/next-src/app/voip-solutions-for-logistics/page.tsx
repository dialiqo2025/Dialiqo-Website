import {
  buildMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { LogisticsIndustryPage } from "@/components/industries/LogisticsIndustryPage";
import {
  LOGISTICS_FAQS,
  LOGISTICS_PAGE_SEO,
} from "@/lib/logisticsIndustryPageData";

const PATH = "/voip-solutions-for-logistics";

export async function generateMetadata() {
  return buildMetadata({
    title: LOGISTICS_PAGE_SEO.title,
    description: LOGISTICS_PAGE_SEO.description,
    path: PATH,
    absoluteTitle: true,
  });
}

export default function LogisticsIndustryRoutePage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Logistics", path: PATH },
    ]),
    serviceJsonLd({
      name: "VoIP Solutions for Logistics",
      description: LOGISTICS_PAGE_SEO.description,
      path: PATH,
    }),
    faqJsonLd([...LOGISTICS_FAQS]),
  ].filter(Boolean);

  return (
    <>
      <JsonLd data={jsonLd} />
      <LogisticsIndustryPage />
    </>
  );
}
