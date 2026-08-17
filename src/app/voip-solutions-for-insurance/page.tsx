import {
  buildMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { InsuranceIndustryPage } from "@/components/industries/InsuranceIndustryPage";
import {
  INSURANCE_FAQS,
  INSURANCE_PAGE_SEO,
} from "@/lib/insuranceIndustryPageData";

const PATH = "/voip-solutions-for-insurance";

export async function generateMetadata() {
  return buildMetadata({
    title: INSURANCE_PAGE_SEO.title,
    description: INSURANCE_PAGE_SEO.description,
    path: PATH,
    absoluteTitle: true,
  });
}

export default function InsuranceIndustryRoutePage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Industries", path: "/industries" },
      { name: "Insurance", path: PATH },
    ]),
    serviceJsonLd({
      name: "VoIP Solutions for Insurance",
      description: INSURANCE_PAGE_SEO.description,
      path: PATH,
    }),
    faqJsonLd([...INSURANCE_FAQS]),
  ].filter(Boolean);

  return (
    <>
      <JsonLd data={jsonLd} />
      <InsuranceIndustryPage />
    </>
  );
}
