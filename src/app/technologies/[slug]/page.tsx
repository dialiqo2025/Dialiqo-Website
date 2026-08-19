import { permanentRedirect } from "next/navigation";

const TECH_REDIRECTS: Record<string, string> = {
  freeswitch: "/services/voip/freeswitch-development",
  asterisk: "/services/voip/asterisk",
  kamailio: "/services/voip/kamailio-development-services",
  opensips: "/services/voip/opensips",
};

export default async function TechnologySlugRedirect({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  permanentRedirect(TECH_REDIRECTS[slug] ?? "/voip-solution");
}
