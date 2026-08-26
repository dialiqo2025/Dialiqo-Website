import {
  buildMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { MvnoBillingServicePage } from "@/components/services/MvnoBillingServicePage";
import {
  MVNO_BILLING_FAQS,
  MVNO_BILLING_PAGE_SEO,
} from "@/lib/mvnoBillingPageData";

const PATH = "/voip-solution/mvno-billing-solution";

export async function generateMetadata() {
  return buildMetadata({
    title: MVNO_BILLING_PAGE_SEO.title,
    description: MVNO_BILLING_PAGE_SEO.description,
    path: PATH,
    absoluteTitle: true,
  });
}

export default function MvnoBillingSolutionPage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "VoIP Solution", path: "/voip-solution" },
      { name: "MVNO Billing", path: PATH },
    ]),
    serviceJsonLd({
      name: "MVNO Billing Solution",
      description: MVNO_BILLING_PAGE_SEO.description,
      path: PATH,
    }),
    faqJsonLd([...MVNO_BILLING_FAQS]),
  ].filter(Boolean);

  return (
    <>
      <JsonLd data={jsonLd} />
      <MvnoBillingServicePage />
    </>
  );
}
