import { Metadata } from "next";
import NotesClient from "./NotesClient";

export const metadata: Metadata = {
  title: "Revenue Infrastructure Notes | Marc Gaudett",
  description: "A public archive of practical thinking on partnerships, integrations, GTM systems, affiliates, referrals, and outbound strategy.",
};

export default function NotesPage() {
  return <NotesClient />;
}
