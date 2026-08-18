import { permanentRedirect } from "next/navigation";

/** Listing hub removed — keep the URL as a permanent redirect. */
export default function IndustriesHubRedirect() {
  permanentRedirect("/voip-solutions-for-real-estate");
}
