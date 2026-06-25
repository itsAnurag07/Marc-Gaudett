import { Metadata } from "next";
import FocusAreasClient from "./FocusAreasClient";

export const metadata: Metadata = {
  title: "Focus Areas | Partner-Led Growth, SaaS Partnerships & GTM Systems",
  description: "Marc Gaudett works across partner-led growth, SaaS partnerships, affiliate programs, referrals, integrations, data partnerships, outbound, and GTM systems.",
};

export default function FocusAreasPage() {
  return <FocusAreasClient />;
}
