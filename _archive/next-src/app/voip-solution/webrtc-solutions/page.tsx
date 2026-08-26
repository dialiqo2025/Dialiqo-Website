import {
  buildMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { WebrtcServicePage } from "@/components/services/WebrtcServicePage";
import { WEBRTC_FAQS, WEBRTC_PAGE_SEO } from "@/lib/webrtcPageData";

const PATH = "/voip-solution/webrtc-solutions";

export async function generateMetadata() {
  return buildMetadata({
    title: WEBRTC_PAGE_SEO.title,
    description: WEBRTC_PAGE_SEO.description,
    path: PATH,
    absoluteTitle: true,
  });
}

export default function WebrtcSolutionsPage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "VoIP Solution", path: "/voip-solution" },
      { name: "WebRTC", path: PATH },
    ]),
    serviceJsonLd({
      name: "WebRTC Solutions",
      description: WEBRTC_PAGE_SEO.description,
      path: PATH,
    }),
    faqJsonLd([...WEBRTC_FAQS]),
  ].filter(Boolean);

  return (
    <>
      <JsonLd data={jsonLd} />
      <WebrtcServicePage />
    </>
  );
}
