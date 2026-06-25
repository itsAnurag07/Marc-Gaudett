import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Marc Gaudett | Partnerships, SaaS Growth & Strategic Conversations",
  description: "Contact Marc Gaudett for thoughtful conversations around partnerships, B2B SaaS growth, affiliate programs, referrals, integrations, data partnerships, strategic introductions, speaking, or selective advisory inquiries.",
};

export default function ContactPage() {
  return <ContactClient />;
}
