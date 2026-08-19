import { permanentRedirect } from "next/navigation";
import { THEMED_INDUSTRY_PATHS } from "@/lib/routes";

export default async function IndustrySlugRedirect({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  permanentRedirect(
    THEMED_INDUSTRY_PATHS[slug] ?? "/voip-solutions-for-real-estate"
  );
}
