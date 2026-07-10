import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact | Marc Gaudett",
  description: "Get in touch with Marc Gaudett.",
};

export default function ContactPage() {
  return <ContactClient />;
}
