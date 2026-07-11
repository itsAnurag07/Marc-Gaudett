import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Marc Gaudett | SaaS Growth and Partnerships Operator",
  description: "Learn about Marc Gaudett’s experience building partnerships, integrations, data programs, outbound systems and growth channels across SaaS.",
};

export default function AboutPage() {
  return <AboutClient />;
}
