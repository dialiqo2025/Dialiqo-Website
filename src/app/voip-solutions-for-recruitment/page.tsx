import {
  buildMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { RecruitmentIndustryPage } from "@/components/industries/RecruitmentIndustryPage";
import {
  RECRUITMENT_FAQS,
  RECRUITMENT_PAGE_SEO,
} from "@/lib/recruitmentIndustryPageData";

const PATH = "/voip-solutions-for-recruitment";

export async function generateMetadata() {
  return buildMetadata({
    title: RECRUITMENT_PAGE_SEO.title,
    description: RECRUITMENT_PAGE_SEO.description,
    path: PATH,
    absoluteTitle: true,
  });
}

export default function RecruitmentIndustryRoutePage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Recruitment", path: PATH },
    ]),
    serviceJsonLd({
      name: "VoIP Solutions for Recruitment",
      description: RECRUITMENT_PAGE_SEO.description,
      path: PATH,
    }),
    faqJsonLd([...RECRUITMENT_FAQS]),
  ].filter(Boolean);

  return (
    <>
      <JsonLd data={jsonLd} />
      <RecruitmentIndustryPage />
    </>
  );
}
