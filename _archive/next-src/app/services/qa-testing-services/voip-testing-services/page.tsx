import {
  buildMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { VoipTestingServicePage } from "@/components/services/VoipTestingServicePage";
import {
  VOIP_TESTING_FAQS,
  VOIP_TESTING_PAGE_SEO,
} from "@/lib/voipTestingPageData";

const PATH = "/services/qa-testing-services/voip-testing-services";

export async function generateMetadata() {
  return buildMetadata({
    title: VOIP_TESTING_PAGE_SEO.title,
    description: VOIP_TESTING_PAGE_SEO.description,
    path: PATH,
    absoluteTitle: true,
  });
}

export default function VoipTestingPage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "QA Services", path: "/services/qa-testing-services" },
      { name: "VoIP Testing", path: PATH },
    ]),
    serviceJsonLd({
      name: "VoIP Testing Services",
      description: VOIP_TESTING_PAGE_SEO.description,
      path: PATH,
    }),
    faqJsonLd([...VOIP_TESTING_FAQS]),
  ].filter(Boolean);

  return (
    <>
      <JsonLd data={jsonLd} />
      <VoipTestingServicePage />
    </>
  );
}
