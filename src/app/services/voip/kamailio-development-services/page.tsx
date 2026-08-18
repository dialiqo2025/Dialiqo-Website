import {
  buildMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { KamailioServicePage } from "@/components/services/KamailioServicePage";
import {
  KAMAILIO_FAQS,
  KAMAILIO_PAGE_SEO,
  kamailioFaqPlainText,
} from "@/lib/kamailioPageData";

const PATH = "/services/voip/kamailio-development-services";

export async function generateMetadata() {
  return buildMetadata({
    title: KAMAILIO_PAGE_SEO.title,
    description: KAMAILIO_PAGE_SEO.description,
    path: PATH,
    absoluteTitle: true,
  });
}

export default function KamailioDevelopmentPage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "VoIP", path: "/services/voip-development" },
      { name: "Kamailio", path: PATH },
    ]),
    serviceJsonLd({
      name: "Kamailio Development",
      description: KAMAILIO_PAGE_SEO.description,
      path: PATH,
    }),
    faqJsonLd(
      KAMAILIO_FAQS.map((faq) => ({
        question: faq.question,
        answer: kamailioFaqPlainText(faq),
      }))
    ),
  ].filter(Boolean);

  return (
    <>
      <JsonLd data={jsonLd} />
      <KamailioServicePage />
    </>
  );
}
