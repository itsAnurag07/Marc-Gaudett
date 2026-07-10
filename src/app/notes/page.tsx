import { Metadata } from "next";
import NotesClient from "./NotesClient";

export const metadata: Metadata = {
  title: "Operator Notes | Marc Gaudett",
  description: "Practical notes on partnerships, integrations, data, distribution, and SaaS growth systems.",
};

export default function NotesPage() {
  return <NotesClient />;
}
