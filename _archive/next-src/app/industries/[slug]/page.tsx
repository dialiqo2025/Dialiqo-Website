import { THEMED_INDUSTRY_PATHS } from "@/lib/routes";
import { RedirectClient } from "@/components/common/RedirectClient";

export function generateStaticParams() {
  return Object.keys(THEMED_INDUSTRY_PATHS).map((slug) => ({ slug }));
}

export default async function IndustrySlugRedirect({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const href =
    THEMED_INDUSTRY_PATHS[slug] ?? "/voip-solutions-for-real-estate/";
  return <RedirectClient href={href} />;
}
