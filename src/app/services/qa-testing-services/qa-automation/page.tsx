import {
  buildMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { QaAutomationServicePage } from "@/components/services/QaAutomationServicePage";
import {
  QA_AUTO_FAQS,
  QA_AUTO_PAGE_SEO,
  qaAutoFaqPlainText,
} from "@/lib/qaAutomationPageData";

const PATH = "/services/qa-testing-services/qa-automation";

export async function generateMetadata() {
  return buildMetadata({
    title: QA_AUTO_PAGE_SEO.title,
    description: QA_AUTO_PAGE_SEO.description,
    path: PATH,
    absoluteTitle: true,
  });
}

export default function QaAutomationPage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "QA Services", path: "/services/qa-testing-services" },
      { name: "QA Automation", path: PATH },
    ]),
    serviceJsonLd({
      name: "QA Automation Services",
      description: QA_AUTO_PAGE_SEO.description,
      path: PATH,
    }),
    faqJsonLd(
      QA_AUTO_FAQS.map((faq) => ({
        question: faq.question,
        answer: qaAutoFaqPlainText(faq),
      }))
    ),
  ].filter(Boolean);

  return (
    <>
      <JsonLd data={jsonLd} />
      <QaAutomationServicePage />
    </>
  );
}
