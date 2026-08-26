import {
  buildMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { RealEstateIndustryPage } from "@/components/industries/RealEstateIndustryPage";
import {
  REAL_ESTATE_FAQS,
  REAL_ESTATE_PAGE_SEO,
} from "@/lib/realEstateIndustryPageData";

const PATH = "/voip-solutions-for-real-estate";

export async function generateMetadata() {
  return buildMetadata({
    title: REAL_ESTATE_PAGE_SEO.title,
    description: REAL_ESTATE_PAGE_SEO.description,
    path: PATH,
    absoluteTitle: true,
  });
}

export default function RealEstateIndustryRoutePage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Real Estate", path: PATH },
    ]),
    serviceJsonLd({
      name: "VoIP Solutions for Real Estate",
      description: REAL_ESTATE_PAGE_SEO.description,
      path: PATH,
    }),
    faqJsonLd([...REAL_ESTATE_FAQS]),
  ].filter(Boolean);

  return (
    <>
      <JsonLd data={jsonLd} />
      <RealEstateIndustryPage />
    </>
  );
}
