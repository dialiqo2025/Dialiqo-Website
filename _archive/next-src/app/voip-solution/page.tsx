import {
  buildMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { VoipSolutionServicePage } from "@/components/services/VoipSolutionServicePage";
import {
  VOIP_SOLUTION_FAQS,
  VOIP_SOLUTION_PAGE_SEO,
} from "@/lib/voipSolutionPageData";

const PATH = "/voip-solution";

export async function generateMetadata() {
  return buildMetadata({
    title: VOIP_SOLUTION_PAGE_SEO.title,
    description: VOIP_SOLUTION_PAGE_SEO.description,
    path: PATH,
    absoluteTitle: true,
  });
}

export default function VoipSolutionPage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "VoIP Solutions", path: PATH },
    ]),
    serviceJsonLd({
      name: "VoIP Solutions",
      description: VOIP_SOLUTION_PAGE_SEO.description,
      path: PATH,
    }),
    faqJsonLd([...VOIP_SOLUTION_FAQS]),
  ].filter(Boolean);

  return (
    <>
      <JsonLd data={jsonLd} />
      <VoipSolutionServicePage />
    </>
  );
}
