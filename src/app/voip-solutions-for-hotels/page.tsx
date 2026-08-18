import {
  buildMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { HotelsIndustryPage } from "@/components/industries/HotelsIndustryPage";
import { HOTELS_FAQS, HOTELS_PAGE_SEO } from "@/lib/hotelsIndustryPageData";

const PATH = "/voip-solutions-for-hotels";

export async function generateMetadata() {
  return buildMetadata({
    title: HOTELS_PAGE_SEO.title,
    description: HOTELS_PAGE_SEO.description,
    path: PATH,
    absoluteTitle: true,
  });
}

export default function HotelsIndustryRoutePage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Hotels", path: PATH },
    ]),
    serviceJsonLd({
      name: "VoIP Solutions for Hotels",
      description: HOTELS_PAGE_SEO.description,
      path: PATH,
    }),
    faqJsonLd([...HOTELS_FAQS]),
  ].filter(Boolean);

  return (
    <>
      <JsonLd data={jsonLd} />
      <HotelsIndustryPage />
    </>
  );
}
