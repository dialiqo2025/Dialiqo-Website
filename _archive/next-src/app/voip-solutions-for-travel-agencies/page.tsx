import {
  buildMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { TravelIndustryPage } from "@/components/industries/TravelIndustryPage";
import {
  TRAVEL_FAQS,
  TRAVEL_PAGE_SEO,
} from "@/lib/travelIndustryPageData";

const PATH = "/voip-solutions-for-travel-agencies";

export async function generateMetadata() {
  return buildMetadata({
    title: TRAVEL_PAGE_SEO.title,
    description: TRAVEL_PAGE_SEO.description,
    path: PATH,
    absoluteTitle: true,
  });
}

export default function TravelIndustryRoutePage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Travel Agencies", path: PATH },
    ]),
    serviceJsonLd({
      name: "VoIP Solutions for Travel Agencies",
      description: TRAVEL_PAGE_SEO.description,
      path: PATH,
    }),
    faqJsonLd([...TRAVEL_FAQS]),
  ].filter(Boolean);

  return (
    <>
      <JsonLd data={jsonLd} />
      <TravelIndustryPage />
    </>
  );
}
