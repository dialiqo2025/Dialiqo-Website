import {
  buildMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { EcommerceIndustryPage } from "@/components/industries/EcommerceIndustryPage";
import {
  ECOMMERCE_FAQS,
  ECOMMERCE_PAGE_SEO,
} from "@/lib/ecommerceIndustryPageData";

const PATH = "/voip-solutions-for-ecommerce";

export async function generateMetadata() {
  return buildMetadata({
    title: ECOMMERCE_PAGE_SEO.title,
    description: ECOMMERCE_PAGE_SEO.description,
    path: PATH,
    absoluteTitle: true,
  });
}

export default function EcommerceIndustryRoutePage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Industries", path: "/industries" },
      { name: "Ecommerce", path: PATH },
    ]),
    serviceJsonLd({
      name: "VoIP Solutions for Ecommerce",
      description: ECOMMERCE_PAGE_SEO.description,
      path: PATH,
    }),
    faqJsonLd([...ECOMMERCE_FAQS]),
  ].filter(Boolean);

  return (
    <>
      <JsonLd data={jsonLd} />
      <EcommerceIndustryPage />
    </>
  );
}
