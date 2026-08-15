import {
  buildMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { VoipConsultingServicePage } from "@/components/services/VoipConsultingServicePage";
import {
  VOIP_CONSULTING_FAQS,
  VOIP_CONSULTING_PAGE_SEO,
} from "@/lib/voipConsultingPageData";

const PATH = "/voip-consulting";

export async function generateMetadata() {
  return buildMetadata({
    title: VOIP_CONSULTING_PAGE_SEO.title,
    description: VOIP_CONSULTING_PAGE_SEO.description,
    path: PATH,
    absoluteTitle: true,
  });
}

export default function VoipConsultingPage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "VoIP Consulting", path: PATH },
    ]),
    serviceJsonLd({
      name: "VoIP Consulting Services",
      description: VOIP_CONSULTING_PAGE_SEO.description,
      path: PATH,
    }),
    faqJsonLd([...VOIP_CONSULTING_FAQS]),
  ].filter(Boolean);

  return (
    <>
      <JsonLd data={jsonLd} />
      <VoipConsultingServicePage />
    </>
  );
}
