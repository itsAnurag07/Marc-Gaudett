import { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Marc Gaudett | Partner-Led Growth & B2B SaaS Partnerships",
  description: "Marc Gaudett is a partnerships and growth operator focused on B2B SaaS, partner-led growth, affiliate programs, referral systems, integration partnerships, data partnerships, outbound, and GTM systems.",
};

export default function Page() {
  return <HomeClient />;
}
