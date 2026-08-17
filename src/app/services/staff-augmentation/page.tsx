import {
  buildMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { StaffAugmentationServicePage } from "@/components/services/StaffAugmentationServicePage";
import { STAFF_AUG_PAGE_SEO } from "@/lib/staffAugmentationPageData";

const PATH = "/services/staff-augmentation";

export async function generateMetadata() {
  return buildMetadata({
    title: STAFF_AUG_PAGE_SEO.title,
    description: STAFF_AUG_PAGE_SEO.description,
    path: PATH,
    absoluteTitle: true,
  });
}

export default function StaffAugmentationPage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "Hire Developers", path: PATH },
    ]),
    serviceJsonLd({
      name: "Staff Augmentation Services",
      description: STAFF_AUG_PAGE_SEO.description,
      path: PATH,
    }),
  ].filter(Boolean);

  return (
    <>
      <JsonLd data={jsonLd} />
      <StaffAugmentationServicePage />
    </>
  );
}
