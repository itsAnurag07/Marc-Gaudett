import { Metadata } from "next";
import { NOTES_DATA } from "@/data/notes";
import NoteClient from "./NoteClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return NOTES_DATA.map((note) => ({
    slug: note.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const note = NOTES_DATA.find((n) => n.slug === resolvedParams.slug);
  return {
    title: note ? `${note.title} | Revenue Infrastructure Notes` : "Note | Marc Gaudett",
    description: note?.snippet || "Revenue Infrastructure Notes by Marc Gaudett.",
  };
}

export default async function NotePage({ params }: PageProps) {
  const resolvedParams = await params;
  return <NoteClient slug={resolvedParams.slug} />;
}
