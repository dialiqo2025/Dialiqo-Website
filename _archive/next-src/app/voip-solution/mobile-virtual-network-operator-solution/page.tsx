import {
  buildMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { MvnoServicePage } from "@/components/services/MvnoServicePage";
import { MVNO_FAQS, MVNO_PAGE_SEO } from "@/lib/mvnoPageData";

const PATH = "/voip-solution/mobile-virtual-network-operator-solution";

export async function generateMetadata() {
  return buildMetadata({
    title: MVNO_PAGE_SEO.title,
    description: MVNO_PAGE_SEO.description,
    path: PATH,
    absoluteTitle: true,
  });
}

export default function MobileVirtualNetworkOperatorPage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "VoIP Solution", path: "/voip-solution" },
      { name: "MVNO", path: PATH },
    ]),
    serviceJsonLd({
      name: "Mobile Virtual Network Operator",
      description: MVNO_PAGE_SEO.description,
      path: PATH,
    }),
    faqJsonLd([...MVNO_FAQS]),
  ].filter(Boolean);

  return (
    <>
      <JsonLd data={jsonLd} />
      <MvnoServicePage />
    </>
  );
}
