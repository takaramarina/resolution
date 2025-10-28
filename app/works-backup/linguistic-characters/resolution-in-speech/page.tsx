"use client";
import ArtworkPage from "@/components/ArtworkPage";
import { images } from "@/data/imageData";

export default function ResolutionInSpeechPage() {
  const artwork = images.find((art) => art.slug === "Resolution-in-Speech");

  if (!artwork) return <div>Not Found</div>;

  return <ArtworkPage artwork={artwork} />;
}
