import {
  buildMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { TelecomIndustryPage } from "@/components/industries/TelecomIndustryPage";
import {
  TELECOM_FAQS,
  TELECOM_PAGE_SEO,
} from "@/lib/telecomIndustryPageData";

const PATH = "/voip-solutions-for-telecom";

export async function generateMetadata() {
  return buildMetadata({
    title: TELECOM_PAGE_SEO.title,
    description: TELECOM_PAGE_SEO.description,
    path: PATH,
    absoluteTitle: true,
  });
}

export default function TelecomIndustryRoutePage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Telecom", path: PATH },
    ]),
    serviceJsonLd({
      name: "VoIP Solutions for Telecom",
      description: TELECOM_PAGE_SEO.description,
      path: PATH,
    }),
    faqJsonLd([...TELECOM_FAQS]),
  ].filter(Boolean);

  return (
    <>
      <JsonLd data={jsonLd} />
      <TelecomIndustryPage />
    </>
  );
}
