import {
  buildMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { FintechIndustryPage } from "@/components/industries/FintechIndustryPage";
import {
  FINTECH_FAQS,
  FINTECH_PAGE_SEO,
} from "@/lib/fintechIndustryPageData";

const PATH = "/voip-solutions-for-fintech";

export async function generateMetadata() {
  return buildMetadata({
    title: FINTECH_PAGE_SEO.title,
    description: FINTECH_PAGE_SEO.description,
    path: PATH,
    absoluteTitle: true,
  });
}

export default function FintechIndustryRoutePage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Industries", path: "/industries" },
      { name: "Fintech", path: PATH },
    ]),
    serviceJsonLd({
      name: "VoIP Solutions for Fintech",
      description: FINTECH_PAGE_SEO.description,
      path: PATH,
    }),
    faqJsonLd([...FINTECH_FAQS]),
  ].filter(Boolean);

  return (
    <>
      <JsonLd data={jsonLd} />
      <FintechIndustryPage />
    </>
  );
}
