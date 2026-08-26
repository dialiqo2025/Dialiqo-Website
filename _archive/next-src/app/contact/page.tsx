import { buildMetadata, breadcrumbJsonLd, localBusinessJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { ContactUsPage } from "@/components/contact/ContactUsPage";
import { CONTACT_PAGE_SEO } from "@/lib/contactPageData";

const PATH = "/contact";

export async function generateMetadata() {
  return buildMetadata({
    title: CONTACT_PAGE_SEO.title,
    description: CONTACT_PAGE_SEO.description,
    path: PATH,
    absoluteTitle: true,
  });
}

export default function Contact() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Contact Us", path: PATH },
    ]),
    localBusinessJsonLd,
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <ContactUsPage />
    </>
  );
}
