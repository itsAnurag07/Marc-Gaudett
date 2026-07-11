import { Metadata } from "next";
import NotesClient from "./NotesClient";

export const metadata: Metadata = {
  title: "Operator Notes | Marc Gaudett",
  description: "Practical notes on SaaS partnerships, data products, integrations, distribution, outbound and revenue systems.",
};

export default function NotesPage() {
  return <NotesClient />;
}
