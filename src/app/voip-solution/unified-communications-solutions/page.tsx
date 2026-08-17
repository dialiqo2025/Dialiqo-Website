import {
  buildMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { UcServicePage } from "@/components/services/UcServicePage";
import { UC_FAQS, UC_PAGE_SEO } from "@/lib/ucPageData";

const PATH = "/voip-solution/unified-communications-solutions";

export async function generateMetadata() {
  return buildMetadata({
    title: UC_PAGE_SEO.title,
    description: UC_PAGE_SEO.description,
    path: PATH,
    absoluteTitle: true,
  });
}

export default function UnifiedCommunicationsSolutionsPage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "VoIP Solution", path: "/voip-solution" },
      { name: "UC", path: PATH },
    ]),
    serviceJsonLd({
      name: "Unified Communications Solutions",
      description: UC_PAGE_SEO.description,
      path: PATH,
    }),
    faqJsonLd([...UC_FAQS]),
  ].filter(Boolean);

  return (
    <>
      <JsonLd data={jsonLd} />
      <UcServicePage />
    </>
  );
}
