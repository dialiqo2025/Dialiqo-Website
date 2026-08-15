import {
  buildMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { VoipBillingProductPage } from "@/components/services/VoipBillingProductPage";
import {
  VOIP_BILLING_FAQS,
  VOIP_BILLING_PAGE_SEO,
} from "@/lib/voipBillingPageData";

const PATH = "/products/voip-billing-solution";

export async function generateMetadata() {
  return buildMetadata({
    title: VOIP_BILLING_PAGE_SEO.title,
    description: VOIP_BILLING_PAGE_SEO.description,
    path: PATH,
    absoluteTitle: true,
  });
}

export default function VoipBillingSolutionPage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Our Products", path: "/solutions" },
      { name: "VoIP Billing", path: PATH },
    ]),
    serviceJsonLd({
      name: "VoIP Billing",
      description: VOIP_BILLING_PAGE_SEO.description,
      path: PATH,
    }),
    faqJsonLd([...VOIP_BILLING_FAQS]),
  ].filter(Boolean);

  return (
    <>
      <JsonLd data={jsonLd} />
      <VoipBillingProductPage />
    </>
  );
}
