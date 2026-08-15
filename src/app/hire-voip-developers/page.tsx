import {
  buildMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { HireVoipServicePage } from "@/components/services/HireVoipServicePage";
import {
  HIRE_VOIP_FAQS,
  HIRE_VOIP_PAGE_SEO,
} from "@/lib/hireVoipPageData";

const PATH = "/hire-voip-developers";

export async function generateMetadata() {
  return buildMetadata({
    title: HIRE_VOIP_PAGE_SEO.title,
    description: HIRE_VOIP_PAGE_SEO.description,
    path: PATH,
    absoluteTitle: true,
  });
}

export default function HireVoipDevelopersPage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "Hire Developers", path: "/services/staff-augmentation" },
      { name: "Hire VoIP Developers", path: PATH },
    ]),
    serviceJsonLd({
      name: "Hire VoIP Developers",
      description: HIRE_VOIP_PAGE_SEO.description,
      path: PATH,
    }),
    faqJsonLd([...HIRE_VOIP_FAQS]),
  ].filter(Boolean);

  return (
    <>
      <JsonLd data={jsonLd} />
      <HireVoipServicePage />
    </>
  );
}
