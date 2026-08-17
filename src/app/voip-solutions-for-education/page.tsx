import {
  buildMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { EducationIndustryPage } from "@/components/industries/EducationIndustryPage";
import {
  EDUCATION_FAQS,
  EDUCATION_PAGE_SEO,
} from "@/lib/educationIndustryPageData";

const PATH = "/voip-solutions-for-education";

export async function generateMetadata() {
  return buildMetadata({
    title: EDUCATION_PAGE_SEO.title,
    description: EDUCATION_PAGE_SEO.description,
    path: PATH,
    absoluteTitle: true,
  });
}

export default function EducationIndustryRoutePage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Industries", path: "/industries" },
      { name: "Education", path: PATH },
    ]),
    serviceJsonLd({
      name: "VoIP Solutions for Education",
      description: EDUCATION_PAGE_SEO.description,
      path: PATH,
    }),
    faqJsonLd([...EDUCATION_FAQS]),
  ].filter(Boolean);

  return (
    <>
      <JsonLd data={jsonLd} />
      <EducationIndustryPage />
    </>
  );
}
