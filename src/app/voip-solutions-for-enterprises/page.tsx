import {
  buildMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { EnterprisesIndustryPage } from "@/components/industries/EnterprisesIndustryPage";
import {
  ENTERPRISES_FAQS,
  ENTERPRISES_PAGE_SEO,
} from "@/lib/enterprisesIndustryPageData";

const PATH = "/voip-solutions-for-enterprises";

export async function generateMetadata() {
  return buildMetadata({
    title: ENTERPRISES_PAGE_SEO.title,
    description: ENTERPRISES_PAGE_SEO.description,
    path: PATH,
    absoluteTitle: true,
  });
}

export default function EnterprisesIndustryRoutePage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Industries", path: "/industries" },
      { name: "Enterprises", path: PATH },
    ]),
    serviceJsonLd({
      name: "VoIP Solutions for Enterprises",
      description: ENTERPRISES_PAGE_SEO.description,
      path: PATH,
    }),
    faqJsonLd([...ENTERPRISES_FAQS]),
  ].filter(Boolean);

  return (
    <>
      <JsonLd data={jsonLd} />
      <EnterprisesIndustryPage />
    </>
  );
}
