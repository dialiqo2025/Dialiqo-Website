import {
  buildMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { IvrServicePage } from "@/components/services/IvrServicePage";
import { IVR_FAQS, IVR_PAGE_SEO } from "@/lib/ivrPageData";

const PATH = "/voip-solution/interactive-voice-response-solutions";

export async function generateMetadata() {
  return buildMetadata({
    title: IVR_PAGE_SEO.title,
    description: IVR_PAGE_SEO.description,
    path: PATH,
    absoluteTitle: true,
  });
}

export default function InteractiveVoiceResponseSolutionsPage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "VoIP Solution", path: "/voip-solution" },
      { name: "IVR", path: PATH },
    ]),
    serviceJsonLd({
      name: "IVR Solutions",
      description: IVR_PAGE_SEO.description,
      path: PATH,
    }),
    faqJsonLd([...IVR_FAQS]),
  ].filter(Boolean);

  return (
    <>
      <JsonLd data={jsonLd} />
      <IvrServicePage />
    </>
  );
}
