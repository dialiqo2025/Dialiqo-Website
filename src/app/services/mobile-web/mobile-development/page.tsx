import {
  buildMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { MobileDevelopmentServicePage } from "@/components/services/MobileDevelopmentServicePage";
import {
  MOBILE_DEV_FAQS,
  MOBILE_DEV_PAGE_SEO,
  mobileDevFaqPlainText,
} from "@/lib/mobileDevelopmentPageData";

const PATH = "/services/mobile-web/mobile-development";

export async function generateMetadata() {
  return buildMetadata({
    title: MOBILE_DEV_PAGE_SEO.title,
    description: MOBILE_DEV_PAGE_SEO.description,
    path: PATH,
    absoluteTitle: true,
  });
}

export default function MobileDevelopmentPage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "Mobile & Web", path: "/services/mobile-web" },
      { name: "Mobile Development", path: PATH },
    ]),
    serviceJsonLd({
      name: "Mobile App Development",
      description: MOBILE_DEV_PAGE_SEO.description,
      path: PATH,
    }),
    faqJsonLd(
      MOBILE_DEV_FAQS.map((faq) => ({
        question: faq.question,
        answer: mobileDevFaqPlainText(faq),
      }))
    ),
  ].filter(Boolean);

  return (
    <>
      <JsonLd data={jsonLd} />
      <MobileDevelopmentServicePage />
    </>
  );
}
