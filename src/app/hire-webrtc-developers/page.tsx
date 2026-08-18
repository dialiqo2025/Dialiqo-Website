import {
  buildMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { HireWebrtcServicePage } from "@/components/services/HireWebrtcServicePage";
import {
  HIRE_WEBRTC_FAQS,
  HIRE_WEBRTC_PAGE_SEO,
} from "@/lib/hireWebrtcPageData";

const PATH = "/hire-webrtc-developers";

export async function generateMetadata() {
  return buildMetadata({
    title: HIRE_WEBRTC_PAGE_SEO.title,
    description: HIRE_WEBRTC_PAGE_SEO.description,
    path: PATH,
    absoluteTitle: true,
  });
}

export default function HireWebrtcDevelopersPage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Hire Developers", path: "/services/staff-augmentation" },
      { name: "Hire WebRTC Developers", path: PATH },
    ]),
    serviceJsonLd({
      name: "Hire WebRTC Developers",
      description: HIRE_WEBRTC_PAGE_SEO.description,
      path: PATH,
    }),
    faqJsonLd([...HIRE_WEBRTC_FAQS]),
  ].filter(Boolean);

  return (
    <>
      <JsonLd data={jsonLd} />
      <HireWebrtcServicePage />
    </>
  );
}
