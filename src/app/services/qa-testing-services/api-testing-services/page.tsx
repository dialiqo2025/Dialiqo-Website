import {
  buildMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { ApiTestingServicePage } from "@/components/services/ApiTestingServicePage";
import {
  API_TESTING_FAQS,
  API_TESTING_PAGE_SEO,
  apiTestingFaqPlainText,
} from "@/lib/apiTestingPageData";

const PATH = "/services/qa-testing-services/api-testing-services";

export async function generateMetadata() {
  return buildMetadata({
    title: API_TESTING_PAGE_SEO.title,
    description: API_TESTING_PAGE_SEO.description,
    path: PATH,
    absoluteTitle: true,
  });
}

export default function ApiTestingPage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "QA Services", path: "/services/qa-testing-services" },
      { name: "API Testing", path: PATH },
    ]),
    serviceJsonLd({
      name: "API Testing Services",
      description: API_TESTING_PAGE_SEO.description,
      path: PATH,
    }),
    faqJsonLd(
      API_TESTING_FAQS.map((faq) => ({
        question: faq.question,
        answer: apiTestingFaqPlainText(faq),
      }))
    ),
  ].filter(Boolean);

  return (
    <>
      <JsonLd data={jsonLd} />
      <ApiTestingServicePage />
    </>
  );
}
