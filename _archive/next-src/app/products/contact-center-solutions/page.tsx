import {
  buildMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { ContactCenterProductPage } from "@/components/services/ContactCenterProductPage";
import {
  CONTACT_CENTER_FAQS,
  CONTACT_CENTER_PAGE_SEO,
} from "@/lib/contactCenterPageData";

const PATH = "/products/contact-center-solutions";

export async function generateMetadata() {
  return buildMetadata({
    title: CONTACT_CENTER_PAGE_SEO.title,
    description: CONTACT_CENTER_PAGE_SEO.description,
    path: PATH,
    absoluteTitle: true,
  });
}

export default function ContactCenterSolutionsPage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Contact Center", path: PATH },
    ]),
    serviceJsonLd({
      name: "Contact Center Solutions",
      description: CONTACT_CENTER_PAGE_SEO.description,
      path: PATH,
    }),
    faqJsonLd([...CONTACT_CENTER_FAQS]),
  ].filter(Boolean);

  return (
    <>
      <JsonLd data={jsonLd} />
      <ContactCenterProductPage />
    </>
  );
}
