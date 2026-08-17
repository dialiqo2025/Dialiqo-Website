import {
  buildMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { SbcServicePage } from "@/components/services/SbcServicePage";
import { SBC_FAQS, SBC_PAGE_SEO } from "@/lib/sbcPageData";

const PATH = "/voip-solution/session-border-controller";

export async function generateMetadata() {
  return buildMetadata({
    title: SBC_PAGE_SEO.title,
    description: SBC_PAGE_SEO.description,
    path: PATH,
    absoluteTitle: true,
  });
}

export default function SessionBorderControllerPage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "VoIP Solution", path: "/voip-solution" },
      { name: "SBC", path: PATH },
    ]),
    serviceJsonLd({
      name: "Session Border Controller",
      description: SBC_PAGE_SEO.description,
      path: PATH,
    }),
    faqJsonLd([...SBC_FAQS]),
  ].filter(Boolean);

  return (
    <>
      <JsonLd data={jsonLd} />
      <SbcServicePage />
    </>
  );
}
