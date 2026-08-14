import {
  buildMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { WebDevelopmentServicePage } from "@/components/services/WebDevelopmentServicePage";
import {
  WEB_DEV_FAQS,
  WEB_DEV_PAGE_SEO,
  webDevFaqPlainText,
} from "@/lib/webDevelopmentPageData";

const PATH = "/services/mobile-web/web-development";

export async function generateMetadata() {
  return buildMetadata({
    title: WEB_DEV_PAGE_SEO.title,
    description: WEB_DEV_PAGE_SEO.description,
    path: PATH,
    absoluteTitle: true,
  });
}

export default function WebDevelopmentPage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "Mobile & Web", path: "/services/mobile-web" },
      { name: "Web Development", path: PATH },
    ]),
    serviceJsonLd({
      name: "Web Development",
      description: WEB_DEV_PAGE_SEO.description,
      path: PATH,
    }),
    faqJsonLd(
      WEB_DEV_FAQS.map((faq) => ({
        question: faq.question,
        answer: webDevFaqPlainText(faq),
      }))
    ),
  ].filter(Boolean);

  return (
    <>
      <JsonLd data={jsonLd} />
      <WebDevelopmentServicePage />
    </>
  );
}
