import {
  buildMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { CallCentersIndustryPage } from "@/components/industries/CallCentersIndustryPage";
import {
  CALL_CENTERS_FAQS,
  CALL_CENTERS_PAGE_SEO,
} from "@/lib/callCentersIndustryPageData";

const PATH = "/voip-solutions-for-call-centers";

export async function generateMetadata() {
  return buildMetadata({
    title: CALL_CENTERS_PAGE_SEO.title,
    description: CALL_CENTERS_PAGE_SEO.description,
    path: PATH,
    absoluteTitle: true,
  });
}

export default function CallCentersIndustryRoutePage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Industries", path: "/industries" },
      { name: "Centers", path: PATH },
    ]),
    serviceJsonLd({
      name: "VoIP Solutions for Call Centers",
      description: CALL_CENTERS_PAGE_SEO.description,
      path: PATH,
    }),
    faqJsonLd([...CALL_CENTERS_FAQS]),
  ].filter(Boolean);

  return (
    <>
      <JsonLd data={jsonLd} />
      <CallCentersIndustryPage />
    </>
  );
}
