import { RedirectClient } from "@/components/common/RedirectClient";

const TECH_REDIRECTS: Record<string, string> = {
  freeswitch: "/services/voip/freeswitch-development/",
  asterisk: "/services/voip/asterisk/",
  kamailio: "/services/voip/kamailio-development-services/",
  opensips: "/services/voip/opensips/",
};

export function generateStaticParams() {
  return Object.keys(TECH_REDIRECTS).map((slug) => ({ slug }));
}

export default async function TechnologySlugRedirect({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const href = TECH_REDIRECTS[slug] ?? "/voip-solution/";
  return <RedirectClient href={href} />;
}
