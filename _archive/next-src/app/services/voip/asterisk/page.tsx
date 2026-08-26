import {
  buildMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { AsteriskServicePage } from "@/components/services/AsteriskServicePage";
import {
  ASTERISK_FAQS,
  ASTERISK_PAGE_SEO,
  asteriskFaqPlainText,
} from "@/lib/asteriskPageData";

const PATH = "/services/voip/asterisk";

export async function generateMetadata() {
  return buildMetadata({
    title: ASTERISK_PAGE_SEO.title,
    description: ASTERISK_PAGE_SEO.description,
    path: PATH,
    absoluteTitle: true,
  });
}

export default function AsteriskDevelopmentPage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "VoIP", path: "/services/voip-development" },
      { name: "Asterisk", path: PATH },
    ]),
    serviceJsonLd({
      name: "Asterisk Development",
      description: ASTERISK_PAGE_SEO.description,
      path: PATH,
    }),
    faqJsonLd(
      ASTERISK_FAQS.map((faq) => ({
        question: faq.question,
        answer: asteriskFaqPlainText(faq),
      }))
    ),
  ].filter(Boolean);

  return (
    <>
      <JsonLd data={jsonLd} />
      <AsteriskServicePage />
    </>
  );
}
