import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import MaintenancePageClient from "./MaintenancePageClient";

export const metadata: Metadata = buildMetadata({
  title: "Maintenance",
  description: "Dialiqo is undergoing scheduled maintenance. We’ll be back shortly.",
  path: "/maintenance",
  noIndex: true,
});

export default function Maintenance() {
  return <MaintenancePageClient />;
}
