import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Marc Gaudett | Operator Profile & GTM Strategy",
  description: "Operating values, background, and approach to building revenue infrastructure for B2B SaaS companies.",
};

export default function AboutPage() {
  return <AboutClient />;
}
