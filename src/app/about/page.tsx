import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About | Marc Gaudett",
  description: "Operating values, background, and practical lessons from building growth and distribution in SaaS.",
};

export default function AboutPage() {
  return <AboutClient />;
}
