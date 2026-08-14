import {
  buildMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { OpensipsServicePage } from "@/components/services/OpensipsServicePage";
import {
  OPENSIPS_FAQS,
  OPENSIPS_PAGE_SEO,
  opensipsFaqPlainText,
} from "@/lib/opensipsPageData";

const PATH = "/services/voip/opensips";

export async function generateMetadata() {
  return buildMetadata({
    title: OPENSIPS_PAGE_SEO.title,
    description: OPENSIPS_PAGE_SEO.description,
    path: PATH,
    absoluteTitle: true,
  });
}

export default function OpensipsDevelopmentPage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "VoIP", path: "/services/voip-development" },
      { name: "OpenSIPS", path: PATH },
    ]),
    serviceJsonLd({
      name: "OpenSIPS Development",
      description: OPENSIPS_PAGE_SEO.description,
      path: PATH,
    }),
    faqJsonLd(
      OPENSIPS_FAQS.map((faq) => ({
        question: faq.question,
        answer: opensipsFaqPlainText(faq),
      }))
    ),
  ].filter(Boolean);

  return (
    <>
      <JsonLd data={jsonLd} />
      <OpensipsServicePage />
    </>
  );
}
